# Brainstorm: AI Coloring Book Page Generator

**Date**: 2026-02-27
**Status**: Draft

## What We're Building

A web app where users type a free-text prompt (e.g. "a dragon reading a book in a library") and receive a **coloring book line art page** — clean black outlines on white background, no fills or shading — ready to **download and print** for hand coloring.

The existing hand-drawn SVG pages are removed. The app becomes a pure prompt-to-coloring-page generator.

## Why This Approach

- **On-demand generation** is the most compelling UX — users get exactly what they want
- **Print-for-hand-coloring** keeps the output simple (raster PNG) and avoids the complexity of interactive digital coloring (flood-fill, region detection, SVG conversion)
- **Gemini Imagen** balances quality, cost (~$0.04/image), and simplicity — single API, good prompt adherence for style-constrained generation
- **Simple Express backend** is the right weight for a personal/portfolio project — no auth, no rate limiting, minimal infrastructure

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Generation mode | On-demand (user prompt) | Most engaging UX, strongest portfolio piece |
| Image gen model | Gemini Imagen 3 | Quality + cost balance, single API |
| Output format | Raster PNG | Sufficient for print/download, no vector conversion needed |
| User interaction | Download/print for hand coloring | Avoids complex interactive coloring mechanics |
| Prompt UX | Free-text input | Maximum creative freedom for users |
| Backend | Node/Express server | Simple, flexible, protects API key |
| Auth/rate limiting | None | Personal/portfolio project, low traffic |
| Existing SVG pages | Removed | Pure generator experience, no gallery mode |
| Image resolution | Print-quality (highest Gemini supports) | Optimized for crisp printed output |
| Session history | Scrapbook-style gallery | Generated pages accumulate into a flippable coloring book |
| Regeneration | "Try Again" button | Re-runs same prompt for a different result |

## Architecture Overview

```
[React Frontend]  --->  [Express API Server]  --->  [Gemini Imagen API]
                                                          |
   User types prompt        /api/generate                 v
   Sees loading state       Wraps prompt with         Returns PNG
   Downloads/prints         style instructions        image data
```

### Frontend (React)
- Prompt input field (free-text)
- "Generate" button with loading state
- "Try Again" button (re-runs same prompt for a variant)
- **Scrapbook/coloring book gallery**: Generated pages accumulate in a session and are presented as a flippable coloring book (reuses the page-flip viewer concept from the original component)
- Download button + print button (per page)
- Simple, clean design — warm parchment aesthetic from existing component

### Backend (Express)
- Single endpoint: `POST /api/generate`
- Accepts: `{ prompt: string }`
- Wraps user prompt with coloring book style suffix:
  > "...black and white line art, coloring book page, clean bold outlines, no shading, no color fills, white background, suitable for hand coloring"
- Calls Gemini Imagen API
- Returns: PNG image (base64 or binary stream)
- Environment variable for `GEMINI_API_KEY`

### Prompt Engineering
- System-level style instructions appended to every user prompt
- Negative prompt elements (if supported): "no shading, no gradient, no color, no watermark"
- May need iteration to dial in consistent coloring-book-quality line art

## Resolved Questions

1. **Image resolution**: Target print-quality — highest resolution Gemini Imagen supports. Will need to check Imagen 3 limits during implementation (likely 1024x1024 native; may need upscaling for true 300 DPI print).
2. **Generation history**: Session-based scrapbook gallery styled as a coloring book. Users flip through their generated pages like a real coloring book.
3. **Prompt refinement**: "Try Again" button re-runs the same prompt to get a different variation.

## Open Questions

1. **Gemini Imagen API specifics**: What are the exact resolution limits, supported aspect ratios, and response format? Needs investigation during planning/implementation.

## Rejected Alternatives

- **Interactive digital coloring**: Too complex for the scope (flood-fill, SVG region detection, color picker, undo/redo). Could be a future enhancement.
- **Pre-generated library**: Less compelling than on-demand; doesn't showcase AI integration well.
- **Client-side API calls**: Exposes API key. Not worth the security tradeoff even for a portfolio project.
- **Replicate/SDXL LoRA**: Cheaper per image but more complex setup; Gemini is simpler for v1.
- **Keeping existing SVG pages**: Dilutes the focus. Pure generator is a cleaner concept.
