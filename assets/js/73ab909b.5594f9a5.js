"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[17668],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),u=a(91980),s=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:a,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=u??c;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var v=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==i&&(c(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},86411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},u="Javascript / Typescript SDK usage",s={unversionedId:"openfeature_sdk/openfeature_javascript",id:"version-v1.2.2/openfeature_sdk/openfeature_javascript",title:"Javascript / Typescript SDK usage",description:"How to use the OpenFeature Javascript SDK",source:"@site/versioned_docs/version-v1.2.2/openfeature_sdk/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/openfeature_javascript",permalink:"/docs/v1.2.2/openfeature_sdk/openfeature_javascript",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.2/openfeature_sdk/openfeature_javascript.mdx",tags:[],version:"v1.2.2",sidebarPosition:51,frontMatter:{sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},sidebar:"tutorialSidebar",previous:{title:"JAVA SDK usage",permalink:"/docs/v1.2.2/openfeature_sdk/openfeature_java"},next:{title:".Net SDK usage",permalink:"/docs/v1.2.2/openfeature_sdk/openfeature_dotnet"}},p={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],d={toc:c},f="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"javascript--typescript-sdk-usage"},"Javascript / Typescript SDK usage"),(0,n.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,n.kt)("p",null,"The first things we will do is install the ",(0,n.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"))),(0,n.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n")))),(0,n.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,n.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"))),(0,n.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {EvaluationContext, OpenFeature} from \"@openfeature/js-sdk\";\nimport {GoFeatureFlagProvider} from  \"@openfeature/go-feature-flag-provider\";\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider: GoFeatureFlagProvider = new GoFeatureFlagProvider({\nendpoint: 'http://localhost:1031/'\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app');\n")))),(0,n.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,n.kt)("p",null,"This code block explain how you can create an ",(0,n.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In this example we are evaluating a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Refer to the ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"))),(0,n.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext: EvaluationContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n  // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n")))),(0,n.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,n.kt)("p",null,"You can find the source of the provider in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag"},(0,n.kt)("inlineCode",{parentName:"a"},"open-feature/js-sdk-contrib"))," repository."))}m.isMDXComponent=!0}}]);