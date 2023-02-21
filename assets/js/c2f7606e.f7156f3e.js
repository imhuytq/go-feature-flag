"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[64645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:91,description:"Lint your config"},o="Lint your config",i={unversionedId:"linter",id:"linter",title:"Lint your config",description:"Lint your config",source:"@site/docs/linter.md",sourceDirName:".",slug:"/linter",permalink:"/docs/next/linter",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/linter.md",tags:[],version:"current",sidebarPosition:91,frontMatter:{sidebar_position:91,description:"Lint your config"},sidebar:"tutorialSidebar",previous:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/next/migrate_v0_v1"},next:{title:"Frequently Asked Questions",permalink:"/docs/next/faq"}},s={},u=[{value:"Install the linter",id:"install-the-linter",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the linter",id:"use-the-linter",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lint-your-config"},"Lint your config"),(0,a.kt)("p",null,"A faulty configuration could make ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," not the way you expect.",(0,a.kt)("br",{parentName:"p"}),"\n","This is why we have introduced the ",(0,a.kt)("inlineCode",{parentName:"p"},"go-feature-flag-lint")," a command line tool validates that a flags file can be parsed by ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend you to use this command line in your CI/CD pipelines to avoid any disappointment.")),(0,a.kt)("h2",{id:"install-the-linter"},"Install the linter"),(0,a.kt)("h3",{id:"install-using-homebrew-mac-and-linux"},"Install using Homebrew (mac and linux)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-lint\n")),(0,a.kt)("h3",{id:"install-using-scoop-windows"},"Install using Scoop (windows)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-lint\n")),(0,a.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull thomaspoignant/go-feature-flag-lint:latest\n")),(0,a.kt)("h2",{id:"use-the-linter"},"Use the linter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./go-feature-flag-lint \\\n  --input-format=yaml \\\n  --input-file=/input/my-go-feature-flag-config.yaml\n")),(0,a.kt)("p",null,"The command line has 2 arguments you should specify."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"param"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--input-file")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"(mandatory)")," The location of your configuration file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--input-format")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"(mandatory)")," The format of your current configuration file. ",(0,a.kt)("br",null),"Available formats are ",(0,a.kt)("inlineCode",{parentName:"td"},"yaml"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"toml"),".")))))}d.isMDXComponent=!0}}]);