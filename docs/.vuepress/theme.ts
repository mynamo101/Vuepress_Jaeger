import type { Theme } from 'vuepress'
import process from 'node:process'
import { plumeTheme } from 'vuepress-theme-plume'


export const theme: Theme = plumeTheme({
  hostname: process.env.SITE_HOST || 'https://class.soundjaeger.com',
  docsRepo: 'https://github.com/mynamo101/Vuepress_Jaeger',
  docsDir: 'docs',
  changelog: { maxCount: 10 },
  contributors: { mode: 'block' },

  plugins: {

    shiki: {
      twoslash: true,
      lineNumbers: 10,
    },

    markdownEnhance: {
      demo: true,
      chartjs: true,
      echarts: true,
      markmap: true,
      plantuml: true,
      mermaid: true,
      flowchart: true,
    },
    markdownPower: {
      annotation: true,
      abbr: true,
      imageSize: 'all',
      pdf: true,
      caniuse: true,
      bilibili: true,
      youtube: true,
      artPlayer: true,
      audioReader: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      demo: true,
      npmTo: ['pnpm', 'yarn', 'npm'],
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'mynamo101/Vuepress_Jaeger',
      repoId: 'R_kgDOOFwoqg',
      category: 'General',
      categoryId: 'DIC_kwDOOFwoqs4Cn6wC',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },

    watermark: {
      enabled: false,
      watermarkOptions: {
        content: 'Sound Jaeger',
      },
    },

  },
})
