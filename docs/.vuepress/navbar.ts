import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
  {
    text: '服務說明',
    icon: 'icon-park-outline:expand-down',
    link: '/notes/Service/1.關於服務/介紹.md',
    activeMatch: '^/Service/',
  },
  // {
  //   text: '查看更多',
  //   icon: 'icon-park-outline:more-three',
  //   items: [
  //     {
  //       items: [
  //         { text: '友情鏈接', link: '/Friends.md' },
  //         { text: 'Plume Theme', link: 'https://theme-plume.vuejs.press/' },
  //       ],
  //     },
  //   ],
  // },
])

export const enNavbar = defineNavbarConfig([
  {
    text: 'Service',
    icon: 'icon-park-outline:expand-down',
    link: '/en/Service/Welcome/',
    activeMatch: '^/Service/',
  },
])
