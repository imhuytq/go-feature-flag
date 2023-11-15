"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[79659],{47629:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(85893),r=t(11151);const o={sidebar_position:10,description:"How to configure the GO module to use it directly in your code."},l="Configuration",s={id:"go_module/configuration",title:"Configuration",description:"How to configure the GO module to use it directly in your code.",source:"@site/versioned_docs/version-v1.15.1/go_module/configuration.md",sourceDirName:"go_module",slug:"/go_module/configuration",permalink:"/docs/v1.15.1/go_module/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.1/go_module/configuration.md",tags:[],version:"v1.15.1",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How to configure the GO module to use it directly in your code."},sidebar:"tutorialSidebar",previous:{title:"Use as a GO module",permalink:"/docs/v1.15.1/category/use-as-a-go-module"},next:{title:"Performing flag evaluations",permalink:"/docs/v1.15.1/go_module/target_user"}},a={},d=[{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Example",id:"example",level:2},{value:"Multiple configuration flag files",id:"multiple-configuration-flag-files",level:2},{value:"Working with multiple go-feature-flag",id:"working-with-multiple-go-feature-flag",level:3},{value:"Example",id:"example-1",level:4},{value:"Offline mode",id:"offline-mode",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function c(e){const i={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"go-feature-flag"})," needs to be initialized to be used.",(0,n.jsx)(i.br,{}),"\n","During the initialization you must give a ",(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,n.jsx)(i.code,{children:"ffclient.Config{}"})})," configuration object."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,n.jsx)(i.code,{children:"ffclient.Config{}"})})," is the only location where you can put the configuration."]}),"\n",(0,n.jsx)(i.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Field"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Retriever"})}),(0,n.jsxs)(i.td,{children:["The configuration retriever you want to use to get your flag file",(0,n.jsx)("br",{})," ",(0,n.jsxs)(i.em,{children:["See ",(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(i.em,{children:["This field is optional if ",(0,n.jsx)(i.code,{children:"Retrievers"})]})," is configured."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Retrievers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"Retrievers"})," is exactly the same thing as ",(0,n.jsx)(i.code,{children:"Retriever"})," but you can configure more than 1 source for your flags.",(0,n.jsx)("br",{}),"All flags are retrieved in parallel, but we are applying them in the order you provided them ",(0,n.jsx)(i.em,{children:"(it means that a flag can be overridden by another flag)"}),". ",(0,n.jsx)("br",{}),(0,n.jsxs)(i.em,{children:["See ",(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),". ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(i.em,{children:["This field is optional if ",(0,n.jsx)(i.code,{children:"Retrievers"})]})," is configured."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Context"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The context used by the retriever.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(i.code,{children:"context.Background()"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Environment"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)("a",{name:"option_environment"}),(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The environment the app is running under, can be checked in feature flag rules.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(i.code,{children:'""'}),(0,n.jsx)("br",{}),(0,n.jsxs)(i.em,{children:["Check ",(0,n.jsxs)(i.a,{href:"../configure_flag/flag_format/#environments",children:[(0,n.jsx)(i.strong,{children:'"environments"'})," section"]})," to understand how to use this parameter."]})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"DataExporter"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"DataExporter defines how to export data on how your flags are used.",(0,n.jsx)("br",{})," ",(0,n.jsxs)(i.em,{children:["see ",(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/data_collection/",children:"export data section"})," for more details"]}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"FileFormat"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Format of your configuration file. Available formats are ",(0,n.jsx)(i.code,{children:"yaml"}),", ",(0,n.jsx)(i.code,{children:"toml"})," and ",(0,n.jsx)(i.code,{children:"json"}),", if you omit the field it will try to unmarshal the file as a ",(0,n.jsx)(i.code,{children:"yaml"})," file.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(i.code,{children:"YAML"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Logger"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Logger used to log what ",(0,n.jsx)(i.code,{children:"go-feature-flag"})," is doing.",(0,n.jsx)("br",{}),"If no logger is provided the module will not log anything.",(0,n.jsx)("br",{}),"Default: No log"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Notifiers"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"List of notifiers to call when your flag file has been changed.",(0,n.jsx)("br",{})," ",(0,n.jsxs)(i.em,{children:["See ",(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/notifier/",children:"notifiers section"})," for more details"]}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"PollingInterval"})}),(0,n.jsxs)(i.td,{children:["(optional) Duration to wait before refreshing the flags.",(0,n.jsx)("br",{}),"The minimum polling interval is 1 second.",(0,n.jsx)("br",{}),"Default: 60 * time.Second"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"EnablePollingJitter"})}),(0,n.jsxs)(i.td,{children:["(optional) set to true if you want to avoid having true periodicity when retrieving your flags. It is useful to avoid having spike on your flag configuration storage in case your application is starting multiple instance at the same time.",(0,n.jsx)("br",{}),"We ensure a deviation that is maximum + or - 10% of your polling interval.",(0,n.jsx)("br",{}),"Default: false"]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"StartWithRetrieverError"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"})," If ",(0,n.jsx)(i.strong,{children:"true"}),", the SDK will start even if we did not get any flags from the retriever. It will serve only default values until the retriever returns the flags.",(0,n.jsx)("br",{}),"The init method will not return any error if the flag file is unreachable.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(i.strong,{children:"false"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"Offline"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.em,{children:"(optional)"})," If ",(0,n.jsx)(i.strong,{children:"true"}),", the SDK will not try to retrieve the flag file and will not export any data. No notification will be send neither.",(0,n.jsx)("br",{}),"Default: false"]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",children:'ffclient.Init(ffclient.Config{ \n    PollingInterval:   3 * time.Second,\n    Logger:         log.New(file, "/tmp/log", 0),\n    Context:        context.Background(),\n    Environment:    os.Getenv("MYAPP_ENV"),\n    Retriever:      &fileretriever.Retriever{Path: "testdata/flag-config.yaml"},\n    FileFormat:     "yaml",\n    Notifiers: []notifier.Notifier{\n        &webhooknotifier.Notifier{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n    },\n    DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &file.Exporter{\n            OutputDir: "/output-data/",\n        },\n    },\n    StartWithRetrieverError: false,\n})\n'})}),"\n",(0,n.jsx)(i.h2,{id:"multiple-configuration-flag-files",children:"Multiple configuration flag files"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"go-feature-flag"})," comes ready to use out of the box by calling the ",(0,n.jsx)(i.code,{children:"Init"})," function and, it will be available everywhere.",(0,n.jsx)(i.br,{}),"\n","Since most applications will want to use a single central flag configuration, the package provides this. It is similar to a singleton."]}),"\n",(0,n.jsxs)(i.p,{children:["In all the examples above, they demonstrate using ",(0,n.jsx)(i.code,{children:"go-feature-flag"})," in its singleton style approach."]}),"\n",(0,n.jsx)(i.h3,{id:"working-with-multiple-go-feature-flag",children:"Working with multiple go-feature-flag"}),"\n",(0,n.jsxs)(i.p,{children:["You can also create many ",(0,n.jsx)(i.code,{children:"go-feature-flag"})," clients to use in your application."]}),"\n",(0,n.jsxs)(i.p,{children:["Each will have its own unique set of configurations and flags. Each can read from a different config file and from different places.",(0,n.jsx)(i.br,{}),"\n","All the functions that ",(0,n.jsx)(i.code,{children:"go-feature-flag"})," package supports are mirrored as methods on a ",(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(i.code,{children:"GoFeatureFlag"})}),"."]}),"\n",(0,n.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",metastring:'linenums="1"',children:'x, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/flag-config.yaml",}})\ndefer x.Close()\n\ny, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/test2.yaml",}})\ndefer y.Close()\n\nuser := ffcontext.NewEvaluationContext("user-key")\nx.BoolVariation("test-flag", user, false)\ny.BoolVariation("test-flag", user, false)\n\n// ...\n'})}),"\n",(0,n.jsxs)(i.p,{children:["When working with multiple ",(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(i.code,{children:"GoFeatureFlag"})}),", it is up to the user to keep track of the different ",(0,n.jsx)(i.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(i.code,{children:"GoFeatureFlag"})})," instances."]}),"\n",(0,n.jsx)(i.h2,{id:"offline-mode",children:"Offline mode"}),"\n",(0,n.jsxs)(i.p,{children:["In some situations, you might want to stop making remote calls and fall back to default values for your feature flags.",(0,n.jsx)(i.br,{}),"\n","For example, if your software is both cloud-hosted and distributed to customers to run on-premise, it might make sense\nto fall back to defaults when running on-premise."]}),"\n",(0,n.jsxs)(i.p,{children:["You can do this by setting ",(0,n.jsx)(i.code,{children:"Offline"})," mode in the client's Config."]}),"\n",(0,n.jsx)(i.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/data_collection/",children:"Export data from your flag variations"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/v1.15.1/go_module/notifier/",children:"Be notified when your flags change"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>l});var n=t(67294);const r={},o=n.createContext(r);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);