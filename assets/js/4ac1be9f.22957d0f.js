"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,d=c["".concat(s,".").concat(m)]||c[m]||f[m]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},i=void 0,l={unversionedId:"index",id:"version-v1.1.0/index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v1.1.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.1.0/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.1.0/index.md",tags:[],version:"v1.1.0",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/v1.1.0/category/getting-started"}},s={},u=[{value:"What is GO Feature Flag?",id:"what-is-go-feature-flag",level:2},{value:"What can I do with GO Feature Flag?",id:"what-can-i-do-with-go-feature-flag",level:2}],p={toc:u},c="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})),(0,r.kt)("h2",{id:"what-is-go-feature-flag"},"What is GO Feature Flag?"),(0,r.kt)("p",null,"GO Feature Flag is a simple, complete and lightweight feature flag solution 100% opensource."),(0,r.kt)("p",null,"The solution has been built to start experiencing the usage of feature flags in your code without having to contract with any vendor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," has started to be a solution only for the GO language, but with the new standardisation of feature flags by ",(0,r.kt)("a",{parentName:"p",href:"https://openfeature.dev/"},"Openfeature")," project,\nnow the solution is available for multiple languages ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"JAVA"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"typescript"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"javascript"),", ...)")," with a simple server to host."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are not familiar with feature flags, also called feature toggles, you can read this ",(0,r.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/articles/feature-toggles.html"},"article from Martin Fowler"),"\nwhere he explains why this is a great pattern."),(0,r.kt)("p",{parentName:"admonition"},"I've also written an ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986"},"article")," which explains why feature flags can fasten your iteration cycle.")),(0,r.kt)("h2",{id:"what-can-i-do-with-go-feature-flag"},"What can I do with GO Feature Flag?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storing your configuration flags file on various locations (",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"S3"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Kubernetes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/store_your_flags"},(0,r.kt)("em",{parentName:"a"},"see full list")),"."),(0,r.kt)("li",{parentName:"ul"},"Configuring your flags in various ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/flag_format"},"format")," (",(0,r.kt)("inlineCode",{parentName:"li"},"JSON"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TOML")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"YAML"),")."),(0,r.kt)("li",{parentName:"ul"},"Adding complex ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/flag_format#rule-format"},"rules")," to target your users."),(0,r.kt)("li",{parentName:"ul"},"Use complex rollout strategy for your flags :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/rollout/experimentation"},"Run A/B testing experimentation"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/rollout/progressive"},"Progressively rollout a feature"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/configure_flag/rollout/scheduled"},"Schedule your flag updates"),"."))),(0,r.kt)("li",{parentName:"ul"},"Exporting your flags usage data (",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/go_module/data_collection/s3"},(0,r.kt)("inlineCode",{parentName:"a"},"s3")),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/go_module/data_collection/log"},(0,r.kt)("inlineCode",{parentName:"a"},"log"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/go_module/data_collection/file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")),")."),(0,r.kt)("li",{parentName:"ul"},"Getting notified when a flag has been changed (",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/go_module/notifier/webhook"},(0,r.kt)("inlineCode",{parentName:"a"},"webhook"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/v1.1.0/go_module/notifier/slack"},(0,r.kt)("inlineCode",{parentName:"a"},"slack")),")."),(0,r.kt)("li",{parentName:"ul"},"Use GO Feature Flag in several languages.")))}f.isMDXComponent=!0}}]);