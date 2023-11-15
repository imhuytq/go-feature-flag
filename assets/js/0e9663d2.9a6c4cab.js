"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[48611],{1302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(85893),i=n(11151);const o={sidebar_position:21,description:"Getting started with the relay proxy."},s="Getting started",a={id:"relay_proxy/getting_started",title:"Getting started",description:"Getting started with the relay proxy.",source:"@site/versioned_docs/version-v1.7.0/relay_proxy/getting_started.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/getting_started",permalink:"/docs/v1.7.0/relay_proxy/getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.7.0/relay_proxy/getting_started.md",tags:[],version:"v1.7.0",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"Getting started with the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Install the relay proxy",permalink:"/docs/v1.7.0/relay_proxy/install_relay_proxy"},next:{title:"Configure the relay proxy",permalink:"/docs/v1.7.0/relay_proxy/configure_relay_proxy"}},l={},c=[{value:"Deployment options",id:"deployment-options",level:2},{value:"Specifying a configuration",id:"specifying-a-configuration",level:2},{value:"Exporting metrics and traces",id:"exporting-metrics-and-traces",level:2},{value:"Service endpoints",id:"service-endpoints",level:2}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(t.p,{children:["Before starting your ",(0,r.jsx)(t.strong,{children:"relay proxy"})," you will need to create a minimal configuration file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# this is a minimal config containing only where your flag file is located \nretriever:\n  kind: http\n  url: https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/examples/retriever_file/flags.yaml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After that you can launch the ",(0,r.jsx)(t.strong,{children:"relay proxy"})," by using this command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"go-feature-flag-relay-proxy --config=/path/to/your/configfile\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"relay proxy"})," will read the configuration file and retrieve all the flags.",(0,r.jsx)(t.br,{}),"\n","After that you can use all the available endpoints ",(0,r.jsxs)(t.em,{children:["(see ",(0,r.jsx)(t.strong,{children:"Service endpoints"})," section)"]})," and get the variations for your users."]}),"\n",(0,r.jsx)(t.h2,{id:"deployment-options",children:"Deployment options"}),"\n",(0,r.jsxs)(t.p,{children:["A common way to run ",(0,r.jsx)(t.strong,{children:"go-feature-flag relay proxy"})," is to use the Docker Container.",(0,r.jsx)(t.br,{}),"\n","An image is available on docker Hub ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/thomaspoignant/go-feature-flag-relay-proxy",children:(0,r.jsx)(t.code,{children:"thomaspoignant/go-feature-flag-relay-proxy"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also run it as a service in your application following the ",(0,r.jsx)(t.strong,{children:"Installation"})," section."]}),"\n",(0,r.jsx)(t.h2,{id:"specifying-a-configuration",children:"Specifying a configuration"}),"\n",(0,r.jsx)(t.p,{children:"To configure the relay proxy you should provide a configuration file when launching the instance."}),"\n",(0,r.jsxs)(t.p,{children:["The easiest way to provide the file is to use the option ",(0,r.jsx)(t.code,{children:"--config=/path_to_your_file.yaml"}),".",(0,r.jsx)(t.br,{}),"\n","But if you don't provide this option, the relay proxy will look in these folders if a file named ",(0,r.jsx)(t.code,{children:"goff-proxy.yaml"})," is available."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"current folder"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"/goff/"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"/etc/opt/goff/"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To learn how to configure the relay proxy, read ",(0,r.jsx)(t.a,{href:"./configure_relay_proxy",children:"Configuration"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"exporting-metrics-and-traces",children:"Exporting metrics and traces"}),"\n",(0,r.jsxs)(t.p,{children:["To export the data you can use all the capabilities of ",(0,r.jsx)(t.code,{children:"go-feature-flag"})," SDK.",(0,r.jsx)(t.br,{}),"\n","To configure it please refer to the ",(0,r.jsxs)(t.a,{href:"./configure_relay_proxy#exporter",children:["type ",(0,r.jsx)(t.code,{children:"exporter"})," section"]})," of the configuration."]}),"\n",(0,r.jsx)(t.h2,{id:"service-endpoints",children:"Service endpoints"}),"\n",(0,r.jsxs)(t.p,{children:["The Relay Proxy defines many HTTP/HTTPS endpoints.\nMost of these are proxies for GO Feature Flag services, to be used by SDKs that connect to the Relay Proxy.",(0,r.jsx)(t.br,{}),"\n","Others are specific to the Relay Proxy, such as for monitoring its status."]}),"\n",(0,r.jsxs)(t.p,{children:["Please refer to ",(0,r.jsx)(t.a,{href:"./relay_proxy_endpoints",children:"endpoints documentation"})," to get the full details of what exists in our REST API."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);