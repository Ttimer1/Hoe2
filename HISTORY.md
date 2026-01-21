# Development History - Hoe2

**Project**: Scribe Clone - Workflow Documentation Platform
**Started**: 2026-01-21

---

## Session Log

### 2026-01-21 14:00 - Project Kickoff & Foundation

**Participants**: Tom, Claude (Opus 4.5)
**Duration**: ~2 hours

#### Completed

| Task | Commit |
|------|--------|
| Research analysis (PRD, Technical Blueprint) | - |
| Technology decisions finalized | - |
| MVP Implementation Plan created | `633ab5a` |
| Documentation foundation (/.agents, /plans) | `ff3f2e7` |
| CLAUDE.md update qualification checklist | `3499366` |

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Recording method | Browser Extension | Only way to capture cross-origin |
| Backend | Next.js full-stack | Simpler deploy, single codebase |
| Database | Supabase | Auth + DB + Storage integrated |
| AI | Claude Haiku | Fast, cheap, good enough |
| Plan format | Sprint-based (2 weeks) | Concrete deliverables |

#### Learnings

- Extension is mandatory for cross-origin capture (web-only won't work)
- Documentation structure (`/.agents/`) enables seamless AI handovers
- 5-check qualification prevents CLAUDE.md bloat

#### Next Session

- Initialize Turborepo monorepo
- Create Supabase project
- Setup Vercel deployment
- Begin Sprint 0 foundation tasks

---

### 2026-01-21 16:30 - Sprint 0 Foundation Complete

**Participants**: Tom, Claude (Opus 4.5)
**Duration**: ~2 hours

#### Completed

| Task | Commit |
|------|--------|
| Turborepo monorepo setup | `426b64b` |
| Next.js 14 web app with auth | `426b64b` |
| Chrome MV3 extension scaffold | `426b64b` |
| Database schema + RLS policies | `426b64b` |
| Supabase project configured | - |

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| AI Provider | Google Gemini | Native multimodal vision for screenshots |
| Dynamic layouts | force-dynamic | Avoid build-time Supabase client errors |
| Package security | Research first | Verify lesser-known packages before install |

#### Learnings

- Supabase SSR requires explicit type annotations for cookie setters
- Auth pages need dynamic rendering to avoid build-time env var errors
- Plan file naming: `{name}_{YYYYMMDD-HHMM}.md`

#### CLAUDE.md Candidates (5-check)

| Candidate | H | S | G | N | A | Score | Action |
|-----------|---|---|---|---|---|-------|--------|
| Research lesser-known packages | Y | Y | Y | Y | Y | 5/5 | Added |
| Plan file naming convention | Y | Y | Y | Y | Y | 5/5 | Added |
| Gemini for AI (vision) | Y | Y | Y | Y | Y | 5/5 | Added |

#### Next Session

- Sprint 1: Core Recording
- Content script event listeners
- Screenshot capture implementation
- Upload pipeline to Supabase Storage

---

## Template

```markdown
### YYYY-MM-DD HH:MM - [Session Title]

**Participants**: [Names]
**Duration**: X hours

#### Completed

| Task | Commit |
|------|--------|
| Task description | `hash` |

#### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|

#### Learnings

- [Learning 1]
- [Learning 2]

#### CLAUDE.md Candidates (5-check)

| Candidate | H | S | G | N | A | Score | Action |
|-----------|---|---|---|---|---|-------|--------|
| "Example rule" | Y | Y | Y | Y | Y | 5/5 | Added |
| "One-off fix" | N | - | - | - | - | 1/5 | Skipped |

#### Next Session

- [Task 1]
- [Task 2]
```

---

## Milestone History

| Date | Milestone | Notes |
|------|-----------|-------|
| 2026-01-21 | Project kickoff | Foundation docs complete |
| 2026-01-21 | Sprint 0 complete | Monorepo, auth, extension scaffold |
| - | Sprint 1 complete | TBD |
| - | MVP launch | TBD |

---

## Architecture Decision Records (ADR)

### ADR-001: Browser Extension over Web-Only

**Date**: 2026-01-21
**Status**: Accepted

**Context**: Need to capture user actions across any website.

**Decision**: Use Chrome Extension (MV3) instead of web-only approach.

**Rationale**:
- Web apps cannot capture cross-origin events
- Cannot take screenshots of external sites
- Extension has native `chrome.tabs.captureVisibleTab`
- All competitors (Scribe, Tango, Dubble) use extensions

**Consequences**:
- Users must install extension
- Chrome Web Store review required
- More complex development setup

---

### ADR-002: Supabase over Custom Backend

**Date**: 2026-01-21
**Status**: Accepted

**Context**: Need database, auth, and file storage.

**Decision**: Use Supabase managed service.

**Rationale**:
- Integrated Auth, PostgreSQL, Storage
- Built-in RLS for security
- Free tier for MVP
- Faster time to market

**Consequences**:
- Vendor lock-in (acceptable for MVP)
- Less control than self-hosted
- Must learn Supabase patterns

---

### ADR-003: Google Gemini over Claude for AI

**Date**: 2026-01-21
**Status**: Accepted

**Context**: Need AI to analyze screenshots and generate step descriptions.

**Decision**: Use Google Gemini API instead of Claude API.

**Rationale**:
- Native multimodal vision capabilities
- Exceptional screenshot/image understanding
- Single API call for image + text analysis
- No need for separate vision preprocessing

**Consequences**:
- Different API patterns than Claude
- Google Cloud billing required
- May need API key management for Gemini

---

_Last updated: 2026-01-21 16:45_
