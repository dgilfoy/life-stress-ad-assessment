webpackJsonp([8],{"./src/containers/AssessmentModule.tsx":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("./src/components/BasicPage.tsx"),s=i("./src/res/data/modules.ts"),a=i("./node_modules/react-redux/es/index.js"),c=function(e,t){var i=s.modules.filter(function(e){return parseInt(t.params.id)===e.id})[0];return{title:i.title,page:{title:"Overview",subtitle:i.title+" Module",content:i.content},image:i.img&&!(e.device.width>600||e.device.width>e.device.height)?i.img:"",actions:[{label:"Assessments",action:t.pathOnTouchTap("main/assessments/"+i.id)},{label:"Videos",action:t.pathOnTouchTap("main/videos")},{label:"Library",action:t.pathOnTouchTap("main/library")}]}},o=function(e){return{}};t.default=a.connect(c,o)(n.default)}});