"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3085],{6416:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var l=t(7294),n=t(6010),c=t(3570),s=t(8704),i=t(6043),m=t(1548);const r="mdxPageWrapper_zHyg";function o(e){const{content:a}=e,{metadata:{title:t,description:o,frontMatter:d}}=a,{wrapperClassName:u,hide_table_of_contents:v}=d;return l.createElement(m.FG,{className:(0,n.Z)(u??m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},l.createElement(m.d,{title:t,description:o}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",r)},l.createElement("div",{className:(0,n.Z)("col",!v&&"col--8")},l.createElement(s.Z,null,l.createElement(a,null))),!v&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(i.Z,{toc:a.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},6043:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(7462),n=t(7294),c=t(6010),s=t(1548);function i(e){let{toc:a,className:t,linkClassName:l,isChild:c}=e;return a.length?n.createElement("ul",{className:c?void 0:t},a.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function m(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const u=(0,s.LU)(),v=r??u.tableOfContents.minHeadingLevel,N=o??u.tableOfContents.maxHeadingLevel,g=(0,s.b9)({toc:a,minHeadingLevel:v,maxHeadingLevel:N}),f=(0,n.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:v,maxHeadingLevel:N}}),[c,m,v,N]);return(0,s.Si)(f),n.createElement(i,(0,l.Z)({toc:g,className:t,linkClassName:c},d))}const r="tableOfContents_cNA8";function o(e){let{className:a,...t}=e;return n.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},n.createElement(m,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);