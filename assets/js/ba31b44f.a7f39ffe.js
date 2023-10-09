"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?l.createElement(m,o(o({ref:t},c),{},{components:n})):l.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={id:"stake",sidebar_label:"Staking"},o="Staking",s={unversionedId:"node/stake",id:"node/stake",title:"Staking",description:'In Massa, the minimal number of coins required to be able to stake is 100 MAS (which is called one "roll"). The total',source:"@site/docs/node/stake.mdx",sourceDirName:"node",slug:"/node/stake",permalink:"/docs/node/stake",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/stake.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1696865963,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"stake",sidebar_label:"Staking"},sidebar:"nodeSidebar",previous:{title:"Creating a wallet",permalink:"/docs/node/wallet"},next:{title:"Routability",permalink:"/docs/node/routability"}},i={},u=[{value:"Buying rolls",id:"buying-rolls",level:2},{value:"Telling your node to start staking with your rolls",id:"telling-your-node-to-start-staking-with-your-rolls",level:2},{value:"Selling rolls",id:"selling-rolls",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staking"},"Staking"),(0,r.kt)("p",null,'In Massa, the minimal number of coins required to be able to stake is 100 MAS (which is called one "roll"). The total\ninitial supply is 500m MAS, so in theory, there could be 5 million people staking.'),(0,r.kt)("p",null,"Addresses are randomly selected to stake (create blocks) in all threads, based on the number of rolls they possess. The\nlist of stakers and their rolls can be seen ",(0,r.kt)("a",{parentName:"p",href:"https://massa.net/testnet/staking/"},"here"),"."),(0,r.kt)("p",null,'Rolls can be bought with Massa coins or sold to get the coins back. If you already have more than 100 Massa, you can\ncontinue this tutorial, otherwise, send your address to the faucet bot in the "testnet-faucet" channel of our\n',(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/massa"},"Discord"),"."),(0,r.kt)("h2",{id:"buying-rolls"},"Buying rolls"),(0,r.kt)("p",null,"Get the address that has coins in your wallet. In the Massa client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("p",null,"Buy rolls with it: put your address, the number of rolls you want to buy, and the operation fee (you can put 0):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"buy_rolls <address> <roll count> <fee>\n")),(0,r.kt)("p",null,"As an example, the command for buying 1 roll with 0 fee for the address\n",(0,r.kt)("inlineCode",{parentName:"p"},"A12dr48yZaL2NpQkwsrpsNLGDpndFUCVSdYdSiQh4UfkYRMo17km")," is: ",(0,r.kt)("inlineCode",{parentName:"p"},"buy_rolls\nA12dr48yZaL2NpQkwsrpsNLGDpndFUCVSdYdSiQh4UfkYRMo17km 1 0")),(0,r.kt)("p",null,"It should take less than one minute for your roll to become final, check with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("h2",{id:"telling-your-node-to-start-staking-with-your-rolls"},"Telling your node to start staking with your rolls"),(0,r.kt)("p",null,"Get the address that has rolls in your wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("p",null,"Register your address so that your node start to stake with it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node_start_staking <your_address>\n")),(0,r.kt)("p",null,"Now you should wait some time so that your rolls become active: 3 cycles of 128 periods (one period is 32 blocks - 16\nsec), so about 1h40 minutes."),(0,r.kt)("p",null,"You can check if your rolls are active with the same command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,r.kt)("p",null,"When your rolls become active, that's it! You're staking! Please note, having one roll is enough. On the testnet, we\ndon't value how many rolls you have, but how reliable is your node."),(0,r.kt)("p",null,"You should be selected to create blocks in the different threads."),(0,r.kt)("p",null,"To check when your address is selected to stake, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"get_addresses <your_address>\n")),(0,r.kt)("p",null,'and look at the "next draws" section.'),(0,r.kt)("p",null,"Also check that your balance increases, for each block or endorsement that you create you should get a small reward."),(0,r.kt)("h2",{id:"selling-rolls"},"Selling rolls"),(0,r.kt)("p",null,"If you want to get back some or all of your coins, sell rolls the same way you bought them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sell_rolls <address> <roll count> <fee>\n")),(0,r.kt)("p",null,"It should take some time again for your coins to be credited, and they will be frozen for 1 cycle before you can spend\nthem, again check with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")))}p.isMDXComponent=!0}}]);