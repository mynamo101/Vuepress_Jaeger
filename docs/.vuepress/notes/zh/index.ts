import { defineNotesConfig } from 'vuepress-theme-plume'
// import { plugins } from './plugins'

import { Service } from './service'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    Service,
  ],
})
