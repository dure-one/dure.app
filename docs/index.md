---
layout: home

hero:
  name: dure.app
  text: 오픈소스 프로젝트 허브
  tagline: dure.one과 myCart 프로젝트를 소개합니다
  actions:
    - theme: brand
      text: dure.one 바로가기
      link: https://dure.one
    - theme: alt
      text: myCart 바로가기
      link: https://github.com/shurco/mycart

features:
  - icon: 🌐
    title: dure.one
    details: 듀레는 협력과 공유의 가치를 바탕으로 만들어진 플랫폼입니다. 사람들이 함께 일하고 서로 돕는 전통적인 공동체 정신을 현대 기술로 구현합니다.
    link: https://dure.one
    linkText: 자세히 보기
  - icon: 🛒
    title: myCart
    details: 하나의 바이너리 파일로 완성되는 경량 전자상거래 솔루션입니다. Go + SQLite + SvelteKit으로 구축되어 별도의 외부 의존성 없이 즉시 배포할 수 있습니다.
    link: https://github.com/shurco/mycart
    linkText: GitHub에서 보기
---

## dure.one 소개

**dure.one**은 한국 전통의 두레(協同) 정신에서 이름을 따온 협업 플랫폼입니다. 커뮤니티 기반의 공유와 협력을 통해 더 나은 소프트웨어 생태계를 만들어 나갑니다.

### 주요 특징

- 🤝 **커뮤니티 중심** — 함께 만들고 함께 나누는 오픈소스 철학
- 🔓 **완전 오픈소스** — 모든 소스코드가 공개되어 누구나 기여할 수 있습니다
- 🇰🇷 **한국어 우선** — 한국 개발자를 위한 친숙한 문서와 지원
- ⚡ **실용적 도구** — 실제 개발 현장에서 바로 쓸 수 있는 솔루션

## myCart 소개

**myCart**는 단일 실행 파일 하나로 전자상거래 서비스를 구동할 수 있는 경량 백엔드입니다. 복잡한 인프라 없이 빠르게 온라인 스토어를 시작하고 싶은 개발자와 소상공인을 위해 설계되었습니다.

### 주요 특징

- 📦 **단일 바이너리** — 관리자 패널, 스토어프론트, API가 하나의 실행 파일에 내장
- 🗄️ **SQLite 내장 DB** — 외부 데이터베이스 설정 불필요
- ⚡ **Go 백엔드** — 빠르고 안정적인 Go 언어 기반
- 🎨 **SvelteKit 프론트엔드** — 현대적인 관리자 UI와 쇼핑몰 화면
- 🔌 **완전한 REST API** — Swagger/OpenAPI 문서 제공
- ✅ **E2E 테스트 지원** — Playwright 기반 종합 테스트

```bash
# 다운로드 후 바로 실행
./mycart serve

# 관리자 패널: http://localhost:8080/_/
# 스토어프론트: http://localhost:8080/
```

> 기본 계정: `user@mail.com` / `Pass123`
