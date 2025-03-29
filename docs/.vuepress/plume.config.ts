import path from 'node:path'
import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { enNotes, zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/Images/logo.svg',

  profile: {
    avatar: '/Images/Avatar.jpg',
    name: 'MingYen Cheng',
    description: 'Sound & Music Lover',
    location: 'Hsinchu, Taiwan',
    organization: '聲岳設計',
  },

  social: [
    { icon: 'instagram', link: 'https://www.instagram.com/soundjaeger/' },
  ],
  navbarSocialInclude: ['instagram', 'qq'],

  footer: {
    copyright: 'Copyright © 2022-present Sound Jaeger',
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
      '/article/1zha8bjg/': 'sj2024',
      '/FMOD/tjn9v3tp/': 'sj2024',
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
