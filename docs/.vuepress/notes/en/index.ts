import { defineNotesConfig } from 'vuepress-theme-plume'
import { enGuide } from './en-Guide'

export const enNotes = defineNotesConfig({
  dir: 'notes/en',
  link: '/',
  notes: [
    enGuide,
  ],
})