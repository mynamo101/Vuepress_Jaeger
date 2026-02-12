import { defineCollection } from 'vuepress-theme-plume'

export const wwise = defineCollection({
  type: 'doc',
  dir: 'guide/Wwise',
  title: 'Wwise',
  sidebar: 'auto',
  sidebarCollapsed: true, 
})
