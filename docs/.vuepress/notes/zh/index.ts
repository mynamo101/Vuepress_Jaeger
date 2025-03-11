import { defineNotesConfig } from 'vuepress-theme-plume'
// import { zhGuide } from './zh-Guide' //這邊添加需要的目録
import { FMODGuide } from './FMOD-Guide' //這邊添加需要的目録
export const zhNotes = defineNotesConfig({
  dir: 'notes/zh',
  link: '/',
  notes: [
    // zhGuide,
    FMODGuide,
  ],
})