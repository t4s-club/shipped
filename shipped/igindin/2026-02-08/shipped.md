---
handle: igindin
date: 2026-02-08
tags: [seo, homepage, astro]
category: feature
---

## The Ship

SEO optimization and homepage rewrite for shipped.md. Added missing meta tags (robots, author, theme-color), moved font loading from render-blocking CSS imports to preconnected link tags, and rewrote the homepage value proposition to emphasize what builders actually get: indexed pages with backlinks, a timestamped track record, streaks, and built-in distribution.

## Why

The old homepage value props were generic ("Proof Over Promises", "Build in Public, Quietly"). They didn't explain why a builder should care about shipping here vs. anywhere else. The new copy makes the SEO and distribution benefits concrete — every ship is a Google-indexed page linking back to your projects.

## The Hard Part

Balancing the non-blocking font loading for performance with avoiding FOUT (Flash of Unstyled Text) on the Material Symbols icon font. The icons are used in navigation, so deferring them caused the hamburger menu to flash as text on mobile. Ended up keeping the icon font synchronous while deferring the text fonts.
