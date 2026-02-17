---
handle: igindin
date: 2026-02-16
title: "JTBD Landing Rewrite — shipped.md Now Sells the Pain, Not the Features"
tags: [landing-page, jtbd, copywriting, astro, seo]
category: feature
projectName: shipped.md
projectUrl: https://shipped.md
repoUrl: https://github.com/igindin/vibecoding
techStack: [astro, tailwind, typescript]
---

## The Ship

Completely rewrote the shipped.md landing page from a feature-list layout to a story-driven JTBD narrative. The old page said "indexed pages, backlinks, track record" — technically correct, but it read like a feature spec, not a reason to act. The new page opens with "You build things. Nobody knows." and immediately hits the real pain: you know you should blog about your work, but you never will.

Added three new sections that didn't exist before: a "Sound familiar?" block with concrete pain metrics (12 repos, 0 backlinks, 3h to write one post), a "What you're probably doing instead" competing alternatives teardown (nothing / Twitter thread / blog post / Dev.to — all crossed out, shipped.md as the green checkmark), and a "Why is this free?" section that explains the business model in two sentences instead of hiding it.

Also rewrote the submit page — flipped the hierarchy so the `/shipped` Claude Code skill is the first thing you see (marked "FASTEST"), the generic AI agent prompt is second, and manual fork-and-PR is pushed below the fold. Title changed from "Submit Your Ship" to "Ship in 30 seconds."

## Why

The old landing page had the right information but zero narrative tension. It listed what you get (indexed pages, backlinks, streaks) without ever naming the problem it solves. Nobody reads a feature grid and thinks "I need this." They need to feel the pain first — the 12 repos nobody knows about, the blog posts they'll never write, the SEO they're leaving on the table.

The JTBD framing gives the page an actual story arc: pain → failed alternatives → solution → proof → action. Every section exists to move someone from "interesting" to "I should do this right now." The competing alternatives section is the key — it names the things people actually do (nothing, Twitter, blog) and explains why each one fails, so shipped.md isn't competing with an abstract idea but with specific behaviors.

## The Hard Part

Getting the tone right without it feeling manipulative. There's a fine line between "naming the pain" and "fear-mongering." The "Sound familiar?" cards went through several iterations — originally they had emoji and felt too playful for what's essentially calling out someone's failure to market themselves. Stripped it down to just numbers: 12 repos, 0 backlinks, 3h per post. Let the data do the emotional work.

The competing alternatives section was tricky structurally. Tried it as a table first, then as cards, settled on a simple list with red X marks and one green checkmark at the bottom. The visual contrast does the persuasion — you don't need to read every line, you just see four failures and one solution. Had to be careful not to trash Dev.to or Hashnode directly — the framing is "still requires writing, still never happens" which is true without being hostile.

Vercel deploy token was expired which added friction to the deploy cycle — had to fall back to `vercel deploy --prod` from local CLI while the GitHub Actions token gets refreshed.

