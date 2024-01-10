"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9550],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return o?n.createElement(m,s(s({ref:t},c),{},{components:o})):n.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},286:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={id:"bootstrap",sidebar_label:"Bootstrapping in Massa"},s="Bootstrapping in Massa",i={unversionedId:"learn/bootstrap",id:"learn/bootstrap",title:"Bootstrapping in Massa",description:"Introduction",source:"@site/docs/learn/bootstrap.mdx",sourceDirName:"learn",slug:"/learn/bootstrap",permalink:"/docs/learn/bootstrap",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/bootstrap.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1704877698,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"bootstrap",sidebar_label:"Bootstrapping in Massa"},sidebar:"learnSidebar",previous:{title:"Consensus quality initiatives",permalink:"/docs/learn/architecture/consensus-quality"},next:{title:"Storage costs",permalink:"/docs/learn/storage-costs"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Security model",id:"security-model",level:2},{value:"The example of Bitcoin",id:"the-example-of-bitcoin",level:3},{value:"The case of Massa",id:"the-case-of-massa",level:3},{value:"Implementation details",id:"implementation-details",level:2},{value:"Procedure from the point of view of the node being bootstrapped",id:"procedure-from-the-point-of-view-of-the-node-being-bootstrapped",level:3},{value:"Procedure from the point of view of the bootstrap node",id:"procedure-from-the-point-of-view-of-the-bootstrap-node",level:3},{value:"Future optimizations",id:"future-optimizations",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bootstrapping-in-massa"},"Bootstrapping in Massa"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Nodes that are already part of the network are able to follow the State by observing the blocks passing through the network, verifying them, and applying the state changes they cause."),(0,a.kt)("p",null,'However, new nodes joining the network need to get an absolute "current" version of the state, which is called "bootstrapping". In some blockchains like Bitcoin, full nodes joining the network are recommended to download all blocks from the beginning (genesis) of the blockchain in order to re-verify the whole state change history.'),(0,a.kt)("p",null,"However, Massa has a triple decentralization/security/performance goal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"maximal decentralization requires that node hardware requirements stay consistent with a typical consumer desktop computer to lower the entry barrier of becoming a node runner"),(0,a.kt)("li",{parentName:"ul"},"maximal security requires that all nodes verify all blocks and operations"),(0,a.kt)("li",{parentName:"ul"},"maximal performance requires using the node hardware to its fullest (CPU, network, memory, storage)")),(0,a.kt)("p",null,"This means that the State in Massa evolves almost as fast as typical consumer desktop computers can run blocks, which implies that catching up blocks since genesis goes only slightly faster than new blocks appear in the meantime, and would take a very long time. Moreover, Massa aims at processing thousands of operations per second, which means that it produces a lot of block data every second, thus preventing nodes with the target hardware from storing the full block history and making bootstrapping from genesis impossible since old blocks are forgotten."),(0,a.kt)("p",null,"Massa nodes joining the network must therefore bootstrap by downloading the absolute current State."),(0,a.kt)("p",null,"Note that nodes can recover from short-term disconnects by asking for missing data from nodes around them once they come back in the network. However, since Massa nodes only store a short history of blocks and forget older ones, it is impossible to recover from long disconnects since the surrounding nodes have forgotten the blocks needed by the recovering node. In that case, a new State bootstrap is required."),(0,a.kt)("h2",{id:"security-model"},"Security model"),(0,a.kt)("h3",{id:"the-example-of-bitcoin"},"The example of Bitcoin"),(0,a.kt)("p",null,"To understand the security model of node bootstrap, Bitcoin is a good starting example."),(0,a.kt)("p",null,"When Bitcoin node runners decide to join the network, they first download the node software from a central source (eg. bitcoin.org). If that source is compromised, the node might end up on a different network, and/or private key theft might happen. Bitcoin therefore requires trust in the entity sourcing the node software."),(0,a.kt)("p",null,"Note that optionally, if the nodes don't wish to download the full block history they resort to trusting a more recent \"checkpoint\" state encoded in the node software. If that state is compromised, the node's knowledge of the whole ledger might be skewed."),(0,a.kt)("p",null,"Assuming the node software is not corrupted, new nodes joining the network need an initial list of peer nodes to which they need to connect first in order to discover the network. This list is hardcoded in the node software (see the bitcoin docs). If all peers pointed by this initial list are compromised, the node can end on a different (non-bitcoin) network, even if the node software itself is not compromised. Bitcoin therefore also requires trust in at least one of the initial peers."),(0,a.kt)("p",null,"Note that ending up on the wrong network can be detected by checking block hashes with an external source. But this requires trusting yet another source of data."),(0,a.kt)("h3",{id:"the-case-of-massa"},"The case of Massa"),(0,a.kt)("p",null,"The Massa case is very similar to Bitcoin's. Node runners also need to trust the source of the node software they download, as well as the initial list of peers."),(0,a.kt)("p",null,"Similarly to Bitcoin checkpoints, bootstrapping Massa nodes must obtain the current State from a trusted source, ideally the same source as the one they downloaded the node software from, in order to avoid having to trust multiple entities."),(0,a.kt)("p",null,'Downloading the state from an untrusted source can result in major issues such as coin theft. As such, bootstrapping from untrusted sources should be discouraged, and bootstrapping other nodes should be opt-in for node runners to avoid "bootstrap lists" circulating as the default way of bootstrapping from unaware node runners.'),(0,a.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,a.kt)("h3",{id:"procedure-from-the-point-of-view-of-the-node-being-bootstrapped"},"Procedure from the point of view of the node being bootstrapped"),(0,a.kt)("p",null,"Massa nodes that bootstrap start by connecting to a randomly chosen node among the ones listed in ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/config.toml"),"."),(0,a.kt)("p",null,"The bootstrap process uses a separate port and protocol than the normal Massa peer communication."),(0,a.kt)("p",null,"All communications with the chosen bootstrap node are authenticated using the public key (node ID) of the bootstrap node in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," file to prevent man-in-the-middle attacks."),(0,a.kt)("p",null,"The node being bootstrapped then attempts to download the current State, as well as an initial list of peers from the bootstrap node."),(0,a.kt)("p",null,"Once successfully bootstrapped, the node can then connect to peers, discover the rest of the network, and process live incoming blocks to keep its state up to date."),(0,a.kt)("p",null,"In Massa, the hash of the state is used as part of the proof-of-stake seed, which is a safety mechanism against malicious bootstrap nodes sending a compromised State. It ensures that nodes with an altered State eventually end up isolated from the real network because their proof-of-stake draws differ which causes them to discard incoming honest blocks. Note however that a PoS seed mismatch can take up to 2 cycles to be detected."),(0,a.kt)("p",null,"In case of bootstrap failure, the bootstrapping node retries with another randomly chosen bootstrap node after a delay."),(0,a.kt)("h3",{id:"procedure-from-the-point-of-view-of-the-bootstrap-node"},"Procedure from the point of view of the bootstrap node"),(0,a.kt)("p",null,"Massa nodes can bootstrap other nodes, with certain limitations because the procedure is heavy for the bootstrap node."),(0,a.kt)("p",null,"The bootstrap system listens on the address/port defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/config.toml"),". The node's bootstrap server can be disabled by removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," entry from the config file."),(0,a.kt)("p",null,"The Massa State is large (terabytes in the worst case), and takes time to upload to bootstrapping nodes. During that time, new changes to the state continue to appear, so new changes affecting already-uploaded parts need to be sent on-the-fly."),(0,a.kt)("p",null,"By default, Massa nodes only allow a whitelist of IP addresses to bootstrap from them. This list is present in the ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/bootstrap_whitelist.json")," file. This list is intended to prevent flooding attacks by attackers pretending to be bootstrapping, and also makes it more difficult for node runners to bootstrap from untrusted sources. If you wish to disable whitelisting and allow anyone to bootstrap from your node, simply delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap_whitelist.json")," file and restart your node."),(0,a.kt)("p",null,"A complementary ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap_blacklist.json")," (absent by default) can also be created alongside ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap_whitelist.json")," (and following the same syntax) in order to explicitly prevent certain IP addresses from bootstrapping from the node."),(0,a.kt)("p",null,"Once a node has accepted to bootstrap an incoming node, it adds the incoming node's IP address to a local cache preventing that IP from bootstrapping again for a time defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/config.toml")," (section ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap/per_ip_min_interval"),") by refusing subsequent connections from that IP during the config-defined delay. The exclusion delay is not extended if the remote IP attempts new connections during the exclusion delay. The exclusion delay is however applied if the bootstrap was accepted but failed for any reason. This aims at limiting the load on individual bootstrap nodes, and spreading the load among bootstrap nodes."),(0,a.kt)("p",null,"The number of nodes simultaneously bootstrapping from the local node is limited (",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/base_config/config.toml")," section ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap/max_simultaneous_bootstraps"),"). Excess attempts are refused but do not trigger the exclusion delay mechanism."),(0,a.kt)("h2",{id:"future-optimizations"},"Future optimizations"),(0,a.kt)("p",null,"We plan to add the possibility to download bootstrap data from untrusted sources for load-balancing, but then check the hash of the obtained state from trusted sources, and only fallback to downloading everything from trusted sources if multiple bootstrap attempts from this hybrid approach fail."))}h.isMDXComponent=!0}}]);