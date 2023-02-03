"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Kubernetes configmaps",l={unversionedId:"flag_file/kubernetes_configmaps",id:"version-v0.26.1/flag_file/kubernetes_configmaps",title:"Kubernetes configmaps",description:"The Kubernetes Retriever",source:"@site/versioned_docs/version-v0.26.1/flag_file/kubernetes_configmaps.md",sourceDirName:"flag_file",slug:"/flag_file/kubernetes_configmaps",permalink:"/docs/v0.26.1/flag_file/kubernetes_configmaps",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.26.1/flag_file/kubernetes_configmaps.md",tags:[],version:"v0.26.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP endpoint",permalink:"/docs/v0.26.1/flag_file/http"},next:{title:"S3 Bucket",permalink:"/docs/v0.26.1/flag_file/s3"}},p={},s=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],c={toc:s},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-configmaps"},"Kubernetes configmaps"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/k8sretriever/#Retriever"},(0,a.kt)("strong",{parentName:"a"},"Kubernetes Retriever")),"\nwill access flags in a Kubernetes ConfigMap via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/client-go"},"Kubernetes Go client")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'import (\n    restclient "k8s.io/client-go/rest"\n)\n\nconfig, _ := restclient.InClusterConfig()\nerr = ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &k8sretriever.Retriever{\n        Path: "file-example.yaml",\n        Namespace:      "default"\n        ConfigMapName: "my-configmap"\n        Key:    "somekey.yml"\n        ClientConfig: &config\n    },\n})\ndefer ffclient.Close()\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("p",null,"To configure your retriever:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Namespace"))),(0,a.kt)("td",{parentName:"tr",align:null},"The namespace of the ConfigMap.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"ConfigMapName"))),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the ConfigMap.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Key"))),(0,a.kt)("td",{parentName:"tr",align:null},"The key within the ConfigMap storing the flags.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"ClientConfig"))),(0,a.kt)("td",{parentName:"tr",align:null},"The configuration object for the Kubernetes client")))))}u.isMDXComponent=!0}}]);