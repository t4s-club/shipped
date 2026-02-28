---
handle: igindin
date: 2026-02-28
title: "Alvar — Growth Hacking Onboarding Funnel with Dopamine Mechanics"
tags: [alvar, growth-hacking, onboarding, conversion, ux, nextjs]
category: feature
projectName: alvar
projectUrl: https://alvar.so
repoUrl: https://github.com/igindin/vibecoding
techStack: [nextjs, react, typescript, motion]
---

## The Ship

Rebuilt the Alvar onboarding funnel with six layered growth mechanics. The homepage CTA now routes to `/onboarding?idea=X` instead of the free analyzer — the free tool became a secondary "just exploring" escape hatch, not the default. Inside the funnel: persona selection now shows an animated affirmation line that validates the user's identity ("Solo developers who ship fast validate 3× more ideas with Alvar"); quiz answers trigger a social proof pill below the selected card ("38% of Alvar users"); the idea step got a "No idea yet? No problem →" rescue section with persona-matched starters that fill the form on tap. The checkout step replaced a static badge with an animated 3-step preparation teaser — market fit analysis, competitor mapping, document prep — with a blurred score row locked behind payment. Progress dots now show percentage ("75% done") instead of "X of Y".

## Why

The old funnel was functional but emotionally flat. Every step felt like a form — pick an option, click continue, repeat. There was no dopamine hit after making a choice, no sense that something was happening, no reassurance that you'd picked the right thing. Users who didn't have an idea upfront hit a dead end. Users who reached checkout saw a static "preparing" badge that felt like a loading spinner from 2012. The funnel needed friction removal at every drop-off point: reassurance after selection, momentum through progress, curiosity gap at conversion, and a rescue path for the "I'm not sure yet" segment that otherwise silently bounces.

## The Hard Part

The `CheckoutProgressTeaser` had to feel like real work was happening without actually doing anything. The timing sequence (400ms → 900ms → 1400ms for three steps) took a few iterations to not feel either too rushed or too slow — it needs to feel like the server is processing, not like an animation playing. The blurred market fit score bar was tricky: blurring the entire row looked broken, but using `style={{ filter: 'blur(3px)' }}` only on the progress bar div (not the label or "unlocks after payment" text) got the right "tantalizingly close but locked" effect. The `AnimatePresence` on the quiz social proof pills needed to be wrapped per-option, not around the whole grid, which meant restructuring the map from returning `<OptionCard>` directly to returning a `<div>` wrapping card + pill.
