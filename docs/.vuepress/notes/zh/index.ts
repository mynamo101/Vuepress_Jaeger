import { defineNotesConfig } from 'vuepress-theme-plume'
import { zhGuide } from './zh-Guide'

export const zhNotes = defineNotesConfig({
  dir: 'notes/zh/Guide',
  link: '/',
  notes: [
    zhGuide,
  ],
})