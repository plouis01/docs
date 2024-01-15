"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={id:"decentralized-web",sidebar_label:"Decentralized Web"},o="Decentralized Web",i={unversionedId:"learn/decentralized-web",id:"learn/decentralized-web",title:"Decentralized Web",description:"The code is law rule is a cornerstone of DeFi. It states among other things that once successfully audited, a",source:"@site/docs/learn/decentralized-web.mdx",sourceDirName:"learn",slug:"/learn/decentralized-web",permalink:"/docs/learn/decentralized-web",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/decentralized-web.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1705330185,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"decentralized-web",sidebar_label:"Decentralized Web"},sidebar:"learnSidebar",previous:{title:"Use-cases",permalink:"/docs/learn/asc/use-cases"}},l={},c=[{value:"Massa Station",id:"massa-station",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decentralized-web"},"Decentralized Web"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"code is law")," rule is a cornerstone of DeFi. It states among other things that once successfully audited, a\nprogram can remain trusted. This implies that the program of a successfully audited smart contract may never be\nunexpectedly changed by an outsider. Popular ETH smart contracts essentially follow that rule."),(0,r.kt)("p",null,"However, most DeFi web3 apps such as ",(0,r.kt)("a",{parentName:"p",href:"https://app.uniswap.org/"},"app.uniswap.org")," are typically used through an\notherwise normal website that talks to a browser plugin (typically\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-extension"},"Metamask"),") allowing the webpage to interact with the user's wallet\nand the blockchain. The website that serves as an entry point to the dApp is neither decentralized nor\nimmutable-once-audited. This breaks the very foundation of blockchain security."),(0,r.kt)("p",null,"This attack vector has been well identified by exploiters and, as smart contracts become more robust, exploiters are\nincreasingly targeting front ends. For instance, in 2022, one of the major DeFi protocols,\n",(0,r.kt)("a",{parentName:"p",href:"https://curve.fi/"},"Curve Finance"),", fell victim to ",(0,r.kt)("a",{parentName:"p",href:"https://rekt.news/curve-finance-rekt/"},"DNS hijacking"),",\nwith hackers managing to steal as much as $575k from users.\nAs long as decentralized applications rely on Web 2.0 infrastructure, these attacks are bound to happen\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/LefterisJP/status/1540306236087877635"},"regularly"),"."),(0,r.kt)("h2",{id:"massa-station"},"Massa Station"),(0,r.kt)("p",null,"The goal of Massa's decentralized web is to allow users to store websites without using any centralized party in between\nyour client and the blockchain. Since the front-end is hosted on the blockchain, anyone can access it using a Massa\nnode."),(0,r.kt)("p",null,"To this end Massa has developed a client that acts as a gateway to the blockchain preventing you from using any\ncentralized servers effectively maximizing your security with immutable and censorship-resistant websites.\nThat way, Massa allows deploying fully decentralized code-is-law apps, as it was meant to be!"),(0,r.kt)("p",null,"Start your decentralized web3 journey now, and install ",(0,r.kt)("a",{parentName:"p",href:"https://station.massa.net"},(0,r.kt)("strong",{parentName:"a"},"Massa Station")),".\nMassa Station allows you to navigate Massa web3 content and to store your own website."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that you would typically not host all assets, images and other non-essential data on-chain, but only the\ncritical functioning parts that need auditing and the subsequent security guarantees. The rest can typically be hosted\non  IPFS or some other decentralized storage solution.")))}p.isMDXComponent=!0}}]);