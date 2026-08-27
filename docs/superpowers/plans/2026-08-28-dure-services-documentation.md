# Dure Services Documentation Restructuring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure dure.app documentation from generic project hub to service ecosystem with Directory as central hub, 5 services documented in Korean (primary) and English (translation).

**Architecture:** Hub-and-spoke documentation structure with categorized navigation (Directory / Merchant Tools / Guest Tools). VitePress 2.0 with existing i18n support, organized in `/merchant/` and `/guest/` folders for semantic grouping.

**Tech Stack:** VitePress 2.0, Markdown, TypeScript (config), Korean/English i18n

**Spec:** `docs/superpowers/specs/2026-08-28-dure-services-documentation-design.md`

## Global Constraints

- Korean as primary language (root locale), English as translation (/en/)
- Brief overview pages only (1-2 paragraphs per service)
- All Korean pages must have English mirror under /en/
- External links use `{.external}` class
- Maintain all existing VitePress plugins (no changes)
- Preserve existing GitHub workflow, package.json, social links
- Consistent emoji usage in navigation: 📚 (services), 🏪 (merchant), 👥 (guest)

---

## File Structure

**Create:**
- `docs/merchant/` — Merchant tools category
- `docs/merchant/installer.md` — Dure-Installer documentation (Korean)
- `docs/merchant/responder.md` — Dure-Responder documentation (Korean)
- `docs/guest/` — Guest tools category
- `docs/guest/sijang.md` — Dure-Sijang documentation (Korean)
- `docs/directory.md` — Directory service documentation (Korean)
- `docs/en/merchant/` — Merchant tools category (English)
- `docs/en/merchant/installer.md` — Dure-Installer documentation (English)
- `docs/en/merchant/responder.md` — Dure-Responder documentation (English)
- `docs/en/guest/` — Guest tools category (English)
- `docs/en/guest/sijang.md` — Dure-Sijang documentation (English)
- `docs/en/directory.md` — Directory service documentation (English)
- `CLAUDE.md` — Comprehensive contributor guide

**Modify:**
- `docs/.vitepress/config.mts` — Update navigation and sidebar for categorized structure
- `docs/index.md` — Replace with Directory-first home page (Korean)
- `docs/en/index.md` — Replace with Directory-first home page (English)

---

### Task 1: Create Directory Structure

**Files:**
- Create: `docs/merchant/` (directory)
- Create: `docs/guest/` (directory)
- Create: `docs/en/merchant/` (directory)
- Create: `docs/en/guest/` (directory)

**Interfaces:**
- Consumes: Existing `docs/` and `docs/en/` directories
- Produces: Category folders for semantic grouping

- [ ] **Step 1: Create merchant directories**

```bash
mkdir -p docs/merchant
mkdir -p docs/en/merchant
```

Expected: Directories created successfully

- [ ] **Step 2: Create guest directories**

```bash
mkdir -p docs/guest
mkdir -p docs/en/guest
```

Expected: Directories created successfully

- [ ] **Step 3: Verify directory structure**

```bash
ls -la docs/ | grep -E "merchant|guest"
ls -la docs/en/ | grep -E "merchant|guest"
```

Expected: All 4 directories exist

- [ ] **Step 4: Commit directory structure**

```bash
git add docs/merchant/.gitkeep docs/guest/.gitkeep docs/en/merchant/.gitkeep docs/en/guest/.gitkeep
git commit -m "$(cat <<'EOF'
feat: add merchant and guest category directories

- Create docs/merchant/ for merchant tools
- Create docs/guest/ for guest tools
- Mirror structure in docs/en/ for English

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 2: Create Directory Service Pages

**Files:**
- Create: `docs/directory.md` (Korean)
- Create: `docs/en/directory.md` (English)

**Interfaces:**
- Consumes: None (foundational content)
- Produces: Directory service documentation referenced by home page and service pages

- [ ] **Step 1: Create Korean Directory page**

Create `docs/directory.md`:

```markdown
# Dure.one 디렉토리 서비스

Dure.one 디렉토리는 판매자와 구매자를 연결하는 중앙 허브입니다.

