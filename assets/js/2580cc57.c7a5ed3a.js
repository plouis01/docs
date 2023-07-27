"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6489],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const s={id:"basic-concepts",sidebar_label:"Basic concepts"},r="Basic concepts",i={unversionedId:"learn/architecture/basic-concepts",id:"learn/architecture/basic-concepts",title:"Basic concepts",description:"Let's dive into the basic definitions and concepts of Massa blockchain.",source:"@site/docs/learn/architecture/basic-concepts.mdx",sourceDirName:"learn/architecture",slug:"/learn/architecture/basic-concepts",permalink:"/docs/learn/architecture/basic-concepts",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/architecture/basic-concepts.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1690461717,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{id:"basic-concepts",sidebar_label:"Basic concepts"},sidebar:"learnSidebar",previous:{title:"Welcome to Massa",permalink:"/docs/learn/introduction"},next:{title:"Node architecture",permalink:"/docs/learn/architecture/node-architecture"}},l={},c=[{value:"Ledger",id:"ledger",level:2},{value:"Address",id:"address",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Autonomous Smart Contract Execution",id:"autonomous-smart-contract-execution",level:3},{value:"Storage costs",id:"storage-costs",level:2},{value:"Operation",id:"operation",level:2},{value:"Operation types",id:"operation-types",level:3},{value:"Transaction operations",id:"transaction-operations",level:4},{value:"Buy/Sell Rolls operations",id:"buysell-rolls-operations",level:4},{value:"Smart Contract operations",id:"smart-contract-operations",level:4},{value:"Block",id:"block",level:2},{value:"Endorsements",id:"endorsements",level:3}],d={toc:c},h="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(h,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-concepts"},"Basic concepts"),(0,o.kt)("p",null,"Let's dive into the basic definitions and concepts of Massa blockchain."),(0,o.kt)("p",null,"The goal of the Massa network is to build a consensus between ",(0,o.kt)("strong",{parentName:"p"},"nodes")," to gather\nand order ",(0,o.kt)("strong",{parentName:"p"},"blocks")," that contain ordered lists of ",(0,o.kt)("strong",{parentName:"p"},"operations"),".\nAn operation ultimate purpose once executed is to act as transitions for the global network state, called the ",(0,o.kt)("strong",{parentName:"p"},"ledger"),"."),(0,o.kt)("p",null,"Operations are produced by external clients and sent to the Massa network via a node.\nSome operations are containing code to be run as ",(0,o.kt)("strong",{parentName:"p"},"smart contracts"),", enabling complex programmatic\nmodifications of the ledger.\nNodes gather pending operations and group them into blocks. Each block has limited space to store operations.\nTraditional blockchains typically link blocks sequentially, including a hash of the previous block in the block\nheader for temporal ordering. In contrast, Massa blocks are organized into a complex spatio-temporal structure,\nenabling parallelization and improved block-creation performance."),(0,o.kt)("p",null,"Instead of one chain, there are exactly 32 ",(0,o.kt)("strong",{parentName:"p"},"threads")," of chains running in parallel, with blocks equally\nspread on each thread over time, and stored inside ",(0,o.kt)("strong",{parentName:"p"},"slots")," that are spaced at fixed time intervals:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(812).Z,width:"887",height:"387"})),(0,o.kt)("p",null,"The time between two slots located on the same thread is called a ",(0,o.kt)("strong",{parentName:"p"},"period")," and lasts 16s (conventionally called ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("msub",{parentName:"mrow"},(0,o.kt)("mi",{parentName:"msub"},"t"),(0,o.kt)("mn",{parentName:"msub"},"0"))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t_0")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7651em",verticalAlign:"-0.15em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,o.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,o.kt)("span",{parentName:"span"})))))))))),").\nCorresponding slots in threads are slightly shifted in time relative to one another, by one period divided by the number\nof threads, which is ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"16"),(0,o.kt)("mi",{parentName:"mrow"},"s"),(0,o.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,o.kt)("mn",{parentName:"mrow"},"32"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mn",{parentName:"mrow"},"0.5"),(0,o.kt)("mi",{parentName:"mrow"},"s")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"16s/32 = 0.5s")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"16"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,o.kt)("span",{parentName:"span",className:"mord"},"/32"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"0.5"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),", so that a period contains exactly 32 slots equally spaced over the 32 threads.\nA ",(0,o.kt)("strong",{parentName:"p"},"cycle")," is defined as the succession of 128 periods and so lasts a bit more than 34min. Periods are numbered by\nincrements of one, so can be used together with a thread number to uniquely identify a block slot. Period 0 is the\ngenesis and contains genesis blocks with no parents."),(0,o.kt)("p",null,"The job of the Massa nodes network is to essentially collectively fill up slots with valid blocks. To do so,\nat each interval of 0.5s, a specific node in the network is elected to be allowed to create a block (more about\nthe selection process and the proof of stake sybil resistance mechanism ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/architecture/node-architecture#selector-module-proof-of-stake-sybil-resistance"},"here"),"),\nand will be rewarded if it creates a valid block in time. It is also possible that a node misses its opportunity\nto create the block, in which case the slot will remain empty (this is called a ",(0,o.kt)("strong",{parentName:"p"},"block miss"),")."),(0,o.kt)("p",null,"In traditional blockchains, blocks are simply referencing their unique parent, forming a chain. In the case of\nMassa, each block is referencing one parent block in each thread (so, 32 parents). Here is an example\nillustrated with one particular block:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2776).Z,width:"887",height:"328"})),(0,o.kt)("p",null,"Let\u2019s introduce some relevant definitions and concepts generally necessary to understand how the Massa network operates.\nWe will then explain the node architecture and how the whole system works."),(0,o.kt)("h2",{id:"ledger"},"Ledger"),(0,o.kt)("p",null,"The ledger is a map that stores a global mapping between addresses and information related to these addresses.\nIt is replicated in each node. The consensus building mechanism ensures that agreement on what operations have\nbeen finalized (and in what order) will be reached over the whole network. The ledger is the state of the Massa network,\nand operations (see below) are requests to modify the ledger. "),(0,o.kt)("p",null,"The information stored in the ledger with each address is the following:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Ledger Information Associated with Each Address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"balance")),(0,o.kt)("td",null,"The amount of Massa coins owned by the address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"bytecode")),(0,o.kt)("td",null,"When the address references a smart contract, this is the compiled code corresponding to the smart contract (typically contains several functions that act as API entry points for the smart contract)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"datastore")),(0,o.kt)("td",null,"A key/value map that can store any persistent data related to a smart contract, its variables, etc"))),(0,o.kt)("p",null,"In order to promote widespread adoption and facilitate node running with reduced entry fees, the size of the ledger in Massa\nhas been limited to a maximum of 1 TB.\nThis decision sets Massa apart from other benchmark blockchain ledgers and makes it more accessible to users."),(0,o.kt)("p",null,"To achieve such a small ledger size, several technical decisions were made.\nFirstly, state changes that have been finalized and are found in the final Blocks no longer require record-keeping in the Ledger's memory.\nThis optimization helps minimize the storage requirements for historical data, allowing the ledger to operate efficiently within the specified size limit."),(0,o.kt)("p",null,"In addition to this, Massa has introduced ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/storage-costs"},"Storage Costs")," as a novel approach to enhance storage efficiency.\nUsers are now required to lock a certain amount of coins when they claim storage space.\nThis innovative correlation between storage and circulating coins ensures a balanced utilization of resources.\nBy implementing this mechanism, Massa optimizes storage utilization while maintaining the integrity and security of the ledger."),(0,o.kt)("p",null,"These technical decisions, including the exclusion of finalized state changes from ledger memory and the introduction of Storage\nCosts, play a crucial role in enabling the compact size of the ledger and ultimately facilitating a more efficient and accessible\nblockchain ecosystem."),(0,o.kt)("h2",{id:"address"},"Address"),(0,o.kt)("p",null,"An address on the Massa blockchain serves as your unique identity, granting you the ability to engage in various operations,\nstore information, and exchange data with other participants. With an address, you gain access to a wide range of functionalities\nwithin the blockchain ecosystem."),(0,o.kt)("p",null,"Using your address, you can initiate operations that interact with the blockchain.\nThis includes executing transactions, submitting smart contract calls, and engaging in other blockchain activities.\nYour address acts as the key to unlock these capabilities, allowing you to participate fully in the decentralized network."),(0,o.kt)("p",null,"Furthermore, your address enables you to store and retrieve information on the blockchain. Whether it's personal data, financial records, or any other form of digital information, you can securely store it using your address as the reference. This provides a reliable and immutable storage solution within the blockchain environment."),(0,o.kt)("p",null,"Importantly, your address also facilitates communication and data exchange with other participants on the blockchain.\nBy sharing your address with others, you can interact, transact, and collaborate with different individuals and entities\nwithin the blockchain network.\nThis seamless exchange of data and value promotes a decentralized and interconnected ecosystem."),(0,o.kt)("p",null,"Each user address on Massa has a public and private key associated with it.\nThis is how messages can be signed and identity enforced.\nThe address of an account is simply the hash of its public key. "),(0,o.kt)("p",null,"Addresses are generated using a specific format that includes a prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and a base58 encoding. The prefix distinguishes between user addresses, linked to a KeyPair, and smart-contract addresses, denoted by the prefixes ",(0,o.kt)("inlineCode",{parentName:"p"},"U")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," respectively."),(0,o.kt)("p",null,"For user addresses (AU), the hash calculation involves taking the Blake3 hash of the byte representation of\nthe user's public key.\nThis process ensures a unique and secure identification for each user address within the system."),(0,o.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,o.kt)("p",null,"Smart contracts are a piece of code that can be run inside the Massa virtual machine, which can modify the ledger,\nand accept incoming requests through a public interface (via smart-contract operations). "),(0,o.kt)("p",null,"Smart contracts are currently written in AssemblyScript, a derivation from TypeScript, which is itself a\ntype-safe version of JavaScript. AssemblyScript compiles to WebAssembly bytecode (wasm). Massa nodes Execution Module runs such bytecode.\nSmart contracts have access to their own datastore, so they can modify the ledger."),(0,o.kt)("p",null,"Smart contracts follow a different hash calculation than user addresses. It begins by constructing a byte array comprising various elements.\nThis array consists of the slot represented in 5 bytes, with 4 bytes allocated for the period (encoded as a u64 in big endian\nformat), 1 byte for the thread, and an index that increments for each address created within the same slot.\nThe index value is represented as a u64 in big endian format and is reset at the start of each new slot.\nAdditionally, a single byte is appended to indicate whether the address is for real execution (1) or read-only execution (0)."),(0,o.kt)("p",null,"The resulting byte array is then subject to the Blake3 hash function, generating a unique\nhash value that serves as the SC address."),(0,o.kt)("h3",{id:"autonomous-smart-contract-execution"},"Autonomous Smart Contract Execution"),(0,o.kt)("p",null,"One particularity of Massa smart contracts compared to other blockchain smart contracts is their ability to wake\nup by themselves independently of an exterior request on their interface. We call them Autonomous Smart Contracts (ASCs),\nas they allow more autonomy and less dependency on external centralized services."),(0,o.kt)("p",null,"ASCs offer a plethora of use cases that leverage their self wake-up functionality.\nIn the realm of Decentralized Finance (DeFi), these contracts can automate liquidations,\nyield farming strategies, and portfolio rebalancing.\nSupply chain management benefits from autonomous contracts through automated inventory management and quality control processes.\nIn the insurance industry, claims settlements can be accelerated with instant payments and parametric insurance.\nGaming and NFT platforms can provide dynamic and interactive experiences with evolving NFTs and automated auctions.\nAdditionally, real estate transactions can be streamlined with escrow automation and simplified rental agreements.\nThese use cases exemplify the transformative potential of Autonomous Smart Contracts in enabling automated and efficient\nprocesses across various industries."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about Autonomous Smart Contracts ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/asc/intro"},"here"),".")),(0,o.kt)("h2",{id:"storage-costs"},"Storage costs"),(0,o.kt)("p",null,"In Massa, each network node maintains a full copy of the ledger. Having a massive ledger size (hundreds of terabytes), would pose high entry barriers for potential node runners. To ensure smooth operation and enable node hosting at home, it's essential to establish a reasonable size limit, and remove the need for excessive storage capacity. After careful consideration, we have determined that a storage size limit of 1TB strikes the right balance. This means that each participant can store data on the ledger until it reaches the 1TB threshold. By implementing this limit, we aim to promote widespread adoption and empower individuals to run nodes effortlessly. "),(0,o.kt)("p",null,"In order to enforce this limit, users are required to lock a corresponding amount of coins for each byte of storage they claim. This applies to various data elements such as your address, balance, keys in your datastore, bytecode, and more. By locking coins, you establish a commitment that ensures fair usage of storage resources. Once you release your allocated space in the storage, the locked coins are subsequently released as well. This mechanism guarantees a balanced and accountable approach to managing storage within the network."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Read more about storage costs ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/storage-costs"},"here"),".")),(0,o.kt)("h2",{id:"operation"},"Operation"),(0,o.kt)("p",null,"At its core, the Massa network revolves around the aggregation, sequencing, and execution of operations. Operations are\nrecorded inside blocks that are located in slots. "),(0,o.kt)("p",null,"Operations are denoted by a string prefixed with 'O' that encapsulate crucial information within a byte array.\nThe byte array encompasses the version in a u64 varint format, the Blake3 hash of the fully serialized content\nof the operation, and the public key of the creator.\nBy meticulously organizing and recording operations within blocks that reside in specific slots,\nthe Massa network ensures the integrity and efficiency of its operations."),(0,o.kt)("h3",{id:"operation-types"},"Operation types"),(0,o.kt)("p",null,"There are three types of operations: transactions, roll operations, and smart contract code execution.\nThe general structure of an operation is the following, and the different types of operations differ by their payload:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Operation header")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"creator_public_key")),(0,o.kt)("td",null,"The public key of the operation creator (32 bytes)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"expiration_period")),(0,o.kt)("td",null,"Period after which the operation is expired (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"fee")),(0,o.kt)("td",null,"The amount of fees the creator is willing to pay (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"type")),(0,o.kt)("td",null,"The type of operation (from 0 to 4: transaction, rollbuy, rollsell, executesc, callsc) (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"payload")),(0,o.kt)("td",null,"The content of the operation (see below)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"signature")),(0,o.kt)("td",null,"Signature of all the above with the private key of the operation creator (64 bytes)"))),(0,o.kt)("h4",{id:"transaction-operations"},"Transaction operations"),(0,o.kt)("p",null,"Transactions are operations that move native Massa coins between addresses. Here is the corresponding payload:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Transaction payload")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"amount")),(0,o.kt)("td",null,"The amount of coins to transfer (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"destination_address")),(0,o.kt)("td",null,"The address of the recipient (32 bytes)"))),(0,o.kt)("h4",{id:"buysell-rolls-operations"},"Buy/Sell Rolls operations"),(0,o.kt)("p",null,"Rolls are staking tokens that participants can buy or sell with native Massa coins. By owning rolls,\naddresses can participate in block creation  ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/stake"},"more about staking below"),".\nThis is done via special operations, with a simple payload:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Roll buy/sell payload")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"nb_of_rolls")),(0,o.kt)("td",null,"The number of rolls to buy or to sell (u64 varint)"))),(0,o.kt)("h4",{id:"smart-contract-operations"},"Smart Contract operations"),(0,o.kt)("p",null,"Smart Contracts are pieces of code that can be run inside the Massa virtual machine. There are two ways\nof calling for the execution of code; by direct execution of bytecode, and by a smart-contract function call.\nFormer is done using the Execute SC operation, and latter with Call SC operation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute SC operation"),(0,o.kt)("p",{parentName:"li"},"The ExecuteSC operation provides a powerful functionality within the Massa network by enabling the execution of smart contracts\ndirectly instead of storing them.\nInstead of storing the bytecode, the code itself is placed within the operation as a smart contract.\nWhen the ExecuteSC operation is executed, the blockchain triggers the execution of the main function within\nthe smart contract code. After the code is executed, the blockchain proceeds to other tasks while retaining\nand reflecting the changes made to the ledger and other relevant data.\nThis approach ensures that the executed changes are recorded and maintained on the ledger, rather than\nretaining the bytecode itself.\nBy executing smart contracts in this manner, the Massa network offers flexibility and efficiency\nin managing and executing code within its blockchain ecosystem."))),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Execute SC payload")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_gas")),(0,o.kt)("td",null,"The maximum gas spendable for this operation (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"bytecode_len")),(0,o.kt)("td",null,"The length of the bytecode field (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"bytecode")),(0,o.kt)("td",null,"The bytecode to run (in the context of the caller address)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"datastore_len")),(0,o.kt)("td",null,"The number of the datastore keys (u64 varint), each record is then stored one after another")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"list of datastore records"),(0,o.kt)("td",null,"Concatenation of ",(0,o.kt)("code",null,"key_len")," (u8), ",(0,o.kt)("code",null,"key"),", ",(0,o.kt)("code",null,"value_len")," (u64 varint), ",(0,o.kt)("code",null,"value")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Call SC operation")),(0,o.kt)("p",null,"Here, the code is indirectly called via the call to an existing smart contract function, together with the required parameters: "),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Call SC")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_gas")),(0,o.kt)("td",null,"The maximum gas spendable for this operation (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"coins")),(0,o.kt)("td",null,"The coins transferred in the call (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"target_address")),(0,o.kt)("td",null,"The address of the targeted smart contract (32 bytes)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"function_name_length")),(0,o.kt)("td",null,"The length of the name of the function that is called (u8)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"function_name")),(0,o.kt)("td",null,"The name of the function that is called (utf8)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"param_len")),(0,o.kt)("td",null,"The number of parameters of the function call (u64 varint)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"params")),(0,o.kt)("td",null,"The parameters of the function call"))),(0,o.kt)("h2",{id:"block"},"Block"),(0,o.kt)("p",null,"A block is a data structure built by nodes and its function is to aggregate several operations. As explained above,\nfor each new slot that becomes active, a particular node in the network is elected in a deterministic way with the\ntask of creating the block that will be stored in that slot (more about this in the description of the Selector\nModule below). A block from a given thread can only contain operations originating from a creator_public_key whose\nhash\u2019s five first bits designate the corresponding thread, thus implicitly avoiding collisions in operations integrated into parallel threads. Block size is limited to 1 MB."),(0,o.kt)("p",null,"The content of a block is as follows:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Block header")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"slot")),(0,o.kt)("td",null,"A description of the block slot, defined by a couple (period, thread) that uniquely identify it")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"creator_public_key")),(0,o.kt)("td",null,"The public key of the block creator (32 bytes)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"parents")),(0,o.kt)("td",null,"A list of the 32 parents of the block, one parent per thread (parent blocks are identified by the block hash)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"endorsements")),(0,o.kt)("td",null,"A list of the 16 endorsements for the block (more about endorsements below)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"operations_hash")),(0,o.kt)("td",null,"A hash of all the operations included in the block (=hash of the block body below)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"signature")),(0,o.kt)("td",null,"Signature of all the above with the private key of the block creator")),(0,o.kt)("tr",null,(0,o.kt)("th",{colspan:"2"},"Block body")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"operations")),(0,o.kt)("td",null,"The list of all operations included in the block"))),(0,o.kt)("h3",{id:"endorsements"},"Endorsements"),(0,o.kt)("p",null,"Endorsements are optional inclusion in the block, but their inclusion is incentivized for block creators. They are\nvalidations of the fact that the parent block on the thread of the block is the best parent that could have been\nchosen, done by other nodes that have also been deterministically selected via the proof of stake probability\ndistribution (see below). A comprehensive description of endorsements can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/architecture/consensus-quality#endorsement"},"here"),", so we will\nnot go further into details in the context of this introduction."))}p.isMDXComponent=!0},2776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/block_parents.drawio-38637c12a34e50307bf25a25f082254d.svg"},812:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure.drawio-5ccea2d6795f98b55e11a04ae9ce1ae7.svg"}}]);