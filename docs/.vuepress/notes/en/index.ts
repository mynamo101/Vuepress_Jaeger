import { defineNotesConfig } from 'vuepress-theme-plume'
import { themeConfig } from './theme-config'
import { themeGuide } from './theme-guide'
import { Service } from './service'

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [
    Service,
    // themeGuide,
    // themeConfig,
  ],
})
