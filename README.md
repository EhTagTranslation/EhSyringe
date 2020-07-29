# EhSyringe

[![Build Status](https://github.com/EhTagTranslation/EhSyringe/workflows/build/badge.svg)](https://github.com/EhTagTranslation/EhSyringe/actions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=EhTagTranslation/EhSyringe)](https://dependabot.com)

[![GitHub All Releases](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/total)](https://github.com/EhTagTranslation/EhSyringe/releases)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.chrome.zip)](https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.chrome.zip)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.firefox.zip)](https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.firefox.zip)
[![GitHub Releases (by Asset)](https://img.shields.io/github/downloads/EhTagTranslation/EhSyringe/latest/ehsyringe.user.js)](https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js)

E 站注射器，将中文翻译注入到 E 站体内。

这一针打下去你就会说中文了。

![image](https://user-images.githubusercontent.com/5716100/62419351-be9d7400-b6b0-11e9-86d3-680436973176.png)

## 安装

### Chrome 安装方法

1. 前往 [Release 页面](https://github.com/EhTagTranslation/EhSyringe/releases)下载 zip 文件并解压
2. 打开 Chrome 扩展程序管理器 `chrome://extensions`
3. 勾选 `开发者模式`
4. 点击 `加载已解压的扩展程序`，选择本扩展所在目录

### Firefox 安装方法

1. 前往 [Release 页面](https://github.com/EhTagTranslation/EhSyringe/releases)下载 zip 文件
2. 安装 Firefox 的[延长支持版（ESR）](//www.mozilla.org/firefox/organizations/)、[开发者版](//www.mozilla.org/firefox/developer/)或 [Nightly 版](//nightly.mozilla.org/)
3. 打开 Firefox 配置编辑器（`about:config` 页），搜索 `xpinstall.signatures.required` 并将值设置为 `false`
4. 打开 Firefox 附加组件管理器 `about:addons`，点击右上角设置菜单，选择“从文件安装附加组件”，选择下载的 zip 文件

参考 [Firefox 中的附加组件签名](//support.mozilla.org/kb/add-ons-signing-firefox#w_dalioucllleeyzgaauoeoeoakekikakneojdeeniko)

### 用户脚本（UserScript）安装方法

1. [安装一个用户脚本管理器](https://sleazyfork.org/zh-CN/help/installing-user-scripts)
2. 前往 [sleazy fork](https://sleazyfork.org/zh-CN/scripts/407833-ehsyringe) 安装最新版本

> 也可以从 [Release 页面](https://github.com/EhTagTranslation/EhSyringe/releases)安装

## 功能

-   全站翻译（大部分)
-   TAG 翻译
-   TAG 介绍
-   TAG 翻译数据更新
-   搜索框 TAG 输入提示

## 特点

-   在加载 DOM 过程替换翻译, 页面加载完直接是中文不会闪烁
-   兼容 E-Hentai-Downloader 及熊猫书签

## 截图预览

<table style="font-weight: bold; text-align: center;">
    <tr>
        <td><strong>搜索列表</strong></td>
        <td><strong>详情页（标签描述）</strong></td>
    </tr>
    <tr>
        <td><img src="https://i.loli.net/2019/08/09/5MPFwd7aOsvqJXb.png"></td>
        <td><img src="https://i.loli.net/2019/08/09/l8eNzUGi9x4LfoK.png"></td>
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

-   复制磁力链 <https://gist.github.com/xioxin/588cfcbc9d4a50e797c1cacb0a620a03>
-   阅读状态 <https://gist.github.com/xioxin/d8dbe82cbf762bb10652cdfd9fda3d93>

## [更新日志](https://github.com/EhTagTranslation/EhSyringe/blob/master/CHANGELOG.md)
