import { defineNotesConfig } from 'vuepress-theme-plume'
import { Guide } from './Guide'

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [
    Guide,
  ],
})