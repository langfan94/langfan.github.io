"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"js\u9762\u8bd5\u9898 \u8bfb\u53d6target[0].a",date:new Date("2022-05-18T16:51:59.000Z"),tags:[]},l=void 0,c={permalink:"/getValue",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/getValue.md",source:"@site/blog/getValue.md",title:"js\u9762\u8bd5\u9898 \u8bfb\u53d6target[0].a",description:"\u9898\u76ee",date:"2022-05-18T16:51:59.000Z",formattedDate:"May 18, 2022",tags:[],readingTime:.515,truncated:!1,authors:[],frontMatter:{title:"js\u9762\u8bd5\u9898 \u8bfb\u53d6target[0].a",date:"2022-05-18T16:51:59.000Z",tags:[]},prevItem:{title:"ios-video-bug",permalink:"/ios-video-bug"},nextItem:{title:"npmTest",permalink:"/npmTest"}},i={authorsImageUrls:[]},s=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u5206\u6790",id:"\u5206\u6790",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("p",null,"const obj = {\nobj: { name: 123 },\ntarget: ","[{a: 111}]",",\n};"),(0,a.kt)("p",null,"\u4f7f\u7528\u5b57\u7b26\u4e32 'obj.target","[0]",".a' \u8bfb\u53d6value"),(0,a.kt)("h2",{id:"\u5206\u6790"},"\u5206\u6790"),(0,a.kt)("p",null,"\u9898\u76ee\u7684\u5173\u952e\u70b9\u662f\u8003\u5bdf\u4ece\u5b57\u7b26\u4e32\u4e2d\u8bfb\u53d6\u5173\u952e\u8bcd\n\u53ef\u4ee5\u4f7f\u7528\u6b63\u5219\u5339\u914d\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const str = 'target[0].a';\nconst arr = str.split('.');\nlet params = [];\nfor (let i=0; i< arr.length; i++) {\n  const arrMatch = arr[i].match(/\\[\\d+\\]/);\n  if (!!arrMatch) {\n    const numStr = arrMatch[0];\n    const index = arrMatch.index;\n    params.push(arrMatch.input.slice(0, index));\n    params.push(numStr.match(/\\d+/)[0]);\n  } else {\n    params.push(arr[i]);\n  }\n}\n\nconsole.log(params);\n")))}p.isMDXComponent=!0}}]);