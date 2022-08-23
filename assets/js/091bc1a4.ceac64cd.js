"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3918],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9148:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"golang\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2",date:new Date("2022-08-04T17:15:26.000Z"),tags:["golang"]},l="\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2",u={permalink:"/InterfaceSlice",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/InterfaceSlice.md",source:"@site/blog/InterfaceSlice.md",title:"golang\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2",description:"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53d1\u73b0 fun(opts...) \u7684\u7528\u6cd5\uff0c\u4e8e\u662f\u5b66\u4e60\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2",date:"2022-08-04T17:15:26.000Z",formattedDate:"August 4, 2022",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:1.71,truncated:!1,authors:[],frontMatter:{title:"golang\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2",date:"2022-08-04T17:15:26.000Z",tags:["golang"]},prevItem:{title:"\u52a0\u5bc6",permalink:"/secret"},nextItem:{title:"Task-job",permalink:"/Task-job"}},p={authorsImageUrls:[]},f=[],s={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53d1\u73b0 fun(opts...) \u7684\u7528\u6cd5\uff0c\u4e8e\u662f\u5b66\u4e60\u51fd\u6570\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u4f20\u53c2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'package main\n\nimport (\n    "fmt"\n)\n\ntype Foo struct {\n    Number int\n    Text   string\n    Name   string\n}\n\nfunc print(list ...int) {\n    for index, a := range list {\n        fmt.Printf("%d: %v \\n", index, a)  // print 0:1  1:3  2:4\n    }\n}\n\nfunc main() {\n    arr := []int{1, 3, 4}\n    print(arr...)\n}\n')),(0,o.kt)("p",null,"\u5982\u679c\u662f\u590d\u6742\u7684\u591a\u79cd\u7c7b\u578b\u5165\u53c2"),(0,o.kt)("p",null,"\u6d89\u53ca\u77e5\u8bc6\u70b9"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u5bf9\u8c61\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("li",{parentName:"ol"},"interface\u7528\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"[]interface{} \u548c []T{}\u7c7b\u578b\u7684\u533a\u522b")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"notices: a variable with type []interface{} is not an interface!\n\u6ce8\u610f: \u53d8\u91cf\u7c7b\u578b[]interface{} \u4e0d\u662f \u4e00\u4e2ainterface")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\ntype Foo struct {\n    Number int\n    Text   string\n    Name   string\n}\n\nfunc print(list ...interface{}) {\n    for index, a := range list {\n        fmt.Printf("%d: %v \\n", index, a)\n    }\n}\n\nfunc main() {\n    arr := []Foo{{Number: 1, Text: "pie"}, {Name: "ssss", Number: 15, Text: "fish"}, {Number: 30, Text: "orange"}}\n    print(arr...)  // compiler error: cannot use arr (variable of type []Foo) as []interface{} \n}\n')),(0,o.kt)("p",null,"[]Foo \u5e76\u4e0d\u80fd\u5f53\u6210[]interface{}\u7c7b\u578b, \u539f\u56e0\u662f[]Foo\u957f\u5ea6\u4e0d\u56fa\u5b9a []interface{}\u7f16\u8bd1\u65f6\u5e76\u4e0d\u77e5\u9053\u53c2\u6570\u6570\u91cf"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/InterfaceSlice"},"\u53c2\u8003\u6587\u7ae01")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/guyan0319/golang_development_notes/blob/master/zh/9.1.md"},"\u53c2\u8003\u6587\u7ae02")),(0,o.kt)("p",null,"\u4fee\u6539\u540e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\ntype Foo struct {\n    Number int\n    Text   string\n    Name   string\n}\n\nfunc print(list ...interface{}) {\n    for index, a := range list {\n        fmt.Printf("%d: %v \\n", index, a)\n    }\n}\n\nfunc main() {\n    arr := []Foo{{Number: 1, Text: "pie"}, {Name: "ssss", Number: 15, Text: "fish"}, {Number: 30, Text: "orange"}}\n    var interfaceSlice []interface{} = make([]interface{}, len(arr)) // \u589e\u52a0[]interface{}\u7c7b\u578b\u53d8\u91cf\uff0c\u5e76\u786e\u5b9a\u957f\u5ea6\n    for i, d := range arr {\n        interfaceSlice[i] = d\n    }\n    print(interfaceSlice...)\n}\n')))}m.isMDXComponent=!0}}]);