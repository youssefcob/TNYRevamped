<?php

namespace Tests\Feature;

use App\Models\News;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class StudioServiceTest extends TestCase
{
    // The suite runs against the dev database, so every row is rolled back.
    use DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();

        config([
            'services.studio.envelope_url' => 'http://studio.test/articles/{slug}',
            'services.studio.fallback_url' => null,
            'services.studio.services.envelope_url' => 'http://studio.test/services/{slug}',
            'services.studio.services.fallback_url' => null,
            'services.studio.webhook_secret' => 'test-secret',
            'services.studio.cache_ttl' => 300,
            'services.studio.fallback_cache_ttl' => 30,
            'inertia.ssr.enabled' => false,
        ]);

        Cache::flush();
        $this->withoutVite();
    }

    protected function envelope(string $html = '<section class="block">Hello</section>'): array
    {
        return [
            'html' => $html,
            'assets' => ['css' => 'http://studio.test/_render/blocks.abc.css', 'js' => 'http://studio.test/_render/blocks.abc.js'],
            'head' => ['title' => 'PT | TNY', 'description' => 'From Studio.', 'meta' => [], 'jsonLd' => []],
        ];
    }

    protected function signedWebhook(array $payload)
    {
        $body = json_encode($payload);

        return $this->call('POST', '/api/studio/webhook', [], [], [], [
            'CONTENT_TYPE' => 'application/json',
            'HTTP_X_STUDIO_SIGNATURE' => 'sha256='.hash_hmac('sha256', $body, 'test-secret'),
        ], $body);
    }

    public function test_a_service_published_in_studio_replaces_the_config_page(): void
    {
        Http::fake(['studio.test/services/physical-therapy' => Http::response($this->envelope())]);

        $this->get('/solutions/physical-therapy')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Solutions/StudioSolution')
                ->where('path', '/solutions/physical-therapy')
                ->where('service.html', '<section class="block">Hello</section>')
                ->where('service.title', 'PT | TNY')
                ->where('solution.slug', 'physical-therapy'));
    }

    public function test_the_config_page_is_used_when_studio_has_no_service(): void
    {
        Http::fake(['studio.test/*' => Http::response(['error' => 'Not found'], 404)]);

        $this->get('/solutions/physical-therapy')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Solutions/SolutionDetail')
                ->where('solution.slug', 'physical-therapy'));
    }

    public function test_the_config_page_is_used_when_studio_is_down(): void
    {
        Http::fake(['studio.test/*' => Http::response('Server error', 500)]);

        $this->get('/solutions/physical-therapy')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Solutions/SolutionDetail'));
    }

    public function test_the_config_page_is_used_without_any_request_when_studio_is_not_configured(): void
    {
        config(['services.studio.services.envelope_url' => null]);
        Http::fake();

        $this->get('/solutions/physical-therapy')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Solutions/SolutionDetail'));

        Http::assertNothingSent();
    }

    public function test_a_service_only_in_studio_gets_a_page(): void
    {
        Http::fake(['studio.test/services/new-service' => Http::response($this->envelope())]);

        $this->get('/solutions/new-service')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Solutions/StudioSolution')
                ->where('solution', null));
    }

    public function test_an_unknown_slug_is_a_404_or_503_by_whether_studio_answered(): void
    {
        Http::fake([
            'studio.test/services/missing' => Http::response(['error' => 'Not found'], 404),
            'studio.test/services/broken' => Http::response('Server error', 500),
        ]);

        $this->get('/solutions/missing')->assertNotFound();
        $this->get('/solutions/broken')->assertStatus(503);
    }

    public function test_services_and_articles_with_the_same_slug_are_cached_apart(): void
    {
        Http::fake([
            'studio.test/services/*' => Http::response($this->envelope('<p>service</p>')),
            'studio.test/articles/*' => Http::response($this->envelope('<p>article</p>')),
        ]);
        News::create(['title' => 'PT', 'url' => 'physical-therapy', 'image' => 'x']);

        $this->get('/articles/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>article</p>'));
        $this->get('/solutions/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('service.html', '<p>service</p>'));
    }

    public function test_the_webhook_drops_the_cached_service(): void
    {
        Http::fake(['studio.test/services/*' => Http::sequence()
            ->push($this->envelope('<p>old</p>'))
            ->push(['error' => 'Not found'], 404)]);

        $this->get('/solutions/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('service.html', '<p>old</p>'));

        // A hard delete sends only the address.
        $this->signedWebhook(['type' => 'page.unpublished', 'collection' => 'pages', 'address' => 'tny/services/physical-therapy'])
            ->assertOk();

        $this->get('/solutions/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->component('Solutions/SolutionDetail'));
    }

    public function test_a_webhook_drops_only_the_kind_it_names_when_slugs_are_shared(): void
    {
        Http::fake([
            'studio.test/services/*' => Http::sequence()
                ->push($this->envelope('<p>old service</p>'))
                ->push($this->envelope('<p>new service</p>')),
            'studio.test/articles/*' => Http::sequence()
                ->push($this->envelope('<p>old article</p>'))
                ->push($this->envelope('<p>new article</p>')),
        ]);
        News::create(['title' => 'PT', 'url' => 'physical-therapy', 'image' => 'x']);

        $this->get('/articles/physical-therapy')->assertOk();
        $this->get('/solutions/physical-therapy')->assertOk();

        $this->signedWebhook(['type' => 'page.published', 'collection' => 'pages', 'slug' => 'physical-therapy', 'address' => 'tny/services/physical-therapy'])
            ->assertOk();

        $this->get('/solutions/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('service.html', '<p>new service</p>'));
        $this->get('/articles/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>old article</p>'));

        // Slug and collection alone are enough too.
        $this->signedWebhook(['type' => 'page.published', 'collection' => 'textEditor', 'slug' => 'physical-therapy'])
            ->assertOk();

        $this->get('/articles/physical-therapy')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>new article</p>'));
    }
}
