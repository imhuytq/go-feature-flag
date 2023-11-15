"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[83428],{23992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=t(85893),r=t(11151);const i={sidebar_position:4},s="Webhook Exporter",d={id:"go_module/data_collection/webhook",title:"Webhook Exporter",description:"The Webhook exporter will collect the data and send them via an HTTP POST request to the specified endpoint.",source:"@site/versioned_docs/version-v1.10.1/go_module/data_collection/webhook.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/webhook",permalink:"/docs/v1.10.1/go_module/data_collection/webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.1/go_module/data_collection/webhook.md",tags:[],version:"v1.10.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"File Exporter",permalink:"/docs/v1.10.1/go_module/data_collection/file"},next:{title:"Log Exporter",permalink:"/docs/v1.10.1/go_module/data_collection/log"}},a={},l=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Webhook format",id:"webhook-format",level:2},{value:"Signature",id:"signature",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"webhook-exporter",children:"Webhook Exporter"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Webhook exporter"})," will collect the data and send them via an HTTP POST request to the specified endpoint.\nEverytime the ",(0,o.jsx)(n.code,{children:"FlushInterval"})," or ",(0,o.jsx)(n.code,{children:"MaxEventInMemory"})," is reached a new call is performed."]}),"\n",(0,o.jsxs)(n.p,{children:["!!! Info\nIf for some reason the call failed, we will keep the data in memory and retry to add the next time we reach ",(0,o.jsx)(n.code,{children:"FlushInterval"})," or ",(0,o.jsx)(n.code,{children:"MaxEventInMemory"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &webhookexporter.Exporter{\n            EndpointURL: " https://webhook.url/",\n            Secret:      "secret-for-signing",\n            Meta:        map[string]string{\n                "extraInfo": "info",\n            }, \n            Headers: map[string][]string{\n                "Authorization": {"Bearer auth_token"},\n            },\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Field"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"EndpointURL "})}),(0,o.jsx)(n.td,{children:"EndpointURL of your webhook"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Secret "})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"}),(0,o.jsx)("br",{}),"Secret used to sign your request body and fill the ",(0,o.jsx)(n.code,{children:"X-Hub-Signature-256"})," header.",(0,o.jsx)("br",{}),"See ",(0,o.jsx)(n.a,{href:"#signature",children:"signature section"})," for more details."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Meta"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"}),(0,o.jsx)("br",{}),"Add all the information you want to see in your request."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Headers"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.em,{children:"(optional)"}),(0,o.jsx)("br",{})," the list of Headers to send to the endpoint"]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"webhook-format",children:"Webhook format"}),"\n",(0,o.jsxs)(n.p,{children:["If you have configured a webhook, a ",(0,o.jsx)(n.code,{children:"POST"})," request will be sent to the ",(0,o.jsx)(n.code,{children:"EndpointURL"})," with a body in this format:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "events": [\n        {\n            "kind": "feature",\n            "contextKind": "anonymousUser",\n            "userKey": "14613538188334553206",\n            "creationDate": 1618909178,\n            "key": "test-flag",\n            "variation": "Default",\n            "value": false,\n            "default": false\n        },\n        // ...\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,o.jsxs)(n.p,{children:["This header ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"X-Hub-Signature-256"})})," is sent if the webhook is configured with a ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"secret"})}),".",(0,o.jsx)(n.br,{}),"\n","This is the ",(0,o.jsx)(n.strong,{children:"HMAC hex digest"})," of the request body, and is generated using the ",(0,o.jsx)(n.strong,{children:"SHA-256"})," hash function and the ",(0,o.jsx)(n.strong,{children:"secret as the HMAC key"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The recommendation is to always use the ",(0,o.jsx)(n.code,{children:"Secret"})," and on your API/webhook always verify the signature key to be sure that you don't have a man in the middle attack."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);