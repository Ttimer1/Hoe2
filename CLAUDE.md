# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hoe2 is a **Scribe clone** - an AI-powered workflow documentation platform. Users record browser actions via a Chrome extension, and AI generates step-by-step guides automatically.

**Status**: Pre-development (Sprint 0 planning complete, implementation starting)

## Documentation Structure

```
/.agents/           # AI collaboration files - READ THESE FIRST
  CONTEXT.md        # Project vision, users, constraints
  TECH.md           # Stack, standards, API design
  TASKS.md          # Current sprint backlog
  LOG.md            # Session diary, handovers

/plans/             # Timestamped implementation plans
/research/          # PRD, technical blueprint, competitive analysis
```

**Start every session by reading `/.agents/LOG.md` for context and `/.agents/TASKS.md` for current work.**

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14+ (App Router), TypeScript, TailwindCSS, shadcn/ui |
| Extension | Chrome MV3, Vite, TypeScript |
| Backend | Next.js API Routes, Server Actions |
| Database | Supabase PostgreSQL + RLS |
| AI | Claude API (Haiku primary, Sonnet for complex) |

## Architecture

**Monorepo** (Turborepo) with:
- `apps/web` - Next.js dashboard, editor, viewer
- `apps/extension` - Chrome extension (MV3) for capture
- `packages/shared` - Shared types and utilities
- `packages/database` - Supabase migrations and types

**Core Data Flow**:
1. Extension captures clicks/inputs with screenshots
2. Data uploads to Supabase Storage + database
3. Claude AI generates step descriptions
4. Web app displays/edits workflows

## Code Standards

- TypeScript strict mode, no `any` types
- Tailwind only (no inline styles)
- Supabase RLS on all tables
- Conventional commits: `type(scope): description`

## Commands (when monorepo exists)

```bash
pnpm dev              # Start all apps
pnpm dev:web          # Web app only
pnpm dev:extension    # Extension watch mode
pnpm build            # Build all
pnpm db:migrate       # Run Supabase migrations
pnpm db:types         # Generate TypeScript types from schema
```

## Session Protocol

1. **Start**: Read `/.agents/LOG.md` and `/.agents/TASKS.md`
2. **During**: Update `TASKS.md` as work progresses
3. **End**: Update `/.agents/LOG.md` with summary, commit all changes

## Hooks

This project uses Claude Code hooks (`.claude/settings.local.json`):

- **CLAUDE.md Guard**: Edits require 5-check qualification (repeatability, stability, genericity, non-redundancy, actionability)
- **Pre-commit Learning**: Prompts to capture session learnings before commits
- **Review Trigger**: `/review`, `/learn`, or `/evaluate` commands trigger CLAUDE.md evaluation

## Update Rules

Before updating CLAUDE.md, all 5 checks must pass:

| Check | Question |
|-------|----------|
| Repeatability | Relevant for future sessions? |
| Stability | Established pattern (not experimental)? |
| Genericity | Applies to whole project? |
| Non-redundancy | Not already covered? |
| Actionability | Directly usable? |

**5/5** = update allowed. **<5** = log in `/.agents/LOG.md` instead.