누구나 자신의 myCart 웹사이트를 응답자 전화번호와 함께 등록할 수 있으며, 모든 등록은 정부 데이터 제공자를 통해 검증됩니다. 구매자는 디렉토리를 통해 신뢰할 수 있는 판매자를 찾고, 판매자는 더 많은 고객에게 도달할 수 있습니다.

## 주요 기능

- 🏪 **판매자 등록** — myCart 웹사이트와 응답자 전화번호 등록
- ✅ **정부 검증** — 정부 데이터 제공자를 통한 신원 확인
- 🔍 **검색 기능** — 상품, 서비스, 지역별 판매자 검색
- 🔒 **신뢰성** — 검증된 판매자만 등록 가능

## 연결된 서비스

### 판매자 도구
- [Dure-Installer](/merchant/installer) — myCart 웹사이트 설치 및 설정
- [Dure-Responder](/merchant/responder) — 고객 응답 워크플로우 관리

### 구매자 도구
- [Dure-Sijang](/guest/sijang) — 관심 판매자 관리 및 상품 검색

[dure.one 방문하기](https://dure.one){.external}
```

- [ ] **Step 2: Create English Directory page**

Create `docs/en/directory.md`:

```markdown
# Dure.one Directory Service

The Dure.one Directory is the central hub connecting merchants and customers.

Anyone can register their myCart website with a verified responder phone number. All registrations are verified through government data providers. Customers can discover trusted merchants through the directory, while merchants can reach more potential customers.

## Key Features

- 🏪 **Merchant Registration** — Register myCart website with responder phone number
- ✅ **Government Verification** — Identity verification through government data providers
- 🔍 **Search Functionality** — Find merchants by products, services, or location
- 🔒 **Trust & Safety** — Only verified merchants can register

## Connected Services

### Merchant Tools
- [Dure-Installer](/en/merchant/installer) — Install and configure myCart websites
- [Dure-Responder](/en/merchant/responder) — Manage customer response workflows

### Customer Tools
- [Dure-Sijang](/en/guest/sijang) — Manage favorite merchants and search products

[Visit dure.one](https://dure.one){.external}
```

- [ ] **Step 3: Verify pages created**

```bash
ls -la docs/directory.md docs/en/directory.md
```

Expected: Both files exist

- [ ] **Step 4: Commit Directory service pages**

```bash
git add docs/directory.md docs/en/directory.md
git commit -m "$(cat <<'EOF'
feat: add Directory service documentation pages

- Korean version at docs/directory.md
- English version at docs/en/directory.md
- Hub-and-spoke architecture with connected services
- Government verification highlight

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 3: Create Merchant Tool Pages

**Files:**
- Create: `docs/merchant/installer.md` (Korean)
- Create: `docs/en/merchant/installer.md` (English)
- Create: `docs/merchant/responder.md` (Korean)
- Create: `docs/en/merchant/responder.md` (English)

**Interfaces:**
- Consumes: `docs/directory.md` and `docs/en/directory.md` (for cross-references)
- Produces: Merchant tool documentation referenced by home page and Directory page

- [ ] **Step 1: Create Korean Installer page**

Create `docs/merchant/installer.md`:

```markdown
# Dure-Installer

판매자가 다채널 견적 제공 myCart 웹사이트를 설정할 수 있는 설치 도구입니다.

간편하게 온라인 스토어를 구축하고 SMS, 텔레그램, Jabber, 카카오톡을 통해 고객에게 실시간 견적을 제공할 수 있습니다. 복잡한 설정 없이 몇 분 만에 전자상거래를 시작할 수 있습니다.

## 주요 기능

- 📱 **다채널 견적** — SMS, 텔레그램, Jabber, 카카오톡 지원
- 🛒 **myCart 통합** — 원클릭 myCart 웹사이트 설정
- ⚡ **빠른 설정** — 몇 분 만에 온라인 스토어 구축
- 🔧 **맞춤 설정** — 브랜딩 및 상품 카탈로그 커스터마이징

## 연결된 서비스

- [Dure.one 디렉토리](/directory) — 설치 후 디렉토리에 등록하여 고객 유입
- [Dure-Responder](/merchant/responder) — 자동 응답 워크플로우 설정

[installer.dure.app 방문하기](https://installer.dure.app){.external}
```

- [ ] **Step 2: Create English Installer page**

Create `docs/en/merchant/installer.md`:

```markdown
# Dure-Installer

An installation tool for merchants to set up myCart websites with multi-channel quotation capabilities.

Easily build an online store and provide real-time quotations to customers through SMS, Telegram, Jabber, and KakaoTalk. Start e-commerce in minutes without complex configuration.

## Key Features

- 📱 **Multi-Channel Quotations** — Support for SMS, Telegram, Jabber, KakaoTalk
- 🛒 **myCart Integration** — One-click myCart website setup
- ⚡ **Quick Setup** — Launch your online store in minutes
- 🔧 **Customization** — Brand and product catalog customization

## Connected Services

- [Dure.one Directory](/en/directory) — Register in directory after installation to attract customers
- [Dure-Responder](/en/merchant/responder) — Configure automated response workflows

[Visit installer.dure.app](https://installer.dure.app){.external}
```

- [ ] **Step 3: Create Korean Responder page**

Create `docs/merchant/responder.md`:

```markdown
# Dure-Responder

판매자가 주문, 견적, 취소 등 다양한 고객 요청에 대한 응답 워크플로우를 관리할 수 있는 크로스 플랫폼 애플리케이션입니다.

AI를 활용하여 고객의 요구사항을 이해하고 적절한 응답을 자동으로 생성합니다. 판매자는 워크플로우를 직접 수정하여 비즈니스 프로세스에 맞게 조정할 수 있습니다.

## 주요 기능

- 🤖 **AI 기반 응답** — 고객 요청을 자동으로 이해하고 응답 생성
- 🔄 **워크플로우 관리** — 주문, 견적, 취소 프로세스 커스터마이징
- 💬 **다채널 통합** — SMS, 텔레그램, Jabber, 카카오톡 통합 응답
- 📊 **분석 대시보드** — 고객 요청 및 응답 통계 확인

## 연결된 서비스

- [Dure.one 디렉토리](/directory) — 디렉토리에 등록된 응답자 전화번호 관리
- [Dure-Installer](/merchant/installer) — Installer로 설정한 웹사이트와 연동

[responder.dure.one 방문하기](https://responder.dure.one){.external}
```

- [ ] **Step 4: Create English Responder page**

Create `docs/en/merchant/responder.md`:

```markdown
# Dure-Responder

A cross-platform application for merchants to manage response workflows for customer requests including orders, quotations, and cancellations.

Leverages AI to understand customer needs and automatically generate appropriate responses. Merchants can customize workflows to match their business processes.

## Key Features

- 🤖 **AI-Powered Responses** — Automatically understand and respond to customer requests
- 🔄 **Workflow Management** — Customize order, quotation, and cancellation processes
- 💬 **Multi-Channel Integration** — Unified responses across SMS, Telegram, Jabber, KakaoTalk
- 📊 **Analytics Dashboard** — View customer request and response statistics

## Connected Services

- [Dure.one Directory](/en/directory) — Manage responder phone numbers registered in directory
- [Dure-Installer](/en/merchant/installer) — Integrate with websites configured via Installer

[Visit responder.dure.one](https://responder.dure.one){.external}
```

- [ ] **Step 5: Verify merchant pages created**

```bash
ls -la docs/merchant/installer.md docs/merchant/responder.md
ls -la docs/en/merchant/installer.md docs/en/merchant/responder.md
```

Expected: All 4 files exist

- [ ] **Step 6: Commit merchant tool pages**

```bash
git add docs/merchant/ docs/en/merchant/
git commit -m "$(cat <<'EOF'
feat: add merchant tool documentation pages

- Dure-Installer: multi-channel quotation setup
- Dure-Responder: AI-powered workflow management
- Korean and English versions with cross-references
- Links to external service sites

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 4: Create Guest Tool Page

**Files:**
- Create: `docs/guest/sijang.md` (Korean)
- Create: `docs/en/guest/sijang.md` (English)

**Interfaces:**
- Consumes: `docs/directory.md` and `docs/en/directory.md` (for cross-references)
- Produces: Guest tool documentation referenced by home page and Directory page

- [ ] **Step 1: Create Korean Sijang page**

Create `docs/guest/sijang.md`:

```markdown
# Dure-Sijang

구매자가 관심 판매자를 방문하고 관리할 수 있는 크로스 플랫폼 애플리케이션입니다.

웹 브라우징 모드와 API 모드를 모두 지원하여 다양한 환경에서 사용할 수 있습니다. Dure.one 디렉토리 서비스를 통해 판매자의 상품과 서비스를 검색하고, 관심 판매자를 즐겨찾기에 추가하여 쉽게 관리할 수 있습니다.

## 주요 기능

- 🛍️ **크로스 플랫폼** — 웹, 모바일, 데스크톱 지원
- 🌐 **웹 브라우징 모드** — 일반 웹 브라우저처럼 사용
- 🔌 **API 모드** — 프로그래밍 방식 상품 검색 및 주문
- ⭐ **즐겨찾기 관리** — 관심 판매자를 저장하고 빠르게 접근
- 🔍 **통합 검색** — 디렉토리 서비스를 통한 상품 및 판매자 검색

## 연결된 서비스

- [Dure.one 디렉토리](/directory) — 판매자 검색 및 발견
- [Dure-Installer](/merchant/installer) — 판매자가 설정한 웹사이트에 접속

[sijang.dure.one 방문하기](https://sijang.dure.one){.external}
```

- [ ] **Step 2: Create English Sijang page**

Create `docs/en/guest/sijang.md`:

```markdown
# Dure-Sijang

A cross-platform application for customers to visit and manage their favorite merchants.

Supports both web browsing mode and API mode for use in various environments. Search for merchant products and services through the Dure.one directory service, and add favorite merchants to bookmarks for easy management.

## Key Features

- 🛍️ **Cross-Platform** — Web, mobile, and desktop support
- 🌐 **Web Browsing Mode** — Use like a regular web browser
- 🔌 **API Mode** — Programmatic product search and ordering
- ⭐ **Favorites Management** — Save and quickly access favorite merchants
- 🔍 **Unified Search** — Product and merchant search through directory service

## Connected Services

- [Dure.one Directory](/en/directory) — Discover and search for merchants
- [Dure-Installer](/en/merchant/installer) — Access websites configured by merchants

[Visit sijang.dure.one](https://sijang.dure.one){.external}
```

- [ ] **Step 3: Verify guest pages created**

```bash
ls -la docs/guest/sijang.md docs/en/guest/sijang.md
```

Expected: Both files exist

- [ ] **Step 4: Commit guest tool page**

```bash
git add docs/guest/ docs/en/guest/
git commit -m "$(cat <<'EOF'
feat: add guest tool documentation page

- Dure-Sijang: cross-platform merchant discovery app
- Web browsing and API modes
- Korean and English versions with cross-references
- Links to external service site

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 5: Update VitePress Configuration

**Files:**
- Modify: `docs/.vitepress/config.mts`

**Interfaces:**
- Consumes: All service pages created in Tasks 2-4
- Produces: Updated navigation and sidebar configuration for categorized structure

- [ ] **Step 1: Read current config to verify structure**

```bash
head -90 docs/.vitepress/config.mts | tail -50
```

Expected: See current locales structure

- [ ] **Step 2: Back up current config**

```bash
cp docs/.vitepress/config.mts docs/.vitepress/config.mts.backup
```

Expected: Backup created

- [ ] **Step 3: Update title and description (lines 22-23)**

In `docs/.vitepress/config.mts`, replace:
```typescript
  title: 'dure.app',
  description: '듀레 앱 - dure.one과 myCart 프로젝트 소개',
```

With:
```typescript
  title: 'Dure Services',
  description: '듀레 서비스 - 디렉토리 기반 판매자-구매자 연결 플랫폼',
```

- [ ] **Step 4: Update Korean nav (lines ~35-39)**

Replace Korean nav array with:
```typescript
        nav: [
          { text: '홈', link: '/' },
          { text: '디렉토리', link: '/directory' },
          { text: '판매자 도구', link: '/merchant/installer' },
          { text: '구매자 도구', link: '/guest/sijang' }
        ],
```

- [ ] **Step 5: Update Korean sidebar (lines ~40-48)**

Replace Korean sidebar array with:
```typescript
        sidebar: [
          {
            text: '📚 듀레 서비스',
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
```

- [ ] **Step 6: Update English nav (lines ~69-73)**

Replace English nav array with:
```typescript
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Directory', link: '/en/directory' },
          { text: 'Merchant Tools', link: '/en/merchant/installer' },
          { text: 'Guest Tools', link: '/en/guest/sijang' }
        ],
```

- [ ] **Step 7: Update English sidebar (lines ~74-82)**

Replace English sidebar array with:
```typescript
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
```

- [ ] **Step 8: Verify config builds successfully**

```bash
npm run docs:build
```

Expected: Build succeeds with no errors

- [ ] **Step 9: Remove backup if build successful**

```bash
rm docs/.vitepress/config.mts.backup
```

Expected: Backup removed

- [ ] **Step 10: Commit VitePress configuration**

```bash
git add docs/.vitepress/config.mts
git commit -m "$(cat <<'EOF'
feat: update VitePress navigation for service categories

- Update title and description for Directory focus
- Categorized sidebar: Directory / Merchant Tools / Guest Tools
- Updated nav links for all services
- Both Korean and English locales
- Emoji icons for visual hierarchy (📚 🏪 👥)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 6: Replace Home Pages

**Files:**
- Modify: `docs/index.md` (Korean home page)
- Modify: `docs/en/index.md` (English home page)

**Interfaces:**
- Consumes: All service pages and updated navigation from Task 5
- Produces: Directory-first home pages with connected services section

- [ ] **Step 1: Back up current home pages**

```bash
cp docs/index.md docs/index.md.backup
cp docs/en/index.md docs/en/index.md.backup
```

Expected: Backups created

- [ ] **Step 2: Replace Korean home page**

Replace entire content of `docs/index.md`:

```markdown
---
layout: home

hero:
  name: Dure.one
  text: 디렉토리 서비스
  tagline: 판매자와 구매자를 연결하는 중앙 허브
  actions:
    - theme: brand
      text: 디렉토리 서비스 알아보기
      link: /directory
    - theme: alt
      text: 판매자 도구
      link: /merchant/installer

features:
  - icon: 🌐
    title: Dure.one 디렉토리 서비스
    details: 누구나 자신의 myCart 웹사이트를 응답자 전화번호와 함께 등록할 수 있습니다. 정부 데이터 제공자를 통해 검증됩니다.
    link: /directory
    linkText: 자세히 보기
---

## 연결된 서비스

Dure.one 디렉토리를 중심으로 판매자와 구매자를 위한 다양한 도구가 연결되어 있습니다.

### 🏪 판매자 도구

**[Dure-Installer](/merchant/installer)** — SMS, 텔레그램, Jabber, 카카오톡을 통한 간편 견적 제공 myCart 웹사이트 설정

**[Dure-Responder](/merchant/responder)** — 주문, 견적, 취소 등 다양한 사용자 요청에 응답하는 워크플로우 관리. AI를 활용하여 고객의 요구사항을 자동으로 처리합니다.

### 👥 구매자 도구

**[Dure-Sijang](/guest/sijang)** — 관심 판매자를 방문하고 관리할 수 있는 크로스 플랫폼 앱. 웹 브라우징 모드와 API 모드를 지원하며, 디렉토리 서비스를 통해 판매자의 상품과 서비스를 검색할 수 있습니다.
```

- [ ] **Step 3: Replace English home page**

Replace entire content of `docs/en/index.md`:

```markdown
---
layout: home

hero:
  name: Dure.one
  text: Directory Service
  tagline: The central hub connecting merchants and customers
  actions:
    - theme: brand
      text: Learn About Directory
      link: /en/directory
    - theme: alt
      text: Merchant Tools
      link: /en/merchant/installer

features:
  - icon: 🌐
    title: Dure.one Directory Service
    details: Anyone can register their myCart website with a verified responder phone number. All registrations are verified through government data providers.
    link: /en/directory
    linkText: Learn more
---

## Connected Services

The Dure.one Directory serves as the central hub with various tools for merchants and customers.

### 🏪 Merchant Tools

**[Dure-Installer](/en/merchant/installer)** — Set up myCart websites with easy quotations through SMS, Telegram, Jabber, and KakaoTalk

**[Dure-Responder](/en/merchant/responder)** — Manage response workflows for customer requests including orders, quotations, and cancellations. Leverage AI to automatically handle customer needs.

### 👥 Customer Tools

**[Dure-Sijang](/en/guest/sijang)** — Cross-platform app to visit and manage favorite merchants. Supports web browsing mode and API mode, search for merchant products and services through the directory service.
```

- [ ] **Step 4: Test home pages locally**

```bash
npm run docs:dev
```

Expected: Dev server starts, navigate to http://localhost:5173 and /en/ to verify both home pages

- [ ] **Step 5: Stop dev server (Ctrl+C) and remove backups**

```bash
rm docs/index.md.backup docs/en/index.md.backup
```

Expected: Backups removed

- [ ] **Step 6: Commit home pages**

```bash
git add docs/index.md docs/en/index.md
git commit -m "$(cat <<'EOF'
feat: replace home pages with Directory-first layout

- Directory Service as hero with primary action
- Connected services section with merchant and guest tools
- Remove old dure.one/myCart generic feature cards
- Korean and English versions with consistent structure

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

### Task 7: Create CLAUDE.md

**Files:**
- Create: `CLAUDE.md` (project root)

**Interfaces:**
- Consumes: All documentation structure from Tasks 1-6
- Produces: Comprehensive contributor guide for AI assistants and humans

- [ ] **Step 1: Create CLAUDE.md with full content**

Create `CLAUDE.md` at project root with comprehensive guide (see full content in plan spec section)

- [ ] **Step 2: Verify CLAUDE.md created**

```bash
ls -la CLAUDE.md
wc -l CLAUDE.md
```

Expected: File exists with ~400+ lines

- [ ] **Step 3: Final build test**

```bash
npm run docs:build
```

Expected: Build succeeds with no errors, all pages accessible

- [ ] **Step 4: Commit CLAUDE.md**

```bash
git add CLAUDE.md
git commit -m "$(cat <<'EOF'
docs: add comprehensive CLAUDE.md for contributors

- Project overview and hub-and-spoke architecture
- Development setup instructions (install, dev, build)
- Content contribution guidelines (Korean-first, mirroring)
- Navigation update procedures
- Common tasks reference (add service, update content)
- Style guide (tone, formality, emoji usage)
- Troubleshooting and external references

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

Expected: Commit successful

---

## Self-Review Checklist

After completing all tasks, verify:

**1. Spec coverage:**
- ✅ Directory structure created (merchant/, guest/, en/merchant/, en/guest/)
- ✅ Directory service pages (Korean + English)
- ✅ Merchant tools pages: Installer, Responder (Korean + English)
- ✅ Guest tool page: Sijang (Korean + English)
- ✅ VitePress config updated (nav, sidebar, both locales)
- ✅ Home pages replaced with Directory-first layout
- ✅ CLAUDE.md created with comprehensive guide
- ✅ All 5 services documented (Installer, Sijang, Responder, Directory, dure.app)

**2. Placeholder scan:**
- ✅ No TBD or TODO in any files
- ✅ All external links point to actual service domains
- ✅ All internal links use correct paths
- ✅ All content is complete (no "add details later")

**3. Type consistency:**
- ✅ File paths consistent: `/directory`, `/merchant/installer`, `/merchant/responder`, `/guest/sijang`
- ✅ Service names consistent: Dure-Installer, Dure-Responder, Dure-Sijang, Dure.one
- ✅ Navigation labels match across Korean and English
- ✅ Emoji usage consistent: 📚 (services), 🏪 (merchant), 👥 (guest)

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-08-28-dure-services-documentation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
