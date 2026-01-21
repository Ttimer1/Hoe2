# Hoe2 - Scribe Clone Project

**Last Updated**: 2026-01-21

---

## Quick Context

Hoe2 is a **Scribe clone** - an AI-powered workflow documentation platform. Users record browser actions, and AI generates step-by-step guides automatically.

**Current Phase**: Sprint 0 - Foundation
**Stack**: Next.js + Supabase + Chrome Extension + Claude AI

---

## Documentation Structure

```
/.agents/           # AI collaboration files (read these first!)
  ├── CONTEXT.md    # What we're building, why
  ├── TECH.md       # Stack, standards, rules
  ├── TASKS.md      # Current sprint backlog
  └── LOG.md        # Session diary, handovers

/plans/             # Timestamped implementation plans
  └── YYYYMMDD-HHMM_*.md

/research/          # Product research & specs
  ├── SCRIBE_TECHNICAL_BLUEPRINT.md
  ├── PRD-Scribehow-Clone.md
  └── *.md
```

**Always read `/.agents/` files at session start!**

---

## Tech Stack (Finalized)

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14+ (App Router), TypeScript, TailwindCSS, shadcn/ui |
| Extension | Chrome MV3, Vite, Content Scripts |
| Backend | Next.js API Routes, Server Actions |
| Database | Supabase PostgreSQL + RLS |
| Storage | Supabase Storage |
| AI | Claude API (Haiku primary) |
| Deploy | Vercel (web), Chrome Web Store (extension) |

---

## Project Structure

```
hoe2/
├── apps/
│   ├── web/                    # Next.js web application
│   │   ├── app/                # App Router pages
│   │   ├── components/         # React components
│   │   └── lib/                # Utilities, clients
│   └── extension/              # Chrome Extension (MV3)
│       ├── manifest.json
│       └── src/
│           ├── background/     # Service worker
│           ├── content/        # Capture logic
│           └── popup/          # Extension UI
├── packages/
│   ├── shared/                 # Types, utilities
│   └── database/               # Supabase migrations
├── .agents/                    # AI collaboration docs
├── plans/                      # Implementation plans
└── research/                   # Product research
```

---

## AI Assistant Rules

### Before Coding

1. **Read** `/.agents/TASKS.md` for current work
2. **Check** `/.agents/TECH.md` for standards
3. **Reference** blueprints in `/research/` for architecture

### Code Standards

- TypeScript **strict mode** always
- **NO** `any` types
- **NO** `console.log` in production
- **NO** inline styles (use Tailwind)
- **ALWAYS** validate user input
- **ALWAYS** use RLS for database queries

### Commit Standards

```
type(scope): description

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Security (Non-Negotiable)

- **NEVER** commit API keys or secrets
- **ALWAYS** add `.env` to `.gitignore`
- **ALWAYS** use environment variables
- **ALWAYS** use Supabase RLS policies

---

## Session Protocol

### Start of Session

1. Read `/.agents/LOG.md` for context
2. Check `/.agents/TASKS.md` for current work
3. Review any pending handover notes

### During Session

- Update `TASKS.md` as work progresses
- Make commits at logical checkpoints
- Document decisions in code or docs

### End of Session

1. Update `/.agents/LOG.md` with session summary
2. Write handover note for next session
3. Update `TASKS.md` with status
4. Commit all changes

---

## Key Commands

```bash
# Development
pnpm dev              # Start all apps
pnpm dev:web          # Web app only
pnpm dev:extension    # Extension watch mode

# Build
pnpm build            # Build all
pnpm build:extension  # Extension production

# Database
pnpm db:migrate       # Run migrations
pnpm db:types         # Generate types

# Test
pnpm test             # Unit tests
pnpm test:e2e         # E2E tests
```

---

## Quick Links

| Document | Purpose |
|----------|---------|
| `/.agents/CONTEXT.md` | Project overview |
| `/.agents/TECH.md` | Technical standards |
| `/.agents/TASKS.md` | Current sprint tasks |
| `/.agents/LOG.md` | Development diary |
| `/plans/*` | Implementation plans |
| `/research/SCRIBE_TECHNICAL_BLUEPRINT.md` | Architecture spec |
| `/research/PRD-Scribehow-Clone.md` | Product requirements |

---

## Environment Variables

```env
# Required
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
NEXT_PUBLIC_APP_URL=
```

**Never commit `.env` files!**

---

## CLAUDE.md Update Rules

**Before updating this file, pass ALL 5 checks:**

| # | Check | JA = | NEE = |
|---|-------|------|-------|
| 1 | **Herhaalbaarheid** - Relevant voor toekomstige sessies? | Conventions, architecture | One-off fixes, tijdelijke workarounds |
| 2 | **Stabiliteit** - Is dit stabiel (niet in flux)? | Vastgestelde patterns | Experimentele approaches |
| 3 | **Genericiteit** - Geldt voor hele project? | "We gebruiken X voor Y" | "In file.ts regel 45..." |
| 4 | **Non-redundantie** - Niet al aanwezig? | Nieuwe insight, correctie | Herhaling, marginale variatie |
| 5 | **Actionability** - Direct bruikbaar? | "Run X before Y" | "Er was ooit een bug..." |

**Score 5/5** → Update toestaan
**Score <5** → Geen update, log in `/.agents/LOG.md`
