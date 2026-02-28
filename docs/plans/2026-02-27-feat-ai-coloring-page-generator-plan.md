---
title: AI Coloring Book Page Generator
type: feat
status: completed
date: 2026-02-27
brainstorm: docs/brainstorms/2026-02-27-image-gen-integration-brainstorm.md
---

# AI Coloring Book Page Generator

## Overview

Transform the single-file coloring book viewer into a full-stack web app where users type a free-text prompt, receive an AI-generated coloring book line art page (clean black outlines on white, no fills), and can download/print it for hand coloring. Generated pages accumulate in a session-based scrapbook gallery with page-flip navigation.

**Stack**: React + Vite (client) / Express (server) / Gemini Imagen 4 API
**Model**: `imagen-4.0-fast-generate-001` ($0.02/image)
**Package**: `@google/genai` (NOT the deprecated `@google/generative-ai`)

## Problem Statement

The current repo contains a single `coloring-book.jsx` file — a React component with 6 hardcoded SVG cat illustrations and a page-flip viewer. It has no project scaffolding, no backend, and no way to run. The coloring book concept is strong but static; AI-generated pages on demand would make it a compelling portfolio piece.

## Technical Approach

### Architecture

```
┌─────────────────────────┐         ┌─────────────────────┐        ┌──────────────────┐
│   React + Vite Client   │  POST   │   Express Server    │  API   │  Gemini Imagen 4 │
│                         │ ──────> │                     │ ─────> │                  │
│  - Prompt input         │ /api/   │  - Prompt wrapping  │        │  imagen-4.0-fast │
│  - Loading state        │ generate│  - Rate throttling  │ <───── │  -generate-001   │
│  - Scrapbook gallery    │ <────── │  - Error mapping    │ base64 │                  │
│  - Download/Print       │  JSON   │  - CORS (prod)      │  PNG   │  $0.02/image     │
└─────────────────────────┘         └─────────────────────┘        └──────────────────┘
```

### Project Structure

```
Coloring-Book-Generator/
  package.json              # Root: concurrently for dev scripts
  .gitignore
  .env.example              # GEMINI_API_KEY=your_key_here
  docs/
    brainstorms/
    plans/
  client/
    package.json            # React + Vite
    vite.config.js          # Dev proxy: /api → localhost:3001
    index.html
    src/
      main.jsx              # Entry point, renders <App />
      App.jsx               # Top-level layout + state
      components/
        PromptInput.jsx     # Text input + Generate button
        LoadingState.jsx    # Generation progress indicator
        ScrapbookGallery.jsx # Page-flip viewer for generated pages
        PageCard.jsx        # Single page display (image + prompt title)
        DownloadButton.jsx  # Triggers PNG download
        PrintButton.jsx     # Triggers browser print
  server/
    package.json            # Express + @google/genai
    index.js                # Express app + production static serving
    routes/
      generate.js           # POST /api/generate endpoint
    lib/
      imagen.js             # Gemini Imagen 4 API wrapper
      prompt.js             # Prompt wrapping/template logic
```

### Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Image gen model | Imagen 4 Fast (`imagen-4.0-fast-generate-001`) | Imagen 3 discontinued; Fast is $0.02/image, good quality |
| npm package | `@google/genai` | Current SDK; `@google/generative-ai` is deprecated |
| Aspect ratio | `3:4` portrait (hardcoded) | Coloring pages are portrait; simplest UX |
| Image resolution | `1K` (default) | Imagen 4 Fast supports 1K; sufficient for casual print |
| "Try Again" behavior | Appends new page to gallery | Non-destructive; user keeps all variations |
| Session storage | React state only | Simple; no persistence across refresh; avoids sessionStorage 5MB limit |
| Empty state | Prompt-focused landing; gallery hidden until first page | Clean onboarding; no empty book to confuse users |
| Error handling | Per-error-type user messages | Content blocks, rate limits, and server errors each get specific UX |
| Server throttling | `express-rate-limit` (3 req/30s per IP) | Protects API key; demonstrates security awareness |
| Prompt template | Style suffix appended after user prompt | "coloring book line art..." phrasing after user's subject |
| Download filename | `coloring-page-{timestamp}.png` | Simple, unique, descriptive |

### API Response Contract

```json
// Success
{
  "success": true,
  "data": {
    "imageBase64": "iVBORw0KGgo...",
    "mimeType": "image/png",
    "prompt": "original user prompt"
  },
  "error": null
}

// Failure
{
  "success": false,
  "data": null,
  "error": {
    "code": "CONTENT_BLOCKED | RATE_LIMITED | API_ERROR | INVALID_PROMPT",
    "message": "User-friendly error message"
  }
}
```

### Error Handling Map

