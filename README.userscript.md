<!-- 这个文件因为是用来做 GreasyFork 外链的简介的，所以不能用相对地址 -->

# EhSyringe

[![Build Status](https://github.com/EhTagTranslation/EhSyringe/workflows/build/badge.svg)](https://github.com/EhTagTranslation/EhSyringe/actions)

E 站注射器，将中文翻译注入到 E 站体内。

这一针打下去你就会说中文了。

![Syringe](https://user-images.githubusercontent.com/5716100/62419351-be9d7400-b6b0-11e9-86d3-680436973176.png)

## 安装

> 也可以从 [GitHub Release](https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js) 安装

> 如果你使用的是 Via、Alook 等对用户脚本支持不完善的浏览器，可以考虑使用以下代码加载插件
>
> ```js
> (function () {
>     if (/(^|\.)e[-x]hentai\.org$/i.test(location.hostname) && !document.getElementById('EhSyringe-Script')) {
>         var script = document.createElement('script');
>         script.id = 'EhSyringe-Script';
>         script.src = 'https://sleazyfork.org/scripts/407833-ehsyringe/code/EhSyringe.user.js';
>         document.documentElement.append(script);
>     }
> })();
> ```

## 功能

-   全站翻译（大部分）
-   TAG 翻译
-   TAG 介绍
-   TAG 翻译数据更新（当前[数据库](https://ehtt.vercel.app/list/all)包含 [![all](https://img.shields.io/endpoint?label=&color=brightgreen&url=https://ehtt.fly.dev/database/all/~badge)](https://ehtt.vercel.app/list/all) 条标签翻译）
-   搜索框 TAG 输入提示
-   支持 Via、Alook 等支持自定义脚本的手机浏览器

## 特点

-   兼容 E-Hentai-Downloader 及熊猫书签

## 浏览器扩展版的优势？

本脚本由浏览器扩展打包转换而来，无法完美复现扩展的完美体验，以下功能将只能在扩展版中实现。

-   使用地址栏进行搜索
-   通过标签右键菜单跳转到编辑页面
-   通过图片右键菜单搜索所有相关图库
-   在加载 DOM 过程替换翻译, 页面加载完直接是中文不会闪烁

扩展版安装方式请参见[项目首页 https://github.com/EhTagTranslation/EhSyringe](https://github.com/EhTagTranslation/EhSyringe)。

## 截图预览

<table style="font-weight: bold; text-align: center;">
    <tr>
        <td><strong>搜索列表</strong></td>
        <td><strong>详情页（标签描述）</strong></td>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/13471233/110159103-356a9800-7e25-11eb-9335-233c051b3ea5.png"></td>
        <td><img src="https://user-images.githubusercontent.com/13471233/110159105-37345b80-7e25-11eb-89d6-a16ae2e8edd3.png"></td>
    </tr>
    <tr>
        <td><strong>搜索提示/补全</strong></td>
        <td><strong>标签数据更新</strong></td>
    </tr>
    <tr>
        <td><img src="https://user-images.githubusercontent.com/5716100/60812493-310b5900-a1c4-11e9-85f7-1d4212765156.gif"></td>
        <td><img src="https://user-images.githubusercontent.com/13471233/110159090-31d71100-7e25-11eb-9b48-71720eb319f2.gif"></td>
    </tr>
</table>

## 反馈

为便于追踪问题，请勿使用 GreasyFork 的评论系统，请直接到[项目页面](https://github.com/EhTagTranslation/EhSyringe/issues)进行反馈。

## 小工具

-   用户脚本脚本小工具合集 <https://github.com/EhTagTranslation/UserScripts>

## [更新日志](https://github.com/EhTagTranslation/EhSyringe/blob/master/CHANGELOG.md)
