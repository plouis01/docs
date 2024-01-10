"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[1021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={id:"routability",sidebar_label:"Routability"},i="Routability",l={unversionedId:"node/routability",id:"node/routability",title:"Routability",description:"Principle",source:"@site/docs/node/routability.mdx",sourceDirName:"node",slug:"/node/routability",permalink:"/docs/node/routability",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/routability.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1704877698,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"routability",sidebar_label:"Routability"},sidebar:"nodeSidebar",previous:{title:"Staking",permalink:"/docs/node/stake"},next:{title:"Node and client configuration",permalink:"/docs/node/all-configs"}},s={},u=[{value:"Principle",id:"principle",level:2},{value:"How to make your node routable",id:"how-to-make-your-node-routable",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"routability"},"Routability"),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"Nodes in the Massa network need to establish connections between them to communicate, propagate blocks and operations,\nand maintain consensus and synchrony all together."),(0,r.kt)("p",null,"For node A to establish a connection towards node B, node B must be routable. This means that node B has a public IP\naddress that can be reached from node A and that ports TCP 31244 and TCP 31245 are open on node B and that inbound\nconnection on those ports are allowed by firewalls on node B. Once such a connection is established, communication\nthrough this connection is bidirectional, and it does not matter anymore which one of the two nodes initiated the\nconnection establishment."),(0,r.kt)("p",null,"If only a small number of nodes are routable, all other nodes will be able to connect only to those routable nodes,\nwhich can overload them and generally hurt the decentralization and security of the network, as those few routable nodes\nbecome de-facto central communication hubs, choke points, and single points of failure. It is therefore important to\nhave as many routable nodes as possible."),(0,r.kt)("p",null,"In Massa, nodes are non-routable by default and require a manual operation to be made routable."),(0,r.kt)("h2",{id:"how-to-make-your-node-routable"},"How to make your node routable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"make sure the computer on which the node is running has a static public IP address (IPv4 or IPv6). You can retrieve the\npublic IP address of your computer by opening ipify (",(0,r.kt)("a",{parentName:"li",href:"https://api.ipify.org"},"https://api.ipify.org")," or ",(0,r.kt)("a",{parentName:"li",href:"https://api64.ipify.org"},"https://api64.ipify.org"),")"),(0,r.kt)("li",{parentName:"ul"},"if the computer running the node is behind a router/NAT, you will need to configure your router:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if the router uses DHCP, the MAC address of the computer running the node must be set to have a permanent DHCP\nlease (a local IP address that never changes, usually of form 192.168.X.XX)"),(0,r.kt)("li",{parentName:"ul"},"incoming connections on TCP ports 31244 and 31245 must be directed towards the local IP address of the computer\nrunning the node"))),(0,r.kt)("li",{parentName:"ul"},"setup the firewall on your computer to allow incoming TCP connections on ports 31244 and 31245 (example: ",(0,r.kt)("inlineCode",{parentName:"li"},"ufw allow\n31244 && ufw allow 31245")," on Ubuntu, or set up the Windows Firewall on Windows)"),(0,r.kt)("li",{parentName:"ul"},"you can then test if your ports are open by typing your public IP address and port 31244 in ",(0,r.kt)("a",{parentName:"li",href:"https://portchecker.co"},"https://portchecker.co")," (then again\nwith port 31245)"),(0,r.kt)("li",{parentName:"ul"},"edit the file ",(0,r.kt)("inlineCode",{parentName:"li"},"massa-node/config/config.toml")," (or create it if absent) with the following contents:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[protocol]\nroutable_ip = "AAA.BBB.CCC.DDD"\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"AAA.BBB.CCC.DDD")," should be replaced with your public IP address (not the local one !). IPV6 is also supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run the massa node"),(0,r.kt)("li",{parentName:"ul"},"Additionally, in your massa-client, you can check that the ",(0,r.kt)("inlineCode",{parentName:"li"},"get_status")," command shows your ",(0,r.kt)("inlineCode",{parentName:"li"},"Node's IP: <your_public_ip_address>"),".\nIf it shows ",(0,r.kt)("inlineCode",{parentName:"li"},"No routable IP set")," instead, please check again your configuration.")))}p.isMDXComponent=!0}}]);