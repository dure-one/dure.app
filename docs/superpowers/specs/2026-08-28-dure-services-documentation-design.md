# Dure Services Documentation Restructuring Design

**Date:** 2026-08-28  
**Author:** Claude Sonnet 4.5  
**Status:** Design Approved

## Overview

This spec defines the restructuring of the dure.app documentation site from a generic project hub to a comprehensive service ecosystem documentation, organized around the Dure.one Directory Service as a central hub with connected merchant and guest tools.

## Goals

1. **Service-focused documentation** — Document 5 distinct services with clear relationships
2. **Hub-and-spoke architecture** — Present Directory as central service with connected tools
3. **Korean-first approach** — Korean as primary language, English as translation
4. **Brief, focused content** — Overview pages with external links, not comprehensive guides
5. **Production-ready** — Include CLAUDE.md for AI assistants and contributors

## User Requirements

### Five Services to Document

1. **Dure-Installer** (installer.dure.app) — Merchant tool for myCart website setup with multi-channel quotations (SMS, Telegram, Jabber, KakaoTalk)
2. **Dure-Sijang** (sijang.dure.one) — Guest cross-platform app for managing favorite merchants, supports web browsing and API modes
3. **Dure-Responder** (responder.dure.one) — Merchant workflow management tool with AI for responding to orders, quotations, cancellations
4. **Dure.one Directory Service** — Central hub where anyone can register their myCart website with verified responder phone numbers
5. **Dure.app** — This documentation site (meta-documentation in CLAUDE.md)

### Design Decisions Made

| Question | Decision | Rationale |
|----------|----------|-----------|
| Documentation depth | Brief overviews (1-2 paragraphs) | Keep docs lean, link to external resources |
| Service relationships | Hub-and-spoke (Directory central) | Directory connects all services |
| CLAUDE.md content | Comprehensive guide | Support both AI and human contributors |
| Home page layout | Directory-first approach | Hero introduces Directory, then connected services |

## Architecture

### Information Architecture (Approach 2: Categorized Structure)

```
dure.app/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts (updated navigation)
│   │   └── plugins/
│   │       └── copy-readme.js (keep existing)
│   ├── index.md (Directory-first home - Korean)
│   ├── directory.md (Directory service detail - Korean)
│   ├── merchant/
│   │   ├── installer.md (Dure-Installer - Korean)
│   │   └── responder.md (Dure-Responder - Korean)
│   ├── guest/
│   │   └── sijang.md (Dure-Sijang - Korean)
│   └── en/
│       ├── index.md (Directory-first home - English)
│       ├── directory.md (Directory service detail - English)
│       ├── merchant/
│       │   ├── installer.md (Dure-Installer - English)
│       │   └── responder.md (Dure-Responder - English)
│       └── guest/
│           └── sijang.md (Dure-Sijang - English)
├── CLAUDE.md (new - comprehensive guide)
├── package.json (keep existing)
└── README.md (keep existing)
```

### Navigation Hierarchy

**Korean (root locale):**
```
📚 두레 서비스
  └─ 디렉토리 서비스 (/directory)

🏪 판매자 도구
  ├─ Dure-Installer (/merchant/installer)
  └─ Dure-Responder (/merchant/responder)

👥 구매자 도구
  └─ Dure-Sijang (/guest/sijang)
```

**English (/en/):** Same structure with translated labels

### Key Architectural Decisions

1. **Korean-first structure** — Root locale is Korean (`locales.root`), English mirrors under `/en/`
2. **Category folders** — `/merchant/` and `/guest/` semantically group related tools
3. **Dedicated Directory page** — `/directory.md` for the central hub service
4. **5th service handling** — dure.app documented in CLAUDE.md (meta-documentation)
5. **Plugin preservation** — All VitePress plugins unchanged (mermaid, tabs, video, pdf, etc.)

## Content Structure

### Home Page Layout (Directory-First)

**Structure:**
```markdown
---
layout: home

hero:
  name: Dure.one
  text: 디렉토리 서비스
  tagline: 판매자와 구매자를 연결하는 중앙 허브
  actions:
    - Directory service (primary)
    - Merchant tools (secondary)

features:
  - Directory Service feature card

## 연결된 서비스

### 판매자 도구
- Installer (brief description)
- Responder (brief description)

### 구매자 도구
- Sijang (brief description)
```

**Why Directory-first:**
- Aligns with hub-and-spoke architecture
- Directory is the discovery mechanism for all other services
- Clear entry point for new users

### Individual Service Pages

**Template structure:**
```markdown
# Service Name

[1-2 paragraph description]

## 주요 기능

- Feature 1
- Feature 2
- Feature 3

## 연결된 서비스

- [Related Service 1](/link)
- [Related Service 2](/link)

[External link to service]{.external}
```

