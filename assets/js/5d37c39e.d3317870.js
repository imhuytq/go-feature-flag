"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[47819],{16331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(85893),l=t(11151);const o={sidebar_position:70,description:"Deploy the relay proxy."},a="Deploy the relay proxy",i={id:"relay_proxy/deploy_relay_proxy",title:"Deploy the relay proxy",description:"Deploy the relay proxy.",source:"@site/versioned_docs/version-v1.5.0/relay_proxy/deploy_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/deploy_relay_proxy",permalink:"/docs/v1.5.0/relay_proxy/deploy_relay_proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.5.0/relay_proxy/deploy_relay_proxy.md",tags:[],version:"v1.5.0",sidebarPosition:70,frontMatter:{sidebar_position:70,description:"Deploy the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Relay proxy endpoints",permalink:"/docs/v1.5.0/relay_proxy/relay_proxy_endpoints"},next:{title:"Monitor the relay proxy",permalink:"/docs/v1.5.0/relay_proxy/monitor_relay_proxy"}},s={},p=[{value:"Deploy in Kubernetes using Helm",id:"deploy-in-kubernetes-using-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Prepare and Configure the Repository",id:"step-1-prepare-and-configure-the-repository",level:3},{value:"Step 2: Install the Chart",id:"step-2-install-the-chart",level:3},{value:"Step 3: Verify The Chart Installation",id:"step-3-verify-the-chart-installation",level:3}];function h(e){const r={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"deploy-the-relay-proxy",children:"Deploy the relay proxy"}),"\n",(0,n.jsx)(r.h2,{id:"deploy-in-kubernetes-using-helm",children:"Deploy in Kubernetes using Helm"}),"\n",(0,n.jsxs)(r.p,{children:["The relay proxy can be deployed in Kubernetes using a helm chart.",(0,n.jsx)(r.br,{}),"\n","Helm is an invaluable tool for configuring and deploying applications to a Kubernetes environment."]}),"\n",(0,n.jsxs)(r.p,{children:["Below are the steps for installing a Helm Chart from a ",(0,n.jsx)(r.strong,{children:"GO Feature Flag"})," Helm repository."]}),"\n",(0,n.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Access to a Kubernetes cluster"}),"\n",(0,n.jsx)(r.li,{children:"Helm CLI installed on the client machine"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"step-1-prepare-and-configure-the-repository",children:"Step 1: Prepare and Configure the Repository"}),"\n",(0,n.jsx)(r.p,{children:"Add the repository to Helm with the Helm repository add command and provide a name and the repository URL. For example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"helm repo add go-feature-flag https://charts.gofeatureflag.org/\n"})}),"\n",(0,n.jsx)(r.h3,{id:"step-2-install-the-chart",children:"Step 2: Install the Chart"}),"\n",(0,n.jsx)(r.p,{children:"Install the Helm Chart with the Helm install command and provide the custom repository name, the chart name and any necessary values files."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"helm install go-feature-flag/relay-proxy -f values.yaml\n"})}),"\n",(0,n.jsx)(r.h3,{id:"step-3-verify-the-chart-installation",children:"Step 3: Verify The Chart Installation"}),"\n",(0,n.jsx)(r.p,{children:"Verify the Helm Chart installation with the Helm list command. For example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"helm list\n"})})]})}function d(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var n=t(67294);const l={},o=n.createContext(l);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);