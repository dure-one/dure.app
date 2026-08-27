# CLAUDE.md - Dure.app Documentation Site

## Project Overview

**Purpose:** Documentation site for the Dure service ecosystem  
**Tech Stack:** VitePress 2.0, TypeScript, Markdown  
**Languages:** Korean (primary), English (translation)  
**Deployment:** GitHub Pages via `.github/workflows/deploy.yml`

This site documents 5 services in the Dure ecosystem using a hub-and-spoke architecture with the Directory Service as the central hub.

## Architecture

### Service Ecosystem (Hub-and-Spoke)

**Central hub:** Dure.one Directory Service

**Connected services:**
- **Merchant Tools:** Installer, Responder
- **Guest Tools:** Sijang
- **Meta:** dure.app (this documentation site)

### Information Architecture

```
docs/
├── .vitepress/
│   ├── config.mts           # VitePress configuration
│   └── plugins/
│       └── copy-readme.js   # README copy plugin
├── index.md                 # Home page (Korean)
├── directory.md             # Directory Service (Korean)
├── merchant/
│   ├── installer.md         # Dure-Installer (Korean)
│   └── responder.md         # Dure-Responder (Korean)
├── guest/
│   └── sijang.md            # Dure-Sijang (Korean)
└── en/                      # English translations (mirrors Korean structure)
    ├── index.md
    ├── directory.md
    ├── merchant/
    │   ├── installer.md
    │   └── responder.md
    └── guest/
        └── sijang.md
```

## Development Setup

