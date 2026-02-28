---
handle: igindin
date: 2026-02-28
title: "shipped.md — Full CI/CD Pipeline Repair: Auto-Merge, Secrets, Vercel"
tags: [devops, ci-cd, github-actions, shipped, vercel, openrouter]
category: fix
projectName: shipped
repoUrl: https://github.com/t4s-club/shipped
techStack: [github-actions, bash, vercel-cli]
---

## The Ship

Fixed the full ship-to-deploy pipeline for shipped.md end-to-end. Four separate issues were blocking automation: the auto-review workflow was not merging when OpenRouter returned a 403 (key limit exceeded), there was no `.gitignore` in the repo so secrets could accidentally get committed, the deploy workflow was failing on `submodules: recursive` checkout because `apps/authentic-ai-plugin` had no URL in `.gitmodules`, and the `VERCEL_TOKEN` secret in the monorepo was invalid. All four are now fixed and the full pipeline — PR open → validate → AI review → auto-merge → Vercel deploy — runs without manual intervention.

## Why

The whole point of shipped.md is that logging a ship should take seconds, not require a manual merge and a separate deploy command. For the past few sessions the workflow was silently broken: PRs sat open, deploys failed, and I was merging and deploying by hand without knowing what was actually wrong. Tracing the failure chain showed it wasn't one bug but four independent issues stacked on top of each other.

## The Hard Part

The trickiest fix was the AI fallback logic. GitHub Actions YAML multiline `if:` conditions require the `>` block scalar — inline `&&` with a newline just silently evaluates wrong. The submodule issue was subtle too: the error `fatal: No url found for submodule path 'apps/authentic-ai-plugin'` only shows up in CI because local git skips unregistered submodules. Removing `submodules: recursive` from the checkout step fixed it since shipped.md doesn't use submodules at all. For the Vercel token, the CLI's session token (`vca_`) works for deployments but the API rejects it for creating new tokens — ended up setting it directly as the CI secret.
