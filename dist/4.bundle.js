webpackJsonp([4],{"./src/components/Videos.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("./node_modules/react/react.js"),i=o("./node_modules/material-ui/GridList/index.js"),s=o("./node_modules/react-router/es/index.js"),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.componentWillMount=function(){this.props.appBarTitle&&this.props.appBarTitle("Life Stress Videos")},t.prototype.componentWillReceiveProps=function(e){this.props.appBarTitle&&this.props.appBarTitle("Life Stress Videos")},t.prototype.render=function(){var e=this.props,t=e.videos,o=(e.appBarTitle,e.cols);return console.log(t),r.createElement("div",null,r.createElement(i.GridList,{cols:o},t.map(function(e){return r.createElement(s.Link,{key:e.id,to:"/main/videos/"+e.id,cols:(e.featured,1)},r.createElement(i.GridTile,{title:e.title},r.createElement("img",{src:e.img})))})))},t}(r.Component);t.default=c},"./src/containers/Videos.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Videos.tsx"),r=o("./src/res/data/video.ts"),i=o("./node_modules/react-redux/es/index.js"),s=function(e){var t=e.width;return t?t>900?4:t>600?2:1:1},c=function(e){return{videos:r.videoIds.map(function(e){return r.videos[e]}),cols:s(e.device)}},p=function(e){return{}};t.default=i.connect(c,p)(n.default)}});