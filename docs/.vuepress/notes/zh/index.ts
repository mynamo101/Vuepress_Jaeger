import { defineNotesConfig } from 'vuepress-theme-plume'
// import { plugins } from './plugins'

import { FMODnotes } from './fmod-guide'
import { Wwisenotes } from './wwise-guide'
import { Service } from './service'
import { SoundTools } from './sound-tools'
import { tools } from './tools'

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    FMODnotes,
    Wwisenotes,
    Service,
    SoundTools,
    // plugins,
    // tools,
  ],
})
