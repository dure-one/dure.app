import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { configureDiagramsPlugin } from 'vitepress-plugin-diagrams'
import llmstxt, { copyOrDownloadAsMarkdownButtons } from 'vitepress-plugin-llms'
import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'
import { videoMarkdownPlugin } from 'vitepress-plugin-video'
import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'
import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode'
import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'
import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'
import { markdownPlugin as markMarkdownPlugin } from 'vitepress-plugin-mark'
import { copyReadme } from './plugins/copy-readme'

// Must run before defineConfig() below: VitePress globs docs/ for its page
// list as soon as this config module finishes evaluating, so docs/readme.md
// has to exist by then, not later via a Vite buildStart hook.
copyReadme()

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: 'Dure Services',
  description: '듀어 서비스 - 디렉토리 기반 판매자-구매자 연결 플랫폼',

  ignoreDeadLinks: [
    (url) => url.includes('localhost')
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // Korean is the default (root) locale; English is the translation
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
        footer: {
          message: 'MIT 라이선스로 배포됩니다.',
          copyright: 'Copyright © 2024-present dure.one'
        },
        docFooter: {
          prev: '이전',
          next: '다음'
        },
        outlineTitle: '이 페이지에서',
        darkModeSwitchLabel: '다크 모드',
        sidebarMenuLabel: '메뉴',
        returnToTopLabel: '맨 위로'
      }
    },
    en: {
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
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present dure.one'
        }
      }
    }
  },

  // Vite plugins configuration
  vite: {
    plugins: [llmstxt(), plantumlVitePlugin()],
    ssr: {
      noExternal: [/^vitepress-plugin-/]
    }
  },

  // Markdown plugins configuration
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(configureDiagramsPlugin, {
        krokilUrl: 'https://kroki.io'
      })
      md.use(copyOrDownloadAsMarkdownButtons)
      md.use(plantumlMarkdownPlugin)
      md.use(videoMarkdownPlugin, {
        artplayer: true,
        youtube: true,
        bilibili: true,
        acfun: true
      })
      md.use(pdfMarkdownPlugin)
      md.use(qrcodeMarkdownPlugin)
      md.use(stepsMarkdownPlugin)
      md.use(collapseMarkdownPlugin)
      md.use(markMarkdownPlugin)
    },
    languageAlias: { plantuml: 'txt' }
  },

  // Mermaid configuration
  mermaid: {
    theme: 'default'
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikescar' }
    ],
    search: {
      provider: 'local'
    }
  }
}))

