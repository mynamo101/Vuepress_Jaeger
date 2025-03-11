## Lesson-2

npmTo 容器用于将 npm 命令行转换为 `pnpm / yarn / deno / bun` 的命令行，并它们作为 代码块组呈现在页面。

在 `::: npm-to` 容器中，只需要写 一次 npm 命令 代码块即可。

::: details 为什么需要 npmTo 容器 ？
在我编写文档时，常常需要提供 `pnpm / yarn / npm` 等不同运行环境的命令，需要写多个代码块并包装在 `::: code-tabs`
容器中。它占据了我不少的工作量，而且还占据了 markdown 内容中的很长一部分空间，体验并不友好。
因此我编写了这个 `::: npm-to` 容器以解决这个问题。
:::

## 用法

````md
::: npm-to <!-- [!code hl] -->
``` sh
npm install -D vuepress vuepress-theme-plume
```
::: <!-- [!code hl] -->
````

将 包含 `npm` 命令行的代码块，包裹在 `::: npm-to` 容器中即可。

::: warning npm-to 容器仅支持存在单个代码块，不能包含其他内容
:::

上述代码在内部会被转换为：

````md
::: code-tabs
@tab pnpm
``` sh
pnpm add -D vuepress vuepress-theme-plume
```
@tab yarn
``` sh
yarn add -D vuepress vuepress-theme-plume
```
@tab npm
``` sh
npm install -D vuepress vuepress-theme-plume
```
:::
````

最终会在页面中呈现为：

::: npm-to

``` sh
npm install -D vuepress vuepress-theme-plume
```

:::

还可以控制 代码块组中的代码块的显示顺序，如下所示：

**输入：**

````md
::: npm-to tabs="npm,yarn,pnpm,bun,deno" <!-- [!code hl] -->
``` sh
npm install -D vuepress vuepress-theme-plume
```
::: <!-- [!code hl] -->
````

**输出：**

::: npm-to tabs="npm,yarn,pnpm,bun,deno"

[Lesson-2](./Lesson-2.md)