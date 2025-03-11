---
title: 什麽是FMOD
author: pengzhanbo
icon: mdi:tooltip-text-outline
createTime: 2024/03/04 11:06:24
permalink: /FMOD/intro/
tags:
  - 指南
  - 快速开始
---

## Lesson-1

npmTo 容器用于将 npm 命令行转换为 `pnpm / yarn / deno / bun` 的命令行，并它们作为 代码块组呈现在页面。

在 `::: npm-to` 容器中，只需要写 一次 npm 命令 代码块即可。

::: details 为什么需要 npmTo 容器 ？
在我编写文档时，常常需要提供 `pnpm / yarn / npm` 等不同运行环境的命令，需要写多个代码块并包装在 `::: code-tabs`
容器中。它占据了我不少的工作量，而且还占据了 markdown 内容中的很长一部分空间，体验并不友好。
因此我编写了这个 `::: npm-to` 容器以解决这个问题。
:::