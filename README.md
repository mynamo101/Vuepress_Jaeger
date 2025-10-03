# sound-jaeger-course

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
npm i
```

## Usage

```sh
# start dev server
npm run docs:dev
# build for production
npm run docs:build
# preview production build in local
npm run docs:preview
# update vuepress and theme
npm run vp-update

# style check lessons
npm run lint:lessons
```

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)

## Writing Guide / Style Lint

All Wwise course lesson markdown files follow a unified structure.

Quick rules (full version: `docs/style-guide.md`):
- Single frontmatter block with: title / icon / createTime / permalink / order
- Starts with a `::: tip` block
- Has `## 🎯 本節你會收穫`
- Includes a checklist section (標題含 ✅ 或 檢查清單)
- Non-final lessons contain a 下節預告 section; final lesson does not
- Ends with a line containing `恭喜！`

Run linter before committing:
```sh
npm run lint:lessons
```

Extend rules: edit `scripts/check-lessons.mjs`.
