"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[60472],{64416:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var s=a(85893),o=a(11151),n=a(11029),t=a(73822);const i={sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},d="SDKs",c={id:"openfeature_sdk/sdk",title:"SDKs",description:"Use GO Feature Flag with Openfeature SDKs",source:"@site/versioned_docs/version-v1.14.1/openfeature_sdk/sdk.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/sdk",permalink:"/docs/v1.14.1/openfeature_sdk/sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.1/openfeature_sdk/sdk.mdx",tags:[],version:"v1.14.1",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Use GO Feature Flag with Openfeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"How to export evaluation data",permalink:"/docs/v1.14.1/configure_flag/export_flags_usage"},next:{title:"GO",permalink:"/docs/v1.14.1/openfeature_sdk/server_providers/openfeature_go"}},l={},g=[{value:"Server Providers",id:"server-providers",level:2},{value:"Client Providers",id:"client-providers",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"sdks",children:"SDKs"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GO Feature Flag"})," stands out as a feature flag solution, distinct from others, due to our decision to fully support the ",(0,s.jsx)(r.a,{href:"https://openfeature.dev",children:(0,s.jsx)(r.code,{children:"Openfeature"})})," CNCF project."]}),"\n",(0,s.jsx)(r.p,{children:"The benefit of choosing OpenFeature lies in its framework-agnostic nature. When utilizing OpenFeature SDKs, you minimize the effort required for switching to a different feature flag provider. This flexibility empowers you to make changes without being tied down to a particular vendor."}),"\n",(0,s.jsxs)(r.p,{children:["To show our commitment to this initiative, ",(0,s.jsx)(r.strong,{children:"GO Feature Flag has opted not to develop any custom SDKs and instead relies entirely on OpenFeature SDKs"}),".\nIn order to seamlessly integrate with our solution, we offer ",(0,s.jsx)(r.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/provider",children:(0,s.jsx)(r.code,{children:"providers"})})," for GO Feature Flag in multiple programming languages."]}),"\n",(0,s.jsx)(r.p,{children:"Rest assured, working with OpenFeature SDKs alongside GO Feature Flag providers is as straightforward as using any other feature flag solution. The added advantage is that you now adhere to a standard approach and avoid any vendor lock-in!"}),"\n",(0,s.jsx)(r.h2,{id:"server-providers",children:"Server Providers"}),"\n",(0,s.jsx)(n.o,{cards:[{logoCss:"devicon-go-original-wordmark colored",title:"GO",badges:["Server"],docLink:"./server_providers/openfeature_go",content:(0,s.jsx)(t.T,{features:["remoteEval","localCache"]})},{logoCss:"devicon-typescript-plain colored",title:"Typescript",badges:["Server"],docLink:"./server_providers/openfeature_javascript",content:(0,s.jsx)(t.T,{features:["remoteEval","localCache"]})},{logoCss:"devicon-java-plain colored",title:"Java",badges:["Server"],docLink:"./server_providers/openfeature_java",content:(0,s.jsx)(t.T,{features:["remoteEval","localCache"]})},{logoCss:"devicon-dot-net-plain-wordmark colored",title:".Net",badges:["Server"],docLink:"./server_providers/openfeature_javascript",content:(0,s.jsx)(t.T,{features:["remoteEval"]})},{logoCss:"devicon-python-plain colored",title:"Python",badges:["Server"],warningBadges:["WIP"],docLink:"https://github.com/thomaspoignant/gofeatureflag-python-provider",content:(0,s.jsx)(t.T,{features:["remoteEval"]})}]}),"\n",(0,s.jsx)(r.h2,{id:"client-providers",children:"Client Providers"}),"\n",(0,s.jsx)(n.o,{cards:[{logoCss:"devicon-typescript-plain colored",title:"Typescript",badges:["Client"],docLink:"./client_providers/openfeature_javascript",content:(0,s.jsx)(t.T,{features:["remoteEval","localCache","dynamicRefresh"]})}]}),"\n",(0,s.jsx)(r.h2,{id:"how-openfeature-and-go-feature-flag-are-working-together",children:"How OpenFeature and GO Feature Flag are working together?"}),"\n",(0,s.jsxs)(r.p,{children:["To use the OpenFeature SDKs you need what we call a provider.\nA ",(0,s.jsx)(r.strong,{children:"provider"})," is responsible for performing flag evaluations. It provides an abstraction between ",(0,s.jsx)(r.strong,{children:"GO Feature Flag"})," and the OpenFeature SDK."]}),"\n",(0,s.jsxs)(r.p,{children:["A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,s.jsx)(r.a,{href:"../relay_proxy",children:(0,s.jsx)(r.strong,{children:"relay proxy"})}),".\nThis component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:a(30156).Z+"",width:"1740",height:"574"})}),"\n",(0,s.jsxs)(r.p,{children:["With this simple architecture you have a central component ",(0,s.jsx)(r.em,{children:"(the relay proxy)"})," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."]}),"\n",(0,s.jsx)(r.p,{children:"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."})]})}function u(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11029:(e,r,a)=>{a.d(r,{o:()=>l});var s=a(67294),o=a(39960);const n={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var t=a(86010),i=a(45697),d=a.n(i),c=a(85893);function l(e){const r=e.cards.map(((e,r)=>(0,s.createElement)(g,{...e,key:r})));return(0,c.jsx)("div",{className:"grid grid-pad",children:r})}function g(e){return(0,c.jsx)("div",{className:(0,t.Z)("col-1-3 mobile-col-1-1"),children:(0,c.jsx)(o.Z,{to:e.docLink,className:n.link,children:(0,c.jsxs)("div",{className:n.card,children:[(0,c.jsx)("div",{className:n.header,children:(0,c.jsxs)("span",{className:n.socialIcon,children:[e.logoCss&&(0,c.jsx)("i",{className:e.logoCss}),e.logoImg&&(0,c.jsx)("img",{src:e.logoImg,className:n.logoImg})]})}),(0,c.jsx)("div",{children:(0,c.jsx)("p",{className:n.name,children:e.title})}),(0,c.jsx)("p",{className:n.message,children:e.content}),(0,c.jsxs)("div",{className:n.badgeSection,children:[e.badges&&e.badges.map(((e,r)=>(0,c.jsx)("span",{className:(0,t.Z)(n.badge,n.badgeInfo),children:e},e))),e.warningBadges&&e.warningBadges.map(((e,r)=>(0,c.jsx)("span",{className:(0,t.Z)(n.badge,n.badgeWarning),children:e},e)))]})]})})})}l.prototype={cards:d().array.isRequired},g.propTypes={title:d().string.isRequired,badges:d().array,warningBadges:d().array,logoCss:d().string,logoImg:d().string,docLink:d().string}},73822:(e,r,a)=>{a.d(r,{T:()=>d});a(67294);var s=a(86010);const o={green:"green_II7v",orange:"orange_ujtc"};var n=a(45697),t=a.n(n),i=a(85893);function d(e){return(0,i.jsxs)(i.Fragment,{children:[c(e.features,"remoteEval")," Remote evaluation ",(0,i.jsx)("br",{}),c(e.features,"localCache")," Local cache",(0,i.jsx)("br",{}),c(e.features,"dynamicRefresh")," Dynamic cache refresh",(0,i.jsx)("br",{})]})}function c(e,r){return e.includes(r)?(0,i.jsx)("i",{className:(0,s.Z)("fa-solid fa-circle-check",o.green)}):(0,i.jsx)("i",{className:(0,s.Z)("fa-solid fa-person-digging",o.orange)})}d.prototype={features:t().array.isRequired}},30156:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"},11151:(e,r,a)=>{a.d(r,{Z:()=>i,a:()=>t});var s=a(67294);const o={},n=s.createContext(o);function t(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);