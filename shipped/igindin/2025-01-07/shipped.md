---
handle: igindin
date: 2025-01-07
title: "vibecoder.md — Three Interconnected Sites for Builders Who Ship"
tags: [launch, ecosystem, web, astro]
category: launch
projectName: vibecoder.md
projectUrl: https://vibecoder.md
repoUrl: https://github.com/nicnocquee/vibecoding
techStack: [Astro 5, Tailwind, Vercel, GitHub Actions]
---

## The Ship

Launched the vibecoder.md ecosystem — three interconnected static sites that form a daily shipping platform for builders. **vibecoder.md** is the hub: explains what vibecoding is, shows a leaderboard, links to everything else. **pages.md** hosts individual builder profiles with GitHub-style heatmaps, streak counters, and a timeline of every ship. **shipped.md** is the daily log itself — builders submit what they deployed that day as markdown PRs.

All three sites are built with Astro 5 and deployed on Vercel as static sites. Content lives in a separate GitHub repository as markdown files. PRs serve as the submission mechanism: you fork, write markdown, open a PR, and once merged, the site rebuilds automatically through `repository_dispatch` events chaining across repos.

## Why

The "build in public" space was drowning in tweets and progress threads that evaporated in hours. Builders were sharing screenshots of code, writing long Twitter threads about their journey, but none of it was permanent or searchable. A week later, the tweet is buried. A month later, nobody — including the builder — can find it.

I wanted something that turns daily shipping into a lasting artifact. A page that Google indexes, that links back to your projects, that accumulates over time into proof of everything you've built. Not a social feed. A record.

## The Hard Part

The hardest decision was choosing NOT to use a database. The pull toward Supabase was strong — accounts, auth, real-time updates, the whole stack. But every layer of infrastructure is a layer of maintenance, and this is a side project that needs to run on zero ops. The constraint forced a better architecture: markdown in git, GitHub for auth and permissions, PRs for validation, static generation for performance. No servers, no accounts, no database to backup. Just git and markdown.

The cross-site linking was trickier than expected. Three separate Astro projects sharing content from one repository means coordinating builds across repos. When content changes in the shipped repo, all three sites need to rebuild. GitHub Actions `repository_dispatch` events handle this, but getting the webhook chain reliable took several iterations.
