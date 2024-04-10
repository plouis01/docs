"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[7503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5652:(e,t,r)=>{r.d(t,{L:()=>s,V:()=>c});var n=r(7294),o=r(6010);const a={feature:"feature_yCMF"};function c(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:"container features"},n.createElement("div",{className:"row"},t)))}const i=()=>n.createElement("svg",{width:"0.8rem",height:"0.8rem","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));function s(e){let{url:t,title:r,content:c,icon:s}=e;const l=t.startsWith("http"),u=l?"_blank":"_self",m=l?"noopener noreferrer":"";return n.createElement(n.Fragment,null,n.createElement("a",{className:(0,o.Z)("col col--4",a.feature),href:t,target:u,rel:m},n.createElement("div",null,n.createElement("div",{className:"avatar__name"},s," ",r," ",l&&n.createElement(i,null)),n.createElement("small",null,c))))}},4442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(5652);const c={id:"home",sidebar_label:"Home"},i="General Documentation",s={unversionedId:"learn/home",id:"learn/home",title:"General Documentation",description:"Welcome! On this page you'll find various resources explaining some concepts introduced by the Massa protocol and how the Massa protocol operates.",source:"@site/docs/learn/home.mdx",sourceDirName:"learn",slug:"/learn/home",permalink:"/docs/learn/home",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/learn/home.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1712736948,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"home",sidebar_label:"Home"},sidebar:"learnSidebar",next:{title:"Welcome to Massa",permalink:"/docs/learn/introduction"}},l={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-documentation"},"General Documentation"),(0,o.kt)("p",null,"Welcome! On this page you'll find various resources explaining some concepts introduced by the Massa protocol and how the Massa protocol operates."),(0,o.kt)(a.V,{mdxType:"FeatureList"},(0,o.kt)(a.L,{url:"./architecture/basic-concepts",title:"Basic Concepts",content:"Learn the basics of Massa, from addresses to smart contracts.",icon:"\ud83d\udcda",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./architecture/node-architecture",title:"Node Architecture",content:"Learn the inner workings of a Massa node.",icon:"\ud83d\udda5",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./bootstrap",title:"Bootstrapping in Massa",content:"Learn how bootstrapping works in Massa.",icon:"\ud83c\udf10",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./storage-costs",title:"Storage Costs",content:"Learn how storage costs work.",icon:"\ud83c\udfe6",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./gas",title:"Gas",content:"Learn how gas works.",icon:"\u26fd",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./asc/intro",title:"Autonomous Smart Contracts",content:"Learn how Massa automates smart contract execution.",icon:"\ud83e\udd16",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./operation-format-execution",title:"Detailed operation format and execution",content:"Documentation about operation serialization and execution sequences.",icon:"\u2699\ufe0f",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"https://arxiv.org/abs/1803.09029",title:"Technical Whitepaper",content:"Read the research paper behind Massa.",icon:"\ud83d\udcc4",mdxType:"Feature"}),(0,o.kt)(a.L,{url:"./tokenomics",title:"Tokenomics",content:"Learn the economics related to the Massa token.",icon:"\ud83e\ude99",mdxType:"Feature"})))}d.isMDXComponent=!0}}]);