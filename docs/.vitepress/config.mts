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
  title: 'dure.app',
  description: '듀레 앱 - dure.one과 myCart 프로젝트 소개',

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
          { text: 'dure.one', link: 'https://dure.one', target: '_blank', rel: 'noopener noreferrer' },
          { text: 'myCart', link: 'https://github.com/shurco/mycart', target: '_blank', rel: 'noopener noreferrer' }
        ],
        sidebar: [
          {
            text: '프로젝트',
            items: [
              { text: '홈', link: '/' },
              { text: 'dure.one', link: 'https://dure.one', target: '_blank' },
              { text: 'myCart', link: 'https://github.com/shurco/mycart', target: '_blank' }
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
          { text: 'dure.one', link: 'https://dure.one', target: '_blank', rel: 'noopener noreferrer' },
          { text: 'myCart', link: 'https://github.com/shurco/mycart', target: '_blank', rel: 'noopener noreferrer' }
        ],
        sidebar: [
          {
            text: 'Projects',
            items: [
              { text: 'Home', link: '/en/' },
              { text: 'dure.one', link: 'https://dure.one', target: '_blank' },
              { text: 'myCart', link: 'https://github.com/shurco/mycart', target: '_blank' }
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

