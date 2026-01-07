---
handle: igindin
date: 2025-01-07
tags: [launch, ecosystem, web]
category: feature
---

## The Ship

Launched the vibecoder.md ecosystem — three interconnected sites for builders who ship daily:

- **vibecoder.md** — The hub. What is vibecoding, how to join, leaderboard.
- **pages.md** — Builder profiles with heatmaps and streaks.
- **shipped.md** — Daily ship log. What got deployed today.

All built with Astro 5, deployed on Vercel, content via GitHub PRs.

## Why

Too many "build in public" talkers, not enough shippers. This ecosystem creates accountability through visibility. Your streak is public. Your heatmap shows gaps. Miss a day? Everyone sees.

## The Hard Part

Deciding NOT to use a database. The temptation to add Supabase was strong. But the simplest architecture wins: markdown files in a git repo, PRs for validation, static site generation. No auth, no accounts, no infrastructure to maintain. Just git and markdown.
