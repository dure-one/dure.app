---
layout: home

hero:
  name: dure.app
  text: Open Source Project Hub
  tagline: Introducing dure.one and myCart projects
  actions:
    - theme: brand
      text: Visit dure.one
      link: https://dure.one
    - theme: alt
      text: Visit myCart
      link: https://github.com/shurco/mycart

features:
  - icon: 🌐
    title: dure.one
    details: dure is a platform built on the values of cooperation and sharing. It brings the traditional community spirit of working together and helping each other to life with modern technology.
    link: https://dure.one
    linkText: Learn more
  - icon: 🛒
    title: myCart
    details: A lightweight e-commerce solution that runs as a single binary file. Built with Go + SQLite + SvelteKit, it can be deployed instantly with no external dependencies.
    link: https://github.com/shurco/mycart
    linkText: View on GitHub
---

## About dure.one

**dure.one** is a collaborative platform named after the Korean traditional concept of *dure* (두레) — a spirit of communal cooperation. It aims to build a better software ecosystem through community-based sharing and collaboration.

### Key Features

- 🤝 **Community First** — Open-source philosophy built on creating and sharing together
- 🔓 **Fully Open Source** — All source code is public and open to contributions
- 🇰🇷 **Korean Friendly** — Familiar documentation and support for Korean developers
- ⚡ **Practical Tools** — Solutions ready to use in real development environments

## About myCart

**myCart** is a lightweight e-commerce backend that runs as a single executable file. It is designed for developers and small business owners who want to launch an online store quickly without complex infrastructure.

### Key Features

- 📦 **Single Binary** — Admin panel, storefront, and API all embedded in one executable
- 🗄️ **Embedded SQLite** — No external database setup required
- ⚡ **Go Backend** — Fast and reliable Go-based backend
- 🎨 **SvelteKit Frontend** — Modern admin UI and storefront
- 🔌 **Full REST API** — Swagger/OpenAPI documentation included
- ✅ **E2E Testing** — Comprehensive Playwright-based test coverage

```bash
# Download and run immediately
./mycart serve

# Admin panel: http://localhost:8080/_/
# Storefront:  http://localhost:8080/
```

> Default credentials: `user@mail.com` / `Pass123`
