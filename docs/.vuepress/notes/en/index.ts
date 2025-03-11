import { defineNotesConfig } from 'vuepress-theme-plume'
import { enGuide } from './enGuide'

export const enNotes = defineNotesConfig({
  dir: 'notes/en',
  link: '/',
  notes: [
    enGuide,
  ],
})