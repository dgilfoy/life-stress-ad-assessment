webpackJsonp([7],{"./src/components/AssessmentModules.tsx":function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/react/react.js"),r=n("./node_modules/material-ui/GridList/index.js"),i=n("./node_modules/react-router/es/index.js"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.componentWillMount=function(){this.props.appBarTitle("Assessment Modules")},t.prototype.componentWillReceiveProps=function(e){this.props.appBarTitle("Assessment Modules")},t.prototype.render=function(){var e=this.props,t=e.modules,n=(e.pathOnTouchTap,e.cols);return s.createElement(r.GridList,{cols:n,cellHeight:200},t.map(function(e){return s.createElement(i.Link,{to:"/main/module/"+e.id,key:e.image},s.createElement(r.GridTile,{title:e.title},s.createElement("img",{src:e.image})))}))},t}(s.Component);t.default=u},"./src/containers/AssessmentModules.tsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/AssessmentModules.tsx"),s=n("./src/res/data/modules.ts"),r=n("./node_modules/react-redux/es/index.js"),i=function(e){var t=e.width;return t?t>900?4:t>600?2:1:1},u=function(e){return{modules:s.modules,cols:i(e.device)}},c=function(e){return{}};t.default=r.connect(u,c)(o.default)}});