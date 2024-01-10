"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=l,m=p["".concat(r,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const o={id:"initial",sidebar_label:"Initial node runners"},i="Installing an Initial Node",s={unversionedId:"node/initial",id:"node/initial",title:"Installing an Initial Node",description:"Congratulations !",source:"@site/docs/node/initial.mdx",sourceDirName:"node",slug:"/node/initial",permalink:"/docs/node/initial",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/initial.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1704877698,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"initial",sidebar_label:"Initial node runners"},sidebar:"nodeSidebar",previous:{title:"Node and client configuration",permalink:"/docs/node/all-configs"},next:{title:"Frequently Asked Questions",permalink:"/docs/node/faq"}},r={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Step 1: Installation",id:"step-1-installation",level:2},{value:"Installing from binaries (simple installation)",id:"installing-from-binaries-simple-installation",level:3},{value:"Installing from source code (advanced installation)",id:"installing-from-source-code-advanced-installation",level:3},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:4},{value:"On Windows",id:"on-windows",level:4},{value:"Step 2: Configuration",id:"step-2-configuration",level:2},{value:"Routability",id:"routability",level:3},{value:"Step 3: Launch your node",id:"step-3-launch-your-node",level:2},{value:"If your node was installed from binaries (simple installation)",id:"if-your-node-was-installed-from-binaries-simple-installation",level:3},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos-1",level:4},{value:"If your node was installed from source code (advanced installation)",id:"if-your-node-was-installed-from-source-code-advanced-installation",level:3},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos-2",level:4},{value:"On Windows",id:"on-windows-1",level:4},{value:"Step 4: Activating the staking wallet",id:"step-4-activating-the-staking-wallet",level:2},{value:"Importing your wallet in the client",id:"importing-your-wallet-in-the-client",level:3},{value:"If you have saved your secret/private key",id:"if-you-have-saved-your-secretprivate-key",level:4},{value:"If you have saved an encrypted wallet file",id:"if-you-have-saved-an-encrypted-wallet-file",level:4},{value:"Enabling staking on your node",id:"enabling-staking-on-your-node",level:3},{value:"Step 5: Checking your node&#39;s status",id:"step-5-checking-your-nodes-status",level:2},{value:"Check your routability status",id:"check-your-routability-status",level:3},{value:"Check your node staking address",id:"check-your-node-staking-address",level:3},{value:"Make sure you are connected to peers",id:"make-sure-you-are-connected-to-peers",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-an-initial-node"},"Installing an Initial Node"),(0,l.kt)("p",null,"Congratulations !\nIf your address has non-zero initial rolls ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/node_initial_setup/initial_rolls.json"},"in this listing"),"\nthen you are among the happy initial node runners that were chosen to support the mainnet from day zero."),(0,l.kt)("p",null,"This means that you will be running a node BEFORE the planned genesis that will happen January 15th, which implies that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"your node needs to be set up as soon as possible, at most on January 14th"),(0,l.kt)("li",{parentName:"ul"},"there are no blocks before genesis, so no operations/transactions, and therefore no roll buys / roll sells. This means that the setup procedure is just slightly different compared to testnet."),(0,l.kt)("li",{parentName:"ul"},"only initial node runners like you will be present, so you will most likely have a lot of block production and rewards")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"You need to have a wallet for which the address has non-zero coins here ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Massa-Foundation/genesis-ledger/blob/main/node_initial_setup/initial_rolls.json"},"in this listing"),".\nYou will be using this wallet."),(0,l.kt)("p",null,"You need a computer with 8 cores, 16 GB RAM, 1TB disk and a decent internet connection.\nMore info in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/node/faq"},"FAQ"),"."),(0,l.kt)("h2",{id:"step-1-installation"},"Step 1: Installation"),(0,l.kt)("h3",{id:"installing-from-binaries-simple-installation"},"Installing from binaries (simple installation)"),(0,l.kt)("p",null,"If you just wish to run a Massa node without compiling it yourself, you can simply download the latest binary below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.1.0/massa_MAIN.1.0_release_windows.zip"},"Windows executable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.1.0/massa_MAIN.1.0_release_linux.tar.gz"},"Linux binary")," -\nonly works with libc2.28 and higher (for example Ubuntu 20.04 and higher)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/MAIN.1.0/massa_MAIN.1.0_release_macos_aarch64.tar.gz"},"MacOS binary")),(0,l.kt)("li",{parentName:"ul"},"Other binaries can be found on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/tag/MAIN.1.0"},"https://github.com/massalabs/massa/releases/tag/MAIN.1.0"))),(0,l.kt)("h3",{id:"installing-from-source-code-advanced-installation"},"Installing from source code (advanced installation)"),(0,l.kt)("p",null,"Otherwise, if you wish to run a Massa node from source code, here are the steps to follow:"),(0,l.kt)("h4",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Ubuntu, these libs must be installed: ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt install pkg-config curl git build-essential libssl-dev libclang-dev cmake")),(0,l.kt)("li",{parentName:"ul"},"on MacOS: ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"install ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rustup"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")),(0,l.kt)("li",{parentName:"ul"},"configure path: ",(0,l.kt)("inlineCode",{parentName:"li"},"source $HOME/.cargo/env")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"install rust stable version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup toolchain install 1.74.1")),(0,l.kt)("li",{parentName:"ul"},"set it as default: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default 1.74.1")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"clone this repo: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/massalabs/massa.git"))),(0,l.kt)("h4",{id:"on-windows"},"On Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Set up your Rust environment"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Windows, you should first follow the indications from Microsoft to be able to run on a Rust environment ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/windows/dev-environment/rust/setup"},"here"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Install Visual Studio (recommended) or the Microsoft C++ Build Tools."),(0,l.kt)("li",{parentName:"ul"},'Once Visual Studio is installed, click on C++ Build Tool. Select on the right column called "installation details" the following packages:',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MSCV v142 -- VS 2019"),(0,l.kt)("li",{parentName:"ul"},"Windows 10 SDK"),(0,l.kt)("li",{parentName:"ul"},"C++ CMake tools for Windows"),(0,l.kt)("li",{parentName:"ul"},"Testing Tools Core Feature"))),(0,l.kt)("li",{parentName:"ul"},"Click install on the bottom right to download and install those packages"))),(0,l.kt)("li",{parentName:"ul"},"Install NASM: ",(0,l.kt)("a",{parentName:"li",href:"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/"},"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/")," choose win32 or win64 folder depending on your architecture and download then launch the installer."),(0,l.kt)("li",{parentName:"ul"},"Install Chocolatey and run: ",(0,l.kt)("inlineCode",{parentName:"li"},"choco install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"Install Rust, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"here")),(0,l.kt)("li",{parentName:"ul"},"Install Git for windows, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"here"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Clone the Massa Git Repository"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Clone the latest distributed version: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/massalabs/massa.git")),(0,l.kt)("li",{parentName:"ul"},"Change default Rust to the following stable version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default 1.74.1"))))),(0,l.kt)("h2",{id:"step-2-configuration"},"Step 2: Configuration"),(0,l.kt)("p",null,"Now that your node is installed, you need to configure it."),(0,l.kt)("h3",{id:"routability"},"Routability"),(0,l.kt)("p",null,"Please configure your node as indicated ",(0,l.kt)("a",{parentName:"p",href:"routability#how-to-make-your-node-routable"},"here"),"."),(0,l.kt)("p",null,"Without it, your node will be unstable through lack of connectivity."),(0,l.kt)("h2",{id:"step-3-launch-your-node"},"Step 3: Launch your node"),(0,l.kt)("h3",{id:"if-your-node-was-installed-from-binaries-simple-installation"},"If your node was installed from binaries (simple installation)"),(0,l.kt)("p",null,"Simply run the binaries you downloaded in the previous step:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the massa-node folder and run the massa-node executable"),(0,l.kt)("li",{parentName:"ul"},"Open the massa-client folder and run the massa-client executable")),(0,l.kt)("h4",{id:"on-ubuntu--macos-1"},"On Ubuntu / MacOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the node")),(0,l.kt)("p",null,"In a first window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.kt)("p",null,"Launch the node, on Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-node -p <PASSWORD> |& tee logs.txt\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the client")),(0,l.kt)("p",null,"In a second window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.kt)("p",null,"Then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-client -p <PASSWORD>\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your client"),(0,l.kt)("h3",{id:"if-your-node-was-installed-from-source-code-advanced-installation"},"If your node was installed from source code (advanced installation)"),(0,l.kt)("h4",{id:"on-ubuntu--macos-2"},"On Ubuntu / MacOS"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the node")),(0,l.kt)("p",null,"In a first window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,l.kt)("p",null,"Launch the node, on Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> |& tee logs.txt\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node"),(0,l.kt)("p",null,"Or, on MacOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> > logs.txt 2>&1\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node. You should leave the window open."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the client")),(0,l.kt)("p",null,"On a second window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,l.kt)("p",null,"Then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --release -- -p <PASSWORD>\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.kt)("h4",{id:"on-windows-1"},"On Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the Node")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a first window",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd massa-node")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your node. You should leave the window\nopened."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Start the Client")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a second window",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: cd massa"),(0,l.kt)("li",{parentName:"ul"},"Type: cd massa-client"),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In case of crash of the Rust compiler or at runtime, please do not report bugs to the rustlang/rust repository, but\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/issues/new/choose"},"open an issue")," on the Massa repository instead. We will triage\nthe issues and open them on the Rust side if they are valid. This avoids polluting the main Rust repository with many\nreports of the same error.")),(0,l.kt)("h2",{id:"step-4-activating-the-staking-wallet"},"Step 4: Activating the staking wallet"),(0,l.kt)("p",null,"Now that your node and client are running, you need to activate the staking wallet matching the one that has initial rolls."),(0,l.kt)("h3",{id:"importing-your-wallet-in-the-client"},"Importing your wallet in the client"),(0,l.kt)("p",null,"You need to provide the wallet that matches your staking address (the one that has initial rolls) to the client.\nAny other wallet would result in your node not staking."),(0,l.kt)("p",null,"The procedure depends on how you have saved your wallet in the first place."),(0,l.kt)("h4",{id:"if-you-have-saved-your-secretprivate-key"},"If you have saved your secret/private key"),(0,l.kt)("p",null,"Then you can import it in the client using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_add_secret_keys <your_secret_key>\n")),(0,l.kt)("h4",{id:"if-you-have-saved-an-encrypted-wallet-file"},"If you have saved an encrypted wallet file"),(0,l.kt)("p",null,"Then you can import it in the client by placing the corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"massa/massa-client/wallets")," folder.\nMake sure it is the only wallet in the folder."),(0,l.kt)("h3",{id:"enabling-staking-on-your-node"},"Enabling staking on your node"),(0,l.kt)("p",null,"You now need to tell your node that it needs to stake using your initial staking wallet."),(0,l.kt)("p",null,"Get the address that has initial rolls in your wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wallet_info\n")),(0,l.kt)("p",null,"Register your address so that your node start to stake with it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node_start_staking <your_address>\n")),(0,l.kt)("p",null,"To check whether the address is registered for staking, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node_get_staking_addresses\n")),(0,l.kt)("p",null,"Now you can leave the node running, and it will start producing blocks just after Genesis!"),(0,l.kt)("h2",{id:"step-5-checking-your-nodes-status"},"Step 5: Checking your node's status"),(0,l.kt)("h3",{id:"check-your-routability-status"},"Check your routability status"),(0,l.kt)("p",null,"You can use a service such as ",(0,l.kt)("a",{parentName:"p",href:"https://portchecker.co"},"https://portchecker.co")," to check that the ports 31244 and 31245 are both opened for your public IP address."),(0,l.kt)("p",null,"Additionally, in your massa-client, you can check that the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_status")," command shows your ",(0,l.kt)("inlineCode",{parentName:"p"},"Node's IP: <your_public_ip_address>"),".\nIf it shows ",(0,l.kt)("inlineCode",{parentName:"p"},"No routable IP set")," instead, please check again your configuration."),(0,l.kt)("h3",{id:"check-your-node-staking-address"},"Check your node staking address"),(0,l.kt)("p",null,"You can check that the staking address you obtain with the following command in massa-client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node_get_staking_addresses\n")),(0,l.kt)("p",null,"is present in the initial staker lists, available in ",(0,l.kt)("inlineCode",{parentName:"p"},"massa/massa-node/base_config/initial_rolls.json"),"."),(0,l.kt)("h3",{id:"make-sure-you-are-connected-to-peers"},"Make sure you are connected to peers"),(0,l.kt)("p",null,"In order for your node to be running properly, you have to make sure you are connected to other peers on the network."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"get_status")," command will show you which nodes you are connected too.\nYou need to have both IN and OUT connections."))}c.isMDXComponent=!0}}]);