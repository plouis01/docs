"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9711],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,s(s({ref:e},d),{},{components:a})):n.createElement(h,s({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3150:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={id:"sdk",sidebar_label:"AS SDK"},s="AS-SDK",i={unversionedId:"build/smart-contract/sdk",id:"build/smart-contract/sdk",title:"AS-SDK",description:"AS-SDK is a software development kit designed specifically for Massa smart contracts written in AssemblyScript. It provides a set of functions and objects that wrap the ABIs exposed by the node.",source:"@site/docs/build/smart-contract/as-sdk.md",sourceDirName:"build/smart-contract",slug:"/build/smart-contract/sdk",permalink:"/docs/build/smart-contract/sdk",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/build/smart-contract/as-sdk.md",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1712736948,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"sdk",sidebar_label:"AS SDK"},sidebar:"buildSidebar",previous:{title:"WebAssembly Module",permalink:"/docs/build/smart-contract/webassembly-module"},next:{title:"Introduction",permalink:"/docs/build/wallet/intro"}},c={},l=[{value:"Coins",id:"coins",level:2},{value:"Context",id:"context",level:2},{value:"Contract",id:"contract",level:2},{value:"OpDatastore",id:"opdatastore",level:2},{value:"Storage",id:"storage",level:2},{value:"Utilities",id:"utilities",level:2}],d={toc:l},u="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"as-sdk"},"AS-SDK"),(0,r.kt)("p",null,"AS-SDK is a software development kit designed specifically for Massa smart contracts written in AssemblyScript. It provides a set of functions and objects that wrap the ABIs exposed by the node."),(0,r.kt)("p",null,"It includes several namespaces, each containing functions and objects that provide specific functionalities:"),(0,r.kt)("h2",{id:"coins"},"Coins"),(0,r.kt)("p",null,"The Coins namespace includes functions for interacting with wallet balances and transfers. For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/Coins.html"},"AS-SDK Coins documentation"),"."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"The Context namespace includes functions to interact with the execution context of a smart contract on the Massa blockchain. This namespace is particularly useful to retrieve information about the current state of a smart contract, such as the caller and callee of the current contract, the call stack, the amount of transferred coins, the remaining gas, and the timestamp. For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/Context.html"},"AS-SDK Context documentation"),"."),(0,r.kt)("h2",{id:"contract"},"Contract"),(0,r.kt)("p",null,"The Contract namespace includes functions to interact with other smart contract functions and manipulate their bytecode. This namespace is particularly useful to create new smart contracts and send messages to existing ones. For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/Contract.html"},"AS-SDK Contract documentation"),"."),(0,r.kt)("h2",{id:"opdatastore"},"OpDatastore"),(0,r.kt)("p",null,"The OpDatastore namespace includes functions to interact with the operation datastore. This key/value storage can be filled by the operation creator and then used by the smart contract being executed. This namespace is particularly useful to read the data that is passed with the bytecode in an ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/architecture/basic-concepts#smart-contract-operations"},"execute smart contract operation"),". For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/OpDatastore.html"},"AS-SDK OpDatastore documentation"),"."),(0,r.kt)("h2",{id:"storage"},"Storage"),(0,r.kt)("p",null,"The Storage namespace includes functions to interact with the key-value datastore. This namespace is particularly useful to read and write data that is expected to persist between contract executions, such as contract state or user information. For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/Storage.html"},"AS-SDK Storage documentation"),"."),(0,r.kt)("h2",{id:"utilities"},"Utilities"),(0,r.kt)("p",null,"The Utilities namespace includes various utility functions, such as event generation, base58 encoding and decoding, and public key to address conversion. For more information on this namespace, see the ",(0,r.kt)("a",{parentName:"p",href:"https://as-sdk.docs.massa.net/modules/Utilities.html"},"AS-SDK Utilities documentation"),"."))}p.isMDXComponent=!0}}]);