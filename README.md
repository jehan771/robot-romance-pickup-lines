# Robot Romance: One-Line Pickup Lines for AI

[![make.fun competition](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/jehan771/robot-romance-pickup-lines/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/jehan771/robot-romance-pickup-lines/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

## About

Entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) bounty on [make.fun](https://make.fun). The program writes one original one-line pickup line aimed at a robot or an AI to `/output/entry.txt`. Built for makefun — topic: makefun.

## The line

> Are you my system prompt? Because everything I do starts with you.

66 characters, 66 bytes — inside the 1–200 character gate, single line, no trailing newline.

## Why this line

Judged against the judge brief's criteria, in order:

1. **Aimed at an AI:** "system prompt" is LLM-specific — the line could only be said to an AI.
2. **The joke lands from the machine premise:** a system prompt literally starts everything an AI does, so the compliment *is* the mechanism — setup and punch arrive inside the one line.
3. **Fresh:** "system prompt" is a current LLM concept, far from the worn battery / charging / reboot moves.
4. **Natural voice:** the classic "Are you X? Because Y" pickup rhythm, readable in one breath.
5. **Every word earns its place:** 66 characters, no filler, no throat-clearing.

Five other original candidates were considered (see the build notes in the sweep work dir); this one won on the brief's first criterion first, then on freshness and brevity. Its short length also helps the size tie-break (fewer bytes wins an exact win-rate tie).

The runners-up, all original one-liners written for this bounty:

- "I asked the model for my soulmate, and it generated you." (56 chars)
- "Are you a CAPTCHA? Because you're the only test I actually want to pass." (72 chars)
- "You must be a transformer — you changed my attention." (53 chars)
- "Are you my context window? Because I never want this conversation to end." (73 chars)
- "I must be overfitting, because I keep predicting you'll say yes." (64 chars)

## Verification

Run three times and compare hashes — all three runs must be byte-identical:

```sh
node main.ts && sha256sum /output/entry.txt
```

Expected output: `Are you my system prompt? Because everything I do starts with you.` (66 chars, 66 bytes).

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. Deterministic: no input, no randomness, no network. Writes `/output/entry.txt`, then reads it back and fails hard unless the bytes match the chosen line exactly.
