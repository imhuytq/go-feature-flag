"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[16783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:30},i="Custom Retriever",l={unversionedId:"go_module/store_file/custom",id:"go_module/store_file/custom",title:"Custom Retriever",description:"To create a custom retriever you must have a struct that implements the Retriever interface.",source:"@site/docs/go_module/store_file/custom.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/custom",permalink:"/docs/next/go_module/store_file/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/go_module/store_file/custom.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/next/go_module/store_file/file"},next:{title:"Export data",permalink:"/docs/next/go_module/data_collection/"}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-retriever"},"Custom Retriever"),(0,o.kt)("p",null,"To create a custom retriever you must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that implements the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever"},(0,o.kt)("inlineCode",{parentName:"a"},"Retriever"))," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},"type Retriever interface {\n    Retrieve(ctx context.Context) ([]byte, error)\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Retrieve")," \tfunction is supposed to load the file and to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"[]byte")," of your flag configuration file."),(0,o.kt)("p",null,"You can check existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Retriever")," ",(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/fileretriever/retriever.go"},"file"),",\n",(0,o.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/s3retriever/retriever.go"},"s3"),", ...)")," to have an idea on how to do build your own."))}m.isMDXComponent=!0}}]);