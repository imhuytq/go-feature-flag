"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(a),f=r,c=s["".concat(d,".").concat(f)]||s[f]||m[f]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},o="Data format / Export data",i={unversionedId:"data_collection/index",id:"version-v0.25.2/data_collection/index",title:"Data format / Export data",description:"If you want to export data about how your flag are used, you can use the DataExporter.",source:"@site/versioned_docs/version-v0.25.2/data_collection/index.md",sourceDirName:"data_collection",slug:"/data_collection/",permalink:"/docs/v0.25.2/data_collection/",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/data_collection/index.md",tags:[],version:"v0.25.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scheduled rollout",permalink:"/docs/v0.25.2/rollout/scheduled"},next:{title:"Custom exporter",permalink:"/docs/v0.25.2/data_collection/custom"}},d={},u=[{value:"Data format",id:"data-format",level:2},{value:"Example",id:"example",level:3},{value:"Configuration fields",id:"configuration-fields",level:3},{value:"How to configure data export?",id:"how-to-configure-data-export",level:2},{value:"Example",id:"example-1",level:3},{value:"Configuration fields",id:"configuration-fields-1",level:3},{value:"Don&#39;t track a flag",id:"dont-track-a-flag",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3}],p={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-format--export-data"},"Data format / Export data"),(0,r.kt)("p",null,"If you want to export data about how your flag are used, you can use the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"DataExporter")),".",(0,r.kt)("br",{parentName:"p"}),"\n","It collects all the variations events and can save these events on several locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/data_collection/file"},"File")," ",(0,r.kt)("em",{parentName:"li"},"- create local files with the variation usages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/data_collection/log"},"Log")," ",(0,r.kt)("em",{parentName:"li"},"- use your logger to write the variation usages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/data_collection/s3"},"S3")," ",(0,r.kt)("em",{parentName:"li"},"- export your variation usages to S3.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/data_collection/webhook"},"Webhook")," ",(0,r.kt)("em",{parentName:"li"},"- export your variation usages by calling a webhook."))),(0,r.kt)("p",null,"If the existing exporter does not work with your system you can extend the system and use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0.25.2/data_collection/custom"},"custom exporter"),"."),(0,r.kt)("h2",{id:"data-format"},"Data format"),(0,r.kt)("p",null,"Currently, we are supporting only feature events.",(0,r.kt)("br",{parentName:"p"}),"\n",'It represents individual flag evaluations and are considered "full fidelity" events.'),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'linenums="1"',linenums:'"1"'},'{\n    "kind": "feature",\n    "contextKind": "anonymousUser",\n    "userKey": "ABCD",\n    "creationDate": 1618228297,\n    "key": "test-flag",\n    "variation": "Default",\n    "value": false,\n    "default": false\n}\n')),(0,r.kt)("h3",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"kind"))),(0,r.kt)("td",{parentName:"tr",align:null},"The kind for a feature event is feature. A feature event will only be generated if the trackEvents attribute of the flag is set to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"contextKind"))),(0,r.kt)("td",{parentName:"tr",align:null},'The kind of context which generated an event. This will only be "',(0,r.kt)("strong",{parentName:"td"},"anonymousUser"),'" for events generated on behalf of an anonymous user or the reserved word "',(0,r.kt)("strong",{parentName:"td"},"user"),'" for events generated on behalf of a non-anonymous user')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"userKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"The key of the user object used in a feature flag evaluation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"creationDate"))),(0,r.kt)("td",{parentName:"tr",align:null},"When the feature flag was requested at Unix epoch time in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"key"))),(0,r.kt)("td",{parentName:"tr",align:null},"The key of the feature flag requested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"variation"))),(0,r.kt)("td",{parentName:"tr",align:null},"The variation of the flag requested. Available values are:",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"True"),": if the flag was evaluated to True ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"False"),": if the flag was evaluated to False",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Dafault"),": if the flag was evaluated to Default",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"SdkDefault"),": if something wrong happened and the SDK default value was used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the feature flag returned by feature flag evaluation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"default"))),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) This value is set to true if feature flag evaluation failed, in which case the value returned was the default value passed to variation.")))),(0,r.kt)("p",null,"Events are collected and send in bulk to avoid spamming your exporter ",(0,r.kt)("em",{parentName:"p"},"(see details in ",(0,r.kt)("a",{parentName:"em",href:"#how-to-configure-data-export"},"how to configure data export")),")"),(0,r.kt)("h2",{id:"how-to-configure-data-export"},"How to configure data export?"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"ffclient.Config")," add the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataExporter")," field and configure your export location."),(0,r.kt)("p",null,"To avoid spamming your location everytime you have a variation called, ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," is storing in memory all the events and send them in bulk to the exporter.",(0,r.kt)("br",{parentName:"p"}),"\n","You can decide the threshold on when to send the data with the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"FlushInterval")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxEventInMemory"),". The first threshold hit will export the data."),(0,r.kt)("p",null,"If there are some flags you don't want to export, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"trackEvents")," fields on these specific flags to disable the data export ",(0,r.kt)("em",{parentName:"p"},"(see ",(0,r.kt)("a",{parentName:"em",href:"/docs/v0.25.2/flag_format"},"flag file format"),")"),"."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{ \n    // ...\n   DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &ffexporter.File{\n            OutputDir: "/output-data/",\n        },\n    },\n    // ...\n}\n')),(0,r.kt)("h3",{id:"configuration-fields-1"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Exporter")),(0,r.kt)("td",{parentName:"tr",align:null},"The configuration of the exporter you want to use. All the exporters are available in the ",(0,r.kt)("inlineCode",{parentName:"td"},"ffexporter")," package."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FlushInterval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"Time to wait before exporting the data.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: 60 seconds"),"."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MaxEventInMemory")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"MaxEventInMemory")," is reach before the ",(0,r.kt)("inlineCode",{parentName:"td"},"FlushInterval")," a intermediary export will be done",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default: 100000"),"."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"dont-track-a-flag"},"Don't track a flag"),(0,r.kt)("p",null,"By default, all flags are trackable, and their data are exported."),(0,r.kt)("p",null,"If you want to exclude a specific flag from the data export, you can set the property ",(0,r.kt)("inlineCode",{parentName:"p"},"trackEvents")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," on your flag, and you will have no export for it."),(0,r.kt)("h3",{id:"yaml"},"YAML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'test-flag:\n  percentage: 50\n  true: "B"\n  false: "A"\n  default: "Default"\n  # highlight-next-line\n  trackEvents: false\n')),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "test-flag": {\n    "percentage": 50,\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    # highlight-next-line\n    "trackEvents": false\n  }\n}\n')),(0,r.kt)("h3",{id:"toml"},"TOML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'linenums="1" hl_lines="6"',linenums:'"1"',hl_lines:'"6"'},'[test-flag]\npercentage = 50.0\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n# highlight-next-line\ntrackEvents = false\n')))}m.isMDXComponent=!0}}]);