"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[26487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),s=o,g=u["".concat(p,".").concat(s)]||u[s]||c[s]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:2},l="Google Cloud Storage Exporter",i={unversionedId:"go_module/data_collection/google_cloud_storage",id:"version-v1.0.1/go_module/data_collection/google_cloud_storage",title:"Google Cloud Storage Exporter",description:"The Google Cloud Storage exporter will collect the data and create a new file in a specific folder everytime we send the data.",source:"@site/versioned_docs/version-v1.0.1/go_module/data_collection/google_cloud_storage.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/google_cloud_storage",permalink:"/docs/v1.0.1/go_module/data_collection/google_cloud_storage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.0.1/go_module/data_collection/google_cloud_storage.md",tags:[],version:"v1.0.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"S3 Exporter",permalink:"/docs/v1.0.1/go_module/data_collection/s3"},next:{title:"File Exporter",permalink:"/docs/v1.0.1/go_module/data_collection/file"}},p={},d=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-storage-exporter"},"Google Cloud Storage Exporter"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Google Cloud Storage exporter")," will collect the data and create a new file in a specific folder everytime we send the data."),(0,o.kt)("p",null,"Everytime the ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory")," is reached a new file will be added to S3."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If for some reason the Google Cloud Storage upload failed, we will keep the data in memory and retry to add the next time we reach ",(0,o.kt)("inlineCode",{parentName:"p"},"FlushInterval")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),".")),(0,o.kt)("p",null,"Check this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/data_export_googlecloudstorage"},"complete example")," to see how to export the data in S3."),(0,o.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        // ...\n        Exporter: &gcstorageexporter.Exporter{\n            Bucket:   "test-goff",\n            Format:   "json",\n            Path:     "yourPath",\n            Filename: "flag-variation-{{ .Timestamp}}.{{ .Format}}",\n            Options:  []option.ClientOption{}, // Your google cloud SDK options\n        },\n    },\n    // ...\n}\n')),(0,o.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Bucket ")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of your Google Cloud Storage Bucket.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CsvTemplate")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," CsvTemplate is used if your output format is CSV. This field will be ignored if you are using another format than CSV. You can decide which fields you want in your CSV line with a go-template syntax, please check ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/internal/exporter/feature_event.go"},"internal/exporter/feature_event.go")," to see what are the fields available.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Kind}};{{ .ContextKind}};{{ .UserKey}};{{ .CreationDate}};{{ .Key}};{{ .Variation}};{{ .Value}};{{ .Default}}\\n"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Filename")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," Filename is the name of your output file. You can use a templated config to define the name of your exported files.",(0,o.kt)("br",null),"Available replacement are ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Hostname}}"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Timestamp}"),"} and ",(0,o.kt)("inlineCode",{parentName:"td"},"{{ .Format}}"),(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"flag-variation-{{ .Hostname}}-{{ .Timestamp}}.{{ .Format}}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Format")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," Format is the output format you want in your exported file. Available format are ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"JSON"))," and ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"CSV")),". ",(0,o.kt)("em",{parentName:"td"},"(Default: ",(0,o.kt)("inlineCode",{parentName:"em"},"JSON"),")"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Options")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," An instance of ",(0,o.kt)("inlineCode",{parentName:"td"},"option.ClientOption")," that configures your access to Google Cloud. ",(0,o.kt)("br",null)," Check ",(0,o.kt)("a",{parentName:"td",href:"https://cloud.google.com/docs/authentication"},"this documentation for more info"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Path ")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"(optional)")," The location of the directory in your bucket.")))),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/gcstorageexporter"},"godoc for full details"),"."))}c.isMDXComponent=!0}}]);