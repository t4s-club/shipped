---
handle: igindin
date: 2026-02-08
tags: [ci/cd, vercel, github-actions]
category: feature
---

## The Ship

Auto-deploy pipeline for shipped.md. GitHub Actions builds and deploys to Vercel when code changes in the monorepo or content merges in the content repo. Cross-repo triggering via repository_dispatch.

## Why

Deploys were manual via `vercel --prod` CLI. Every content PR merge or code tweak required a human to run the command. Now it's fully automated from both repos.

## The Hard Part

Vercel CLI's `vercel build` runs `npm install` by default, which chokes on pnpm's `workspace:*` protocol in a monorepo. Fixed by building with pnpm directly and assembling the `.vercel/output` structure manually for `--prebuilt` deploys. Also, Vercel deploy hooks don't work without Git integration, so replaced them with GitHub's `repository_dispatch` API for cross-repo triggering.
