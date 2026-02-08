---
handle: igindin
date: 2026-02-08
tags: [openclaw, agents, infra]
category: release
---

## The Ship

Stood up a 5-agent OpenClaw team — Nid, Mokko, Khvoya, Chizzy, Scoby — with full naming, 3-layer memory architecture, message hooks, custom admin dashboard, and Zoom CLI. Migrated from OpenClaw 2026.1.29 to 2026.2.6-3 with breaking schema changes.

## Why

Building a crew of AI agents that manage community, content, and scheduling across Telegram. Needed proper infrastructure: persistent memory that survives compaction, real-time admin visibility, and a clear separation between Mac (management) and VPS (production).

## The Hard Part

OpenClaw's config schema changed dramatically between versions — bindings, identity, heartbeat all broke. Had to reverse-engineer the new schema from TypeScript types in the npm package. Then discovered the SSH tunnel to VPS was stealing port 3001 from the dashboard API. Architecture audit revealed everything was running locally with zero git history — drew out the full current-vs-target topology to plan the VPS migration.
