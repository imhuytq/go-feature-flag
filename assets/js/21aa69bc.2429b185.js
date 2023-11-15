"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[47515],{10246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=t(85893),a=t(11151),o=t(74866),i=t(85162);const s={sidebar_position:40,description:"How to use the OpenFeature JAVA SDK"},l="JAVA SDK usage",u={id:"openfeature_sdk/server_providers/openfeature_java",title:"JAVA SDK usage",description:"How to use the OpenFeature JAVA SDK",source:"@site/versioned_docs/version-v1.14.0/openfeature_sdk/server_providers/openfeature_java.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_java",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_java",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.0/openfeature_sdk/server_providers/openfeature_java.mdx",tags:[],version:"v1.14.0",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"How to use the OpenFeature JAVA SDK"},sidebar:"tutorialSidebar",previous:{title:"GO SDK usage",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_go"},next:{title:"Javascript / Typescript SDK usage",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_javascript"}},d={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"java-sdk-usage",children:"JAVA SDK usage"}),"\n",(0,r.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["The first things we will do is install the ",(0,r.jsx)(n.strong,{children:"Open Feature SDK"})," and the ",(0,r.jsx)(n.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"maven",label:"maven",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>dev.openfeature</groupId>\n    <artifactId>javasdk</artifactId>\n    <version>[0,)</version>\n</dependency>\n<dependency>\n    <groupId>dev.openfeature.contrib.providers</groupId>\n    <artifactId>go-feature-flag</artifactId>\n    <version>[0,)</version>\n</dependency>\n"})})}),(0,r.jsx)(i.Z,{value:"gradle",label:"gradle",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-gradle",children:"implementation group: 'dev.openfeature', name: 'javasdk', version: '0.+'\nimplementation group: 'dev.openfeature.contrib.providers', name: 'go-feature-flag', version: '0.+'\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,r.jsx)(n.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import dev.openfeature.contrib.providers.gofeatureflag.*;\nimport dev.openfeature.contrib.providers.gofeatureflag.exception.*;\nimport dev.openfeature.sdk.*;\n\n// ...\n\nGoFeatureFlagProviderOptions options = GoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build();\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n\nOpenFeatureAPI.getInstance().setProvider(provider);\nOpenFeatureAPI api = OpenFeatureAPI.getInstance();\nClient featureFlagClient = api.getClient();\n'})}),"\n",(0,r.jsx)(n.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsxs)(n.p,{children:["This code block explain how you can create an ",(0,r.jsx)(n.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["In this example we are evaluating a ",(0,r.jsx)(n.code,{children:"boolean"})," flag, but other types are available."]}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// Context of your flag evaluation.\nEvaluationContext userContext = new MutableContext()\n        .add("firstname", "john")\n        .add("lastname", "doe")\n        .add("email","john.doe@gofeatureflag.org")\n        .add("admin", true)\n        .add("anonymous", false);\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nuserContext.setTargetingKey("1d1b9238-2591-4a47-94cf-d2bc080892f1");\n\n\n\nBoolean adminFlag = featureFlagClient.getBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n    // flag "flag-only-for-admin" is true for the user\n} else {\n    // flag "flag-only-for-admin" is false for the user\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the source of the provider in the ",(0,r.jsx)(n.a,{href:"https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag",children:(0,r.jsx)(n.code,{children:"open-feature/java-sdk-contrib"})})," repository."]})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(67294),a=t(86010),o=t(12466),i=t(16550),s=t(20469),l=t(91980),u=t(67392),d=t(50012);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,c]=v({queryString:t,groupId:a}),[h,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),m=(()=>{const e=u??h;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(u(n),i(a))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:c,onClick:d,...o,className:(0,a.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=h(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function _(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);