### Prerequisites
- Node.js 18 or higher
- npm or pnpm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Visit http://localhost:5173
```

### Build and Preview

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Content Guidelines

### Brief Overviews Only

All service pages are **brief overviews** (1-2 paragraphs) with links to external service sites. This is not comprehensive documentation.

### Korean-First Approach

1. Write or edit the Korean version first
2. Translate to English and place under `/en/` with identical structure
3. All Korean pages MUST have English equivalents

### Maintain Mirroring

```
docs/merchant/installer.md  →  docs/en/merchant/installer.md
docs/guest/sijang.md        →  docs/en/guest/sijang.md
docs/directory.md           →  docs/en/directory.md
```

### External Link Styling

Use `{.external}` class for links to external services:

```markdown
[installer.dure.app 방문하기](https://installer.dure.app){.external}
```

## File Naming Conventions

- **Lowercase, hyphenated:** `merchant/installer.md`
- **Mirror structure:** `docs/merchant/` → `docs/en/merchant/`
- **No spaces:** Use hyphens instead

## Frontmatter Template

Basic page frontmatter (optional):

```yaml
---
title: Service Name
description: Brief description for SEO
---
```

Home page uses `layout: home` frontmatter for VitePress home layout.

## Navigation Updates

### Adding a New Service

**Step 1:** Create Korean markdown file in appropriate category folder

```bash
# Example: new merchant tool
touch docs/merchant/new-tool.md
```

**Step 2:** Create English translation under `/en/`

```bash
touch docs/en/merchant/new-tool.md
```

**Step 3:** Update `docs/.vitepress/config.mts`

Add to both `locales.root.themeConfig.nav` and `locales.en.themeConfig.nav`:

```typescript
// Korean nav
{ text: 'New Tool', link: '/merchant/new-tool' }

// English nav
{ text: 'New Tool', link: '/en/merchant/new-tool' }
```

Add to both `locales.root.themeConfig.sidebar` and `locales.en.themeConfig.sidebar`:

```typescript
// Under appropriate category (Merchant/Guest)
{ text: 'New Tool', link: '/merchant/new-tool' }  // Korean
{ text: 'New Tool', link: '/en/merchant/new-tool' }  // English
```

**Step 4:** Maintain categorization (Directory / Merchant Tools / Guest Tools)

### Updating Service Description

1. Edit `docs/[category]/[service-name].md` (Korean)
2. Edit `docs/en/[category]/[service-name].md` (English)
3. No config changes needed

### Changing Navigation Structure

1. Edit `docs/.vitepress/config.mts`
2. Update both `locales.root` and `locales.en`
3. Test locally with `npm run docs:dev`

## VitePress Configuration

**Location:** `docs/.vitepress/config.mts`

**Key sections:**

- `title` — Site title
- `description` — Site description
- `locales.root` — Korean (default locale)
- `locales.en` — English translation
- `themeConfig.nav` — Top navigation bar
- `themeConfig.sidebar` — Left sidebar (categorized)

**Plugins enabled:**

- Mermaid diagrams
- PlantUML
- Tabs
- Video (artplayer, YouTube, Bilibili, AcFun)
- PDF embedding
- QR codes
- Steps
- Collapse sections
- Mark/highlight text

**Do not modify plugin configuration** unless absolutely necessary. All plugins are already configured and working.

## Deployment

**Platform:** GitHub Pages  
**Workflow:** `.github/workflows/deploy.yml` (auto-deploys on push to main branch)  
**URL:** https://[username].github.io/dure.app/ (or custom domain if configured)

### Manual Deployment

```bash
# Build static site
npm run docs:build

# Output directory
ls -la docs/.vitepress/dist/

# Deploy dist/ to your hosting provider
```

## Common Tasks

### Add a New Service

```bash
# 1. Create Korean page
cat > docs/merchant/new-service.md <<'EOF'
# New Service

Brief description in Korean.

## 주요 기능

- Feature 1
- Feature 2

## 연결된 서비스

- [Dure.one 디렉토리](/directory)

[new-service.dure.app 방문하기](https://new-service.dure.app){.external}
EOF

# 2. Create English page
cat > docs/en/merchant/new-service.md <<'EOF'
# New Service

Brief description in English.

## Key Features

- Feature 1
- Feature 2

## Connected Services

- [Dure.one Directory](/en/directory)

[Visit new-service.dure.app](https://new-service.dure.app){.external}
EOF

# 3. Update config.mts nav and sidebar (both locales)
# 4. Test locally: npm run docs:dev
# 5. Commit changes
```

### Update Service Description

```bash
# 1. Edit Korean version
vim docs/merchant/installer.md

# 2. Edit English version
vim docs/en/merchant/installer.md

# 3. Test locally
npm run docs:dev

# 4. Commit changes
git add docs/merchant/installer.md docs/en/merchant/installer.md
git commit -m "docs: update Installer service description"
```

### Change Navigation Structure

```bash
# 1. Edit config
vim docs/.vitepress/config.mts

# 2. Update both locales.root and locales.en
# 3. Test locally
npm run docs:dev

# 4. Commit changes
git add docs/.vitepress/config.mts
git commit -m "feat: update navigation structure"
```

## Style Guide

### Tone

- **Korean:** Formal but approachable (존댓말)
- **English:** Professional and straightforward
- **Both:** Clear, concise, helpful

### Korean Formality

Use polite form (존댓말) for all Korean content:
- ✅ "설정할 수 있습니다"
- ❌ "설정할 수 있어"

### Emoji Usage

Use emojis for visual hierarchy in navigation and headings:

- 📚 — Directory/Services
- 🏪 — Merchant Tools
- 👥 — Guest/Customer Tools
- 🌐 — Web/Online
- 🛒 — Shopping/Commerce
- 📱 — Multi-channel/Mobile
- ⚡ — Fast/Quick
- 🔧 — Configuration/Setup

Do not overuse emojis in body text.

## External References

- **VitePress documentation:** https://vitepress.dev/
- **VitePress configuration:** https://vitepress.dev/reference/site-config
- **VitePress theme:** https://vitepress.dev/reference/default-theme-config
- **Dure.one:** https://dure.one
- **myCart:** https://github.com/shurco/mycart

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf docs/.vitepress/dist docs/.vitepress/cache
npm run docs:build
```

### Dev Server Won't Start

```bash
# Check for port conflicts
lsof -i :5173

# Kill conflicting process or use different port
npm run docs:dev -- --port 5174
```

### Broken Links

```bash
# Check all markdown links
npx vitepress check-links docs
```

## Contributing

1. Create a feature branch
2. Make changes following this guide
3. Test locally with `npm run docs:dev`
4. Build to verify: `npm run docs:build`
5. Commit with clear message
6. Push and create pull request

## License

MIT License - see LICENSE file for details
