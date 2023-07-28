"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[22295],{3905:(e,o,t)=>{t.d(o,{Zo:()=>g,kt:()=>p});var a=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var o=a.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},g=function(e){var o=s(e.components);return a.createElement(c.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},A=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(t),A=r,p=d["".concat(c,".").concat(A)]||d[A]||u[A]||n;return t?a.createElement(p,l(l({ref:o},g),{},{components:t})):a.createElement(p,l({ref:o},g))}));function p(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=A;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},53182:(e,o,t)=>{t.d(o,{o:()=>c});var a=t(87462),r=t(67294),n=t(86010);const l={title:"title_J78f",description:"description_N_gU",cardLogo:"cardLogo_xSOJ",container:"container_ZAFJ",card:"card_JSXq",button:"button_YtM6",cardDetails:"cardDetails_QpCf",linkBox:"linkBox_jzj5"};var i=t(39960);function c(e){const o=e.test.map(((e,o)=>r.createElement(s,(0,a.Z)({},e,{key:o}))));return r.createElement("div",{className:"grid grid-pad"},o)}function s(e){return r.createElement("div",{className:(0,n.Z)("col-1-3 mobile-col-1-2",l.container)},r.createElement("div",{className:l.card},r.createElement("img",{src:e.logo,className:l.cardLogo}),r.createElement("div",{className:l.cardDetails},r.createElement("div",{className:l.title},e.name),r.createElement("div",{className:l.linkBox},e.relayproxy&&r.createElement(i.Z,{to:e.relayproxy},r.createElement("button",{className:(0,n.Z)(l.button)},r.createElement("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy")),e.gomodule&&r.createElement(i.Z,{to:e.gomodule},r.createElement("button",{className:(0,n.Z)(l.button)},r.createElement("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module"))))))}},81416:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>f,contentTitle:()=>A,default:()=>C,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=t(87462),r=(t(67294),t(3905)),n=t(53182),l=t(24642),i=t(48353),c=t(36812),s=t(7029),g=t(71350),d=t(57085);const u={sidebar_position:40,description:"How to export evaluation data?"},A="How to export evaluation data",p={unversionedId:"configure_flag/export_flags_usage",id:"version-v1.12.1/configure_flag/export_flags_usage",title:"How to export evaluation data",description:"How to export evaluation data?",source:"@site/versioned_docs/version-v1.12.1/configure_flag/export_flags_usage.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/export_flags_usage",permalink:"/docs/v1.12.1/configure_flag/export_flags_usage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.1/configure_flag/export_flags_usage.mdx",tags:[],version:"v1.12.1",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"How to export evaluation data?"},sidebar:"tutorialSidebar",previous:{title:"Scheduled rollout",permalink:"/docs/v1.12.1/configure_flag/rollout/scheduled"},next:{title:"Use as a GO module",permalink:"/docs/v1.12.1/category/use-as-a-go-module"}},f={},m=[{value:"Available exporters",id:"available-exporters",level:2}],b={toc:m},y="wrapper";function C(e){let{components:o,...t}=e;return(0,r.kt)(y,(0,a.Z)({},b,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-export-evaluation-data"},"How to export evaluation data"),(0,r.kt)("p",null,"GO Feature Flag allows for the collection of flag usage data.\nDuring flag evaluation, the key, flag variation and other non-sensitive information used are collected and cached for a\nconfigurable period of time."),(0,r.kt)("p",null,"The usage data is then written to a file in a chosen format (",(0,r.kt)("inlineCode",{parentName:"p"},"parquet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV"),") at a specified interval and\nexported to your desired location. This provides a single source for easy processing of the data. The feature can be\nconfigured with options for file format, flush interval, and file location."),(0,r.kt)("p",null,"To use, simply configure, use the feature flag as normal, and analyze the collected usage data."),(0,r.kt)("h2",{id:"available-exporters"},"Available exporters"),(0,r.kt)(n.o,{test:[{name:"Local File",logo:i.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#file-1",gomodule:"/docs/go_module/data_collection/file"},{name:"Log",logo:s.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#log",gomodule:"/docs/go_module/data_collection/log"},{name:"AWS S3",logo:g.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#s3-1",gomodule:"/docs/go_module/data_collection/s3"},{name:"Webhook",logo:d.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#webhook",gomodule:"/docs/go_module/data_collection/webhook"},{name:"Google Cloud Storage",logo:c.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#google-storage-1",gomodule:"/docs/go_module/data_collection/google_cloud_storage"},{name:"Custom exporter",logo:l.Z,gomodule:"/docs/go_module/data_collection/custom"}],mdxType:"Cards"}))}C.isMDXComponent=!0},24642:(e,o,t)=>{t.d(o,{Z:()=>a});const a="data:image/png;base64,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"},48353:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},36812:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},7029:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/log-36f8c60eb626d8d51f0254752f22e300.png"},71350:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/s3-c5757b62c88da5897cb06dd9d469ec8d.png"},57085:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/webhook-d76efdb9a6df32fc3dc653a1d61e7a89.png"}}]);