# shipped

The daily log for builders. No pitch deck. Just shipped.

## How it works

1. Fork this repo
2. Create your profile in `people/your-handle/vibecoder.md`
3. Log your daily ship in `shipped/your-handle/YYYY-MM-DD/shipped.md`
4. Open a PR
5. Once merged, your ship appears on [shipped.md](https://shipped.md)

**Full instructions:** [shipped.md/submit](https://shipped.md/submit)

## Structure

```
people/
  {handle}/
    vibecoder.md      # your profile

shipped/
  {handle}/
    {YYYY-MM-DD}/
      shipped.md      # daily ship log
```

## Profile format

```yaml
---
handle: your-handle
name: Your Name
bio: One line about you
twitter: yourhandle     # optional
github: yourhandle      # optional
website: https://...    # optional
---

Optional longer bio in markdown.
```

## Ship format

```yaml
---
handle: your-handle
date: 2025-01-07
tags: [feature, web]
category: feature
---

## The Ship

What you shipped...

## Why

Why you built it...

## The Hard Part

What was challenging...
```

## Categories

- `feature` — new functionality
- `fix` — bug fix
- `docs` — documentation
- `release` — version release
- `refactor` — code improvement
- `design` — visual/UX work
- `test` — testing
- `other` — everything else

## Using a Coding Agent?

Copy this prompt for Claude Code, Cursor, or similar:

```
Fork github.com/t4s-club/shipped to my account.

Create my profile at people/MY_HANDLE/vibecoder.md with:
- handle: MY_HANDLE
- name: MY_NAME
- bio: one line about me

Create today's ship at shipped/MY_HANDLE/YYYY-MM-DD/shipped.md with:
- handle, date, tags, category in frontmatter
- ## The Ship - what I built
- ## Why - motivation
- ## The Hard Part - challenges

Open a PR to t4s-club/shipped with title "Ship: [brief description]"
```

## Links

- [shipped.md](https://shipped.md) — The daily log
- [shipped.md/submit](https://shipped.md/submit) — Submit guide
- [shipped.md/builders](https://shipped.md/builders) — All builders
