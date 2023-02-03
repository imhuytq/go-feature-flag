"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,f=m["".concat(p,".").concat(s)]||m[s]||c[s]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},l="File Exporter",i={unversionedId:"go_module/data_collection/file",id:"go_module/data_collection/file",title:"File Exporter",description:"The file exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/docs/go_module/data_collection/file.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/file",permalink:"/docs/next/go_module/data_collection/file",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/go_module/data_collection/file.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage Exporter",permalink:"/docs/next/go_module/data_collection/google_cloud_storage"},next:{title:"Webhook Exporter",permalink:"/docs/next/go_module/data_collection/webhook"}},p={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],u={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-exporter"},"File Exporter"),(0,r.kt)("p",null,"The file exporter will collect the data and create a new file in a specific folder everytime we send the data.",(0,r.kt)("br",{parentName:"p"}),"\n","This file should be in the local instance."),(0,r.kt)("p",null,"Check this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_file"},"complete example")," to see how to export the data in a file."),(0,r.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &fileexporter.Exporter{\n            OutputDir: "/output-data/",\n            Format: "csv",\n            FileName: "flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}",\n            CsvTemplate: "{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"\n        },\n    },\n    // ...\n}\n')),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OutputDir")),(0,r.kt)("td",{parentName:"tr",align:null},"OutputDir is the location of the directory where to store the exported files.",(0,r.kt)("br",null),"It should finish with a ",(0,r.kt)("inlineCode",{parentName:"td"},"/"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Optional)")," Format is the output format you want in your exported file.",(0,r.kt)("br",null),"Available format: ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"JSON")),", ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"CSV")),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: ",(0,r.kt)("inlineCode",{parentName:"strong"},"JSON")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filename")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Optional)")," Filename is the name of your output file.",(0,r.kt)("br",null),"You can use a templated config to define the name of your exported files.",(0,r.kt)("br",null),"Available replacement are ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Hostname}}"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Timestamp}}")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Format}}"),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: ",(0,r.kt)("inlineCode",{parentName:"strong"},"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CsvTemplate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Optional)")," CsvTemplate is used if your output format is CSV.",(0,r.kt)("br",null),"This field will be ignored if you are using another format than CSV.",(0,r.kt)("br",null),"You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go"},"internal/exporter/feature_event.go")," to see what are the fields available.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"))))),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/fileexporter"},"godoc for full details"),"."))}c.isMDXComponent=!0}}]);