"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},N=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),N=o(t),k=r,f=N["".concat(p,".").concat(k)]||N[k]||c[k]||s;return t?a.createElement(f,m(m({ref:n},l),{},{components:t})):a.createElement(f,m({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var o=2;o<s;o++)m[o]=t[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=t(3117),r=(t(7294),t(3905));const s={title:"TimSort",date:new Date("2021-12-22T16:01:00.000Z"),tags:["C++"],description:"TimSort\u5b9e\u73b0",keywords:["TimSort","\u7b97\u6cd5"]},m="TimSort",i={permalink:"/TimSort",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/TimSort.md",source:"@site/blog/TimSort.md",title:"TimSort",description:"TimSort\u5b9e\u73b0",date:"2021-12-22T16:01:00.000Z",formattedDate:"December 22, 2021",tags:[{label:"C++",permalink:"/tags/c"}],readingTime:2.82,hasTruncateMarker:!1,authors:[],frontMatter:{title:"TimSort",date:"2021-12-22T16:01:00.000Z",tags:["C++"],description:"TimSort\u5b9e\u73b0",keywords:["TimSort","\u7b97\u6cd5"]},prevItem:{title:"npmTest",permalink:"/npmTest"},nextItem:{title:"Merge-Sort",permalink:"/Merge-Sort"}},p={authorsImageUrls:[]},o=[{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:2}],l={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u662f\u4e00\u79cd\u6df7\u5408\u7a33\u5b9a\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u6e90\u81ea\u5408\u5e76\u6392\u5e8f\u548c\u63d2\u5165\u6392\u5e8f\uff0c\u65e8\u5728\u8f83\u597d\u5730\u5904\u7406\u771f\u5b9e\u4e16\u754c\u4e2d\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u3002")),(0,r.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'// C++ program to perform TimSort.\n#include<bits/stdc++.h>\nusing namespace std;\nconst int RUN = 32;\n\n// This function sorts array from left index to\n// to right index which is of size atmost RUN\nvoid insertionSort(int arr[], int left, int right)\n{\n    for (int i = left + 1; i <= right; i++)\n    {\n        int temp = arr[i];\n        int j = i - 1;\n        while (j >= left && arr[j] > temp)\n        {\n            arr[j+1] = arr[j];\n            j--;\n        }\n        arr[j+1] = temp;\n    }\n}\n\n// Merge function merges the sorted runs\nvoid merge(int arr[], int l, int m, int r)\n{\n    \n    // Original array is broken in two parts\n    // left and right array\n    int len1 = m - l + 1, len2 = r - m;\n    int left[len1], right[len2];\n    for (int i = 0; i < len1; i++)\n        left[i] = arr[l + i];\n    for (int i = 0; i < len2; i++)\n        right[i] = arr[m + 1 + i];\n\n    int i = 0;\n    int j = 0;\n    int k = l;\n\n    // After comparing, we\n    // merge those two array\n    // in larger sub array\n    while (i < len1 && j < len2)\n    {\n        if (left[i] <= right[j])\n        {\n            arr[k] = left[i];\n            i++;\n        }\n        else\n        {\n            arr[k] = right[j];\n            j++;\n        }\n        k++;\n    }\n\n    // Copy remaining elements of left, if any\n    while (i < len1)\n    {\n        arr[k] = left[i];\n        k++;\n        i++;\n    }\n\n    // Copy remaining element of right, if any\n    while (j < len2)\n    {\n        arr[k] = right[j];\n        k++;\n        j++;\n    }\n}\n\n// Iterative Timsort function to sort the\n// array[0...n-1] (similar to merge sort)\nvoid timSort(int arr[], int n)\n{\n    \n    // Sort individual subarrays of size RUN\n    for (int i = 0; i < n; i+=RUN) insertionSort(arr, i, min((i+RUN-1), (n-1)));\n\n    // Start merging from size RUN (or 32).\n    // It will merge\n    // to form size 64, then 128, 256\n    // and so on ....\n    for (int size = RUN; size < n; size = 2*size)\n    {\n        \n        // pick starting point of\n        // left sub array. We\n        // are going to merge\n        // arr[left..left+size-1]\n        // and arr[left+size, left+2*size-1]\n        // After every merge, we\n        // increase left by 2*size\n        for (int left = 0; left < n;\n                            left += 2*size)\n        {\n            \n            // find ending point of\n            // left sub array\n            // mid+1 is starting point\n            // of right sub array\n            int mid = left + size - 1;\n            int right = min((left + 2*size - 1),\n                                            (n-1));\n\n            // merge sub array arr[left.....mid] &\n            // arr[mid+1....right]\n            if(mid < right)\n                merge(arr, left, mid, right);\n        }\n    }\n}\n\n// Utility function to print the Array\nvoid printArray(int arr[], int n)\n{\n    for (int i = 0; i < n; i++)\n        printf("%d ", arr[i]);\n    printf("\\n");\n}\n\n// Driver program to test above function\nint main()\n{\n    int arr[] = {-2, 7, 15, -14, 0, 15, 0, 7, -7,\n                    -4, -13, 5, 8, -14, 12};\n    int n = sizeof(arr)/sizeof(arr[0]);\n    printf("Given Array is\\n");\n    printArray(arr, n);\n\n    // Function Call\n    timSort(arr, n);\n\n    printf("After Sorting Array is\\n");\n    printArray(arr, n);\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,r.kt)("p",null,"  ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mrow"},"log"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061")),(0,r.kt)("mn",{parentName:"msub"},"2")),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)=O(n\\log_2{n})")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},(0,r.kt)("span",{parentName:"span",className:"mop"},"lo",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.207em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.4559em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2441em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,r.kt)("p",null,"  ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))))}c.isMDXComponent=!0}}]);