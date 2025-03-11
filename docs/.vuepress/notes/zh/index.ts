import { defineNotesConfig } from 'vuepress-theme-plume'
import { FMODGuide } from './FMOD-Guide' //這邊添加需要的目録
export const zhNotes = defineNotesConfig({
  dir: '/notes/zh/',
  link: '/',
  notes: [
    FMODGuide,
  ],
})