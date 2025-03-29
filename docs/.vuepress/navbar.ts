import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    items: [
      { text: '聲音引擎', link: '/notes/Readme.md', icon: 'wpf:faq' },
      { text: 'FMOD', link: '/notes/FMOD/1.開始準備/介紹.md', icon: 'wpf:faq' },
      { text: 'Wwise', link: '/sponsor/', icon: 'line-md:coffee-loop' },
    ],
    activeMatch: '^/FMOD/',
  },
  {
    text: '服務說明',
    icon: 'icon-park-outline:expand-down',
    link: '/notes/Service/1.關於服務/介紹.md',
    activeMatch: '^/Service/',
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },

  {
    text: '案例',
    link: '/demos/',
    icon: 'map:wind-surfing',
  },
  {
    text: '查看更多',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        items: [
          { text: '友情鏈接', link: '/Friends.md' },
          { text: '其他鏈接', link: 'https://ecosystem.vuejs.press/' },
        ],
      },
    ],
  },
])

export const enNavbar = defineNavbarConfig([
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  },
  {
    text: 'Config',
    icon: 'icon-park-outline:setting-two',
    link: '/en/config/intro/',
    activeMatch: '^/en/config/',
  },
  {
    text: 'Blog',
    link: '/en/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/en/(blog|article)/',
  },
  {
    text: 'More',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: 'Vuepress',
        items: [
          { text: 'Official Docs', link: 'https://v2.vuepress.vuejs.org' },
          { text: 'Ecosystem', link: 'https://ecosystem.vuejs.press/' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    items: [
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Contributing', link: '/contributing/' },
    ],
  },
])
