"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7982],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,u=new Array(l);u[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),u=["components"],a={title:"throttle && debounce",date:new Date("2018-05-10T11:00:50.000Z"),tags:[]},c="javaScript \u51fd\u6570\u8282\u6d41\u548c\u53bb\u6296",i={permalink:"/throttle-debounce",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/throttle-debounce.md",source:"@site/blog/throttle-debounce.md",title:"throttle && debounce",description:"OverView",date:"2018-05-10T11:00:50.000Z",formattedDate:"May 10, 2018",tags:[],readingTime:1.45,truncated:!1,authors:[],frontMatter:{title:"throttle && debounce",date:"2018-05-10T11:00:50.000Z",tags:[]},prevItem:{title:"git-reset",permalink:"/git-reset"},nextItem:{title:"Object.defineProperty",permalink:"/Object-defineProperty"}},p={authorsImageUrls:[]},s=[{value:"OverView",id:"overview",level:2},{value:"throttle",id:"throttle",level:3},{value:"throttle",id:"throttle-1",level:2},{value:"throttle\u5e94\u7528\u573a\u666f",id:"throttle\u5e94\u7528\u573a\u666f",level:3},{value:"throttle Function",id:"throttle-function",level:3},{value:"debounce",id:"debounce-1",level:2},{value:"debounce \u5e94\u7528\u573a\u666f",id:"debounce-\u5e94\u7528\u573a\u666f",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"OverView"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"throttle"},"throttle"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"throttle \u964d\u4f4e\u89e6\u53d1\u56de\u8c03\u7684\u9891\u7387"),(0,l.kt)("h3",{parentName:"blockquote",id:"debounce"},"debounce"),(0,l.kt)("p",{parentName:"blockquote"},"debounce \u5bf9\u4e8e\u4e00\u5b9a\u65f6\u95f4\u6bb5\u7684\u8fde\u7eed\u7684\u51fd\u6570\u8c03\u7528\uff0c\u53ea\u8ba9\u5176\u6267\u884c\u4e00\u6b21")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"throttle-1"},"throttle"),(0,l.kt)("h3",{id:"throttle\u5e94\u7528\u573a\u666f"},"throttle\u5e94\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DOM \u5143\u7d20\u7684\u62d6\u62fd\u529f\u80fd\u5b9e\u73b0\uff08mousemove\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5c04\u51fb\u6e38\u620f\u7684 mousedown/keydown \u4e8b\u4ef6\uff08\u5355\u4f4d\u65f6\u95f4\u53ea\u80fd\u53d1\u5c04\u4e00\u9897\u5b50\u5f39\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u9f20\u6807\u79fb\u52a8\u7684\u8ddd\u79bb\uff08mousemove\uff09"),(0,l.kt)("li",{parentName:"ul"},"Canvas \u6a21\u62df\u753b\u677f\u529f\u80fd\uff08mousemove\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u641c\u7d22\u8054\u60f3\uff08keyup\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u76d1\u542c\u6eda\u52a8\u4e8b\u4ef6\u5224\u65ad\u662f\u5426\u5230\u9875\u9762\u5e95\u90e8\u81ea\u52a8\u52a0\u8f7d\u66f4\u591a\uff1a\u7ed9 scroll \u52a0\u4e86 debounce \u540e\uff0c\u53ea\u6709\u7528\u6237\u505c\u6b62\u6eda\u52a8\u540e\uff0c\u624d\u4f1a\u5224\u65ad\u662f\u5426\u5230\u4e86\u9875\u9762\u5e95\u90e8\uff1b\u5982\u679c\u662f throttle \u7684\u8bdd\uff0c\u53ea\u8981\u9875\u9762\u6eda\u52a8\u5c31\u4f1a\u95f4\u9694\u4e00\u6bb5\u65f6\u95f4\u5224\u65ad\u4e00\u6b21")),(0,l.kt)("h3",{id:"throttle-function"},"throttle Function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    function throttle(fn, interval = 300) {\n        let canRun = true;\n        return function () {\n            if (!canRun) return;\n            canRun = false;\n            setTimeout(() => {\n                fn.apply(this, arguments);\n                canRun = true;\n            }, interval);\n        };\n    }\n")),(0,l.kt)("h2",{id:"debounce-1"},"debounce"),(0,l.kt)("h3",{id:"debounce-\u5e94\u7528\u573a\u666f"},"debounce \u5e94\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u6b21 resize/scroll \u89e6\u53d1\u7edf\u8ba1\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u672c\u8f93\u5165\u7684\u9a8c\u8bc1\uff08\u8fde\u7eed\u8f93\u5165\u6587\u5b57\u540e\u53d1\u9001 AJAX \u8bf7\u6c42\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u4e00\u6b21\u5c31\u597d\uff09")),(0,l.kt)("p",null,"###\u3000debounce Function"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"    function debounce(fn, interval = 300) {\n        let timeout = null;\n        return function () {\n            clearTimeout(timeout);\n            timeout = setTimeout(() => {\n                fn.apply(this, arguments);\n            }, interval);\n        };\n    }\n")))}m.isMDXComponent=!0}}]);