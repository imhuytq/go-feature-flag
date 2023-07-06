"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[47044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return r?o.createElement(m,a(a({ref:t},f),{},{components:r})):o.createElement(m,a({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1},a="Retrieve your feature flags configuration",l={unversionedId:"go_module/store_file/index",id:"version-v1.4.0/go_module/store_file/index",title:"Retrieve your feature flags configuration",description:"The module supports different ways of retrieving the flag file.",source:"@site/versioned_docs/version-v1.4.0/go_module/store_file/index.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/",permalink:"/docs/v1.4.0/go_module/store_file/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.4.0/go_module/store_file/index.md",tags:[],version:"v1.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performing flag evaluations",permalink:"/docs/v1.4.0/go_module/target_user"},next:{title:"HTTP endpoint",permalink:"/docs/v1.4.0/go_module/store_file/http"}},s={},u=[],f={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"retrieve-your-feature-flags-configuration"},"Retrieve your feature flags configuration"),(0,n.kt)("p",null,"The module supports different ways of retrieving the flag file.",(0,n.kt)("br",{parentName:"p"}),"\n","Available retriever are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/s3"},"S3 Bucket")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/http"},"HTTP endpoint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/github"},"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/file"},"File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/kubernetes_configmaps"},"Kubernetes configmap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v1.4.0/go_module/store_file/google_cloud_storage"},"Google Cloud storage"))),(0,n.kt)("p",null,"To retrieve a file you need to provide a ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever"},"retriever")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"ffclient.Config{}")," during the initialization.",(0,n.kt)("br",{parentName:"p"}),"\n","If the existing retriever does not work with your system you can extend the system and use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/v1.4.0/go_module/store_file/custom"},"custom retriever"),"."))}c.isMDXComponent=!0}}]);