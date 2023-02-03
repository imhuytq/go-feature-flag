"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Webhook Exporter",l={unversionedId:"data_collection/webhook",id:"version-v0.25.2/data_collection/webhook",title:"Webhook Exporter",description:"The Webhook exporter will collect the data and send them via an HTTP POST request to the specified endpoint.",source:"@site/versioned_docs/version-v0.25.2/data_collection/webhook.md",sourceDirName:"data_collection",slug:"/data_collection/webhook",permalink:"/docs/v0.25.2/data_collection/webhook",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/data_collection/webhook.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"S3 Exporter",permalink:"/docs/v0.25.2/data_collection/s3"},next:{title:"Frequently Asked Questions",permalink:"/docs/v0.25.2/faq"}},p={},s=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Webhook format",id:"webhook-format",level:2},{value:"Signature",id:"signature",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhook-exporter"},"Webhook Exporter"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Webhook exporter")," will collect the data and send them via an HTTP POST request to the specified endpoint.\nEverytime the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory")," is reached a new call is performed.  "),(0,a.kt)("p",null,"!!! Info\nIf for some reason the call failed, we will keep the data in memory and retry to add the next time we reach ",(0,a.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),"."),(0,a.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &ffexporter.Webhook{\n            EndpointURL: " https://webhook.url/",\n            Secret:      "secret-for-signing",\n            Meta:        map[string]string{\n                "extraInfo": "info",\n            },\n        },\n    },\n    // ...\n}\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"EndpointURL ")),(0,a.kt)("td",{parentName:"tr",align:null},"EndpointURL of your webhook")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Secret ")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Secret used to sign your request body and fill the ",(0,a.kt)("inlineCode",{parentName:"td"},"X-Hub-Signature-256")," header.",(0,a.kt)("br",null),"See ",(0,a.kt)("a",{parentName:"td",href:"#signature"},"signature section")," for more details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Meta")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Add all the information you want to see in your request.")))),(0,a.kt)("h2",{id:"webhook-format"},"Webhook format"),(0,a.kt)("p",null,"If you have configured a webhook, a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request will be sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EndpointURL")," with a body in this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "events": [\n        {\n            "kind": "feature",\n            "contextKind": "anonymousUser",\n            "userKey": "14613538188334553206",\n            "creationDate": 1618909178,\n            "key": "test-flag",\n            "variation": "Default",\n            "value": false,\n            "default": false\n        },\n        // ...\n    ]\n}\n')),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("p",null,"This header ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"X-Hub-Signature-256"))," is sent if the webhook is configured with a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"secret")),".",(0,a.kt)("br",{parentName:"p"}),"\n","This is the ",(0,a.kt)("strong",{parentName:"p"},"HMAC hex digest")," of the request body, and is generated using the ",(0,a.kt)("strong",{parentName:"p"},"SHA-256")," hash function and the ",(0,a.kt)("strong",{parentName:"p"},"secret as the HMAC key"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The recommendation is to always use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," and on your API/webhook always verify the signature key to be sure that you don't have a man in the middle attack.")))}c.isMDXComponent=!0}}]);