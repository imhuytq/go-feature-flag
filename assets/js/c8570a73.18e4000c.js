"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:30},i="Custom Retriever",l={unversionedId:"go_module/store_file/custom",id:"version-v1.2.0/go_module/store_file/custom",title:"Custom Retriever",description:"To create a custom retriever you must have a struct that implements the Retriever interface.",source:"@site/versioned_docs/version-v1.2.0/go_module/store_file/custom.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/custom",permalink:"/docs/v1.2.0/go_module/store_file/custom",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.2.0/go_module/store_file/custom.md",tags:[],version:"v1.2.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/v1.2.0/go_module/store_file/file"},next:{title:"Export data",permalink:"/docs/v1.2.0/go_module/data_collection/"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-retriever"},"Custom Retriever"),(0,n.kt)("p",null,"To create a custom retriever you must have a ",(0,n.kt)("inlineCode",{parentName:"p"},"struct")," that implements the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever"},(0,n.kt)("inlineCode",{parentName:"a"},"Retriever"))," interface."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},"type Retriever interface {\n    Retrieve(ctx context.Context) ([]byte, error)\n}\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Retrieve")," \tfunction is supposed to load the file and to return a ",(0,n.kt)("inlineCode",{parentName:"p"},"[]byte")," of your flag configuration file."),(0,n.kt)("p",null,"You can check existing ",(0,n.kt)("inlineCode",{parentName:"p"},"Retriever")," ",(0,n.kt)("em",{parentName:"p"},"(",(0,n.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/fileretriever/retriever.go"},"file"),",\n",(0,n.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/s3retriever/retriever.go"},"s3"),", ...)")," to have an idea on how to do build your own."))}m.isMDXComponent=!0}}]);