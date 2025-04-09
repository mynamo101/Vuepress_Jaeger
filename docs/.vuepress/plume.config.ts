import path from 'node:path'
import plumeTheme, { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { enNotes, zhNotes } from './notes/index.js'

export default defineThemeConfig({
  logo: '/Images/logo.svg',

  profile: {
    avatar: '/Images/Avatar.jpg',
    name: 'Ethan Cheng (麵醬)',
    description: '寫作是興趣、既是動機也是目的，更是與世界對話的方式。',
    location: 'Hsinchu, Taiwan',
    organization: '聲岳設計',
  },

  blog: {
    include: ['blog/**/*.md'],
  },
  
  social: [
    { icon: 'instagram', link: 'https://www.instagram.com/ming_dejapupu/' },
  ],
  navbarSocialInclude: ['instagram', 'qq'],

  footer: {
    message: '<b> - Contact Us - </b> <br>' + 'Phone | +886 95512151 <br>' + 'Email | mynamo101@gmail.com', 
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
      '/FMOD/': 'sj2024',
    },
  },
  autoFrontmatter: { exclude: ['**/*.snippet.*'] },
  
  bulletin: {
    layout: 'bottom-right',
    lifetime: 'session',
    title: '🎉 世界因你而更好 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/blog/' // only show on this page
  },
})
