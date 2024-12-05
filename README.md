# EhSyringe

[![Build Status](https://github.com/EhTagTranslation/EhSyringe/workflows/ci/badge.svg)](../../actions)

[![GitHub All Releases](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/total)](../../releases)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.chrome.zip)](../../releases/latest/download/ehsyringe.chrome.zip)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.firefox.xpi)](../../releases/latest/download/ehsyringe.firefox.xpi)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.user.js)](../../releases/latest/download/ehsyringe.user.js)

E 站注射器，将中文翻译注入到 E 站体内。

这一针打下去你就会说中文了。

![Syringe](https://user-images.githubusercontent.com/5716100/62419351-be9d7400-b6b0-11e9-86d3-680436973176.png)

## 安装

### Chrome 安装方法

1. 前往 [Release 页面](../../releases)下载 zip 文件并解压
2. 打开 Chrome 扩展程序管理器 `chrome://extensions`
3. 勾选 `开发者模式`
4. 点击 `加载已解压的扩展程序`，选择本扩展所在目录

### Firefox 安装方法

1. 前往 [Release 页面](../../releases)下载 xpi 文件
2. 安装 Firefox 的[延长支持版（ESR）](https://www.mozilla.org/firefox/organizations/)、[开发者版](https://www.mozilla.org/firefox/developer/)或 [Nightly 版](https://nightly.mozilla.org/)
3. 打开 Firefox 配置编辑器（`about:config` 页），搜索 `xpinstall.signatures.required` 并将值设置为 `false`
4. 打开 Firefox 附加组件管理器 `about:addons`，点击右上角设置菜单，选择“从文件安装附加组件”，选择下载的 xpi 文件

参考 [Firefox 中的附加组件签名](https://support.mozilla.org/kb/add-ons-signing-firefox#w_dalioucllleeyzgaauoeoeoakekikakneojdeeniko)

### 用户脚本（UserScript）安装方法

1. [安装一个用户脚本管理器](https://sleazyfork.org/help/installing-user-scripts)
2. 前往 [Sleazy Fork](https://sleazyfork.org/scripts/407833) 安装最新版本

> 也可以从 [GitHub Release](../../releases/latest/download/ehsyringe.user.js) 安装

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

- 全站翻译（大部分）
- 标签翻译
- 标签介绍
- 标签翻译数据更新（当前[数据库](https://ehtt.vercel.app/list/all)包含 [![all](https://img.shields.io/endpoint?label=&color=brightgreen&url=https://ehtt.fly.dev/database/all/~badge)](https://ehtt.vercel.app/list/all) 条标签翻译）
- 搜索框标签输入提示
- 支持 Via、Alook 等支持自定义脚本的手机浏览器

## 特点

- 兼容 E-Hentai-Downloader 及熊猫书签
- 在加载 DOM 过程替换翻译, 页面加载完直接是中文不会闪烁

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
        <td><img src="https://user-images.githubusercontent.com/5716100/62783460-10019500-baef-11e9-8368-a48fa40dc47d.gif"></td>
    </tr>
</table>

## 小工具

- 用户脚本脚本小工具合集 [EhTagTranslation/UserScripts](../../../UserScripts)

## [更新日志](CHANGELOG.md)

## 开发

### 开发指南

- UI 翻译位于 `src/services/ui-translation/data`

### 发布新版本

1. 编辑 `CHANGELOG.md` 并提交
2. 运行 `pnpm version <new-version>` 更新版本号
3. 运行 `git push --follow-tags` 推送新版本
4. 等待 GitHub Actions 自动编译并发布新版本
