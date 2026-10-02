<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * The /resources page became /articles. Carry admin-edited content, meta
     * tags and sitemap overrides across so they aren't orphaned under the old
     * page name. Labels that literally said "Resources" (navbar link, home
     * section label and CTA) are deliberately left behind: they use new keys
     * so the new "Articles" defaults show.
     */
    public function up(): void
    {
        $this->rename('resources', 'articles');
    }

    public function down(): void
    {
        $this->rename('articles', 'resources');
    }

    protected function rename(string $from, string $to): void
    {
        foreach (DB::table('page_contents')->where('page', $from)->get() as $row) {
            $this->moveContent($row->id, preg_replace('/^'.$from.'\./', $to.'.', $row->key), $to);
        }

        if ($title = DB::table('page_contents')->where('key', "home.$from.title")->first()) {
            $this->moveContent($title->id, "home.$to.title", 'home');
        }

        if (! DB::table('page_metas')->where('page', $to)->exists()) {
            DB::table('page_metas')->where('page', $from)->update(['page' => $to]);
        }

        if (! DB::table('page_meta_tags')->where('page', $to)->exists()) {
            DB::table('page_meta_tags')->where('page', $from)->update(['page' => $to]);
        }

        if (! DB::table('sitemap_entries')->where('url', "/$to")->exists()) {
            DB::table('sitemap_entries')->where('url', "/$from")->update(['url' => "/$to"]);
        }

        Cache::forget('sitemap.xml.entries');
    }

    /** page_contents.key is unique, so never overwrite a row already there. */
    protected function moveContent(int $id, string $key, string $page): void
    {
        if (! DB::table('page_contents')->where('key', $key)->exists()) {
            DB::table('page_contents')->where('id', $id)->update(['key' => $key, 'page' => $page]);
        }
    }
};