| API Error | Code | User Message |
|-----------|------|-------------|
| Content safety block | `CONTENT_BLOCKED` | "We couldn't generate that image. Try a different description." |
| 429 rate limit | `RATE_LIMITED` | "Generating too fast — please wait a moment and try again." |
| 500 / network error | `API_ERROR` | "Something went wrong. Please try again." |
| Empty/too-short prompt | `INVALID_PROMPT` | "Please enter a description of what you'd like to color." |
| API key missing/invalid | `API_ERROR` | "Image generation is temporarily unavailable." |

### Prompt Template

```javascript
function wrapPrompt(userPrompt) {
  return `${userPrompt}. Black and white coloring book page illustration. ` +
    `Clean line art with thick bold outlines. No shading, no gradients, ` +
    `no color fills, no watermarks, no text. White background. ` +
    `Simple, bold outlines suitable for hand coloring with crayons or markers.`;
}
```

## Implementation Phases

### Phase 1: Project Scaffolding

Set up the full-stack project from scratch.

**Tasks:**
- [x] Create root `package.json` with `concurrently` dev script
- [x] Create `.gitignore` (node_modules, .env, dist, .DS_Store)
- [x] Create `.env.example` with `GEMINI_API_KEY=`
- [x] Scaffold `client/` with Vite + React (`npm create vite@latest client -- --template react`)
- [x] Configure `client/vite.config.js` with `/api` proxy to `localhost:3001`
- [x] Scaffold `server/` with Express + `@google/genai`
- [x] Create `server/index.js` with Express app (dev + production static serving)
- [x] Verify `npm run dev` starts both client and server concurrently
- [x] Verify Vite proxy forwards `/api/health` to Express

**Files created:**
- `package.json` (root)
- `.gitignore`
- `.env.example`
- `client/package.json`
- `client/vite.config.js`
- `client/index.html`
- `client/src/main.jsx`
- `client/src/App.jsx`
- `server/package.json`
- `server/index.js`

**Success criteria:** `npm run dev` launches both servers; `GET /api/health` returns `{ status: "ok" }` through the Vite proxy.

### Phase 2: Backend — Imagen 4 Integration

Build the Express API endpoint that wraps prompts and calls Gemini Imagen 4.

**Tasks:**
- [x]Create `server/lib/imagen.js` — Imagen 4 API wrapper using `@google/genai`
- [x]Create `server/lib/prompt.js` — prompt wrapping/template function
- [x]Create `server/routes/generate.js` — `POST /api/generate` route handler
- [x]Add input validation: prompt required, max 500 characters
- [x]Add `express-rate-limit` middleware (3 requests per 30 seconds per IP)
- [x]Add 60-second timeout budget for the full request lifecycle
- [x]Map Gemini API errors to the response contract (content block, rate limit, server error)
- [x]Test with curl: send a prompt, receive base64 PNG in response contract format

**Files created:**
- `server/lib/imagen.js`
- `server/lib/prompt.js`
- `server/routes/generate.js`

**Key code — `server/lib/imagen.js`:**

```javascript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateColoringPage(prompt) {
  const response = await ai.models.generateImages({
    model: "imagen-4.0-fast-generate-001",
    prompt,
    config: {
      numberOfImages: 1,
      aspectRatio: "3:4",
    },
  });

  const image = response.generatedImages[0];
  return {
    imageBase64: image.image.imageBytes,
    mimeType: "image/png",
  };
}
```

**Success criteria:** `curl -X POST http://localhost:3001/api/generate -H "Content-Type: application/json" -d '{"prompt":"a cat reading a book"}'` returns a valid response with base64 image data.

### Phase 3: Frontend — Prompt Input + Generation Flow

Build the prompt input UI and connect it to the backend.

