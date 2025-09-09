export async function GET() {
  const robotsTxt = `# Robots.txt for johnconnor.xyz
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /edit/

# Sitemap
Sitemap: https://johnconnor.xyz/sitemap.xml

# Crawl-delay for responsible crawling
Crawl-delay: 1
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}