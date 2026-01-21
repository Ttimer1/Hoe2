# Project Context - Hoe2

**Last Updated**: 2026-01-21 14:41

---

## What Are We Building?

**Hoe2** is a functional clone of [Scribe](https://scribehow.com) - an AI-powered workflow documentation platform.

### Core Value Proposition

Automatically generate step-by-step guides by recording user actions in the browser. Instead of manually taking screenshots and writing instructions, users simply perform their workflow while our extension captures everything and AI generates polished documentation.

### The Problem We Solve

| Traditional Way | With Hoe2 |
|-----------------|-----------|
| Take screenshot | Auto-captured |
| Crop/edit image | Auto-highlighted |
| Write instruction | AI-generated |
| Format document | Instant layout |
| Hours of work | Minutes |

---

## Target Users

### Primary: Knowledge Workers

- IT Support creating how-to guides
- HR documenting onboarding processes
- Sales teams sharing CRM workflows
- Customer Success creating help articles

### Secondary: Teams & Organizations

- Internal documentation
- Training materials
- SOPs (Standard Operating Procedures)
- Customer-facing help centers

---

## Competitive Landscape

| Competitor | Valuation | Key Differentiator |
|------------|-----------|-------------------|
| **Scribe** | $1.3B (Series C, Nov 2025) | Market leader, enterprise focus |
| **Loom** | ~$1.5B | Video-first, not step-by-step |
| **Tango** | ~$100M | Similar product, smaller scale |
| **Dubble** | Startup | Budget alternative |

### Our Positioning

**Hoe2** aims to be a lean, developer-friendly alternative with:
- Open architecture
- Self-hostable option (future)
- Fair pricing
- Focus on quality AI generation

---

## Business Model

| Plan | Price | Target |
|------|-------|--------|
| **Free** | $0 | Individual try-out |
| **Pro Personal** | ~$29/mo | Power users |
| **Pro Team** | ~$12/user/mo | SMB teams |
| **Enterprise** | Custom | Large orgs |

### Key Monetization Triggers

- Desktop capture (Pro)
- PDF export (Pro)
- Team collaboration (Pro Team)
- SSO, auto-redaction (Enterprise)

---

## Success Criteria

### MVP Success (12 weeks)

- [ ] Working browser extension
- [ ] AI generates useful descriptions (>80% no-edit)
- [ ] Public sharing works
- [ ] 10+ beta users testing

### Product-Market Fit Indicators

- Users create >3 workflows in first week
- Retention: 40%+ return after 30 days
- NPS > 40
- Organic sharing (users share their guides)

---

## Constraints & Boundaries

### In Scope (MVP)

- Chrome browser extension
- Web app (dashboard, editor, viewer)
- AI step descriptions (Claude)
- Link sharing

### Out of Scope (MVP)

- Desktop app
- Team collaboration
- Enterprise features (SSO, SCIM)
- Mobile app
- Video/GIF export

### Non-Negotiables

- Privacy: No screenshots stored without consent
- Security: RLS on all data
- Quality: AI must produce useful output
- UX: Recording must "just work"

---

## Key Stakeholders

| Role | Name | Responsibility |
|------|------|----------------|
| Founder/Dev | Tom | Architecture, implementation |
| AI Assistant | Claude | Code, documentation, review |

---

## Reference Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Technical Blueprint | `/research/SCRIBE_TECHNICAL_BLUEPRINT.md` | Architecture spec |
| PRD | `/research/PRD-Scribehow-Clone.md` | Product requirements |
| MVP Plan | `/plans/YYYYMMDD-HHMM_MVP-IMPLEMENTATION-PLAN.md` | Sprint planning |
| Research | `/research/*.md` | Competitive analysis |
