import { defineNoteConfig } from 'vuepress-theme-plume'

export const FMODGuide = defineNoteConfig({
  dir: 'zh/Guide/FMOD',
  link: '/',
  sidebar:[
    {
      text: '从这里开始',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        '介绍',
        '安装与使用',
        '项目结构',
        '编写文章',
        '博客',
        '知识笔记',
        '国际化',
        '部署',
        '构建优化',
      ],
    },
  ],
})