**Content guidelines:**
- **Brief overviews only** — No comprehensive guides
- **External links** — Point to actual service sites (installer.dure.app, etc.)
- **Related services** — Show hub-and-spoke connections
- **Consistent structure** — All service pages follow same template

### Example: Installer Page

```markdown
# Dure-Installer

판매자가 다채널 견적 제공 myCart 웹사이트를 설정할 수 있는 설치 도구입니다.

간편하게 온라인 스토어를 구축하고 SMS, 텔레그램, Jabber, 카카오톡을 통해 고객에게 실시간 견적을 제공할 수 있습니다.

## 주요 기능

- 📱 **다채널 견적** — SMS, 텔레그램, Jabber, 카카오톡 지원
- 🛒 **myCart 통합** — 원클릭 myCart 웹사이트 설정
- ⚡ **빠른 설정** — 몇 분 만에 온라인 스토어 구축

## 연결된 서비스

- [Dure.one 디렉토리](/directory) — 설치 후 디렉토리에 등록
- [Dure-Responder](/merchant/responder) — 자동 응답 워크플로우 설정

[installer.dure.app 방문하기](https://installer.dure.app){.external}
```

## VitePress Configuration

### Updates to `docs/.vitepress/config.mts`

**Changes required:**

1. **Title and description** — Update to reflect Directory-first positioning
2. **Navigation** — Add top nav for Directory, Merchant Tools, Guest Tools
3. **Sidebar** — Categorized structure with emoji icons
4. **Both locales** — Mirror changes in Korean (root) and English

**Configuration pattern:**

```typescript
export default withMermaid(defineConfig({
  title: 'Dure Services',
  description: '두레 서비스 - 디렉토리 기반 판매자-구매자 연결 플랫폼',

  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          { text: '디렉토리', link: '/directory' },
          { text: '판매자 도구', link: '/merchant/installer' },
          { text: '구매자 도구', link: '/guest/sijang' }
        ],
        sidebar: [
          {
            text: '📚 두레 서비스',
            items: [
              { text: '디렉토리 서비스', link: '/directory' }
            ]
          },
          {
            text: '🏪 판매자 도구',
            items: [
              { text: 'Dure-Installer', link: '/merchant/installer' },
              { text: 'Dure-Responder', link: '/merchant/responder' }
            ]
          },
          {
            text: '👥 구매자 도구',
            items: [
              { text: 'Dure-Sijang', link: '/guest/sijang' }
            ]
          }
        ],
        // ... existing footer, docFooter, etc.
      }
    },
    en: {
      // Mirror structure with English labels
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Directory', link: '/en/directory' },
          { text: 'Merchant Tools', link: '/en/merchant/installer' },
          { text: 'Guest Tools', link: '/en/guest/sijang' }
        ],
        sidebar: [
          {
            text: '📚 Dure Services',
            items: [
              { text: 'Directory Service', link: '/en/directory' }
            ]
          },
          {
            text: '🏪 Merchant Tools',
            items: [
              { text: 'Dure-Installer', link: '/en/merchant/installer' },
              { text: 'Dure-Responder', link: '/en/merchant/responder' }
            ]
          },
          {
            text: '👥 Guest Tools',
            items: [
              { text: 'Dure-Sijang', link: '/en/guest/sijang' }
            ]
          }
        ],
        // ... existing footer, etc.
      }
    }
  },
  
  // NO CHANGES to:
  // - vite.plugins (llmstxt, plantuml)
  // - markdown.config (all existing plugins)
  // - mermaid config
  // - themeConfig.search, socialLinks
}))
```

**Why no plugin changes:**
- Current plugin suite is comprehensive and well-configured
- No need for additional functionality
- Reduces implementation complexity
- Maintains stability

## CLAUDE.md Structure

### Comprehensive Guide for AI and Human Contributors

**Location:** `/CLAUDE.md` (project root)

**Purpose:** 
- Enable AI assistants to understand and modify documentation
- Provide human contributors with clear guidelines
- Document project structure and development workflow
- Serve as single source of truth for contribution process

**Sections:**

1. **Project Overview**
   - Purpose and tech stack
   - Hub-and-spoke architecture explanation
   - Language strategy (Korean-first)

2. **Architecture**
   - Service ecosystem diagram
   - Information architecture (folder structure)
   - Navigation hierarchy

3. **Development Setup**
   - Prerequisites
   - Local development commands
   - Build and preview

4. **Content Guidelines**
   - Brief overview requirement
   - Korean-first, then English translation
   - Maintain mirroring rule
   - External link styling

5. **Navigation Updates**
   - How to add new services
   - config.mts update process
   - Maintain categorization

6. **VitePress Configuration**
   - Key sections explanation
   - Plugin list (reference only)

7. **Deployment**
   - GitHub Pages workflow
   - Manual deployment steps

