# EhSyringe

[![Build Status](../../workflows/build/badge.svg)](../../actions)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=EhTagTranslation/EhSyringe)](//dependabot.com)

E 站注射器，将中文翻译注入到 E 站体内。

这一针打下去你就会说中文了。

![image](https://user-images.githubusercontent.com/5716100/62419351-be9d7400-b6b0-11e9-86d3-680436973176.png)

## 安装

### Chrome 安装方法

1. 前往 [Release 页面](../../releases)下载 zip 文件并解压
2. 打开 Chrome 扩展程序管理器 `chrome://extensions`
3. 勾选 `开发者模式`
4. 点击 `加载已解压的扩展程序`，选择本扩展所在目录

### Firefox 安装方法

1. 前往 [Release 页面](../../releases)下载 zip 文件
2. 安装 Firefox 的[延长支持版（ESR）](//www.mozilla.org/firefox/organizations/)、[开发者版](//www.mozilla.org/firefox/developer/)或 [Nightly 版](//nightly.mozilla.org/)
3. 打开 Firefox 配置编辑器（`about:config` 页），搜索 `xpinstall.signatures.required` 并将值设置为 `false`
4. 打开 Firefox 附加组件管理器 `about:addons`，点击右上角设置菜单，选择“从文件安装附加组件”，选择下载的 zip 文件

参考 [Firefox 中的附加组件签名](//support.mozilla.org/kb/add-ons-signing-firefox#w_dalioucllleeyzgaauoeoeoakekikakneojdeeniko)

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

|                                                **搜索列表**                                                 |                                            **详情页（标签描述）**                                            |
| :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
|                         ![image](https://i.loli.net/2019/08/09/5MPFwd7aOsvqJXb.png)                         |                         ![image](https://i.loli.net/2019/08/09/l8eNzUGi9x4LfoK.png)                          |
|                                              **搜索提示/补全**                                              |                                               **标签数据更新**                                               |
| ![GIF](https://user-images.githubusercontent.com/5716100/60812493-310b5900-a1c4-11e9-85f7-1d4212765156.gif) | ![进度](https://user-images.githubusercontent.com/5716100/62783460-10019500-baef-11e9-8368-a48fa40dc47d.gif) |

## Q&A

Q: 旧版中复制磁力链功能会增加吗?

A: 目前插件只专注于标签相关功能, 你可以油猴子安装 <https://gist.github.com/xioxin/588cfcbc9d4a50e797c1cacb0a620a03> 来获得这个功能

## [更新日志](CHANGELOG.md)
