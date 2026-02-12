import { defineCollection } from 'vuepress-theme-plume'

export const tools = defineCollection({
  type: 'doc',
  dir: 'tools',
  title: '工具',
  linkPrefix: '/tools/',
  sidebar: [
    {
      text: '工具',
      icon: 'tabler:tools',
      items: [
        'custom-theme',
        'home-hero-tint-plate',
        'caniuse',
      ],
    },
  ],
})
