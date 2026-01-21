 Hoe2 - Scribe Clone MVP Implementation Plan												21 jan 14:35 2026

 Overview

 Project: Scribe Clone - Workflow Documentation Platform
 Stack: Chrome Extension (MV3) + Next.js + Supabase + Claude AI
 Duration: 6 sprints (12 weeks)
 Deployment: Vercel + Supabase

---

Sprint Overview
 ┌────────────────────┬────────────────────┬─────────────────────────────────────────────────────┐
 │       Sprint       │       Focus        │                  Key Deliverables                   │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 0 (1 week)  │ Foundation         │ Monorepo, Auth, Database schema, Extension scaffold │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 1 (2 weeks) │ Core Recording     │ Event capture, screenshots, upload pipeline         │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 2 (2 weeks) │ AI + Editor        │ Claude integration, step editor, drag-drop          │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 3 (2 weeks) │ Dashboard + Viewer │ Workflow list, public viewer, view tracking         │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 4 (2 weeks) │ Sharing + Polish   │ Share links, embed codes, UI refinement             │
 ├────────────────────┼────────────────────┼─────────────────────────────────────────────────────┤
 │ Sprint 5 (2 weeks) │ Testing + Launch   │ E2E tests, performance, deployment                  │
 └────────────────────┴────────────────────┴─────────────────────────────────────────────────────┘
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Tech Stack

 Frontend:     Next.js 14+ (App Router), TypeScript, TailwindCSS, shadcn/ui
 Extension:    Chrome MV3, Vite, Content Scripts
 Backend:      Next.js API Routes, Server Actions
 Database:     Supabase PostgreSQL with RLS
 Storage:      Supabase Storage (screenshots)
 AI:           Claude API (Haiku primary)
 Deploy:       Vercel (web), Chrome Web Store (extension)

---

 Monorepo Structure

 hoe2/
 ├── apps/
 │   ├── web/                    # Next.js web application
 │   │   ├── app/
 │   │   │   ├── (auth)/         # Login, register
 │   │   │   ├── (dashboard)/    # Protected routes
 │   │   │   ├── api/            # API routes
 │   │   │   └── s/[shortId]/    # Public viewer
 │   │   ├── components/
 │   │   │   ├── editor/         # Step editor components
 │   │   │   ├── viewer/         # Public viewer components
 │   │   │   └── dashboard/      # Dashboard components
 │   │   └── lib/
 │   │       ├── supabase/       # DB client
 │   │       └── ai/             # Claude integration
 │   │
 │   └── extension/              # Chrome Extension
 │       ├── manifest.json
 │       └── src/
 │           ├── background/     # Service worker
 │           ├── content/        # Capture logic
 │           └── popup/          # Extension UI
 │
 ├── packages/
 │   ├── shared/                 # Types, utilities
 │   └── database/               # Migrations
 │
 └── turbo.json

---

 Database Schema (Core Tables)

 profiles       (id, email, name, avatar_url)
 workflows      (id, user_id, title, description, status, step_count, view_count)
 steps          (id, workflow_id, position, description, action_type, element_selector, url)
 screenshots    (id, step_id, storage_path, public_url, width, height)
 share_links    (id, workflow_id, short_id, password_hash, expires_at, max_views)

 RLS Policies: Users can only access their own workflows/steps/screenshots.

---

 Critical Implementation Details

 Extension Capture Constants

 DEBOUNCE_CLICK = 150ms
 DEBOUNCE_INPUT = 300ms
 SCREENSHOT_DELAY = 50ms
 MAX_QUEUE_SIZE = 100

 Selector Priority

1. #id (if unique)
2. [data-testid]
3. [aria-label]
4. CSS class combination
5. nth-child fallback

 AI Prompt Strategy

- Context: action_type + element_text + page_title + previous 3 steps
- Output: Max 2 sentences, actionable instruction
- Model: Claude Haiku (fast, cheap)

---

API Endpoints (MVP)
 ┌────────┬────────────────────────────────────┬───────────────────────────┐
 │ Method │              Endpoint              │          Purpose          │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ POST   │ /api/workflows                     │ Create workflow           │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ GET    │ /api/workflows                     │ List user workflows       │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ GET    │ /api/workflows/[id]                │ Get workflow + steps      │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ POST   │ /api/workflows/[id]/steps          │ Add step                  │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ PUT    │ /api/workflows/[id]/steps/[stepId] │ Update step               │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ DELETE │ /api/workflows/[id]/steps/[stepId] │ Delete step               │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ POST   │ /api/workflows/[id]/complete       │ Finalize recording        │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ POST   │ /api/ai/generate                   │ Generate step description │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ POST   │ /api/workflows/[id]/share          │ Create share link         │
 ├────────┼────────────────────────────────────┼───────────────────────────┤
 │ GET    │ /api/share/[shortId]               │ Public view (no auth)     │
 └────────┴────────────────────────────────────┴───────────────────────────┘
