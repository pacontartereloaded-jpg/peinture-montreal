<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Peinture MTL</title>
        <style>
          :root {
            --bg: #0b0d10;
            --panel: #14171c;
            --border: #2a2f37;
            --text: #e6e8eb;
            --muted: #9ba3ad;
            --accent: #f59e0b;
            --row-alt: #181b21;
            --link: #fbbf24;
            --link-hover: #fde68a;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: var(--bg);
            color: var(--text);
            font-size: 14px;
            line-height: 1.5;
          }
          header {
            padding: 28px 24px 18px;
            border-bottom: 1px solid var(--border);
            background: linear-gradient(180deg, #14171c 0%, #0b0d10 100%);
          }
          header h1 {
            margin: 0 0 6px 0;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: -0.01em;
          }
          header h1 .accent { color: var(--accent); }
          header p {
            margin: 0;
            color: var(--muted);
            font-size: 13px;
          }
          .meta {
            padding: 14px 24px;
            color: var(--muted);
            font-size: 13px;
            border-bottom: 1px solid var(--border);
            background: var(--panel);
          }
          .meta strong { color: var(--text); }
          .wrap {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px 40px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 18px;
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 10px;
            overflow: hidden;
          }
          thead th {
            text-align: left;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: var(--muted);
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
            background: #1a1e24;
          }
          tbody td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
            font-variant-numeric: tabular-nums;
          }
          tbody tr:nth-child(even) td { background: var(--row-alt); }
          tbody tr:last-child td { border-bottom: none; }
          tbody tr:hover td { background: #1f242b; }
          a {
            color: var(--link);
            text-decoration: none;
            word-break: break-all;
          }
          a:hover { color: var(--link-hover); text-decoration: underline; }
          .num { color: var(--muted); width: 56px; }
          .pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 12px;
            background: #1f242b;
            border: 1px solid var(--border);
            color: var(--muted);
          }
          .priority-1 { color: #fbbf24; border-color: #f59e0b; }
          .priority-09 { color: #fde68a; }
          .priority-07 { color: #9ba3ad; }
        </style>
      </head>
      <body>
        <header>
          <h1>Peinture <span class="accent">MTL</span> — XML Sitemap</h1>
          <p>This sitemap is for search engines. The site lives at <a href="https://peinturemtl.ca">peinturemtl.ca</a>.</p>
        </header>
        <div class="meta">
          <strong><xsl:value-of select="count(s:urlset/s:url)"/></strong> URLs indexed across English, French, and Spanish.
        </div>
        <div class="wrap">
          <table>
            <thead>
              <tr>
                <th class="num">#</th>
                <th>URL</th>
                <th>Last modified</th>
                <th>Change frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td class="num"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{s:loc}">
                      <xsl:value-of select="s:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="s:lastmod"/></td>
                  <td><span class="pill"><xsl:value-of select="s:changefreq"/></span></td>
                  <td>
                    <xsl:variable name="p" select="s:priority"/>
                    <span>
                      <xsl:attribute name="class">
                        pill
                        <xsl:choose>
                          <xsl:when test="$p = '1.0'"> priority-1</xsl:when>
                          <xsl:when test="$p = '0.9'"> priority-09</xsl:when>
                          <xsl:otherwise> priority-07</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="$p"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
