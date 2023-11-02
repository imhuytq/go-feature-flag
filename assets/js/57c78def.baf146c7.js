"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[36734],{71083:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(85893),r=o(11151);const s={sidebar_position:6},i="SQS Exporter",c={id:"go_module/data_collection/sqs",title:"SQS Exporter",description:"The SQS exporter will collect the data and create an event in the queue for each evaluation we receive.",source:"@site/versioned_docs/version-v1.15.0/go_module/data_collection/sqs.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/sqs",permalink:"/docs/v1.15.0/go_module/data_collection/sqs",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.0/go_module/data_collection/sqs.md",tags:[],version:"v1.15.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Log Exporter",permalink:"/docs/v1.15.0/go_module/data_collection/log"},next:{title:"Custom exporter",permalink:"/docs/v1.15.0/go_module/data_collection/custom"}},a={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sqs-exporter",children:"SQS Exporter"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"SQS exporter"})," will collect the data and create an event in the queue for each evaluation we receive."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'ffclient.Config{ \n   // ...\n\t cfg, _ := config.LoadDefaultConfig(context.TODO())\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &sqsexporter.Exporter{\n\t\t\t      QueueURL: "https://sqs.eu-west-1.amazonaws.com/XXX/test-queue",\n            AwsConfig: &cfg,\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"QueueURL "})}),(0,n.jsxs)(t.td,{children:["URL of your SQS queue.",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"You can find it in your AWS console."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AwsConfig "})}),(0,n.jsxs)(t.td,{children:["An instance of ",(0,n.jsx)(t.code,{children:"aws.Config"})," that configure your access to AWS ",(0,n.jsxs)(t.em,{children:["(see ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html",children:"this documentation for more info"}),")"]}),"."]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/sqsexporter",children:"godoc for full details"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);