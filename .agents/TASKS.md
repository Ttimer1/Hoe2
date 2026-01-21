# Task Backlog - Hoe2

**Last Updated**: 2026-01-21 14:41

---

## Current Sprint: Sprint 0 - Foundation

**Duration**: Week 1
**Goal**: Set up development infrastructure and core authentication

---

## Sprint 0 Tasks

### Infrastructure Setup

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Initialize Turborepo monorepo | Pending | P0 | `pnpm create turbo` |
| Setup Next.js app (App Router) | Pending | P0 | `/apps/web` |
| Configure TypeScript strict mode | Pending | P0 | All packages |
| Setup TailwindCSS + shadcn/ui | Pending | P0 | Component foundation |
| Create Supabase project | Pending | P0 | Manual in dashboard |
| Configure Supabase client | Pending | P0 | Server + client |

### Database

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Write initial schema migration | Pending | P0 | profiles, workflows, steps, screenshots, share_links |
| Setup RLS policies | Pending | P0 | User isolation |
| Create database types | Pending | P1 | Supabase CLI generate |

### Authentication

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Implement Supabase Auth | Pending | P0 | Email/password |
| Create auth middleware | Pending | P0 | Protect routes |
| Build login page | Pending | P0 | `/login` |
| Build register page | Pending | P0 | `/register` |
| Profile creation trigger | Pending | P1 | On user signup |

### Extension

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Initialize extension package | Pending | P0 | `/apps/extension` |
| Create manifest.json (MV3) | Pending | P0 | Permissions |
| Setup Vite build | Pending | P0 | HMR for dev |
| Basic popup scaffold | Pending | P1 | Start/stop UI |

### Deployment

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Connect to Vercel | Pending | P0 | GitHub integration |
| Configure env variables | Pending | P0 | Production secrets |
| Test deployment pipeline | Pending | P1 | Preview + production |

### Documentation

| Task | Status | Priority | Notes |
|------|--------|----------|-------|
| Create .agents/ structure | Done | P0 | CONTEXT, TECH, TASKS, LOG |
| Update CLAUDE.md | Pending | P0 | Project rules |
| Setup /plans directory | Done | P0 | Timestamped plans |

---

## Backlog (Future Sprints)

### Sprint 1: Core Recording

- [ ] Content script event listeners
- [ ] DOM selector extraction
- [ ] Screenshot capture
- [ ] Recording overlay UI
- [ ] Upload pipeline
- [ ] Workflow creation API
- [ ] Step creation API

### Sprint 2: AI + Editor

- [ ] Claude API integration
- [ ] Step description prompts
- [ ] AI generation endpoint
- [ ] Editor page layout
- [ ] Step list (drag-drop)
- [ ] Inline text editing
- [ ] Auto-save

### Sprint 3: Dashboard + Viewer

- [ ] Dashboard page
- [ ] Workflow cards
- [ ] Public viewer page
- [ ] Step navigation
- [ ] View tracking

### Sprint 4: Sharing + Polish

- [ ] Share link generation
- [ ] Share settings modal
- [ ] Embed code
- [ ] UI polish
- [ ] Error handling

### Sprint 5: Testing + Launch

- [ ] E2E tests
- [ ] Performance optimization
- [ ] Security audit
- [ ] Chrome Web Store submission

---

## Blocked / Waiting

| Task | Blocked By | Since |
|------|------------|-------|
| - | - | - |

---

## Completed

| Task | Completed | Sprint |
|------|-----------|--------|
| Research & PRD analysis | 2026-01-21 | Pre-sprint |
| MVP Implementation Plan | 2026-01-21 | Pre-sprint |
| Documentation structure | 2026-01-21 | Sprint 0 |

---

## Priority Legend

| Priority | Meaning |
|----------|---------|
| P0 | Must have (blocker) |
| P1 | Should have |
| P2 | Nice to have |
| P3 | Future consideration |
