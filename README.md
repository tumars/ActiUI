# ActiUI
基于 React 的前端组件库，提供一些常用组件库里不常见的组件与功能，具体使用详情请查看 [https://tumars.github.io/ActiUI/](https://tumars.github.io/ActiUI/)

## 什么是 ActiUI？
ActiUI 是基于 React 的 web conponent 组件库，包含多个独立的功能性组件，以便前端工程师开发时调取使用。
ActiUI 目前是个人开发项目，还在不断的完善中，后续会推出更多组件，欢迎各位提 issue 或联系我本人。

## ActiUI 的特点？

- 每个组件相互独立解耦，单个组件所需的全部 js、css、jsx 等在同一文件夹内，按需下载使用即可
- 样式使用 `css module + less` 书写
- 使用 webpack 的构建工作流，`react + webpack` 的构建环境配置请参考：[https://github.com/tumars/boilerplate-webpack-react-es6-cssModule/](https://github.com/tumars/boilerplate-webpack-react-es6-cssModule/)

相对 ant Design、sui、amazeUI 等前端库而言，ActiUI 功能精简，组件分离，冗余代码很少，更容易修改定制。ActiUI 适合有一定 React 基础的前端开发人员。

## 如何使用？
ActiUI 暂未提供 npm 安装，使用时直接下载相应文件夹并在 react 项目里引用组件即可。例如 Spin 组件文件路径为 `src -> conponent -> Spin`，下载该文件夹后在自己的项目中使用 `import Spin from 'Spin'` 引入即可使用。
每个组件包含以下三个文件：

 - ·index.js'  - 组件主文件，逻辑与界面写在这里
 - ·{"{组件名}"}.less'  - 组件样式文件
 - ·demo.js'  - 组件使用 demo 示例y