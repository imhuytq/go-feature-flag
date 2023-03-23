"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[40034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:30},a="Custom Notifier",c={unversionedId:"go_module/notifier/custom",id:"go_module/notifier/custom",title:"Custom Notifier",description:"To create a custom notifier you must have a struct that implements the",source:"@site/docs/go_module/notifier/custom.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/custom",permalink:"/docs/next/go_module/notifier/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/notifier/custom.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Webhook Notifier",permalink:"/docs/next/go_module/notifier/webhook"},next:{title:"Use with OpenFeature",permalink:"/docs/next/category/use-with-openfeature"}},u={},f=[],s={toc:f},p="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-notifier"},"Custom Notifier"),(0,o.kt)("p",null,"To create a custom notifier you must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that implements the\n",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier"},(0,o.kt)("inlineCode",{parentName:"a"},"notifier.Notifier"))," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    ffclient "github.com/thomaspoignant/go-feature-flag"\n    "github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n    "sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache, wg *sync.WaitGroup) error {\n    defer waitGroup.Done() // don\'t forget this line, if you don\'t have it you can break your notifications\n    \n    // ...\n    // do whatever you want here\n}\n')))}l.isMDXComponent=!0}}]);