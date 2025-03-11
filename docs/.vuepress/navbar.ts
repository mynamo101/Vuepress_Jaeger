import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { 
    text: '博客', 
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '聲音引擎',
    items: [
      {text: 'FMOD', link: '/notes/zh/Guide/FMOD/1.在開始前/什麽是FMOD.md' },
      {text: 'Wwise', link: '/notes/zh/Guide/FMOD/1.在開始前/什麽是FMOD.md' },
    ],
    activeMatch: '^/Guide/',
  }
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

