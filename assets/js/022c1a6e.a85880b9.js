"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[27072],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),s=o,g=m["".concat(p,".").concat(s)]||m[s]||c[s]||r;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},l="Google Cloud Storage Exporter",i={unversionedId:"data_collection/google_cloud_storage",id:"version-v0.25.2/data_collection/google_cloud_storage",title:"Google Cloud Storage Exporter",description:"The Google Cloud Storage exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v0.25.2/data_collection/google_cloud_storage.md",sourceDirName:"data_collection",slug:"/data_collection/google_cloud_storage",permalink:"/docs/v0.25.2/data_collection/google_cloud_storage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/data_collection/google_cloud_storage.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Exporter",permalink:"/docs/v0.25.2/data_collection/file"},next:{title:"Log Exporter",permalink:"/docs/v0.25.2/data_collection/log"}},p={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],u={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-storage-exporter"},"Google Cloud Storage Exporter"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Google Cloud Storage exporter")," will collect the data and create a new file in a specific folder everytime we send the data."),(0,o.kt)("p",null,"Everytime the ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory")," is reached a new file will be added to S3."),(0,o.kt)("p",null,"!!! Info\nIf for some reason the Google Cloud Storage upload failed, we will keep the data in memory and retry to add the next time we reach ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),"."),(0,o.kt)("p",null,"Check this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_googlecloudstorage"},"complete example")," to see how to export the data in S3."),(0,o.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &ffexporter.GoogleCloudStorage{\n            Bucket:   "test-goff",\n            Format:   "json",\n            Path:     "yourPath",\n            Filename: "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            Options:  []option.ClientOption{}, // Your google cloud SDK options\n        },\n    },\n    // ...\n}\n')),(0,o.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Bucket ")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of your Google Cloud Storage Bucket.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CsvTemplate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using another format than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go"},"internal/exporter/feature_event.go")," to see what are the fields available.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Filename")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,o.kt)("br",null),"Available replacement are ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Hostname}}"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Timestamp}"),"} and ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Format}}"),(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Format")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," Format is the output format you want in your exported file. Available format are ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"JSON"))," and ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"CSV")),". ",(0,o.kt)("em",{parentName:"td"},"(Default: ",(0,o.kt)("inlineCode",{parentName:"em"},"JSON"),")"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Options")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," An instance of ",(0,o.kt)("inlineCode",{parentName:"td"},"option.ClientOption")," that configures your access to Google Cloud. ",(0,o.kt)("br",null)," Check ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/docs/authentication"},"this documentation for more info"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Path ")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," The location of the directory in your bucket.")))),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffexporter#GoogleCloudStorage"},"godoc for full details"),"."))}c.isMDXComponent=!0}}]);