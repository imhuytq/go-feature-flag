"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[63621],{71667:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>m,contentTitle:()=>C,default:()=>k,frontMatter:()=>h,metadata:()=>p,toc:()=>I});var a=i(85893),r=i(11151),s=i(11029),t=i(33866),n=i(23813),l=i(75555),g=i(88125),A=i(22418),d=i(80846),f=i(54495),c=i(33931),u=i(94170);const h={sidebar_position:10,description:"Where to store your configuration flag?"},C="Where to store your configuration flag",p={id:"configure_flag/store_your_flags",title:"Where to store your configuration flag",description:"Where to store your configuration flag?",source:"@site/versioned_docs/version-v1.15.1/configure_flag/store_your_flags.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/store_your_flags",permalink:"/docs/v1.15.1/configure_flag/store_your_flags",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.1/configure_flag/store_your_flags.mdx",tags:[],version:"v1.15.1",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Where to store your configuration flag?"},sidebar:"tutorialSidebar",previous:{title:"Configure your feature flags",permalink:"/docs/v1.15.1/category/configure-your-feature-flags"},next:{title:"How to configure a flag",permalink:"/docs/v1.15.1/configure_flag/flag_format"}},m={},I=[{value:"Available retrievers",id:"available-retrievers",level:2},{value:"Use multiple configuration flag files",id:"use-multiple-configuration-flag-files",level:2}];function y(e){const o={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h1,{id:"where-to-store-your-configuration-flag",children:"Where to store your configuration flag"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"GO Feature Flag"})," is a tool that makes it easy to implement feature flags in your application. One of the benefits of\nusing GO Feature Flag is that it is designed to be simple and lightweight.",(0,a.jsx)(o.br,{}),"\n","To achieve this, the solution uses a file-based approach to configure your flags."]}),"\n",(0,a.jsxs)(o.p,{children:["When you use GO Feature Flag, you create one or more file(s) ",(0,a.jsxs)(o.em,{children:["(",(0,a.jsx)(o.code,{children:"YAML"}),", ",(0,a.jsx)(o.code,{children:"TOML"})," or ",(0,a.jsx)(o.code,{children:"JSON"}),")"]})," that contains your feature\nflags and their values. You can then upload this file(s) where you want, and GO Feature Flag will use it.",(0,a.jsx)(o.br,{}),"\n","The way the solution achieves this is through the use of retrievers, which allow you to load your feature flag\nconfiguration file from various sources."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Retrievers"})," are a core concept in GO Feature Flag. They are responsible for loading your feature flag configuration\nfile from a specified location, such as a file on your local machine or a remote storage service. This allows you to\nstore your configuration file in a location that works best for your workflow."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"GO Feature Flag"})," supports a variety of retrievers out of the box, including ",(0,a.jsx)(o.code,{children:"S3"}),", ",(0,a.jsx)(o.code,{children:"Google Cloud Storage"}),", ",(0,a.jsx)(o.code,{children:"Github"}),",\n",(0,a.jsx)(o.code,{children:"HTTP"}),", ",(0,a.jsx)(o.code,{children:"Kubernetes config maps"}),", ",(0,a.jsx)(o.code,{children:"Local file"})," ...",(0,a.jsx)(o.br,{}),"\n","But you can also implement your own custom retriever if needed."]}),"\n",(0,a.jsx)(o.p,{children:"Using retrievers in GO Feature Flag is straightforward. You simply specify which retriever to use in your configuration\nfile, along with any required configuration options. GO Feature Flag will then use the specified retriever to load your\nconfiguration file and will evaluate your feature flags based on this configuration."}),"\n",(0,a.jsx)(o.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,a.jsx)(s.o,{cards:[{logoImg:u.Z,title:"K8S Configmap",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#kubernetes-configmap",goModuleLink:"../go_module/store_file/kubernetes_configmaps"})},{logoImg:c.Z,title:"AWS S3",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#s3",goModuleLink:"../go_module/store_file/s3"})},{logoImg:f.Z,title:"Google Storage",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#google-storage",goModuleLink:"../go_module/store_file/google_cloud_storage"})},{logoImg:n.Z,title:"HTTP/HTTPS",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#http",goModuleLink:"../go_module/store_file/http"})},{logoImg:A.Z,title:"GitHub",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#github",goModuleLink:"../go_module/store_file/github"})},{logoImg:d.Z,title:"Gitlab",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#gitlab",goModuleLink:"../go_module/store_file/gitlab"})},{logoImg:g.Z,title:"Local File",content:(0,a.jsx)(t.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#file",goModuleLink:"../go_module/store_file/file"})},{logoImg:l.Z,title:"Custom ...",content:(0,a.jsx)(t.V,{goModuleLink:"../go_module/store_file/custom"})}]}),"\n",(0,a.jsx)(o.h2,{id:"use-multiple-configuration-flag-files",children:"Use multiple configuration flag files"}),"\n",(0,a.jsx)(o.p,{children:"Sometimes, you may need to store your feature flags in different locations.\nIn such cases, you can configure multiple retrievers to retrieve the flags from different sources within your GO Feature\nFlag instance."}),"\n",(0,a.jsxs)(o.p,{children:["To set this up, you need to configure the ",(0,a.jsx)(o.a,{href:"../go_module/configuration#configuration-fields",children:(0,a.jsx)(o.code,{children:"Retrievers"})})," field to\nconsume from different retrievers.\nWhat this does is that it calls all the retrievers in parallel and applies them in the order you have provided."]}),"\n",(0,a.jsxs)(o.p,{children:["Keep in mind that if a flag is defined in multiple retrievers, it can be overridden by a later flag. For instance,\nif you have a flag named ",(0,a.jsx)(o.em,{children:(0,a.jsx)(o.code,{children:"my-feature-flag"})})," in the first file and another flag with the same name in the second file, the second configuration will take precedence."]})]})}function k(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},11029:(e,o,i)=>{i.d(o,{o:()=>A});var a=i(67294),r=i(39960);const s={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var t=i(86010),n=i(45697),l=i.n(n),g=i(85893);function A(e){const o=e.cards.map(((e,o)=>(0,a.createElement)(d,{...e,key:o})));return(0,g.jsx)("div",{className:"grid grid-pad",children:o})}function d(e){return(0,g.jsx)("div",{className:(0,t.Z)("col-1-3 mobile-col-1-1"),children:(0,g.jsx)(r.Z,{to:e.docLink,className:s.link,children:(0,g.jsxs)("div",{className:s.card,children:[(0,g.jsx)("div",{className:s.header,children:(0,g.jsxs)("span",{className:s.socialIcon,children:[e.logoCss&&(0,g.jsx)("i",{className:e.logoCss}),e.logoImg&&(0,g.jsx)("img",{src:e.logoImg,className:s.logoImg})]})}),(0,g.jsx)("div",{children:(0,g.jsx)("p",{className:s.name,children:e.title})}),(0,g.jsx)("p",{className:s.message,children:e.content}),(0,g.jsxs)("div",{className:s.badgeSection,children:[e.badges&&e.badges.map(((e,o)=>(0,g.jsx)("span",{className:(0,t.Z)(s.badge,s.badgeInfo),children:e},e))),e.warningBadges&&e.warningBadges.map(((e,o)=>(0,g.jsx)("span",{className:(0,t.Z)(s.badge,s.badgeWarning),children:e},e)))]})]})})})}A.prototype={cards:l().array.isRequired},d.propTypes={title:l().string.isRequired,badges:l().array,warningBadges:l().array,logoCss:l().string,logoImg:l().string,docLink:l().string}},33866:(e,o,i)=>{i.d(o,{V:()=>l});i(67294);var a=i(45697),r=i.n(a),s=i(39960);const t={button:"button_WfGi",linkBox:"linkBox_yNIn"};var n=i(85893);function l(e){return(0,n.jsxs)("div",{className:t.linkBox,children:[e.relayproxyLink&&(0,n.jsx)(s.Z,{to:e.relayproxyLink,children:(0,n.jsxs)("button",{className:t.button,children:[(0,n.jsx)("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy"]})}),e.goModuleLink&&(0,n.jsx)(s.Z,{to:e.goModuleLink,children:(0,n.jsxs)("button",{className:t.button,children:[(0,n.jsx)("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module"]})})]})}l.prototype={goModuleLink:r().array,relayproxyLink:r().array}},75555:(e,o,i)=>{i.d(o,{Z:()=>a});const a="data:image/png;base64,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"},88125:(e,o,i)=>{i.d(o,{Z:()=>a});const a=i.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},22418:(e,o,i)=>{i.d(o,{Z:()=>a});const a=i.p+"assets/images/github-a8a5fa2d913b039d8c3f48cc75157473.png"},80846:(e,o,i)=>{i.d(o,{Z:()=>a});const a="data:image/png;base64,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"},54495:(e,o,i)=>{i.d(o,{Z:()=>a});const a=i.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},23813:(e,o,i)=>{i.d(o,{Z:()=>a});const a="data:image/png;base64,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"},94170:(e,o,i)=>{i.d(o,{Z:()=>a});const a=i.p+"assets/images/k8s-88e38f11b997f80e8998e8724190e6d1.png"},33931:(e,o,i)=>{i.d(o,{Z:()=>a});const a=i.p+"assets/images/s3-c5757b62c88da5897cb06dd9d469ec8d.png"},11151:(e,o,i)=>{i.d(o,{Z:()=>n,a:()=>t});var a=i(67294);const r={},s=a.createContext(r);function t(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);