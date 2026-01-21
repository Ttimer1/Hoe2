# Development Log - Hoe2

**Project Start**: 2026-01-21

---

## 2026-01-21 | Project Kickoff

### Session: Initial Setup & Planning

**Duration**: ~2 hours
**Participants**: Tom, Claude (Opus 4.5)

#### What Was Done

1. **Research Analysis**
   - Converted PRD from .docx to markdown
   - Analyzed technical blueprint
   - Reviewed GPT-DR and Perp-DR research docs
   - Identified 40+ assumptions needing validation

2. **Technology Decisions**
   - Stack: Next.js + Supabase + Chrome Extension
   - Deployment: Vercel + Supabase managed
   - AI: Claude Haiku (primary), Sonnet (complex)
   - Planning: Sprint-based (2-week sprints)

3. **MVP Plan Created**
   - 6 sprints over 12 weeks
   - Detailed task breakdown per sprint
   - Database schema designed
   - API endpoints defined
   - Extension architecture specified

4. **Documentation Foundation**
   - Created `/plans` directory (timestamped docs)
   - Created `/.agents` directory:
     - CONTEXT.md (project overview)
     - TECH.md (standards & stack)
     - TASKS.md (backlog)
     - LOG.md (this file)

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Extension vs Web-only | Extension | Only way to capture cross-origin |
| Backend | Next.js full-stack | Simpler deploy, single codebase |
| Database | Supabase | Auth + DB + Storage integrated |
| Plan format | Sprint-based | Concrete deliverables, agile |

#### Blockers / Issues

- None currently

#### Next Steps

1. Initialize Turborepo monorepo
2. Create Supabase project
3. Setup Vercel deployment
4. Begin Sprint 0 foundation tasks

---

## 2026-01-21 | Sprint 0 Complete

### Session: Foundation Implementation

**Duration**: ~2 hours
**Participants**: Tom, Claude (Opus 4.5)

#### What Was Done

1. **Monorepo Setup**
   - Turborepo with pnpm workspaces
   - apps/web, apps/extension, packages/shared, packages/database

2. **Web App (Next.js 14)**
   - TypeScript strict mode
   - TailwindCSS with shadcn/ui theming
   - Supabase auth (login, register pages)
   - Middleware route protection
   - Dashboard workflows page

3. **Chrome Extension Scaffold**
   - MV3 manifest
   - Vite build system
   - Popup UI, background script, content script
   - Recording state management

4. **Database**
   - Schema: profiles, workflows, steps, screenshots, share_links
   - RLS policies for user isolation
   - Auto-profile creation trigger
   - Supabase project configured

5. **AI Decision Change**
   - Switched from Claude to Gemini
   - Rationale: native multimodal vision for screenshot analysis

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| AI Provider | Google Gemini | Native multimodal vision for screenshots |
| Dynamic rendering | force-dynamic layouts | Avoid build-time Supabase errors |
| Package verification | Research lesser-known packages | Security best practice |

#### Blockers / Issues

- None

#### Next Steps

1. Sprint 1: Core Recording
   - Content script event listeners
   - Screenshot capture
   - Upload pipeline
   - Workflow/step creation APIs

---

## Template for Future Entries

```markdown
## YYYY-MM-DD | [Session Title]

### Session: [Description]

**Duration**: X hours
**Participants**: [Names]

#### What Was Done

1. [Task 1]
2. [Task 2]

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|

#### Blockers / Issues

- [Issue 1]

#### Next Steps

1. [Next task]
```

---

## Handover Notes

### For Next Session

**Context**: Sprint 0 complete. Foundation is built and running.

**What's Working**:
- Web app at http://localhost:3001 (pnpm dev:web)
- Auth flow (login/register) with Supabase
- Database schema deployed with RLS
- Extension builds successfully (pnpm build)

**Files to Review**:
- `/plans/20260121-1441_MVP-IMPLEMENTATION-PLAN.md` - Full sprint breakdown
- `/.agents/TASKS.md` - Update for Sprint 1
- `apps/extension/src/content.ts` - Recording logic to enhance

**Immediate Actions (Sprint 1)**:
1. Implement screenshot capture in content script
2. Build upload pipeline to Supabase Storage
3. Create workflow/step creation API routes
4. Wire extension popup to create new workflows

**Supabase Project**: `stelafvkyfuixngeugmb`
**GitHub**: https://github.com/Ttimer1/Hoe2

**No Blockers**.
