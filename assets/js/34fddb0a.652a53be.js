"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"gas",sidebar_label:"Gas"},i="Gas",s={unversionedId:"learn/gas",id:"learn/gas",title:"Gas",description:"Introduction",source:"@site/docs/learn/gas.mdx",sourceDirName:"learn",slug:"/learn/gas",permalink:"/docs/learn/gas",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/gas.mdx",tags:[],version:"current",lastUpdatedBy:"Nathan Seva",lastUpdatedAt:1701336748,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{id:"gas",sidebar_label:"Gas"},sidebar:"learnSidebar",previous:{title:"Storage costs",permalink:"/docs/learn/storage-costs"},next:{title:"Detailed operation format and execution sequence",permalink:"/docs/learn/operation-format-execution"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Gas in operations",id:"gas-in-operations",level:2},{value:"Gas in autonomous smart contracts",id:"gas-in-autonomous-smart-contracts",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gas"},"Gas"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In Massa, there are 2 slots per second. At each slot, an ensemble of autonomous smart contracts, as well as a block, are executed.\nIf a smart contract being called executed contains an infinite loop, it might hang the whole network.\nTo prevent this, it is required to cap the computation time of each slot below 500 milliseconds to allow the network to follow the slot schedule."),(0,a.kt)("p",null,"To do this we define a deterministic unit of computation time calibrated on a reference instance of the recommended hardware.\nWe call this unit ",(0,a.kt)("inlineCode",{parentName:"p"},"gas"),".\nEach smart contract instruction consumes a defined amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"gas")," when executed."),(0,a.kt)("p",null,"Protocol-defined gas limits ensuring a total slot execution time remains below 300 milliseconds\non the reference hardware are set as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the execution of autonomous smart contracts at each slot: ",(0,a.kt)("inlineCode",{parentName:"li"},"MAX_ASYNC_GAS = 1_000_000_000")),(0,a.kt)("li",{parentName:"ul"},"the execution of all the operations of a block: ",(0,a.kt)("inlineCode",{parentName:"li"},"MAX_BLOCK_GAS = 4_294_967_295"))),(0,a.kt)("h2",{id:"gas-in-operations"},"Gas in operations"),(0,a.kt)("p",null,"Block producers aim at maximizing their revenue by executing the operations that give them the highest total ",(0,a.kt)("inlineCode",{parentName:"p"},"fee")," in their blocks,\nwhile respecting the protocol-defined block size and gas limits to avoid their blocks from being rejected.\nHaving many pending operations compete for a limited amount of block space and gas creates a market for those resources.\nThis means that if the ",(0,a.kt)("inlineCode",{parentName:"p"},"fee")," of an operation is not set high enough to make it competitive given the space and gas it consumes,\nit less likely to be included by block producers.\nThey would prefer allocating those resources to other operations that are more profitable to them."),(0,a.kt)("p",null,"Given the high throughput of the network and the low hardware requirements for block producers,\nit is not computationally feasible for block producers to simulate the execution of some types of operations\nin order to estimate the amount of gas their execution would require.\nOperations such as ",(0,a.kt)("inlineCode",{parentName:"p"},"CallSC")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecuteSC")," therefore contain a declarative ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas")," field\nthat caps the amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"gas")," that can be consumed by the execution of the operation.\nThe sum of the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas")," of all the operations of a block must not exceed ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_BLOCK_GAS"),".\nBeyond that, any excess operations in the block are not executed and do not profit to the block producer.\nIt is the responsibility of the operation sender to set a ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas")," value that is high enough.\nIf the execution of the operation exceeds its declared ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas"),",\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"fee")," is still paid but any other effects of the execution are reverted."),(0,a.kt)("p",null,"The gas usage of an operation can be estimated by its sender by using the read-only mode.\nThe used gas is returned by the read-only calls/executions."),(0,a.kt)("h2",{id:"gas-in-autonomous-smart-contracts"},"Gas in autonomous smart contracts"),(0,a.kt)("p",null,"Autonomous smart contract also compete for a finite ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_ASYNC_GAS")," per slot.\nWhen emitting an autonomous smart contract message, the sender speficies a ",(0,a.kt)("inlineCode",{parentName:"p"},"fee")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas")," in the arguments.\nAutonomous smart contracts do not involve block producers, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"fee")," is simply burned at emission."),(0,a.kt)("p",null,"To replicate the priorization behavior of block producers in a deterministic way,\nthe autonomous smart contract pool sorts the autonomous smart contract messages\nby their profitability defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"fee/max_gas")," ratio."),(0,a.kt)("p",null,"The pool is of finite size ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_ASYNC_POOL_LENGTH = 10_000"),".\nExpired messages are automatically dropped from that pool.\nDespite this, if the pool still grows beyond its length limit,\nthe least profitable messages are dropped to fit the limit.\nWhen a message is dropped, its ",(0,a.kt)("inlineCode",{parentName:"p"},"coins")," are reimbursed to the sender but not its ",(0,a.kt)("inlineCode",{parentName:"p"},"fee"),"."),(0,a.kt)("p",null,"At each slot ",(0,a.kt)("inlineCode",{parentName:"p"},"S"),", the autonomous smart contract messages that can be executed at ",(0,a.kt)("inlineCode",{parentName:"p"},"S"),"\nare picked from the most profitable to the least profitable and executed in that order\nuntil their cumulated ",(0,a.kt)("inlineCode",{parentName:"p"},"max_gas")," reaches ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX_ASYNC_GAS"),".\nAutonomous smart contract messages are removed from the pool once they are executed."))}u.isMDXComponent=!0}}]);