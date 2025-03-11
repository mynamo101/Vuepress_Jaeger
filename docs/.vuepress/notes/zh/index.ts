import { defineNotesConfig } from 'vuepress-theme-plume'
import { zhGuide } from './zhGuide'

export const zhNotes = defineNotesConfig({
  dir: 'notes/zh',
  link: '/',
  notes: [
    zhGuide,
  ],
})