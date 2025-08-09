# react-translate-js-demo

> 在线演示地址（GitHub Pages）：[https://tatsukimengchen.github.io/react-translate-js-demo/](https://tatsukimengchen.github.io/react-translate-js-demo/)

本项目是一个基于 React 的多语言自动翻译 Demo，集成了 `i18n-jsautotranslate` 组件，支持多语言切换和自动翻译。

## 功能介绍

- 支持多语言切换
- 自动检测本地语言
- 按钮和下拉框切换语言
- 自动翻译页面内容

## 快速开始

### 1. 安装依赖

```bash
pnpm install
# 或
npm install
# 或
yarn install
```

### 2. 启动项目

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

### 3. 访问页面

浏览器打开 http://localhost:5173 即可体验多语言自动翻译 Demo

## 主要代码说明

`src/App.jsx` 主要逻辑：

- 初始化 `i18n-jsautotranslate`，设置语言监听和 URL 参数控制
- 提供按钮和下拉框切换语言
- 展示本地语言和当前语言
- 自动翻译页面内容

## 依赖说明

- [i18n-jsautotranslate](https://www.npmjs.com/package/i18n-jsautotranslate)：自动翻译和多语言切换  
  GitHub 仓库地址：[https://github.com/xnx3/translate](https://github.com/xnx3/translate)
- React 18

## 其他

如需自定义翻译内容或扩展语言，请参考 `i18n-jsautotranslate` 官方文档。
