---
handle: igindin
date: 2026-02-02
title: "MeetCal — Calendly, but Native to Telegram"
tags: [telegram, mini-app, scheduling, react]
category: release
projectName: MeetCal
projectUrl: https://t.me/MeetCalBot
repoUrl: https://github.com/nicnocquee/vibecoding
techStack: [React, TypeScript, Telegram Mini Apps SDK, grammY, Tailwind]
---

## The Ship

MeetCal — a Telegram Mini App for scheduling calls. You set your availability, share it inline in any chat, and people book directly without leaving Telegram. No separate app, no external links, no "check my Calendly." The whole flow — from sharing to booking to notification — happens inside the same Telegram conversation.

The bot supports two modes: inline sharing (type `@MeetCalBot` in any chat to send your availability card) and direct messaging (open the bot, configure slots, get a shareable link). When someone books, both parties get Telegram notifications instantly. The Mini App frontend is built with React and the `@telegram-apps/telegram-ui` component library for native look and feel.

## Why

Every time someone asks "can we chat?" in Telegram, the answer is a Calendly link. That link opens a browser, loads a full web page, and the person has to context-switch entirely. By the time they've picked a time, the conversation flow is broken. I wanted booking to feel like sending a message — tap, pick a time, done, stay in the chat.

The deeper motivation was dogfooding Telegram Mini Apps as a platform. Everyone talks about them, few actually ship production apps. MeetCal forced me to learn the real constraints: viewport limitations, WebApp API quirks, payment integration edge cases, and what "native feel" actually means in a webview.

## The Hard Part

The Telegram `MainButton` was the biggest headache. It's the primary action button that floats at the bottom of the Mini App, and it has a simple API: show, hide, set text, set color. But React's rendering model fights with it. Every state change triggers a re-render, and if you call `MainButton.hide()` then `MainButton.show()` in the same cycle, the button visually jumps — disappears for a frame, then reappears. Users see a flicker.

The fix required splitting the `useMainButton` hook into separate mount and update effects. The mount effect handles initial show/hide, the update effect handles text and color changes, and critically, `onClick` was removed from the dependency array to prevent twitching on every callback change. It took three separate fix commits (`cd77ce9`, `27e3ed3`, `14673dd`) to get it right — each one fixing a different manifestation of the same underlying problem: React effects firing too eagerly for an imperative API.
