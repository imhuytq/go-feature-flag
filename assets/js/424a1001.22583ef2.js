"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[39267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,f=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},17367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:20,description:"How to select who should have the flag activated."},o="Performing flag evaluations",l={unversionedId:"go_module/target_user",id:"go_module/target_user",title:"Performing flag evaluations",description:"How to select who should have the flag activated.",source:"@site/docs/go_module/target_user.md",sourceDirName:"go_module",slug:"/go_module/target_user",permalink:"/docs/next/go_module/target_user",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/go_module/target_user.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to select who should have the flag activated."},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/go_module/configuration"},next:{title:"Retrieve your feature flags configuration",permalink:"/docs/next/go_module/store_file/"}},s={},u=[{value:"Users",id:"users",level:2},{value:"Anonymous users",id:"anonymous-users",level:2},{value:"Variation",id:"variation",level:2},{value:"Variation details",id:"variation-details",level:2},{value:"Reason",id:"reason",level:3},{value:"Get all flags for a specific user",id:"get-all-flags-for-a-specific-user",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"performing-flag-evaluations"},"Performing flag evaluations"),(0,r.kt)("h2",{id:"users"},"Users"),(0,r.kt)("p",null,"Feature flag targeting and rollouts are all determined by the user you pass to your ",(0,r.kt)("strong",{parentName:"p"},"Variation")," calls.\nThe SDK defines a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#User"},(0,r.kt)("inlineCode",{parentName:"a"},"User"))," struct and a ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#UserBuilder"},(0,r.kt)("inlineCode",{parentName:"a"},"UserBuilder"))," to make this easy."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'// User with only a key\nuser1 := ffuser.NewUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n AddCustom("firstname", "John").\n AddCustom("lastname", "Doe").\n AddCustom("email", "john.doe@example.com").\n Build()\n')),(0,r.kt)("p",null,"The most common attribute is the user's key and ",(0,r.kt)("strong",{parentName:"p"},"this is the only mandatory user attribute."),(0,r.kt)("br",{parentName:"p"}),"\n","The key should also uniquely identify each user. You can use a primary key, an e-mail address, or a hash, as long as the same user always has the same key.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"We recommend using a hash if possible."),(0,r.kt)("br",{parentName:"p"}),"\n","All the other attributes are optional."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Custom attributes are one of the most powerful features.",(0,r.kt)("br",{parentName:"p"}),"\n","They let you have rules on these attributes and target users according to any data that you want.")),(0,r.kt)("h2",{id:"anonymous-users"},"Anonymous users"),(0,r.kt)("p",null,"You can also distinguish logged-in users from anonymous users in the SDK, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'// User with only a key\nuser1 := ffuser.NewAnonymousUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n  Anonymous(true).\n  AddCustom("firstname", "John").\n  AddCustom("lastname", "Doe").\n  AddCustom("email", "john.doe@example.com").\n  Build()\n')),(0,r.kt)("p",null,"You will still need to generate a unique key for anonymous users. Session IDs or UUIDs work best for this."),(0,r.kt)("p",null,"Anonymous users work just like regular users, this information just helps you to add a rule to target a specific population."),(0,r.kt)("h2",{id:"variation"},"Variation"),(0,r.kt)("p",null,"The Variation methods determine whether a flag is enabled or not for a specific user.\nThere is a Variation method for each type:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"BoolVariation"))," , ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"IntVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64Variation"},(0,r.kt)("inlineCode",{parentName:"a"},"Float64Variation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"StringVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONArrayVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariation"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONVariation"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'result, _ := ffclient.BoolVariation("your.feature.key", user, false)\n\n// result is now true or false depending on the setting of\n// this boolean feature flag\n')),(0,r.kt)("p",null,"Variation methods take the feature ",(0,r.kt)("strong",{parentName:"p"},"flag key"),", a ",(0,r.kt)("strong",{parentName:"p"},"user"),", and a ",(0,r.kt)("strong",{parentName:"p"},"default value"),"."),(0,r.kt)("p",null,"The default value is return when an error is encountered ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"ffclient")," not initialized, variation with wrong type, flag does not exist ...).")),(0,r.kt)("p",null,"In the example, if the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"your.feature.key")," does not exists, result will be ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Not that you will always have a usable value in the result. "),(0,r.kt)("h2",{id:"variation-details"},"Variation details"),(0,r.kt)("p",null,"If you want more information about your flag evaluation, you can use the variation details functions.\nThere is a Variation method for each type:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"BoolVariationDetails")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"IntVariation")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64VariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"Float64VariationDetails")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"StringVariationDetails")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONArrayVariationDetails")),"\n, ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariationDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"JSONVariationDetails"))),(0,r.kt)("p",null,"You can use these functions the same way as the other variation functions BUT it will return a generic object ",(0,r.kt)("inlineCode",{parentName:"p"},"model.VariationResult[<type>]")," containing your result.",(0,r.kt)("br",{parentName:"p"}),"\n","This object will contain these fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TrackEvents")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if this evaluation was tracked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VariationType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the variation used to get this value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Failed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if an error occurred during the evaluation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("strong",{parentName:"td"},"version")," of the flag used to do the evaluation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Reason")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flag.ResolutionReason")),(0,r.kt)("td",{parentName:"tr",align:null},"The reason used for this evaluation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ErrorCode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"flag.ErrorCode")),(0,r.kt)("td",{parentName:"tr",align:null},"Error code in case we have an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<type T>")),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the flag in the expected type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Cacheable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if it can be cached (by user or for everyone depending on the reason).")))),(0,r.kt)("h3",{id:"reason"},"Reason"),(0,r.kt)("p",null,"GO Feature Flag can furnish you with diverse reasons in the variation details, giving you insight into the evaluation process of your feature flag.\nHere is the full list of reason available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TARGETING_MATCH")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolved value was the result of a dynamic evaluation, such as a rule or specific user-targeting. ",(0,r.kt)("em",{parentName:"td"},"(ex: serve variation A if username is Thomas)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TARGETING_MATCH_SPLIT")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolved value was the result of a dynamic evaluation, that is serving a percentage. ",(0,r.kt)("em",{parentName:"td"},"(ex: serve variation A to 10% of users with the username Thomas)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SPLIT")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolved value was the result of pseudorandom assignment. ",(0,r.kt)("em",{parentName:"td"},"(ex: serve variation A to 10% of all the users.)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DISABLED")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the feature flag is disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolved value was the result of the flag being disabled in the management system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STATIC")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the feature flag evaluated to a static value, for example, the default value for the flag. ",(0,r.kt)("em",{parentName:"td"},"(Note: Typically means that no dynamic evaluation has been executed for the feature flag)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UNKNOWN")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates an unknown issue occurred during evaluation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that an error occurred during evaluation ",(0,r.kt)("em",{parentName:"td"},"(Note: The ",(0,r.kt)("inlineCode",{parentName:"em"},"errorCode")," field contains the details of this error)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OFFLINE")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that GO Feature Flag is currently evaluating in offline mode.")))),(0,r.kt)("h2",{id:"get-all-flags-for-a-specific-user"},"Get all flags for a specific user"),(0,r.kt)("p",null,"If you want to send the information about a specific user to a front-end, you will want a snapshot of all the flags for\nthis user at a specific time."),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"ffclient.AllFlagsState")," returns a snapshot of flag values and metadata.",(0,r.kt)("br",{parentName:"p"}),"\n","The function is evaluating all available flags for the user and return a ",(0,r.kt)("inlineCode",{parentName:"p"},"flagstate.AllFlagsState")," object containing the\ninformation you need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'user := ffuser.NewUser("example")\n// AllFlagsState will give you the value for all the flags available.\nallFlagsState := ffclient.AllFlagsState(u)\n\n// If you want to send it to a front-end you can Marshal it by calling MarshalJSON()\nforFE, err := allFlagsState.MarshalJSON()\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MarshalJSON()")," function will return something like bellow, that can be directly used by your front-end application. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'linenums="1"',linenums:'"1"'},'{\n    "flags": {\n        "test-flag0": {\n            "value": true,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag1": {\n            "value": "true",\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag2": {\n            "value": 1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag3": {\n            "value": [\n                "yo",\n                "ya"\n            ],\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag4": {\n            "value": {\n                "test": "yo"\n            },\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag5": {\n            "value": 1.1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": false\n        }\n    },\n    "valid": true\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"There is no tracking done when evaluating all the flag at once.")))}m.isMDXComponent=!0}}]);