"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[58880],{865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(85893),r=t(11151);const s={sidebar_position:4},o="Kubernetes configmaps",l={id:"go_module/store_file/kubernetes_configmaps",title:"Kubernetes configmaps",description:"The Kubernetes Retriever",source:"@site/versioned_docs/version-v1.5.1/go_module/store_file/kubernetes_configmaps.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/kubernetes_configmaps",permalink:"/docs/v1.5.1/go_module/store_file/kubernetes_configmaps",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.5.1/go_module/store_file/kubernetes_configmaps.md",tags:[],version:"v1.5.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S3 Bucket",permalink:"/docs/v1.5.1/go_module/store_file/s3"},next:{title:"Google Cloud Storage",permalink:"/docs/v1.5.1/go_module/store_file/google_cloud_storage"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kubernetes-configmaps",children:"Kubernetes configmaps"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/k8sretriever/#Retriever",children:(0,i.jsx)(n.strong,{children:"Kubernetes Retriever"})}),"\nwill access flags in a Kubernetes ConfigMap via the ",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/client-go",children:"Kubernetes Go client"})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'import (\n    restclient "k8s.io/client-go/rest"\n)\n\nconfig, _ := restclient.InClusterConfig()\nerr = ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &k8sretriever.Retriever{\n        Path: "file-example.yaml",\n        Namespace:      "default"\n        ConfigMapName: "my-configmap"\n        Key:    "somekey.yml"\n        ClientConfig: &config\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,i.jsx)(n.p,{children:"To configure your retriever:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Namespace"})})}),(0,i.jsx)(n.td,{children:"The namespace of the ConfigMap."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ConfigMapName"})})}),(0,i.jsx)(n.td,{children:"The name of the ConfigMap."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Key"})})}),(0,i.jsx)(n.td,{children:"The key within the ConfigMap storing the flags."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ClientConfig"})})}),(0,i.jsx)(n.td,{children:"The configuration object for the Kubernetes client"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);