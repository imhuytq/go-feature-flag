"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[82367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,g=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:10,description:"How GO Feature Flag is working with OpenFeature."},i="Concepts",p={unversionedId:"openfeature_sdk/concepts",id:"version-v1.2.2/openfeature_sdk/concepts",title:"Concepts",description:"How GO Feature Flag is working with OpenFeature.",source:"@site/versioned_docs/version-v1.2.2/openfeature_sdk/concepts.md",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/concepts",permalink:"/docs/v1.2.2/openfeature_sdk/concepts",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.2/openfeature_sdk/concepts.md",tags:[],version:"v1.2.2",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How GO Feature Flag is working with OpenFeature."},sidebar:"tutorialSidebar",previous:{title:"Use with OpenFeature",permalink:"/docs/v1.2.2/category/use-with-openfeature"},next:{title:"GO SDK usage",permalink:"/docs/v1.2.2/openfeature_sdk/openfeature_go"}},s={},u=[{value:"What is OpenFeature?",id:"what-is-openfeature",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}],c={toc:u},l="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("h2",{id:"what-is-openfeature"},"What is OpenFeature?"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"OpenFeature is an open standard for feature flag management, created to support a robust feature flag ecosystem using cloud native technologies. OpenFeature provides a unified API and SDK, and a developer-first, cloud-native implementation, with extensibility for open source and commercial offerings."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.openfeature.dev/docs/category/concepts"},"https://docs.openfeature.dev/docs/category/concepts"))),(0,a.kt)("p",null,"OpenFeature offer a framework-agnostic way of using feature flags, it means that if you use OpenFeature SDKs you will have minimum changes to do if you want to choose another provider."),(0,a.kt)("p",null,"To support this initiative, ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," does not have any SDKs and rely 100% on OpenFeature SDKs.",(0,a.kt)("br",{parentName:"p"}),"\n","To be compatible with our solution, we offer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfeature.dev/docs/reference/concepts/provider"},(0,a.kt)("inlineCode",{parentName:"a"},"providers"))," for GO Feature Flag in several languages. "),(0,a.kt)("h2",{id:"how-openfeature-and-go-feature-flag-are-working-together"},"How OpenFeature and GO Feature Flag are working together?"),(0,a.kt)("p",null,"To use the OpenFeature SDKs you need what we call a provider.",(0,a.kt)("br",{parentName:"p"}),"\n","A ",(0,a.kt)("strong",{parentName:"p"},"provider")," is responsible for performing flag evaluations. It provides an abstraction between ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," and the OpenFeature SDK."),(0,a.kt)("p",null,"A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,a.kt)("a",{parentName:"p",href:"../category/use-the-relay-proxy"},(0,a.kt)("strong",{parentName:"a"},"relay proxy")),".",(0,a.kt)("br",{parentName:"p"}),"\n","This component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(30156).Z,width:"1740",height:"574"})),(0,a.kt)("p",null,"With this simple architecture you have a central component ",(0,a.kt)("em",{parentName:"p"},"(the relay proxy)")," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."),(0,a.kt)("p",null,"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."))}d.isMDXComponent=!0},30156:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"}}]);