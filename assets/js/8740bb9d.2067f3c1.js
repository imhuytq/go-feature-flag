"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},i="Migrate from v0.x.x to v1.x.x",l={unversionedId:"migrate_v0_v1",id:"version-v1.0.0/migrate_v0_v1",title:"Migrate from v0.x.x to v1.x.x",description:"How to migrate from v0.x.x to v1.x.x",source:"@site/versioned_docs/version-v1.0.0/migrate_v0_v1.md",sourceDirName:".",slug:"/migrate_v0_v1",permalink:"/docs/migrate_v0_v1",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.0/migrate_v0_v1.md",tags:[],version:"v1.0.0",sidebarPosition:90,frontMatter:{sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},sidebar:"tutorialSidebar",previous:{title:"Relay proxy endpoints",permalink:"/docs/relay_proxy/relay_proxy_endpoints"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},p={},s=[{value:"Install the migration command line",id:"install-the-migration-command-line",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the migration command line",id:"use-the-migration-command-line",level:2},{value:"Update your flag file",id:"update-your-flag-file",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-from-v0xx-to-v1xx"},"Migrate from v0.x.x to v1.x.x"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," has introduced a new flag format that push the limits of ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," even further.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"BUT")," the flag format from all the versions ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.x.x")," are still compatible and supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0"),".")),(0,r.kt)("p",null,"A command line is available to help you to convert your actual configuration file to the version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.x.x"),"."),(0,r.kt)("h2",{id:"install-the-migration-command-line"},"Install the migration command line"),(0,r.kt)("h3",{id:"install-using-homebrew-mac-and-linux"},"Install using Homebrew (mac and linux)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-relay-proxy\n")),(0,r.kt)("h3",{id:"install-using-scoop-windows"},"Install using Scoop (windows)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-relay-proxy\n")),(0,r.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull thomaspoignant/go-feature-flag-migration-cli:latest\n")),(0,r.kt)("h2",{id:"use-the-migration-command-line"},"Use the migration command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./go-feature-flag-relay-proxy \\\n  --input-format=yaml \\\n  --input-file=/config/my-go-feature-flag-config-v0.x.x.yaml \\\n  --output-format=yaml \\\n  --output-file=/config/my-go-feature-flag-config-v1.x.x.yaml\n")),(0,r.kt)("p",null,"The command line has 4 arguments you should specify."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input-format"),": Format of your input file (",(0,r.kt)("inlineCode",{parentName:"li"},"YAML"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"TOML"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input-file"),": Location of the flag file you want to convert."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"output-format"),": Format of your output file (",(0,r.kt)("inlineCode",{parentName:"li"},"YAML"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"TOML"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"output-file"),": Location of the converted flag file.")),(0,r.kt)("h2",{id:"update-your-flag-file"},"Update your flag file"),(0,r.kt)("p",null,"When your file is ready, you just have to replace your file in the location where GO Feature Flag is retrieving it."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If for any reason your file is not readable by GO Feature Flag, it will not break anything, we will keep the latest version we have in memory. ")))}c.isMDXComponent=!0}}]);