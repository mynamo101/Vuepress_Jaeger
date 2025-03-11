import { defineNoteConfig } from 'vuepress-theme-plume'

export const zhGuide = defineNoteConfig({
  dir: 'zh/Guide',
  link: '/Guide/',
  sidebar: [
    {
      text: '認識FMOD',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        '什麼是FMOD',
        '應用場景',
        '優勢',
      ],
    },
    {
      text: '功能',
      icon: 'fluent-mdl2:edit-create',
      collapsed: false,
      items: [
        {
          text: 'markdown',
          icon: 'material-symbols:markdown-outline',
          prefix: 'markdown',
          collapsed: true,
          items: [
            '基础',
            '扩展',
            '图标',
            '马克笔',
            '隐秘文本',
            '缩写词',
            '内容注释',
            '卡片',
            '步骤',
            '文件树',
            '选项组',
            '示例容器',
            'npm-to',
            'caniuse',
            '导入文件',
          ],
        },
        {
          text: '代码块',
          prefix: '代码',
          icon: 'ph:code-bold',
          collapsed: true,
          items: [
            '介绍',
            '特性支持',
            '代码组',
            '导入代码',
            'twoslash',
          ],
        },
        {
          text: '代码演示',
          prefix: '代码演示',
          icon: 'carbon:demo',
          collapsed: true,
          items: [
            '前端演示',
            'rust',
            'golang',
            'kotlin',
            'codepen',
            'jsFiddle',
            'codeSandbox',
            'replit',
            { link: '前端', text: '前端（弃用）' },
          ],
        },
        {
          text: '图表',
          icon: 'mdi:chart-line',
          prefix: '图表',
          collapsed: true,
          items: [
            'chart',
            'echarts',
            'mermaid',
            'flowchart',
            'markmap',
            'plantuml',
          ],
        },
        {
          text: '资源嵌入',
          icon: 'dashicons:embed-video',
          prefix: '嵌入',
          collapsed: true,
          items: [
            'pdf',
            'bilibili',
            'youtube',
            'artplayer',
            'audioReader',
          ],
        },
      ],
    },
    {
      text: '實際應用',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        '什麼是FMOD',
        '應用場景',
        '優勢',
      ],
    },
  ],
})