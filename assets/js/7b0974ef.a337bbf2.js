"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[38587],{65491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(85893),i=n(11151);const r={sidebar_position:1},a="S3 Exporter",s={id:"go_module/data_collection/s3",title:"S3 Exporter",description:"The S3 exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v1.2.2/go_module/data_collection/s3.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/s3",permalink:"/docs/v1.2.2/go_module/data_collection/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.2/go_module/data_collection/s3.md",tags:[],version:"v1.2.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Export data",permalink:"/docs/v1.2.2/go_module/data_collection/"},next:{title:"Google Cloud Storage Exporter",permalink:"/docs/v1.2.2/go_module/data_collection/google_cloud_storage"}},d={},l=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"s3-exporter",children:"S3 Exporter"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"S3 exporter"})," will collect the data and create a new file in a specific folder everytime we send the data."]}),"\n",(0,o.jsxs)(t.p,{children:["Everytime the ",(0,o.jsx)(t.code,{children:"FlushInterval"})," or ",(0,o.jsx)(t.code,{children:"MaxEventInMemory"})," is reached a new file will be added to S3."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If for some reason the S3 upload failed, we will keep the data in memory and retry to add the next time we reach ",(0,o.jsx)(t.code,{children:"FlushInterval"})," or ",(0,o.jsx)(t.code,{children:"MaxEventInMemory"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"export in S3 screenshot",src:n(30342).Z+"",width:"2224",height:"504"})}),"\n",(0,o.jsxs)(t.p,{children:["Check this ",(0,o.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_s3",children:"complete example"})," to see how to export the data in S3."]}),"\n",(0,o.jsx)(t.h2,{id:"configuration-example",children:"Configuration example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &s3exporter.Exporter{\n            Format: "csv",\n            FileName: "flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}",\n            CsvTemplate: "{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n",\n            Bucket:    "my-bucket",\n            S3Path:    "/go-feature-flag/variations/",\n            Filename:  "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            AwsConfig: &aws.Config{\n               Region: aws.String("eu-west-1"),\n           },\n        },\n    },\n    // ...\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Bucket "})}),(0,o.jsx)(t.td,{children:"Name of your S3 Bucket."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"AwsConfig "})}),(0,o.jsxs)(t.td,{children:["An instance of ",(0,o.jsx)(t.code,{children:"aws.Config"})," that configure your access to AWS ",(0,o.jsxs)(t.em,{children:["(see ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html",children:"this documentation for more info"}),")"]}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"CsvTemplate"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using another format than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,o.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go",children:"internal/exporter/feature_event.go"})," to see what are the fields available.",(0,o.jsx)("br",{}),(0,o.jsx)(t.strong,{children:"Default:"})," ",(0,o.jsx)(t.code,{children:"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Filename"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,o.jsx)("br",{}),"Available replacement are ",(0,o.jsx)(t.code,{children:"{{ .Hostname}}"}),", ",(0,o.jsx)(t.code,{children:"{{ .Timestamp}"}),"} and ",(0,o.jsx)(t.code,{children:"{{ .Format}}"}),(0,o.jsx)("br",{}),"Default: ",(0,o.jsx)(t.code,{children:"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Format"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," Format is the output format you want in your exported file. Available format are ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"JSON"})})," and ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"CSV"})}),". ",(0,o.jsxs)(t.em,{children:["(Default: ",(0,o.jsx)(t.code,{children:"JSON"}),")"]})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"S3Path "})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," The location of the directory in S3."]})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["Check the ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/s3exporter",children:"godoc for full details"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},30342:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/s3-exporter-b41d2e1b6de562b6a4fe26f78d5b7d83.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(67294);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);