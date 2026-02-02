---
handle: igindin
date: 2026-02-02
tags: [telegram, mini-app, scheduling]
category: release
---

## The Ship

MeetCal — a Telegram Mini App for scheduling calls. Like Calendly, but native to Telegram. Share your availability inline, let people book directly in the chat, get notifications in the same place.

## Why

Calendly links feel disconnected from conversation flow. When someone asks "can we chat?" — I wanted to share availability right there, not send them to another tab. Telegram is already where the conversation happens.

## The Hard Part

Making the MainButton feel native. Telegram's WebApp API has quirks — the button would visually "jump" when state changed. Spent time splitting React effects to prevent hide/show cycles on every state update.
