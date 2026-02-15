---
handle: igindin
date: 2026-01-08
title: "shipped.md — a Daily Log That Builds Your Track Record"
tags: [launch, web, community, seo]
category: release
projectName: shipped.md
projectUrl: https://shipped.md
repoUrl: https://github.com/t4s-club/shipped
techStack: [Astro 5, Tailwind, GitHub Actions, Vercel]
---

## The Ship

Launched shipped.md as a standalone product — a daily shipping log where builders record what they deploy and build a public track record over time. The site generates individual pages for each ship, profile pages per builder with streak tracking, and a global timeline. Every page has full SEO: Schema.org markup (BlogPosting, Person, SoftwareApplication), OpenGraph images, sitemap, RSS feed, and structured data that AI crawlers can parse.

The submission flow is deliberately frictionless: fork the content repo, add a markdown file with frontmatter, open a PR. An automated review pipeline validates the frontmatter, runs AI moderation via OpenRouter, and auto-merges if the content passes. From PR to live page takes about 3 minutes.

## Why

The vibecoder.md ecosystem needed a dedicated space for daily logs that wasn't buried inside the hub site. shipped.md needed its own identity — a clean domain, a focused value proposition, its own SEO footprint. "What did you ship today?" as a standalone concept, not a sub-section.

The real motivation was backlinks. Every ship page contains dofollow links back to the builder's projects and repositories. Ship daily for a month and you've created 30 indexed pages pointing at your work. That's measurable SEO value — the kind that actually matters for indie builders trying to get found.

## The Hard Part

The minimalism was the hardest part. Keeping the feature list to git-plus-markdown when every instinct says "add accounts." No login, no comments, no reactions, no social features — just content and links. Every feature request got the same question: "Does this help the page rank higher or the builder get found?" If not, it didn't make the cut.

The auto-review pipeline took iteration. The AI moderation needed to be strict enough to catch spam and low-effort posts, but lenient enough to not reject legitimate content. Finding that balance meant testing with edge cases — single-sentence ships, ships with excessive emojis, ships that were basically commit messages. The OpenRouter integration with moonshotai/kimi-k2.5 ended up being the right model for this: fast, cheap, and good enough at distinguishing real content from noise.
