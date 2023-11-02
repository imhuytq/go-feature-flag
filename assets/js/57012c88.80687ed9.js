"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[41681],{40424:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>A,metadata:()=>m,toc:()=>p});var s=r(85893),a=r(11151),t=r(53182),i=r(23813),n=r(75555),l=r(88125),f=r(22418),g=r(54495),c=r(33931),u=r(94170);const A={sidebar_position:10,description:"Where to store your configuration flag?"},d="Where to store your configuration flag",m={id:"configure_flag/store_your_flags",title:"Where to store your configuration flag",description:"Where to store your configuration flag?",source:"@site/versioned_docs/version-v1.8.2/configure_flag/store_your_flags.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/store_your_flags",permalink:"/docs/v1.8.2/configure_flag/store_your_flags",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.2/configure_flag/store_your_flags.mdx",tags:[],version:"v1.8.2",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Where to store your configuration flag?"},sidebar:"tutorialSidebar",previous:{title:"Configure your feature flags",permalink:"/docs/v1.8.2/category/configure-your-feature-flags"},next:{title:"How to configure a flag",permalink:"/docs/v1.8.2/configure_flag/flag_format"}},h={},p=[{value:"Available retrievers",id:"available-retrievers",level:2},{value:"Use multiple configuration flag files",id:"use-multiple-configuration-flag-files",level:2}];function y(e){const o={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"where-to-store-your-configuration-flag",children:"Where to store your configuration flag"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"GO Feature Flag"})," is a tool that makes it easy to implement feature flags in your application. One of the benefits of\nusing GO Feature Flag is that it is designed to be simple and lightweight.",(0,s.jsx)(o.br,{}),"\n","To achieve this, the solution uses a file-based approach to configure your flags."]}),"\n",(0,s.jsxs)(o.p,{children:["When you use GO Feature Flag, you create one or more file(s) ",(0,s.jsxs)(o.em,{children:["(",(0,s.jsx)(o.code,{children:"YAML"}),", ",(0,s.jsx)(o.code,{children:"TOML"})," or ",(0,s.jsx)(o.code,{children:"JSON"}),")"]})," that contains your feature\nflags and their values. You can then upload this file(s) where you want, and GO Feature Flag will use it.",(0,s.jsx)(o.br,{}),"\n","The way the solution achieves this is through the use of retrievers, which allow you to load your feature flag\nconfiguration file from various sources."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Retrievers"})," are a core concept in GO Feature Flag. They are responsible for loading your feature flag configuration\nfile from a specified location, such as a file on your local machine or a remote storage service. This allows you to\nstore your configuration file in a location that works best for your workflow."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"GO Feature Flag"})," supports a variety of retrievers out of the box, including ",(0,s.jsx)(o.code,{children:"S3"}),", ",(0,s.jsx)(o.code,{children:"Google Cloud Storage"}),", ",(0,s.jsx)(o.code,{children:"Github"}),",\n",(0,s.jsx)(o.code,{children:"HTTP"}),", ",(0,s.jsx)(o.code,{children:"Kubernetes config maps"}),", ",(0,s.jsx)(o.code,{children:"Local file"})," ...",(0,s.jsx)(o.br,{}),"\n","But you can also implement your own custom retriever if needed."]}),"\n",(0,s.jsx)(o.p,{children:"Using retrievers in GO Feature Flag is straightforward. You simply specify which retriever to use in your configuration\nfile, along with any required configuration options. GO Feature Flag will then use the specified retriever to load your\nconfiguration file and will evaluate your feature flags based on this configuration."}),"\n",(0,s.jsx)(o.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,s.jsx)(t.o,{test:[{name:"Kubernetes Configmap",logo:u.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#kubernetes-configmap",gomodule:"/docs/go_module/store_file/kubernetes_configmaps"},{name:"AWS S3",logo:c.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#s3",gomodule:"/docs/go_module/store_file/s3"},{name:"Google Storage",logo:g.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#google-storage",gomodule:"/docs/go_module/store_file/google_cloud_storage"},{name:"HTTP/HTTPS",logo:i.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#http",gomodule:"/docs/go_module/store_file/http"},{name:"GitHub",logo:f.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#github",gomodule:"/docs/go_module/store_file/github"},{name:"Local File",logo:l.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#file",gomodule:"/docs/go_module/store_file/file"},{name:"Custom retriever",logo:n.Z,gomodule:"/docs/go_module/store_file/custom"}]}),"\n",(0,s.jsx)(o.h2,{id:"use-multiple-configuration-flag-files",children:"Use multiple configuration flag files"}),"\n",(0,s.jsx)(o.p,{children:"Sometimes, you may need to store your feature flags in different locations.\nIn such cases, you can configure multiple retrievers to retrieve the flags from different sources within your GO Feature\nFlag instance."}),"\n",(0,s.jsxs)(o.p,{children:["To set this up, you need to configure the ",(0,s.jsx)(o.a,{href:"../go_module/configuration#configuration-fields",children:(0,s.jsx)(o.code,{children:"Retrievers"})})," field to\nconsume from different retrievers.\nWhat this does is that it calls all the retrievers in parallel and applies them in the order you have provided."]}),"\n",(0,s.jsxs)(o.p,{children:["Keep in mind that if a flag is defined in multiple retrievers, it can be overridden by a later flag. For instance,\nif you have a flag named ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.code,{children:"my-feature-flag"})})," in the first file and another flag with the same name in the second file, the second configuration will take precedence."]})]})}function v(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},53182:(e,o,r)=>{r.d(o,{o:()=>l});var s=r(67294),a=r(86010);const t={title:"title_J78f",description:"description_N_gU",cardLogo:"cardLogo_xSOJ",container:"container_ZAFJ",card:"card_JSXq",button:"button_YtM6",cardDetails:"cardDetails_QpCf",linkBox:"linkBox_jzj5"};var i=r(39960),n=r(85893);function l(e){const o=e.test.map(((e,o)=>(0,s.createElement)(f,{...e,key:o})));return(0,n.jsx)("div",{className:"grid grid-pad",children:o})}function f(e){return(0,n.jsx)("div",{className:(0,a.Z)("col-1-3 mobile-col-1-2",t.container),children:(0,n.jsxs)("div",{className:t.card,children:[(0,n.jsx)("img",{src:e.logo,className:t.cardLogo}),(0,n.jsxs)("div",{className:t.cardDetails,children:[(0,n.jsx)("div",{className:t.title,children:e.name}),(0,n.jsxs)("div",{className:t.linkBox,children:[e.relayproxy&&(0,n.jsx)(i.Z,{to:e.relayproxy,children:(0,n.jsxs)("button",{className:(0,a.Z)(t.button),children:[(0,n.jsx)("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy"]})}),e.gomodule&&(0,n.jsx)(i.Z,{to:e.gomodule,children:(0,n.jsxs)("button",{className:(0,a.Z)(t.button),children:[(0,n.jsx)("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module"]})})]})]})]})})}},75555:(e,o,r)=>{r.d(o,{Z:()=>s});const s="data:image/png;base64,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"},88125:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},22418:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/github-a8a5fa2d913b039d8c3f48cc75157473.png"},54495:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},23813:(e,o,r)=>{r.d(o,{Z:()=>s});const s="data:image/png;base64,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"},94170:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/k8s-88e38f11b997f80e8998e8724190e6d1.png"},33931:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/s3-c5757b62c88da5897cb06dd9d469ec8d.png"},11151:(e,o,r)=>{r.d(o,{Z:()=>n,a:()=>i});var s=r(67294);const a={},t=s.createContext(a);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);