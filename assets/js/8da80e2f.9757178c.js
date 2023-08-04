"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[57122],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=n,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return t?a.createElement(m,i(i({ref:r},p),{},{components:t})):a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11029:(e,r,t)=>{t.d(r,{o:()=>p});var a=t(87462),n=t(67294),o=t(39960);const i={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var s=t(86010),l=t(45697),d=t.n(l);function p(e){const r=e.cards.map(((e,r)=>n.createElement(c,(0,a.Z)({},e,{key:r}))));return n.createElement("div",{className:"grid grid-pad"},r)}function c(e){return n.createElement("div",{className:(0,s.Z)("col-1-3 mobile-col-1-1")},n.createElement(o.Z,{to:e.docLink,className:i.link},n.createElement("div",{className:i.card},n.createElement("div",{className:i.header},n.createElement("span",{className:i.socialIcon},e.logoCss&&n.createElement("i",{className:e.logoCss}),e.logoImg&&n.createElement("img",{src:e.logoImg,className:i.logoImg}))),n.createElement("div",null,n.createElement("p",{className:i.name},e.title)),n.createElement("p",{className:i.message},e.content),n.createElement("div",{className:i.badgeSection},e.badges&&e.badges.map(((e,r)=>n.createElement("span",{className:(0,s.Z)(i.badge,i.badgeInfo),key:e},e))),e.warningBadges&&e.warningBadges.map(((e,r)=>n.createElement("span",{className:(0,s.Z)(i.badge,i.badgeWarning),key:e},e)))))))}p.prototype={cards:d().array.isRequired},c.propTypes={title:d().string.isRequired,badges:d().array,warningBadges:d().array,logoCss:d().string,logoImg:d().string,docLink:d().string}},26079:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905)),o=t(11029);const i={sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},s="SDKs",l={unversionedId:"openfeature_sdk/sdk",id:"version-v1.14.0/openfeature_sdk/sdk",title:"SDKs",description:"Use GO Feature Flag with Openfeature SDKs",source:"@site/versioned_docs/version-v1.14.0/openfeature_sdk/sdk.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/sdk",permalink:"/docs/openfeature_sdk/sdk",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.0/openfeature_sdk/sdk.mdx",tags:[],version:"v1.14.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"Use with OpenFeature",permalink:"/docs/category/use-with-openfeature"},next:{title:"GO SDK usage",permalink:"/docs/openfeature_sdk/server_providers/openfeature_go"}},d={},p=[{value:"Server Providers",id:"server-providers",level:2},{value:"Client Providers",id:"client-providers",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}],c={toc:p},u="wrapper";function g(e){let{components:r,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sdks"},"SDKs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," stands out as a feature flag solution, distinct from others, due to our decision to fully support the ",(0,n.kt)("a",{parentName:"p",href:"https://openfeature.dev"},(0,n.kt)("inlineCode",{parentName:"a"},"Openfeature"))," CNCF project."),(0,n.kt)("p",null,"The benefit of choosing OpenFeature lies in its framework-agnostic nature. When utilizing OpenFeature SDKs, you minimize the effort required for switching to a different feature flag provider. This flexibility empowers you to make changes without being tied down to a particular vendor."),(0,n.kt)("p",null,"To show our commitment to this initiative, ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag has opted not to develop any custom SDKs and instead relies entirely on OpenFeature SDKs"),".\nIn order to seamlessly integrate with our solution, we offer ",(0,n.kt)("a",{parentName:"p",href:"https://docs.openfeature.dev/docs/reference/concepts/provider"},(0,n.kt)("inlineCode",{parentName:"a"},"providers"))," for GO Feature Flag in multiple programming languages."),(0,n.kt)("p",null,"Rest assured, working with OpenFeature SDKs alongside GO Feature Flag providers is as straightforward as using any other feature flag solution. The added advantage is that you now adhere to a standard approach and avoid any vendor lock-in!"),(0,n.kt)("h2",{id:"server-providers"},"Server Providers"),(0,n.kt)(o.o,{cards:[{logo:"devicon-go-original-wordmark colored",language:"GO",badges:["Server"],features:["remoteEval","localCache"],docLink:"./server_providers/openfeature_go"},{logo:"devicon-typescript-plain colored",language:"Typescript",badges:["Server"],features:["remoteEval","localCache"],docLink:"./server_providers/openfeature_javascript"},{logo:"devicon-java-plain colored",language:"Java",badges:["Server"],features:["remoteEval"],docLink:"./server_providers/openfeature_java"},{logo:"devicon-dot-net-plain-wordmark colored",language:".Net",badges:["Server"],features:["remoteEval"],docLink:"./server_providers/openfeature_javascript"},{logo:"devicon-python-plain colored",language:"Python",badges:["Server"],warningBadges:["WIP"],features:["remoteEval"],docLink:"https://github.com/thomaspoignant/gofeatureflag-python-provider"}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"client-providers"},"Client Providers"),(0,n.kt)(o.o,{cards:[{logo:"devicon-typescript-plain colored",language:"Typescript",badges:["Client"],features:["remoteEval","localCache","dynamicRefresh"],docLink:"./client_providers/openfeature_javascript"}],mdxType:"Cards"}),(0,n.kt)("h2",{id:"how-openfeature-and-go-feature-flag-are-working-together"},"How OpenFeature and GO Feature Flag are working together?"),(0,n.kt)("p",null,"To use the OpenFeature SDKs you need what we call a provider.\nA ",(0,n.kt)("strong",{parentName:"p"},"provider")," is responsible for performing flag evaluations. It provides an abstraction between ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag")," and the OpenFeature SDK."),(0,n.kt)("p",null,"A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,n.kt)("a",{parentName:"p",href:"../category/use-the-relay-proxy"},(0,n.kt)("strong",{parentName:"a"},"relay proxy")),".\nThis component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(30156).Z,width:"1740",height:"574"})),(0,n.kt)("p",null,"With this simple architecture you have a central component ",(0,n.kt)("em",{parentName:"p"},"(the relay proxy)")," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."),(0,n.kt)("p",null,"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."))}g.isMDXComponent=!0},30156:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"}}]);