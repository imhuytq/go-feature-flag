"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[56993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),f=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=f(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=f(n),s=r,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var f=2;f<i;f++)o[f]=n[f];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:20},o="Configuration",l={unversionedId:"configuration",id:"version-v0.25.2/configuration",title:"Configuration",description:"go-feature-flag needs to be initialized to be used.",source:"@site/versioned_docs/version-v0.25.2/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/v0.25.2/configuration",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v0.25.2/configuration.md",tags:[],version:"v0.25.2",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/v0.25.2/quickstart"},next:{title:"Where to store my file?",permalink:"/docs/v0.25.2/flag_file/"}},p={},f=[{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Example",id:"example",level:2},{value:"Multiple configuration flag files",id:"multiple-configuration-flag-files",level:2},{value:"Working with multiple go-feature-flag",id:"working-with-multiple-go-feature-flag",level:3},{value:"Example",id:"example-1",level:4},{value:"Offline mode",id:"offline-mode",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2}],u={toc:f},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," needs to be initialized to be used.",(0,r.kt)("br",{parentName:"p"}),"\n","During the initialization you must give a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config"},(0,r.kt)("inlineCode",{parentName:"a"},"ffclient.Config{}"))," configuration object.  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config"},(0,r.kt)("inlineCode",{parentName:"a"},"ffclient.Config{}"))," is the only location where you can put the configuration."),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Retriever")),(0,r.kt)("td",{parentName:"tr",align:null},"The configuration retriever you want to use to get your flag file",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"See ",(0,r.kt)("a",{parentName:"em",href:"/docs/v0.25.2/flag_file/"},"Store your flag file")," for the configuration details"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"The context used by the retriever.",(0,r.kt)("br",null),"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"context.Background()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Environment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{name:"option_environment"}),(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"The environment the app is running under, can be checked in feature flag rules.",(0,r.kt)("br",null),"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},'""'),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Check ",(0,r.kt)("a",{parentName:"em",href:"./flag_format/#environments"},(0,r.kt)("strong",{parentName:"a"},'"environments"')," section")," to understand how to use this parameter."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DataExporter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"DataExporter defines how to export data on how your flags are used.",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"see ",(0,r.kt)("a",{parentName:"em",href:"/docs/v0.25.2/data_collection/"},"export data section")," for more details"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FileFormat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"Format of your configuration file. Available formats are ",(0,r.kt)("inlineCode",{parentName:"td"},"yaml"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"toml")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"json"),", if you omit the field it will try to unmarshal the file as a ",(0,r.kt)("inlineCode",{parentName:"td"},"yaml")," file.",(0,r.kt)("br",null),"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"YAML"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Logger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"Logger used to log what ",(0,r.kt)("inlineCode",{parentName:"td"},"go-feature-flag")," is doing.",(0,r.kt)("br",null),"If no logger is provided the module will not log anything.",(0,r.kt)("br",null),"Default: No log")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Notifiers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)"),(0,r.kt)("br",null),"List of notifiers to call when your flag file has been changed.",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"See ",(0,r.kt)("a",{parentName:"em",href:"/docs/v0.25.2/notifier/"},"notifiers section")," for more details"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PollingInterval")),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) Duration to wait before refreshing the flags.",(0,r.kt)("br",null),"The minimum polling interval is 1 second.",(0,r.kt)("br",null),"Default: 60 * time.Second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StartWithRetrieverError")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," If ",(0,r.kt)("strong",{parentName:"td"},"true"),", the SDK will start even if we did not get any flags from the retriever. It will serve only default values until the retriever returns the flags.",(0,r.kt)("br",null),"The init method will not return any error if the flag file is unreachable.",(0,r.kt)("br",null),"Default: ",(0,r.kt)("strong",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Offline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(optional)")," If ",(0,r.kt)("strong",{parentName:"td"},"true"),", the SDK will not try to retrieve the flag file and will not export any data. No notification will be send neither.",(0,r.kt)("br",null),"Default: false")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ffclient.Init(ffclient.Config{ \n    PollingInterval:   3 * time.Second,\n    Logger:         log.New(file, "/tmp/log", 0),\n    Context:        context.Background(),\n    Environment:    os.Getenv("MYAPP_ENV"),\n    Retriever:      &ffclient.FileRetriever{Path: "testdata/flag-config.yaml"},\n    FileFormat:     "yaml",\n    Notifiers: []ffclient.NotifierConfig{\n        &ffclient.WebhookConfig{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n    },\n    DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &ffexporter.File{\n            OutputDir: "/output-data/",\n        },\n    },\n    StartWithRetrieverError: false,\n})\n')),(0,r.kt)("h2",{id:"multiple-configuration-flag-files"},"Multiple configuration flag files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," comes ready to use out of the box by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," function and, it will be available everywhere.",(0,r.kt)("br",{parentName:"p"}),"\n","Since most applications will want to use a single central flag configuration, the package provides this. It is similar to a singleton."),(0,r.kt)("p",null,"In all the examples above, they demonstrate using ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," in its singleton style approach."),(0,r.kt)("h3",{id:"working-with-multiple-go-feature-flag"},"Working with multiple go-feature-flag"),(0,r.kt)("p",null,"You can also create many ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," clients to use in your application.  "),(0,r.kt)("p",null,"Each will have its own unique set of configurations and flags. Each can read from a different config file and from different places.",(0,r.kt)("br",{parentName:"p"}),"\n","All the functions that ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," package supports are mirrored as methods on a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag"},(0,r.kt)("inlineCode",{parentName:"a"},"GoFeatureFlag")),"."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'x, err := ffclient.New(Config{ Retriever: &ffclient.HTTPRetriever{{URL: "http://example.com/flag-config.yaml",}})\ndefer x.Close()\n\ny, err := ffclient.New(Config{ Retriever: &ffclient.HTTPRetriever{{URL: "http://example.com/test2.yaml",}})\ndefer y.Close()\n\nuser := ffuser.NewUser("user-key")\nx.BoolVariation("test-flag", user, false)\ny.BoolVariation("test-flag", user, false)\n\n// ...\n')),(0,r.kt)("p",null,"When working with multiple ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag"},(0,r.kt)("inlineCode",{parentName:"a"},"GoFeatureFlag")),", it is up to the user to keep track of the different ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag"},(0,r.kt)("inlineCode",{parentName:"a"},"GoFeatureFlag"))," instances."),(0,r.kt)("h2",{id:"offline-mode"},"Offline mode"),(0,r.kt)("p",null,"In some situations, you might want to stop making remote calls and fall back to default values for your feature flags.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, if your software is both cloud-hosted and distributed to customers to run on-premise, it might make sense\nto fall back to defaults when running on-premise."),(0,r.kt)("p",null,"You can do this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"Offline")," mode in the client's Config."),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/data_collection/"},"Export data from your flag variations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.25.2/notifier/"},"Be notified when your flags change"))))}d.isMDXComponent=!0}}]);