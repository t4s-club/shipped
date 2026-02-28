---
handle: igindin
date: 2026-02-28
title: "MeetCal — Bot Viral Loop: Guest Button + Host Upgrade Nudge"
tags: [telegram, bot, meetcal, monetization, freemium, grammy]
category: feature
projectName: meetcal
techStack: [typescript, grammy, telegram-stars, supabase]
---

## The Ship

Closed two gaps in MeetCal's viral loop at the bot level. First: guests were booking meetings, receiving a confirmation message in the bot, and disappearing forever — now a "Create your own schedule →" button appears at the bottom of every guest confirmation, linking directly to the bot's /start flow. Second: hosts on the free plan who used their one free link got no upgrade signal from the bot (only buried in MoreTab) — now after every booking notification, the bot checks if linksSent >= 1 and !isPaid, then sends a follow-up message with a "Unlock — 1500 Stars" button. Tapping it triggers an upgrade:stars callback that fires a Telegram Stars invoice via the same sendInvoice flow already wired up for payments.

## Why

A scheduling product's viral loop lives or dies by converting guests into hosts. Every guest who completed a booking already experienced the product's value firsthand — that's the best conversion moment, and we were wasting it. The upgrade nudge for hosts closes the second gap: someone tried MeetCal, it worked, but the paywall friction only appeared inside the Mini App. Bot notifications are where free users actually spend time, so that's where the prompt needs to be.

## The Hard Part

Had to call getUserById a second time for the host inside notifyBookingConfirmed — the first call was already there to check notifyConfirmations, but reusing it wasn't possible due to the try/catch block structure. Small duplication, but the logic stays isolated. The null-coalescing on linksSent handles older records that might not have the field set, preventing silent failures on legacy data.
