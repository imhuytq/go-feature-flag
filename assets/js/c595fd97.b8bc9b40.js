"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[35246],{43405:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(85893),o=i(11151);const r={sidebar_position:4},s="Kubernetes configmaps",a={id:"go_module/store_file/kubernetes_configmaps",title:"Kubernetes configmaps",description:"A ConfigMap is an API object used to store non-confidential data in key-value pairs inside kubernetes.",source:"@site/versioned_docs/version-v1.12.0/go_module/store_file/kubernetes_configmaps.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/kubernetes_configmaps",permalink:"/docs/v1.12.0/go_module/store_file/kubernetes_configmaps",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.0/go_module/store_file/kubernetes_configmaps.md",tags:[],version:"v1.12.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"S3 Bucket",permalink:"/docs/v1.12.0/go_module/store_file/s3"},next:{title:"Google Cloud Storage",permalink:"/docs/v1.12.0/go_module/store_file/google_cloud_storage"}},l={},c=[{value:"Add your config file as configmap",id:"add-your-config-file-as-configmap",level:2},{value:"Configuration Example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetes-configmaps",children:"Kubernetes configmaps"}),"\n",(0,t.jsxs)(n.p,{children:["A ConfigMap is an API object used to store non-confidential data in key-value pairs inside kubernetes.",(0,t.jsx)(n.br,{}),"\n","GO Feature Flag can read directly in a configmap in your namespace."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/k8sretriever/#Retriever",children:(0,t.jsx)(n.strong,{children:"Kubernetes Retriever"})}),"\nwill access flags in a Kubernetes ConfigMap via the ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/client-go",children:"Kubernetes Go client"})]}),"\n",(0,t.jsx)(n.h2,{id:"add-your-config-file-as-configmap",children:"Add your config file as configmap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create configmap goff --from-file=examples/retriever_configmap/flags.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'import (\n    restclient "k8s.io/client-go/rest"\n)\n\nconfig, _ := restclient.InClusterConfig()\nerr = ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &k8sretriever.Retriever{\n        Path: "file-example.yaml",\n        Namespace:      "default"\n        ConfigMapName: "my-configmap"\n        Key:    "somekey.yml"\n        ClientConfig: &config\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,t.jsx)(n.p,{children:"To configure your retriever:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Namespace"})})}),(0,t.jsx)(n.td,{children:"The namespace of the ConfigMap."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ConfigMapName"})})}),(0,t.jsx)(n.td,{children:"The name of the ConfigMap."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Key"})})}),(0,t.jsx)(n.td,{children:"The key within the ConfigMap storing the flags."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ClientConfig"})})}),(0,t.jsx)(n.td,{children:"The configuration object for the Kubernetes client"})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);