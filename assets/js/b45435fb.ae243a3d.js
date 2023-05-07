"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[77993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,g=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:20,description:"How to use the OpenFeature GO SDK"},i="GO SDK usage",l={unversionedId:"openfeature_sdk/openfeature_go",id:"version-v1.10.2/openfeature_sdk/openfeature_go",title:"GO SDK usage",description:"How to use the OpenFeature GO SDK",source:"@site/versioned_docs/version-v1.10.2/openfeature_sdk/openfeature_go.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/openfeature_go",permalink:"/docs/openfeature_sdk/openfeature_go",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.2/openfeature_sdk/openfeature_go.mdx",tags:[],version:"v1.10.2",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to use the OpenFeature GO SDK"},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/openfeature_sdk/concepts"},next:{title:"JAVA SDK usage",permalink:"/docs/openfeature_sdk/openfeature_java"}},u={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature provider",id:"initialize-your-open-feature-provider",level:2},{value:"Using the relay proxy",id:"using-the-relay-proxy",level:3},{value:"Example",id:"example",level:4},{value:"Using the GO module <em>(standalone version)</em>",id:"using-the-go-module-standalone-version",level:3},{value:"Example",id:"example-1",level:4},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go-sdk-usage"},"GO SDK usage"),(0,r.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"The first things we will do is install the ",(0,r.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/open-feature/go-sdk\ngo get github.com/open-feature/go-sdk-contrib/providers/go-feature-flag\n")),(0,r.kt)("h2",{id:"initialize-your-open-feature-provider"},"Initialize your Open Feature provider"),(0,r.kt)("p",null,"Despite other providers, this GO provider can be used with the ",(0,r.kt)("strong",{parentName:"p"},"relay proxy")," or used standalone\nusing the ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag module"),"."),(0,r.kt)("h3",{id:"using-the-relay-proxy"},"Using the relay proxy"),(0,r.kt)("p",null,"If you want to use the provider with the ",(0,r.kt)("strong",{parentName:"p"},"relay proxy")," you should set the field ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," in the options.\nBy default it will use a default ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPClient")," with a ",(0,r.kt)("strong",{parentName:"p"},"timeout")," configured at ",(0,r.kt)("strong",{parentName:"p"},"10000")," milliseconds. You can change\nthis configuration by providing your own configuration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPClient"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'options := gofeatureflag.ProviderOptions{\n  Endpoint: "http://localhost:1031",\n  HTTPClient: &http.Client{\n    Timeout:   1 * time.Second,\n  },\n}\nprovider, _ := gofeatureflag.NewProvider(options)\n')),(0,r.kt)("h3",{id:"using-the-go-module-standalone-version"},"Using the GO module ",(0,r.kt)("em",{parentName:"h3"},"(standalone version)")),(0,r.kt)("p",null,"If you want to use the provider in standalone mode using the GO module, you should set the field ",(0,r.kt)("inlineCode",{parentName:"p"},"GOFeatureFlagConfig"),"\nin the options."),(0,r.kt)("p",null,"You can check the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gofeatureflag.org"},"GO Feature Flag documentation website")," to look how to configure the\nGO module."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'options := gofeatureflag.ProviderOptions{\n  GOFeatureFlagConfig: &ffclient.Config{\n      PollingInterval: 10 * time.Second,\n      Context:         context.Background(),\n      Retriever: &fileretriever.Retriever{\n        Path: "../testutils/module/flags.yaml",\n      },\n    },\n}\nprovider, _ := gofeatureflag.NewProvider(options)\n')),(0,r.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,r.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  // ...\n  gofeatureflag "github.com/open-feature/go-sdk-contrib/providers/go-feature-flag/pkg"\n  of "github.com/open-feature/go-sdk/pkg/openfeature"\n)\n\n// ...\n\noptions := gofeatureflag.ProviderOptions{\n    Endpoint: "http://localhost:1031",\n}\nprovider, err := gofeatureflag.NewProvider(options)\nof.SetProvider(provider)\nclient := of.NewClient("my-app")\n')),(0,r.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,r.kt)("p",null,"This code block explain how you can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In this example we are evaluating a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'evaluationCtx := of.NewEvaluationContext(\n    "1d1b9238-2591-4a47-94cf-d2bc080892f1",\n    map[string]interface{}{\n      "firstname", "john",\n      "lastname", "doe",\n      "email", "john.doe@gofeatureflag.org",\n      "admin", true,\n      "anonymous", false,\n    })\nadminFlag, _ := client.BoolValue(context.TODO(), "flag-only-for-admin", false, evaluationCtx)\nif adminFlag {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n')),(0,r.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,r.kt)("p",null,"You can find the source of the provider in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-feature/go-sdk-contrib/tree/main/providers/go-feature-flag"},(0,r.kt)("inlineCode",{parentName:"a"},"open-feature/go-sdk-contrib"))," repository."))}c.isMDXComponent=!0}}]);