8. **Common Tasks**
   - Add new service (step-by-step)
   - Update service description
   - Change navigation structure

9. **Style Guide**
   - Tone and voice
   - Korean formality level
   - Emoji usage for hierarchy

10. **External References**
    - VitePress docs
    - Related projects (dure.one, myCart)

**Full CLAUDE.md template provided in design section 4 above.**

## Migration Strategy

### Transition from Current to New Structure

**Current state:**
- Generic dure.one + myCart introduction
- 2 feature cards on home page
- Flat structure (`docs/index.md`, `docs/en/index.md`, `docs/readme.md`)

**Migration phases:**

### Phase 1: Create New Structure (Additive)
**Actions:**
- Create `docs/merchant/` and `docs/guest/` directories
- Create `docs/en/merchant/` and `docs/en/guest/` directories
- Write new service pages (Korean + English)
- Create `docs/directory.md` and `docs/en/directory.md`
- Update `docs/.vitepress/config.mts` with new navigation

**Outcome:** New structure exists alongside old content

### Phase 2: Replace Home Page (Destructive)
**Actions:**
- Replace `docs/index.md` with Directory-first layout
- Replace `docs/en/index.md` with English version
- Remove old dure.one/myCart feature cards

**Outcome:** Home page now reflects new architecture

### Phase 3: Add CLAUDE.md
**Actions:**
- Create `/CLAUDE.md` at project root
- Commit with descriptive message

**Outcome:** Production-ready documentation site

### Content Preservation

**Keep unchanged:**
- ✅ VitePress plugin configuration
- ✅ GitHub workflows (`.github/workflows/deploy.yml`)
- ✅ `package.json` dependencies
- ✅ Social links (GitHub)
- ✅ MIT license footer
- ✅ Existing `docs/.vitepress/plugins/copy-readme.js`

**Replace completely:**
- ❌ Home page hero and features
- ❌ All current markdown content
- ❌ Navigation structure
- ❌ Sidebar configuration

### Git Commit Strategy

**Recommended commits:**
```bash
# Commit 1: Structure
git commit -m "feat: add merchant and guest service documentation structure

- Create merchant/ and guest/ directories
- Add Korean and English service pages
- Maintain i18n mirroring
"

# Commit 2: Home page
git commit -m "feat: replace home page with Directory-first layout

- Directory Service as hero
- Connected services section
- Remove old dure.one/myCart feature cards
"

# Commit 3: Navigation
git commit -m "feat: update VitePress navigation for service categories

- Categorized sidebar (Directory / Merchant / Guest)
- Updated nav links
- Both Korean and English locales
"

# Commit 4: CLAUDE.md
git commit -m "docs: add comprehensive CLAUDE.md for contributors

- Project overview and architecture
- Development setup instructions
- Content contribution guidelines
- Common tasks reference
"
```

### Rollback Plan

**If issues arise:**
- Git history preserved (can `git revert` individual commits)
- Current content is 3 simple files (easy to restore)
- No database migrations or breaking changes
- No external dependencies changed

**Rollback procedure:**
```bash
# Revert specific commit
git revert <commit-hash>

# Or reset to before changes
git reset --hard <commit-before-changes>
git push --force
```

## Success Criteria

### Functional Requirements

- ✅ 5 services documented (Installer, Sijang, Responder, Directory, dure.app)
- ✅ Korean primary, English translations complete
- ✅ Hub-and-spoke architecture visible in navigation
- ✅ All internal links working
- ✅ All external links working
- ✅ CLAUDE.md exists and comprehensive

### Quality Requirements

- ✅ VitePress builds without errors
- ✅ All pages load correctly in dev and production
- ✅ Navigation works on mobile and desktop
- ✅ Search includes all new pages
- ✅ GitHub Pages deploys successfully

### Content Requirements

- ✅ Each service page follows template structure
- ✅ Korean and English content matches (mirrored)
- ✅ External links use `{.external}` class
- ✅ Related services linked correctly
- ✅ Consistent emoji usage in navigation

## Open Questions

None — all design decisions validated with user during brainstorming.

## Next Steps

1. Invoke `writing-plans` skill to create detailed implementation plan
2. Plan will break down into specific file creation tasks
3. Each task will include Korean and English content
4. Self-review for placeholders, contradictions, ambiguity
5. User approval before implementation

## References

- **VitePress documentation:** https://vitepress.dev/
- **Current config:** `docs/.vitepress/config.mts`
- **Existing home page:** `docs/index.md`
- **User requirements:** Provided in initial request

## Design Approval

**All design sections approved by user:**
1. ✅ Information Architecture
2. ✅ Content Structure
3. ✅ VitePress Configuration
4. ✅ CLAUDE.md Structure
5. ✅ Migration Strategy

**Ready for implementation planning.**
