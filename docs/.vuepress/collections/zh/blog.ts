import { defineCollection } from 'vuepress-theme-plume'

export const blog = defineCollection({
  type: 'post',
  dir: 'blog',
  title: '博客',
})
