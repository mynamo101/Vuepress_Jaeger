import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { enNotes, zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/.vuepress/public/Images/Avatar.jpg',

  profile: {
    avatar: '/.vuepress/public/Images/Avatar.jpg',
    name: 'MingYen Cheng',
    description: 'Sound & Music Lover',
    location: 'Hsinchu, Taiwan',
    organization: '聲岳設計',
  },

  social: [
    { icon: 'instagram', link: 'https://www.instagram.com/soundjaeger/' },

  ],
  navbarSocialInclude: ['github', 'qq'],

  footer: {
    copyright: 'Copyright © 2021-present pengzhanbo',
  },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },

  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
    },
  },
  autoFrontmatter: { exclude: ['**/*.snippet.*'] },

  // bulletin: {
  //   layout: 'top-right',
  //   lifetime: 'always',
  //   // title: '🎉 公告 🎉',
  //   contentFile: path.join(__dirname, 'bulletin.md'),
  //   enablePage: page => page.path === '/guide/features/bulletin/',
  // },
})
