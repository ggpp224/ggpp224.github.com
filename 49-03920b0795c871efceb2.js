webpackJsonp([49],{3:function(n,e,t){n.exports=t(2)(148)},227:function(n,e){n.exports="## 使用\n\n使用 chanjet-ui 组件非常简单,你只需要为其提供一个主题, 以便组件能从这个主题中获取它自身需要的样式。最便捷的提供方式是使用 `MuiThemeProvider` 将主题注入到 application context 中。\n\n下面是一个快速开始的例子:\n\n\n**./App.js**\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport MuiThemeProvider from 'chanjet-ui/lib/styles/MuiThemeProvider';\nimport MyAwesomeReactComponent from './MyAwesomeReactComponent';\n\nconst App = () => (\n  <MuiThemeProvider>\n    <MyAwesomeReactComponent />\n  </MuiThemeProvider>\n);\n\nReactDOM.render(\n  <App />,\n  document.getElementById('app')\n);\n```\n\n**./MyAwesomeReactComponent.js**\n```jsx\nimport React from 'react';\nimport Button from 'chanjet-ui/lib/Button';\n\nconst MyAwesomeReactComponent = () => (\n  <Button label=\"Default\" />\n);\n\nexport default MyAwesomeReactComponent;\n```\n\n关于上面的代码需要特别注意:\n我们使用\n```js\nimport Button from 'chanjet-ui/lib/button';\n```\n\n而不是使用\n```js\nimport {Button} from 'chanjet-ui/lib/index';\n```\n\n这样能够加快你的编译速度,并且能够减小编译后的输出文件。\n完整的chanjet-ui组件集合映射,查看`/lib/index.js` 在chanjet-ui根目录中。\n\n### 定制化\n\n我们为chanjet-ui实现了一套默认主题, 定制化一套你自己喜欢的样式非常简单, 你可能通过下面两种方式来实现:\n- [使用 theme](#/docs/ui/customization/themes), 你可以定制组件的主题.\n- [使用 inline style](#/docs/ui/customization/inline-styles), 你可能重写组件的样式通过style属性\n"},555:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var i=t(1),r=o(i),u=t(16),a=o(u),m=t(3),c=o(m),s=t(227),l=o(s),p=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{render:function(n){return"Usage - "+n}}),r.default.createElement(c.default,{text:l.default}))};e.default=p}});