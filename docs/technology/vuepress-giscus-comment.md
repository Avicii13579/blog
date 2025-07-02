---
title: 在 VuePress 集成 Giscus 评论系统
date: 2024-06-10
description: 详细介绍如何在 VuePress 博客中安装和配置 Giscus 评论模块，提升用户互动体验。
tags:
  - Vue3
  - Giscus
  - VuePress
  - technology
categories:
  - 前端开发
createTime: 2025/06/30 23:35:33
permalink: /technology/vuepress-giscus-comment/
packImgName: img1
---

<ArticleNavigation 
  :showBreadcrumb="true"
  :showRelatedArticles="false"
/>

# 在 VuePress 集成 Giscus 评论系统


Giscus 是一个基于 GitHub Discussions 的免费评论系统，适合静态博客。本文将详细介绍如何在 VuePress 博客中集成 Giscus，实现文章评论功能。
![图片描述](/images/technology/img1/img1.png)

## 一、准备工作

1. 已搭建好 VuePress 博客项目。
2. 拥有一个 GitHub 账号和仓库（用于存储评论数据），如下图操作开启讨论。
![图片描述](/images/technology/img1/img2.png)


## 二、Giscus 配置与代码生成

1. 访问 [Giscus 官网](https://giscus.app/)，用 GitHub 登录。
2. 选择你的评论仓库，授权 Giscus。
3. 输入 github 仓库。
4. 设置 Discussion 分类（建议 Announcements）。
5. 配置参数（如 mapping 选择 pathname，language 选择 zh-CN）。
6. 生成一段 `<script ...></script>` 代码，记得保存。
![图片描述](/images/technology/img1/img3.png)

## 三、在 VuePress 中集成 Giscus

1、vuepress V2 安装 @vuepress/plugin-comment (注意：vuepress-plugin-comment2 插件已弃用了)
```
npm install @vuepress/plugin-comment@next --save-dev
```
2. 打开或新建 `docs/.vuepress/config.ts` 文件内引入：
```ts
import { commentPlugin } from '@vuepress/plugin-comment'
```

3. 打开或新建 `docs/.vuepress/config.ts` 文件内，添加配置：
![图片描述](/images/technology/img1/img4.png)


---

通过以上步骤，即可在 VuePress 博客中集成 Giscus，实现高效、现代的评论功能。如有问题欢迎留言交流！ 