"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[4840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={id:"install",title:"Install"},l=void 0,r={unversionedId:"massaStation/install",id:"massaStation/install",title:"Install",description:"System Requirements",source:"@site/docs/massaStation/install.mdx",sourceDirName:"massaStation",slug:"/massaStation/install",permalink:"/docs/massaStation/install",draft:!1,editUrl:"https://github.com/massalabs/docs/tree/main/docs/massaStation/install.mdx",tags:[],version:"current",lastUpdatedBy:"Ena Redzic",lastUpdatedAt:1713186142,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{id:"install",title:"Install"},sidebar:"massaStationSidebar",previous:{title:"Introduction to Massa Station",permalink:"/docs/massaStation/home"},next:{title:"Manual Install",permalink:"/docs/massaStation/manual-install"}},s={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Debian Linux",id:"debian-linux",level:2},{value:"Terminal Installation using apt",id:"terminal-installation-using-apt",level:3},{value:"GUI Installation",id:"gui-installation",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operating System"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows")," 10 and 11"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MacOS")," 13 and above"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Debian"),"-based ",(0,i.kt)("strong",{parentName:"li"},"Linux")," distributions: Ubuntu 22.04 and later, Debian 11 and later..."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disk Space"),": At least 200 MB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RAM"),": At least 2 GB"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Web Browser"),": Firefox or Chromium-based browsers (Chrome, Brave, etc.)")),(0,i.kt)("p",null,"To install ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),", follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://station.massa.net/"},"Massa Station website"),"."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Download")," button and select the version compatible with your operating system."),(0,i.kt)("li",{parentName:"ol"},"Once the download is complete, run the installer and follow the instructions.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"During the installation process, you will be prompted to grant permissions to ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),".\nThese permissions are necessary for ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," to function correctly.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you prefer to install ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," ",(0,i.kt)("strong",{parentName:"p"},"manually"),", you can follow the instructions provided in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/manual-install"},"Manual Install")," section.")),(0,i.kt)("h2",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Locate the downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},".msi")," installer file and double-click on it to start the installation process."),(0,i.kt)("li",{parentName:"ol"},"Follow the on-screen instructions to proceed with the installation."),(0,i.kt)("li",{parentName:"ol"},'You will be prompted to choose the kind of installation you want. We recommend choosing the "Complete" installation as it will install all the necessary dependencies to access web on-chain. If you select the "Typical" option, Massa Station will be installed without DNS configuration. In that case, access to ',(0,i.kt)("inlineCode",{parentName:"li"},".massa")," domains may be restricted."),(0,i.kt)("li",{parentName:"ol"},"Once the installation is complete, you can launch ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," from the Start menu."),(0,i.kt)("li",{parentName:"ol"},'If prompted, click on "Yes" to allow the installer to make changes on certificates. These certificates allow ',(0,i.kt)("em",{parentName:"li"},"Massa Station")," to use the HTTPS protocol, which improves your security when ",(0,i.kt)("a",{parentName:"li",href:"browse-decentralized-application"},"browsing dApp"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you experience any issues during the installation process or while using ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/faq"},"FAQ"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'If you are using a version of Massa Station older than 0.3.6, Windows will warn you about untrusted software.\nYou can safely ignore this warning and proceed with the installation by clicking on "more info" and "run anyway".')),(0,i.kt)("h2",{id:"macos"},"MacOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Locate the downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},".pkg"),' installer file. Hold "Option" key on the keyboard and right-click on the package, at the same time.'),(0,i.kt)("li",{parentName:"ol"},'From the context menu, select "Open" and then click "Open" again in the security pop-up window. This step is necessary because the installer is not signed by the App Store, and MacOS may block the installation by default.'),(0,i.kt)("li",{parentName:"ol"},"If prompted, enter your administrator password to authorize the installation."),(0,i.kt)("li",{parentName:"ol"},"Follow the on-screen instructions to proceed with the installation.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you experience any issues during the installation process or while using ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/faq"},"FAQ"),".")),(0,i.kt)("h2",{id:"debian-linux"},"Debian Linux"),(0,i.kt)("h3",{id:"terminal-installation-using-apt"},"Terminal Installation using apt"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Locate the downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},".deb")," installer file."),(0,i.kt)("li",{parentName:"ol"},"Open a terminal on your Debian Linux system."),(0,i.kt)("li",{parentName:"ol"},"Navigate to the directory where the downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},".deb")," package is located."),(0,i.kt)("li",{parentName:"ol"},"Run the following command to install the package:",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install ./massastation-${{ VERSION }}_amd64.deb")),(0,i.kt)("li",{parentName:"ol"},"Enter your administrator password when prompted and press Enter to confirm."),(0,i.kt)("li",{parentName:"ol"},"The installation will begin, and you will see progress information in the terminal."),(0,i.kt)("li",{parentName:"ol"},"Once the installation is complete, you can close the terminal.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you experience any issues during the installation process or while using ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/faq"},"FAQ"),".")),(0,i.kt)("h3",{id:"gui-installation"},"GUI Installation"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Terminal installation method is preferred over linux GUI detailed below.  ")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your file manager and navigate to the location where the ",(0,i.kt)("inlineCode",{parentName:"li"},".deb")," package is saved."),(0,i.kt)("li",{parentName:"ol"},"Right-click on the ",(0,i.kt)("inlineCode",{parentName:"li"},".deb"),' package and choose "Open with Software Install" or a similar option.'),(0,i.kt)("li",{parentName:"ol"},"The package manager will launch and display ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," installation page."),(0,i.kt)("li",{parentName:"ol"},'Review the package information and dependencies, if any, and click on the "Install" button.'),(0,i.kt)("li",{parentName:"ol"},"If prompted, enter your administrator password to authorize the installation."),(0,i.kt)("li",{parentName:"ol"},"The installation will commence, and you will see a progress bar indicating the status."),(0,i.kt)("li",{parentName:"ol"},"Once the installation is complete, you will receive a notification confirming the successful installation.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you experience any issues during the installation process or while using ",(0,i.kt)("em",{parentName:"p"},"Massa Station"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/massaStation/faq"},"FAQ"),".")),(0,i.kt)("admonition",{title:"Updating on Linux",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is a known issue involving version checks while updating ",(0,i.kt)("em",{parentName:"p"},"Massa Station")," via Software Installer, follow these instructions for best results."),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Download the latest version of ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," installer for Debian Linux (",(0,i.kt)("inlineCode",{parentName:"li"},".deb"),") from ",(0,i.kt)("a",{parentName:"li",href:"https://station.massa.net/"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"Open your file manager and navigate to the location where the ",(0,i.kt)("inlineCode",{parentName:"li"},".deb")," package is saved."),(0,i.kt)("li",{parentName:"ol"},"The package manager will launch and display ",(0,i.kt)("em",{parentName:"li"},"Massa Station")," installation page."),(0,i.kt)("li",{parentName:"ol"},'Review the package information and dependencies, if any, and click on the red "Delete" button.'),(0,i.kt)("li",{parentName:"ol"},"Proceed to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.massa.net/docs/massaStation/home#gui-installation"},(0,i.kt)("strong",{parentName:"a"},"GUI installation"))," starting at step 2."))))}d.isMDXComponent=!0}}]);