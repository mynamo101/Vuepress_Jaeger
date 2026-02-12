import { defineCollection } from 'vuepress-theme-plume'

export const themeConfig = defineCollection({
  type: 'doc',
  dir: 'en/theme/config',
  title: 'Theme Config',
  sidebar: [
    {
      text: 'Config',
      collapsed: false,
      items: [
        'intro',
        'basic',
        'locales',
        'notes',
      ],
    },
    {
      text: 'frontmatter',
      prefix: 'frontmatter',
      collapsed: false,
      items: [
        'basic',
        'article',
      ],
    },
  ],
})
