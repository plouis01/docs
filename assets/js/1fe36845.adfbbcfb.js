"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(r),p=a,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||s;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={},i="Architecture and Security Overview",o={unversionedId:"massaBridge/architecture-security",id:"massaBridge/architecture-security",title:"Architecture and Security Overview",description:"This page presents an overview of the architecture and security measures implemented in the bridge between the Ethereum and Massa blockchains. The bridge is designed to facilitate the secure transfer of assets between the two networks, ensuring the integrity and reliability of cross-chain transactions.",source:"@site/docs/massaBridge/architecture-security.mdx",sourceDirName:"massaBridge",slug:"/massaBridge/architecture-security",permalink:"/docs/massaBridge/architecture-security",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaBridge/architecture-security.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1715001615,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{},sidebar:"massaBridgeSidebar",previous:{title:"Instructions",permalink:"/docs/massaBridge/instructions"}},c={},l=[{value:"System Architecture",id:"system-architecture",level:2},{value:"Component Overview",id:"component-overview",level:3},{value:"User flow",id:"user-flow",level:3},{value:"Security Measures",id:"security-measures",level:3}],d={toc:l},h="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(h,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture-and-security-overview"},"Architecture and Security Overview"),(0,a.kt)("p",null,"This page presents an overview of the architecture and security measures implemented in the bridge between the Ethereum and Massa blockchains. The bridge is designed to facilitate the secure transfer of assets between the two networks, ensuring the integrity and reliability of cross-chain transactions.\nOur system is designed to ensure the secure, efficient, and transparent bridging of assets, leveraging a lock-mint and burn-redeem scheme underpinned by state-of-the-art security practices."),(0,a.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,a.kt)("h3",{id:"component-overview"},"Component Overview"),(0,a.kt)("p",null,"The bridge system comprises several key components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Massa Bridge UI"),": Serves as the user interface for initiating bridge transactions. It supports wallet connections and transaction initiations for both Ethereum and Massa blockchains."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BridgeVault Contract (Ethereum)"),": Acts as the custodian of assets on the Ethereum side. It is responsible for locking assets during the bridge process and executing redeem transactions based on verified requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bridge Contract (Massa)"),": Handles the minting of tokens on the Massa blockchain in response to locked assets on Ethereum and manages the burning of tokens for redemption back to Ethereum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Relayer Network"),": A set of independent nodes responsible for monitoring bridge transactions, verifying events, and facilitating the cross-chain communication necessary for asset transfers.")),(0,a.kt)("h3",{id:"user-flow"},"User flow"),(0,a.kt)("p",null,"To initiate bridging from Ethereum to Massa, a lock transaction is sent to the BridgeVault contract on Ethereum. This lock transaction will transfer the assets from the user's wallet to the BridgeVault contract, locking them in the process. In order to ensure that the bridge operation meet all the requirements, users should always use the Massa bridge UI. Once the lock transaction has received enough confirmations, it will be handled by the relayer network; On detecting a lock event, each individual relayer will produce a signature corresponding to this particular bridge operation. Once all of the three relayers have signed the lock transaction, the relayer network will forward this bridge operation to the Bridge contract on Massa. The Massa Bridge contract will then verify the signatures, and mint the corresponding amount of tokens to the user's wallet on Massa. The user will then receive a notification that the mint operation has been completed."),(0,a.kt)("p",null,"To initiate bridging from Massa to Ethereum, a burn transaction is sent to the Bridge contract on Massa. This burn transaction will transfer the assets from the user's wallet to the Bridge contract, burning them in the process. Once the burn transaction has received enough confirmations, it will be handled by the relayer network; On detecting a burn event, each individual relayer will produce a signature corresponding to this particular bridge operation. During the process, the Massa Bridge UI will query the relayer network for the signatures. Once all of the three relayers have produced their signatures, the Massa bridge UI will prepare the redeem transaction. The user will then sign and send the redeem transaction to the Ethereum blockchain, triggering the release of the tokens. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bridge flow",src:r(3408).Z,width:"437",height:"295"})),(0,a.kt)("h3",{id:"security-measures"},"Security Measures"),(0,a.kt)("p",null,"The BridgeVault contract on Ethereum holds the assets locked during the bridging process. The only way assets can be redeemed is by sending a message signed by the 3 out of 3 nodes of the relayer network. This ensures that the assets are only released when the relayer network has verified the corresponding burn transaction on Massa. The public keys of the relayer nodes are stored in the Bridge contract on Massa, and can only be updated by a gnosis safe multisig wallet controlled by the bridge operators. Moreover, a 48h timeLock from Openzeppelin is implemented in the Bridge contract on Massa, which requires a 48h delay before the relayer network can update the public keys. This ensures that the bridge operators have enough time to intervene in case of a malicious update of the public keys.\nThe BridgeVault contract can charge fees. However they have been set to 0 for the time being."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gnosis safe"),"\nSafe proxy address: ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xDB1a35B0C8Bb727A8ce5314B4fCCa874614138BB"},"0xDB1a35B0C8Bb727A8ce5314B4fCCa874614138BB")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signer Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Signer 1"),(0,a.kt)("td",{parentName:"tr",align:null},"0x675Ebdc155e89c31229b0C7aF38D8D355E61F50"),(0,a.kt)("td",{parentName:"tr",align:null},"Active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Signer 2"),(0,a.kt)("td",{parentName:"tr",align:null},"0xB744a01980b2f1ee61ED742df42B21b3AAfE1A31"),(0,a.kt)("td",{parentName:"tr",align:null},"Active")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Signer 3"),(0,a.kt)("td",{parentName:"tr",align:null},"0xcF6fB27ddC0A0270A36F7E7E5270CB179D2bfD32"),(0,a.kt)("td",{parentName:"tr",align:null},"Active")))),(0,a.kt)("p",null,"The Bridge contract on Massa is responsible for minting the tokens in response to the locked assets on Ethereum. The Bridge contract can only mint tokens when it receives a message signed by 3 out of 3 nodes of the relayer network. The synthetic token contracts ownership, has yet to be transferred to a multisig wallet after deployment. The public keys of the relayer nodes are hardcoded in the contract and cannot be updated. This contract as well can be paused for maintenance or security.\nThe Bridge contract can charge fees but have been set to 0."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"On chain architecture",src:r(2986).Z,width:"632",height:"412"})),(0,a.kt)("p",null,"The relayer network is a set of independent nodes responsible for monitoring bridge transactions, verifying events, and facilitating the cross-chain communication necessary for asset transfers. The three nodes are hosted on different cloud providers to avoid common points of failure. For redundancy, each node has a fallback mechanism and redundant RPC connections."),(0,a.kt)("p",null,"The Massa Bridge smart contracts have undergone security audits conducted by Certik, the report is publicly available ",(0,a.kt)("a",{parentName:"p",href:"https://skynet.certik.com/projects/massa-labs?auditId=Massa%20Labs%20-%20EVM%20Bridge"},"here"),"."))}u.isMDXComponent=!0},3408:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bridge-flow-3f26f7a6f935f1d502fc251e12e05c17.png"},2986:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/on-chain-architecture-06b330875e3d51182be3d15148a11ba7.png"}}]);