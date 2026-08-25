<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
@foreach ($entries as $entry)
    <url>
        <loc>{{ url($entry['url']) }}</loc>
        @if ($entry['lastmod'])
            <lastmod>{{ \Illuminate\Support\Carbon::parse($entry['lastmod'])->toAtomString() }}</lastmod>
        @endif
        @if ($entry['changefreq'])
            <changefreq>{{ $entry['changefreq'] }}</changefreq>
        @endif
        @if (! is_null($entry['priority']))
            <priority>{{ number_format($entry['priority'], 1) }}</priority>
        @endif
    </url>
@endforeach
</urlset>
