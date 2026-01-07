# shipped

Ship log for the [vibecoder.md](https://vibecoder.md) ecosystem.

## How it works

1. Fork this repo
2. Create your profile in `people/your-handle/vibecoder.md`
3. Log your daily ship in `shipped/your-handle/YYYY-MM-DD/shipped.md`
4. Open a PR
5. Once merged, your ship appears on [shipped.md](https://shipped.md)

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
- `other` — everything else

## Links

- [vibecoder.md](https://vibecoder.md) — The hub
- [pages.md](https://pages.md) — Builder profiles
- [shipped.md](https://shipped.md) — Daily ships
- [Submit guide](https://vibecoder.md/submit) — Detailed instructions