**Tasks:**
- [x]Create `PromptInput.jsx` — text input (max 500 chars with counter) + Generate button
- [x]Create `LoadingState.jsx` — animated loading indicator shown during generation
- [x]Wire up `App.jsx` state: `pages` array, `isGenerating` flag, `error` message
- [x]Implement `handleGenerate()` — POST to `/api/generate`, add result to `pages` array
- [x]Implement `handleTryAgain()` — re-send the current page's prompt
- [x]Display error messages from the response contract
- [x]Preserve prompt text in input on error (don't clear it)
- [x]Disable Generate button while a request is in-flight
- [x]Apply the warm parchment design language (Playfair Display, parchment gradients, `#2a1810` browns)

**Files created/modified:**
- `client/src/App.jsx`
- `client/src/components/PromptInput.jsx`
- `client/src/components/LoadingState.jsx`

**Success criteria:** User types prompt, clicks Generate, sees loading state, then sees the generated image displayed. Errors show friendly messages.

### Phase 4: Frontend — Scrapbook Gallery

Build the page-flip scrapbook gallery that accumulates generated pages.

**Tasks:**
- [x]Create `ScrapbookGallery.jsx` — page-flip viewer (adapted from existing `coloring-book.jsx` animation logic)
- [x]Create `PageCard.jsx` — displays a single generated image with its prompt as a subtitle
- [x]Implement page-flip animation (opacity + translateX transition, ~260ms, from existing component)
- [x]Implement Previous/Next navigation buttons
- [x]Implement dot pagination with direct page jumping
- [x]"Try Again" button on each page (appends a new variation)
- [x]Gallery appears after first image is generated; hidden before
- [x]Handle growing gallery: newest page auto-selected after generation

**Files created:**
- `client/src/components/ScrapbookGallery.jsx`
- `client/src/components/PageCard.jsx`

**Success criteria:** Multiple generated pages are navigable via page-flip. New pages appear at the end. "Try Again" adds a variation without removing the original.

### Phase 5: Download + Print

Add the ability to download and print individual coloring pages.

**Tasks:**
- [x]Create `DownloadButton.jsx` — converts base64 to Blob, triggers download as `coloring-page-{timestamp}.png`
- [x]Create `PrintButton.jsx` — opens image in a new window with print-optimized CSS, triggers `window.print()`
- [x]Add `@media print` styles: hide all UI except the image, fill the page, set portrait orientation
- [x]Add alt text on images derived from the user's prompt

**Files created:**
- `client/src/components/DownloadButton.jsx`
- `client/src/components/PrintButton.jsx`

**Success criteria:** Download saves a PNG file. Print opens a clean print dialog with just the coloring page filling the page.

### Phase 6: Production Build + Polish

Wire up production builds and final polish.

**Tasks:**
- [x]Configure `server/index.js` to serve `client/dist/` in production (`NODE_ENV=production`)
- [x]Add SPA catch-all route (non-API routes serve `index.html`)
- [x]Mount API routes before static files (critical ordering)
- [x]Add `npm run build` and `npm start` scripts to root `package.json`
- [x]Remove the old `coloring-book.jsx` file from the repo root
- [x]Verify `npm run build && npm start` works end-to-end
- [x]Add responsive styles for mobile (prompt input, gallery, buttons)

**Files modified:**
- `server/index.js`
- `package.json` (root)

**Success criteria:** `npm run build && npm start` serves the full app on a single port. Works on mobile viewport.

## Acceptance Criteria

### Functional Requirements
- [x]User can type a free-text prompt and generate a coloring book line art page
- [x]Generated pages are clean black outlines on white background (suitable for hand coloring)
- [x]Generated pages accumulate in a scrapbook-style gallery with page-flip navigation
- [x]"Try Again" re-runs the same prompt and appends a new page
- [x]Users can download individual pages as PNG
- [x]Users can print individual pages via browser print dialog
- [x]Error messages are user-friendly and specific to the error type
- [x]Prompt text is preserved in the input on error

### Non-Functional Requirements
- [x]Server-side rate limiting protects the API key (3 req/30s per IP)
- [x]API key is never exposed to the client
- [x]60-second timeout on generation requests
- [x]Warm parchment visual design (Playfair Display, `#2a1810` palette)
- [x]Works on mobile (responsive layout)
- [x]Production build serves from a single Express process

## Dependencies & Prerequisites

- **Google AI Studio API key** with billing enabled (free tier does NOT support image generation)
- **Node.js 18+** (required by `@google/genai`)
- **npm** for package management

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Imagen 4 produces shaded/colored output despite prompt | Medium | High | Test prompt template extensively before building UI; iterate on wording |
| 1K resolution too small for print quality | Medium | Medium | Document effective print size; consider `imagen-4.0-generate-001` (Standard, $0.04) for 2K if needed |
| API rate limit hit during demos | Low | Medium | Server throttling + clear "please wait" UX |
| API key abuse on open endpoint | Low | Medium | `express-rate-limit` + Google Cloud budget alert |
| Base64 images consume too much memory (20+ pages) | Low | Low | Gallery is session-only; typical session is 5-10 pages |

## References & Research

### Internal
- Brainstorm: `docs/brainstorms/2026-02-27-image-gen-integration-brainstorm.md`
- Existing component: `coloring-book.jsx` (page-flip animation logic, design language)
- API patterns: `vault-tools/docs/solutions/security-issues/stock-briefing-skill-xss-api-optimization-remediation.md`
- Response contracts: `prediction-market-analysis/docs/solutions/integration-issues/mcp-search-deadline-and-response-contract-system-20260220.md`

### External
- [Gemini Imagen 4 API docs](https://ai.google.dev/gemini-api/docs/imagen)
- [Gemini image generation guide](https://ai.google.dev/gemini-api/docs/image-generation)
- [`@google/genai` npm package](https://www.npmjs.com/package/@google/genai)
- [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Vite server proxy docs](https://vite.dev/config/server-options)
- [Express static files](https://expressjs.com/en/starter/static-files.html)
