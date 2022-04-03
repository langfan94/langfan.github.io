"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6103],{8665:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3366),l=a(7294),r=a(6010),i=a(3570),o=a(9960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},8902:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(7294),l=a(6010),r=a(5999),i=a(9960),o=a(4996),s=a(7556),m=a(8780),c=a(8704),u=a(7462),d=a(3366),g="iconEdit_dcUD",p=["className"];function v(e){var t=e.className,a=(0,d.Z)(e,p);return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(g,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},n.createElement(v,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",E="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",_=a(7774),N="tags_XVD_",Z="tag_JSN8";function k(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:Z},n.createElement(_.Z,{name:t,permalink:a}))}))))}var P="image_o0gy";function L(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function C(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(L,{href:s},n.createElement("img",{className:P,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(L,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var T="authorCol_FlmR",y="imageOnlyAuthorRow_trpF",I="imageOnlyAuthorCol_S2np";function w(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?y:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?I:T),key:t},n.createElement(C,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function x(e){var t,a,u=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,o.C)().withBaseUrl,g=e.children,p=e.frontMatter,v=e.assets,_=e.metadata,N=e.truncated,Z=e.isBlogPostPage,P=void 0!==Z&&Z,L=_.date,C=_.formattedDate,T=_.permalink,y=_.tags,I=_.readingTime,x=_.title,A=_.editUrl,M=_.authors,H=null!=(t=v.image)?t:p.image,R=!P&&N,U=y.length>0,B=P?"h1":"h2";return n.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(B,{className:b,itemProp:"headline"},P?x:n.createElement(i.Z,{itemProp:"url",to:T},x)),n.createElement("div",{className:(0,l.Z)(E,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},C),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",u(I))),n.createElement(w,{authors:M,assets:v})),H&&n.createElement("meta",{itemProp:"image",content:d(H,{absolute:!0})}),n.createElement("div",{id:P?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(c.Z,null,g)),(U||N)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",P&&f)},U&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(k,{tags:y})),P&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(h,{editUrl:A})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},n.createElement(i.Z,{to:_.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),l=a(8665),r=a(8902),i=a(7462),o=a(5999),s=a(1750);function m(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,(0,i.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,(0,i.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var c=a(7556),u=a(6043),d=a(6010);function g(e){var t,a=e.content,l=a.assets,r=a.metadata,i=r.title,o=r.description,s=r.date,m=r.tags,u=r.authors,d=r.frontMatter,g=d.keywords,p=null!=(t=l.image)?t:d.image;return n.createElement(c.d,{title:i,description:o,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function p(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,c=o.prevItem,d=o.frontMatter,g=d.hide_table_of_contents,p=d.toc_min_heading_level,v=d.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(u.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},n.createElement(r.Z,{frontMatter:d,assets:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(s||c)&&n.createElement(m,{nextItem:s,prevItem:c}))}function v(e){return n.createElement(c.FG,{className:(0,d.Z)(c.kM.wrapper.blogPages,c.kM.page.blogPostPage)},n.createElement(g,e),n.createElement(p,e))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},6043:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),o=a(7556),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,g=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,s),b=(0,o.LU)(),E=null!=p?p:b.tableOfContents.minHeadingLevel,f=null!=v?v:b.tableOfContents.maxHeadingLevel,_=(0,o.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[u,g,E,f]);return(0,o.Si)(N),r.createElement(m,(0,n.Z)({toc:_,className:i,linkClassName:u},h))}var u="tableOfContents_cNA8",d=["className"];function g(e){var t=e.className,a=(0,l.Z)(e,d);return r.createElement("div",{className:(0,i.Z)(u,"thin-scrollbar",t)},r.createElement(c,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",o="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.name,m=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,m?s:o)},a,m&&n.createElement("span",null,m))}}}]);