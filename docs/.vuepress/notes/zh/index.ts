import { defineNotesConfig } from 'vuepress-theme-plume'
// import { plugins } from './plugins'
import { Guide } from './Guide'

export const zhNotes = defineNotesConfig({
  dir: 'notes/zh/',
  link: '/',
  notes: [
    Guide,
  ],
})