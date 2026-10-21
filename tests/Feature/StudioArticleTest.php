<?php

namespace Tests\Feature;

use App\Models\News;
use App\Services\Content\NewsService;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class StudioArticleTest extends TestCase
{
    // The suite runs against the dev database, so every row is rolled back.
    use DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();

        config([
            'services.studio.envelope_url' => 'http://studio.test/render/{slug}',
            'services.studio.fallback_url' => null,
            'services.studio.fallback_cache_ttl' => 30,
            'services.studio.webhook_secret' => 'test-secret',
            'services.studio.cache_ttl' => 300,
            'inertia.ssr.enabled' => false,
        ]);

        Cache::flush();
        $this->withoutVite();

        $this->entry('sample');
    }

    /** The news-table row that puts an article on the site. */
    protected function entry(string $slug, array $attributes = []): News
    {
        return News::create([
            'title' => 'Sample article',
            'description' => 'Card excerpt.',
            'url' => $slug,
            'image' => 'https://res.cloudinary.com/demo/cover.jpg',
            ...$attributes,
        ]);
    }

    protected function envelope(string $html = '<section class="block">Hello</section>'): array
    {
        return [
            'html' => $html,
            'assets' => ['css' => 'http://studio.test/_render/blocks.abc.css', 'js' => 'http://studio.test/_render/blocks.abc.js'],
            'head' => [
                'title' => 'Sample | TNY',
                'description' => 'A sample article.',
                'canonical' => 'http://studio.test/sample',
                'meta' => [['name' => 'author', 'value' => 'TNY']],
                'jsonLd' => [['@type' => 'Article']],
            ],
            'theme' => ['fontStylesheets' => ['https://fonts.googleapis.com/css2?family=Inter']],
        ];
    }

    protected function signedWebhook(array $payload, ?string $secret = 'test-secret')
    {
        $body = json_encode($payload);

        return $this->call('POST', '/api/studio/webhook', [], [], [], [
            'CONTENT_TYPE' => 'application/json',
            'HTTP_X_STUDIO_SIGNATURE' => 'sha256='.hash_hmac('sha256', $body, $secret),
        ], $body);
    }

    public function test_it_renders_a_published_article(): void
    {
        Http::fake(['studio.test/render/sample' => Http::response($this->envelope())]);

        $this->get('/articles/sample')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Articles/StudioArticle')
                ->where('path', '/articles/sample')
                ->where('article.html', '<section class="block">Hello</section>')
                ->where('article.css', 'http://studio.test/_render/blocks.abc.css')
                ->where('article.js', 'http://studio.test/_render/blocks.abc.js')
                ->where('article.title', 'Sample | TNY')
                ->where('article.fontStylesheets', ['https://fonts.googleapis.com/css2?family=Inter'])
                ->where('article.meta.0.name', 'author')
                ->where('article.jsonLd.0.@type', 'Article')
                ->missing('article.canonical')
                ->where('entry.title', 'Sample article')
                ->where('entry.description', 'Card excerpt.')
                ->where('entry.image', 'https://res.cloudinary.com/demo/cover.jpg'));
    }

    public function test_an_article_without_a_row_is_a_404_even_if_studio_has_it(): void
    {
        Http::fake(['studio.test/*' => Http::response($this->envelope())]);

        $this->get('/articles/not-listed')->assertNotFound();

        Http::assertNothingSent();
    }

    public function test_a_row_without_a_published_studio_article_is_a_404(): void
    {
        Http::fake(['studio.test/*' => Http::response(['error' => 'Not found'], 404)]);

        $this->get('/articles/sample')->assertNotFound();
    }

    public function test_old_news_urls_redirect_to_the_new_ones(): void
    {
        $this->get('/news/sample')->assertStatus(301)->assertRedirect('/articles/sample');
        $this->get('/news')->assertStatus(301)->assertRedirect('/articles');
        $this->get('/resources')->assertStatus(301)->assertRedirect('/articles');
    }

    public function test_the_articles_page_lists_the_rows(): void
    {
        $this->get('/articles')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Articles')
                ->where('articles', fn ($articles) => collect($articles)->contains('url', 'sample')));
    }

    public function test_the_sitemap_lists_articles_at_their_new_url(): void
    {
        $this->get('/sitemap.xml')
            ->assertOk()
            ->assertSee('/articles/sample')
            ->assertDontSee('/news');
    }

    public function test_a_supplied_slug_is_stored_exactly_and_must_be_unique(): void
    {
        $other = $this->entry('other');
        $service = app(NewsService::class);

        $taken = $service->updateWithFormattedResponse(Request::create('/', 'POST', ['url' => 'sample']), $other->id);
        $this->assertFalse($taken['success']);
        $this->assertSame('other', $other->fresh()->url);

        $free = $service->updateWithFormattedResponse(Request::create('/', 'POST', ['url' => 'renamed-in-studio']), $other->id);
        $this->assertTrue($free['success']);
        $this->assertSame('renamed-in-studio', $other->fresh()->url);

        $invalid = $service->updateWithFormattedResponse(Request::create('/', 'POST', ['url' => 'Not A Slug']), $other->id);
        $this->assertFalse($invalid['success']);
    }

    public function test_a_non_slug_url_redirects_to_its_slug(): void
    {
        $this->get('/articles/Some%20Title')->assertRedirect('/articles/some-title')->assertStatus(301);
    }

    public function test_the_envelope_is_cached_between_requests(): void
    {
        Http::fake(['studio.test/*' => Http::response($this->envelope())]);

        $this->get('/articles/sample')->assertOk();
        $this->get('/articles/sample')->assertOk();

        Http::assertSentCount(1);
    }

    public function test_a_stale_copy_is_served_when_studio_is_down(): void
    {
        Http::fake(['studio.test/*' => Http::sequence()
            ->push($this->envelope())
            ->push('Server error', 500)]);

        $this->get('/articles/sample')->assertOk();

        $this->travel(10)->minutes();

        $this->get('/articles/sample')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->where('article.title', 'Sample | TNY'));
    }

    public function test_it_is_unavailable_when_studio_is_down_and_nothing_is_cached(): void
    {
        Http::fake(['studio.test/*' => Http::response('Server error', 500)]);

        $this->get('/articles/sample')->assertStatus(503);
    }

    public function test_the_stored_file_is_used_without_touching_the_render_api(): void
    {
        config(['services.studio.fallback_url' => 'http://api.test/render/{slug}']);
        Http::fake([
            'studio.test/*' => Http::response($this->envelope()),
            'api.test/*' => Http::response($this->envelope('<p>from api</p>')),
        ]);
        Log::spy();

        $this->get('/articles/sample')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->where('article.source', 'stored-file'));

        Http::assertSentCount(1);
        Log::shouldNotHaveReceived('warning');
    }

    public function test_it_falls_back_to_the_render_api_with_a_warning(): void
    {
        config(['services.studio.fallback_url' => 'http://api.test/render/{slug}']);
        Http::fake([
            'studio.test/*' => Http::sequence()
                ->push(['error' => 'Not found'], 404)
                ->push($this->envelope('<p>from storage</p>')),
            'api.test/*' => Http::response($this->envelope('<p>from api</p>')),
        ]);
        Log::spy();

        $this->get('/articles/sample')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->where('article.html', '<p>from api</p>')
                ->where('article.source', 'render-api'));

        Log::shouldHaveReceived('warning')
            ->once()
            ->withArgs(fn (string $message) => str_contains($message, 'sample') && str_contains($message, 'render API'));

        // A fallback result is only cached briefly, so the stored file takes
        // over as soon as the article reaches storage.
        $this->travel(1)->minutes();

        $this->get('/articles/sample')
            ->assertInertia(fn (Assert $page) => $page
                ->where('article.html', '<p>from storage</p>')
                ->where('article.source', 'stored-file'));
    }

    public function test_it_falls_back_when_the_stored_file_is_unusable(): void
    {
        config(['services.studio.fallback_url' => 'http://api.test/render/{slug}']);
        Http::fake([
            'studio.test/*' => Http::response('', 200),
            'api.test/*' => Http::response($this->envelope()),
        ]);

        $this->get('/articles/sample')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->where('article.source', 'render-api'));
    }

    public function test_it_is_a_404_when_neither_source_has_the_article(): void
    {
        config(['services.studio.fallback_url' => 'http://api.test/render/{slug}']);
        Http::fake(['*' => Http::response(['error' => 'Not found'], 404)]);

        $this->get('/articles/sample')->assertNotFound();

        Http::assertSentCount(2);
    }

    public function test_the_webhook_drops_the_cached_article(): void
    {
        Http::fake(['studio.test/*' => Http::sequence()
            ->push($this->envelope('<p>old</p>'))
            ->push($this->envelope('<p>new</p>'))]);

        $this->get('/articles/sample')->assertOk();

        $this->signedWebhook(['type' => 'page.published', 'collection' => 'textEditor', 'slug' => 'sample'])
            ->assertOk();

        $this->get('/articles/sample')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>new</p>'));
    }

    public function test_a_delete_webhook_without_a_slug_drops_only_that_article(): void
    {
        Http::fake([
            'studio.test/render/sample' => Http::sequence()
                ->push($this->envelope('<p>old</p>'))
                ->push($this->envelope('<p>new</p>')),
            'studio.test/render/other' => Http::response($this->envelope()),
        ]);

        $this->entry('other');

        $this->get('/articles/sample')->assertOk();
        $this->get('/articles/other')->assertOk();

        $this->signedWebhook(['type' => 'page.unpublished', 'collection' => 'textEditor', 'address' => 'tny/articles/sample'])
            ->assertOk();

        $this->get('/articles/sample')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>new</p>'));
        $this->get('/articles/other')->assertOk();

        // sample twice, other once: the unrelated article stayed cached.
        Http::assertSentCount(3);
    }

    public function test_a_rerender_webhook_drops_every_cached_article(): void
    {
        Http::fake(['studio.test/*' => Http::sequence()
            ->push($this->envelope('<p>old</p>'))
            ->push($this->envelope('<p>new</p>'))]);

        $this->get('/articles/sample')->assertOk();

        $this->signedWebhook(['type' => 'rerender.completed', 'collection' => '*'])->assertOk();

        $this->get('/articles/sample')
            ->assertInertia(fn (Assert $page) => $page->where('article.html', '<p>new</p>'));
    }

    public function test_the_webhook_rejects_a_bad_signature(): void
    {
        $this->signedWebhook(['type' => 'page.published', 'slug' => 'sample'], 'wrong-secret')
            ->assertStatus(401);
    }

    public function test_the_webhook_is_rejected_when_no_secret_is_configured(): void
    {
        config(['services.studio.webhook_secret' => null]);

        $this->signedWebhook(['type' => 'page.published', 'slug' => 'sample'], '')
            ->assertStatus(401);
    }
}
