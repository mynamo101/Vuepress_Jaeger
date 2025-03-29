import { defineNotesConfig } from 'vuepress-theme-plume'
// import { plugins } from './plugins'
import { themeConfig } from './theme-config'
import { FMODnotes } from './fmod-guide'
import{ service } from './service'
import { tools } from './tools'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FMODnotes,
    service,
    // themeConfig,
    // plugins,
    // tools,
  ],
})
