"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[83992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(a),m=n,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},79702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},i=void 0,l={unversionedId:"index",id:"version-v1.0.0-rc.5/index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v1.0.0-rc.5/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.0.0-rc.5/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.0-rc.5/index.md",tags:[],version:"v1.0.0-rc.5",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/v1.0.0-rc.5/category/getting-started"}},s={},u=[{value:"What is GO Feature Flag?",id:"what-is-go-feature-flag",level:2},{value:"What can I do with GO Feature Flag?",id:"what-can-i-do-with-go-feature-flag",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})),(0,n.kt)("h2",{id:"what-is-go-feature-flag"},"What is GO Feature Flag?"),(0,n.kt)("p",null,"GO Feature Flag is a simple, complete and lightweight feature flag solution 100% opensource."),(0,n.kt)("p",null,"The solution has been built to start experiencing the usage of feature flags in your code without having to contract with any vendor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," has started to be a solution only for the GO language, but with the new standardisation of feature flags by ",(0,n.kt)("a",{parentName:"p",href:"https://openfeature.dev/"},"Openfeature")," project,\nnow the solution is available for multiple languages ",(0,n.kt)("em",{parentName:"p"},"(",(0,n.kt)("inlineCode",{parentName:"em"},"JAVA"),", ",(0,n.kt)("inlineCode",{parentName:"em"},"typescript"),", ",(0,n.kt)("inlineCode",{parentName:"em"},"javascript"),", ...)")," with a simple server to host."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you are not familiar with feature flags, also called feature toggles, you can read this ",(0,n.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/articles/feature-toggles.html"},"article from Martin Fowler"),"\nwhere he explains why this is a great pattern."),(0,n.kt)("p",{parentName:"admonition"},"I've also written an ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986"},"article")," which explains why feature flags can fasten your iteration cycle.")),(0,n.kt)("h2",{id:"what-can-i-do-with-go-feature-flag"},"What can I do with GO Feature Flag?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Storing your configuration flags file on various locations (",(0,n.kt)("inlineCode",{parentName:"li"},"HTTP"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"S3"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Kubernetes"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/store_your_flags"},(0,n.kt)("em",{parentName:"a"},"see full list")),"."),(0,n.kt)("li",{parentName:"ul"},"Configuring your flags in various ",(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/flag_format"},"format")," (",(0,n.kt)("inlineCode",{parentName:"li"},"JSON"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"TOML")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"YAML"),")."),(0,n.kt)("li",{parentName:"ul"},"Adding complex ",(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/flag_format#rule-format"},"rules")," to target your users."),(0,n.kt)("li",{parentName:"ul"},"Use complex rollout strategy for your flags :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/rollout/experimentation"},"Run A/B testing experimentation"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/rollout/progressive"},"Progressively rollout a feature"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configure_flag/rollout/scheduled"},"Schedule your flag updates"),"."))),(0,n.kt)("li",{parentName:"ul"},"Exporting your flags usage data (",(0,n.kt)("a",{parentName:"li",href:"/docs/go_module/data_collection/s3"},(0,n.kt)("inlineCode",{parentName:"a"},"s3")),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/go_module/data_collection/log"},(0,n.kt)("inlineCode",{parentName:"a"},"log"))," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/go_module/data_collection/file"},(0,n.kt)("inlineCode",{parentName:"a"},"file")),")."),(0,n.kt)("li",{parentName:"ul"},"Getting notified when a flag has been changed (",(0,n.kt)("a",{parentName:"li",href:"/docs/go_module/notifier/webhook"},(0,n.kt)("inlineCode",{parentName:"a"},"webhook"))," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/go_module/notifier/slack"},(0,n.kt)("inlineCode",{parentName:"a"},"slack")),")."),(0,n.kt)("li",{parentName:"ul"},"Use GO Feature Flag in several languages.")))}p.isMDXComponent=!0}}]);