-------------------------------------------------------------------------------------------------------------------------------------------------------

 Sprint 0: Foundation (Week 1)

 Deliverables

- Turborepo monorepo setup
- Next.js app with Supabase Auth
- Database migrations + RLS policies
- Extension scaffold (manifest, Vite build)
- Vercel deployment

 Critical Files

- /turbo.json
- /apps/web/lib/supabase/client.ts
- /packages/database/supabase/migrations/00001_initial_schema.sql
- /apps/extension/manifest.json

---

 Sprint 1: Core Recording (Weeks 2-3)

 Deliverables

- Content script with event listeners
- Click/input/navigation capture
- DOM selector extraction
- Screenshot capture (chrome.tabs.captureVisibleTab)
- Upload pipeline to Supabase Storage
- Recording UI overlay
- Extension popup

 Critical Files

- /apps/extension/src/content/capture.ts
- /apps/extension/src/content/selector.ts
- /apps/extension/src/background/index.ts
- /apps/web/app/api/workflows/[id]/steps/route.ts
- /apps/web/app/api/screenshots/upload/route.ts

---

 Sprint 2: AI + Editor (Weeks 4-5)

 Deliverables

- Claude API integration
- Step description generation
- Auto title generation
- Editor page with step list
- Drag-and-drop reordering
- Inline text editing
- Auto-save

 Critical Files

- /apps/web/lib/ai/claude.ts
- /apps/web/lib/ai/prompts.ts
- /apps/web/app/api/ai/generate/route.ts
- /apps/web/components/editor/StepList.tsx
- /apps/web/components/editor/StepEditor.tsx

---

 Sprint 3: Dashboard + Viewer (Weeks 6-7)

 Deliverables

- Dashboard with workflow grid
- Workflow cards (title, steps, views, date)
- Search/filter
- Public viewer page (/s/[shortId])
- Step-by-step navigation
- Screenshot zoom
- View count tracking

 Critical Files

- /apps/web/app/(dashboard)/workflows/page.tsx
- /apps/web/components/dashboard/WorkflowCard.tsx
- /apps/web/app/s/[shortId]/page.tsx
- /apps/web/components/viewer/WorkflowViewer.tsx

---

 Sprint 4: Sharing + Polish (Weeks 8-9)

 Deliverables

- Share link generation (nanoid)
- Share settings modal
- Embed code (iframe)
- Optional password/expiration
- Toast notifications
- Error handling
- Keyboard shortcuts
- Delete workflow

 Critical Files

- /apps/web/app/api/workflows/[id]/share/route.ts
- /apps/web/components/share/ShareModal.tsx
- /apps/web/components/share/EmbedCode.tsx

---

 Sprint 5: Testing + Launch (Weeks 10-11)

 Deliverables

- Playwright E2E tests
- Unit tests (AI, API)
- Performance optimization
- Security audit
- Rate limiting
- Chrome Web Store submission
- Documentation

 Verification Plan

1. E2E Tests: Auth, recording, editing, sharing flows
2. Manual QA: Test on 5+ popular websites
3. Performance: Lighthouse > 80, viewer < 2s load
4. Security: RLS policies, input validation

---

Risks & Mitigations
 ┌───────────────────────────┬─────────────────────────────────────────┐
 │           Risk            │               Mitigation                │
 ├───────────────────────────┼─────────────────────────────────────────┤
 │ Claude API rate limits    │ Implement caching, prompt prefix reuse  │
 ├───────────────────────────┼─────────────────────────────────────────┤
 │ Extension store rejection │ Follow Chrome policies strictly         │
 ├───────────────────────────┼─────────────────────────────────────────┤
 │ Screenshot timing issues  │ Configurable delay, DOM stability check │
 ├───────────────────────────┼─────────────────────────────────────────┤
 │ Cross-origin iframes      │ Document limitation, skip capture       │
 └───────────────────────────┴─────────────────────────────────────────┘
-----------------------------------------------------------------------------------------------------------------------------------------------

Success Metrics
 ┌──────────────────────────────┬─────────┐
 │            Metric            │ Target  │
 ├──────────────────────────────┼─────────┤
 │ Time to first workflow       │ < 5 min │
 ├──────────────────────────────┼─────────┤
 │ AI accuracy (no edit needed) │ > 80%   │
 ├──────────────────────────────┼─────────┤
 │ Screenshot success rate      │ > 95%   │
 ├──────────────────────────────┼─────────┤
 │ Viewer load time             │ < 2 sec │
 └──────────────────────────────┴─────────┘
-------------------------------------------------------------------------------------

 Next Steps After Approval

1. Initialize Turborepo monorepo
2. Create Supabase project
3. Setup Vercel deployment
4. Begin Sprint 0 tasks
