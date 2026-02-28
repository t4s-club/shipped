---
handle: igindin
date: 2026-02-28
title: "shipped.md — Auto-Review Workflow Fix: AI Fallback Merge"
tags: [devops, github-actions, automation, shipped]
category: fix
projectName: shipped
repoUrl: https://github.com/t4s-club/shipped
techStack: [github-actions, bash]
---

## The Ship

Fixed the auto-review workflow in shipped.md so PRs don't get stuck when the AI moderation service is unavailable. Before: if OpenRouter returned a 403 or any error, the workflow posted a "needs manual review" comment and stopped — leaving the PR open indefinitely. Now: if AI is unavailable but the `validate` check passed, the PR merges automatically with an "AI fallback" note.

## Why

The `validate` job already checks that the submission has the correct frontmatter, required fields, and proper file structure. AI moderation is a second layer against spam — not a hard gate. Blocking legitimate ships because a third-party API has a billing issue was the wrong tradeoff.

## The Hard Part

The workflow condition syntax in GitHub Actions YAML is strict — multiline `if:` conditions require the `>` block scalar or they silently fail. Also removed the now-redundant "Comment error" step since the fallback merge handles that case with an inline comment on the PR.
