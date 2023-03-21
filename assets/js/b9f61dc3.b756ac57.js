"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[9398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:30},i="Custom exporter",l={unversionedId:"go_module/data_collection/custom",id:"version-v1.0.0/go_module/data_collection/custom",title:"Custom exporter",description:"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.",source:"@site/versioned_docs/version-v1.0.0/go_module/data_collection/custom.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/custom",permalink:"/docs/v1.0.0/go_module/data_collection/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.0.0/go_module/data_collection/custom.md",tags:[],version:"v1.0.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Log Exporter",permalink:"/docs/v1.0.0/go_module/data_collection/log"},next:{title:"Notify flag changes",permalink:"/docs/v1.0.0/go_module/notifier/"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-exporter"},"Custom exporter"),(0,n.kt)("p",null,"To create a custom exporter you must have a ",(0,n.kt)("inlineCode",{parentName:"p"},"struct")," that implements the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/internal/exporter#Exporter"},(0,n.kt)("inlineCode",{parentName:"a"},"exporter.Exporter"))," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type Exporter interface {\n  // Export will send the data to the exporter.\n  Export(context.Context, *log.Logger, []exporter.FeatureEvent) error\n\n    // IsBulk return false if we should directly send the data as soon as it is produce\n    // and true if we collect the data to send them in bulk.\n    IsBulk() bool\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Export")," is called asynchronously with a list of ",(0,n.kt)("inlineCode",{parentName:"p"},"exporter.FeatureEvent")," that have been collected.",(0,n.kt)("br",{parentName:"p"}),"\n","It is your responsibility to store them where you want."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"IsBulk")," function should return ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if the exporter can handle the results in stream mode.",(0,n.kt)("br",{parentName:"p"}),"\n","If you decide to manage it in streaming mode, everytime we call a variation the ",(0,n.kt)("inlineCode",{parentName:"p"},"Export")," function will be called\nwith only on event in the list."))}d.isMDXComponent=!0}}]);