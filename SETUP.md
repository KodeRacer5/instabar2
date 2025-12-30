# Project Setup Guide

## Project Evolution Notes (December 2024)

> **This section documents changes made after initial template setup. Original structure preserved below.**

### Additional Dependencies Installed

```bash
npm install motion ogl gsap                    # Animation libraries
npm install react-hook-form @hookform/resolvers # Form handling (optional)
```

### Additional Directories Created

```
src/components/ReactBits/     # Custom animated components
├── Backgrounds/Particles.tsx  # Particle background effect
├── Cards/SpotlightCard.tsx    # Glassmorphism card with spotlight
├── Cards/TiltedCard.tsx       # 3D tilt effect card
├── Cards/CardSwap.tsx         # Flip/swap card animation
├── Navigation/Dock.tsx        # macOS-style dock navigation
└── Animations/ScrollReveal.tsx # Scroll-triggered animations
```

### Color Palette (Atumnus)

Applied to `app/globals.css` and all components:
| Element | Hex |
|---------|-----|
| Background | `#000000` |
| Primary | `#3b82f6` (blue-500) |
| Secondary | `#8b5cf6` (purple-500) |
| Accent | `#22d3ee` (cyan-400) |

### MCP Tools Used

| Tool              | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| Desktop Commander | File operations, process execution                |
| ReactBits MCP     | Component retrieval via `reactbits:get_component` |

### Key Implementation Patterns

- All pages use `'use client'` directive for motion animations
- Particles background on all pages with fixed positioning
- `pt-24` padding on main elements for DockNavbar clearance
- SpotlightCard with `spotlightColor="rgba(59, 130, 246, 0.3)"` for glow effect

---

## Prerequisites (Install Once)

### Required: Node.js

Download and install from: https://nodejs.org  
Recommended version: **v20 LTS** (enforced via `.nvmrc`)

Verify installation:

```bash
node --version   # Should show v18+ or v20+
npm --version    # Should show 9+ or 10+
```

If using nvm:

```bash
nvm use    # Uses version from .nvmrc
```

### Optional: pnpm (Faster Package Manager)

```bash
npm install -g pnpm
```

---

## Quick Start

```bash
# 1. Copy .env.example to .env
cp .env.example .env

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

---

## Available Scripts

| Command                 | Description                               |
| ----------------------- | ----------------------------------------- |
| `npm run dev`           | Start development server (with Turbopack) |
| `npm run build`         | Build for production                      |
| `npm run start`         | Start production server                   |
| `npm run lint`          | Check for linting errors                  |
| `npm run lint:fix`      | Auto-fix linting errors                   |
| `npm run format`        | Format all files with Prettier            |
| `npm run format:check`  | Check formatting without changes          |
| `npm run type-check`    | Check TypeScript types                    |
| `npm run test`          | Run tests in watch mode                   |
| `npm run test:run`      | Run tests once                            |
| `npm run test:coverage` | Run tests with coverage report            |
| `npm run audit`         | Check for security vulnerabilities        |
| `npm run audit:fix`     | Auto-fix security vulnerabilities         |

---

## Tech Stack

| Tool         | Version | Purpose                 |
| ------------ | ------- | ----------------------- |
| Next.js      | 16.x    | React framework         |
| React        | 19.x    | UI library              |
| TypeScript   | 5.x     | Type safety             |
| Tailwind CSS | 4.x     | Styling                 |
| ESLint       | 9.x     | Code linting + security |
| Prettier     | 3.x     | Code formatting         |
| Vitest       | 2.x     | Testing                 |
| Husky        | 9.x     | Git hooks               |
| Zod          | 3.x     | Schema validation       |
| Radix UI     | Latest  | Accessible components   |
| Lucide       | Latest  | Icons                   |

---

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── health/        # Health check endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (Hero, Features, etc.)
│   └── ui/                # Reusable UI components (shadcn/ui)
├── config/
│   └── site.ts            # Site configuration
├── lib/
│   ├── utils.ts           # Utility functions (cn, etc.)
│   ├── errors.ts          # Custom error classes
│   └── env.ts             # Environment validation
├── tests/
│   ├── setup.ts           # Test setup file
│   └── example.test.ts    # Example tests
├── public/                # Static assets
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions CI
├── .husky/
│   └── pre-commit         # Git pre-commit hook
├── .vscode/               # VS Code settings
├── .env.example           # Environment template
├── .nvmrc                 # Node version
├── .eslintrc.json         # ESLint config (with security)
├── .prettierrc            # Prettier config
├── Dockerfile             # Docker multi-stage build
├── .dockerignore          # Docker ignore file
├── vitest.config.ts       # Vitest config
├── package.json           # Dependencies & scripts
└── tsconfig.json          # TypeScript config
```

---

## Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in required values
3. **Never commit `.env` to git**

Environment variables are validated at startup using Zod (`lib/env.ts`).

---

## Git Hooks (Husky)

Pre-commit hook automatically runs:

- ESLint (with auto-fix)
- Prettier (with auto-fix)

To skip hooks (not recommended):

```bash
git commit --no-verify
```

---

## Testing

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run with coverage
npm run test:coverage
```

Tests use Vitest + React Testing Library.

---

## Docker

### Build image:

```bash
docker build -t my-app .
```

### Run container:

```bash
docker run -p 3000:3000 my-app
```

### Docker Compose (create docker-compose.yml):

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
```

---

## CI/CD (GitHub Actions)

The included workflow (`.github/workflows/ci.yml`) runs:

1. **Quality**: Lint, format check, type check, tests
2. **Security**: npm audit
3. **Build**: Production build

---

## Error Handling

Custom error classes in `lib/errors.ts`:

```typescript
import { NotFoundError, ValidationError } from '@/lib/errors';

// In API routes
throw new NotFoundError('User not found');
throw new ValidationError('Invalid email format');
```

---

## Customization Checklist

### Identity & Branding

- [ ] Update `config/site.ts` with project info
- [ ] Update `package.json` name and description
- [ ] Replace favicon in `public/favicon.ico`
- [ ] Define color palette in CSS/Tailwind

### Environment

- [ ] Copy `.env.example` to `.env`
- [ ] Update `lib/env.ts` with your env vars
- [ ] Add secrets to production environment

### Content

- [ ] Update Hero section text
- [ ] Update Features/Items content
- [ ] Update FAQ content
- [ ] Update Footer links

### Technical

- [ ] Run `npm run type-check` - fix errors
- [ ] Run `npm run lint` - fix warnings
- [ ] Run `npm run test:run` - ensure tests pass
- [ ] Run `npm run audit` - fix vulnerabilities

### Pre-Launch

- [ ] Update meta tags for SEO
- [ ] Add Open Graph images
- [ ] Set up analytics
- [ ] Configure deployment

---

## VS Code Setup

Recommended extensions are auto-suggested via `.vscode/extensions.json`.

Settings in `.vscode/settings.json`:

- Format on save
- ESLint auto-fix
- Tailwind CSS IntelliSense

---

## Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Environment validation fails

```bash
# Check .env against .env.example
# Ensure all required vars are set
```

### Husky hooks not running

```bash
npm run prepare
```

### TypeScript errors

```bash
npm run type-check
```

### Port already in use

```bash
npm run dev -- -p 3001
```

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Vitest Docs](https://vitest.dev/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
