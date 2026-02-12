import path from 'node:path'
import plumeTheme, { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar.js'
import { zhCollections, enCollections } from './collections/index.js'

export default defineThemeConfig({
  logo: '/Images/logo.svg',

  profile: {
    avatar: '/Images/Avatar.jpg',
    name: 'Ethan Cheng (麵醬)',
    description: '寫作是興趣、既是動機也是目的，更是與世界對話的方式。',
    location: 'Hsinchu, Taiwan',
    organization: '聲岳設計',
  },

  social: [
    { icon: 'instagram', link: 'https://www.instagram.com/ming_dejapupu/' },
  ],
  navbarSocialInclude: ['instagram'],

  footer: {
    message: '<b> - 聯繫我們 - </b> <br>' + '電話 | 0953512151 <br>' + '電子郵件 | mynamo101@gmail.com', 
    copyright: 'Copyright © 2022-present Sound Jaeger',
  },

  locales: {
    '/': {
      collections: zhCollections,
      navbar: zhNavbar,
    },
    '/en/': {
      collections: enCollections,
      navbar: enNavbar,
    },
  },
  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
      // '/article/1zha8bjg/': 'sj2024',
      // '/FMOD/': 'sj2024',
    },
  },
  
  bulletin: {
    layout: 'bottom-right',
    lifetime: 'session',
    title: '🎉 世界因你而更好 🎉',
    contentFile: path.join(__dirname, 'bulletin.md'),
    enablePage: page => page.path === '/blog/' // only show on this page
  },
})
