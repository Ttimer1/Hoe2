# Technical Standards - Hoe2

**Last Updated**: 2026-01-21 14:41

---

## Tech Stack

### Frontend (Web App)

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ | App Router, RSC |
| TypeScript | 5.x | Type safety |
| TailwindCSS | 3.x | Styling |
| shadcn/ui | latest | Component library |
| React Query | 5.x | Data fetching |
| Zustand | 4.x | Client state |
| dnd-kit | latest | Drag and drop |

### Browser Extension

| Technology | Version | Purpose |
|------------|---------|---------|
| Chrome MV3 | - | Extension manifest |
| Vite | 5.x | Build tool |
| TypeScript | 5.x | Type safety |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js API Routes | 14+ | REST endpoints |
| Server Actions | - | Mutations |
| Supabase | latest | Database, Auth, Storage |

### Infrastructure

| Service | Purpose |
|---------|---------|
| Vercel | Web hosting |
| Supabase | PostgreSQL, Auth, Storage |
| Claude API | AI generation |
| Chrome Web Store | Extension distribution |

---

## Code Standards

### TypeScript

```typescript
// ALWAYS use strict mode
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files (components) | PascalCase | `StepEditor.tsx` |
| Files (utils) | camelCase | `debounce.ts` |
| Variables | camelCase | `stepCount` |
| Constants | UPPER_SNAKE | `MAX_STEPS` |
| Types/Interfaces | PascalCase | `Workflow` |
| Database tables | snake_case | `share_links` |
| API routes | kebab-case | `/api/workflows/[id]` |

### File Organization

```
components/
├── ui/           # Generic UI (shadcn)
├── editor/       # Editor-specific
├── viewer/       # Viewer-specific
└── dashboard/    # Dashboard-specific

lib/
├── supabase/     # DB clients
├── ai/           # Claude integration
└── utils/        # Helpers
```

---

## Non-Negotiables

### Security

- **NEVER** commit API keys or secrets
- **ALWAYS** use environment variables
- **ALWAYS** validate user input
- **ALWAYS** use RLS policies in Supabase
- **NEVER** trust client-side data

### Code Quality

- **NO** `any` types (use `unknown` if needed)
- **NO** `// @ts-ignore` without justification
- **NO** `console.log` in production (use proper logging)
- **NO** inline styles (use Tailwind)
- **NO** magic numbers (use named constants)

### Git Hygiene

- **ALWAYS** add `.env` to `.gitignore`
- **ALWAYS** use conventional commits
- **NEVER** commit `node_modules`
- **NEVER** commit build artifacts

---

## Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type | Usage |
|------|-------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting (no code change) |
| `refactor` | Code restructure |
| `test` | Tests |
| `chore` | Maintenance |

### Examples

```
feat(extension): add click capture with debounce
fix(editor): prevent duplicate step creation
docs(readme): add setup instructions
```

---

## API Design

### REST Conventions

| Method | Action | Example |
|--------|--------|---------|
| GET | Read | `GET /api/workflows` |
| POST | Create | `POST /api/workflows` |
| PUT | Update (full) | `PUT /api/workflows/[id]` |
| PATCH | Update (partial) | `PATCH /api/workflows/[id]` |
| DELETE | Delete | `DELETE /api/workflows/[id]` |

### Response Format

```typescript
// Success
{
  data: T,
  meta?: { total: number, page: number }
}

// Error
{
  error: {
    code: string,
    message: string,
    details?: unknown
  }
}
```

### Status Codes

| Code | Usage |
|------|-------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

---

## Extension Architecture

### Capture Constants

```typescript
// These values are TESTED and VALIDATED
// Do not change without A/B testing

export const CAPTURE_CONFIG = {
  DEBOUNCE_CLICK: 150,      // ms
  DEBOUNCE_INPUT: 300,      // ms
  SCREENSHOT_DELAY: 50,     // ms
  MAX_QUEUE_SIZE: 100,      // items
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,        // ms
} as const;
```

### Selector Priority

1. `#id` (if unique)
2. `[data-testid]`
3. `[aria-label]`
4. Unique class combination
5. nth-child path (fallback)

---

## AI Integration

### Model Selection

| Use Case | Model | Reason |
|----------|-------|--------|
| Step descriptions | Claude Haiku | Fast, cheap |
| Complex reasoning | Claude Sonnet | Better quality |
| Critical paths | Claude Opus | Highest quality |

### Prompt Guidelines

- Max 2 sentences per step
- Actionable language (verbs first)
- Reference actual UI element names
- Include context from previous steps

---

## Testing Strategy

### Unit Tests

- Pure functions
- Utility helpers
- API input validation

### Integration Tests

- Supabase RLS policies
- API endpoints
- Auth flows

### E2E Tests (Playwright)

- Critical user flows
- Recording workflow
- Sharing workflow

### Manual QA

- Test on 5+ popular sites
- Edge cases (SPAs, iframes)
- Large workflows (50+ steps)

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Viewer load | < 2s |
| Editor load | < 3s |
| Screenshot capture | < 100ms |
| AI generation | < 5s per step |
| Lighthouse Performance | > 80 |

---

## Environment Variables

### Required

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI
ANTHROPIC_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
```

### Optional

```env
# Analytics
NEXT_PUBLIC_POSTHOG_KEY=

# Error tracking
SENTRY_DSN=
```
