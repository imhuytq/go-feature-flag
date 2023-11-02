"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[95974],{53296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(85893),a=r(11151);r(74866),r(85162);const i={sidebar_position:51,title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application"},o="Javascript / Typescript SDK usage",s={id:"openfeature_sdk/client_providers/openfeature_javascript",title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application",source:"@site/versioned_docs/version-v1.15.1/openfeature_sdk/client_providers/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_javascript",permalink:"/docs/v1.15.1/openfeature_sdk/client_providers/openfeature_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.1/openfeature_sdk/client_providers/openfeature_javascript.mdx",tags:[],version:"v1.15.1",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/docs/v1.15.1/openfeature_sdk/server_providers/openfeature_dotnet"},next:{title:"Use the relay proxy",permalink:"/docs/v1.15.1/relay_proxy/"}},l={},c=[{value:"About this provider",id:"about-this-provider",level:2},{value:"Install the provider",id:"install-the-provider",level:2},{value:"How to use the provider?",id:"how-to-use-the-provider",level:2},{value:"Available options",id:"available-options",level:3},{value:"Reconnection",id:"reconnection",level:3},{value:"Event streaming",id:"event-streaming",level:3},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"javascript--typescript-sdk-usage",children:"Javascript / Typescript SDK usage"}),"\n",(0,n.jsx)(t.p,{children:"This page describe how to use the OpenFeature Javascript web SDK for your client application."}),"\n",(0,n.jsx)(t.h2,{id:"about-this-provider",children:"About this provider"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://gofeatureflag.org",children:"GO Feature Flag"})," provider allows you to connect to your GO Feature Flag instance with the ",(0,n.jsx)(t.code,{children:"@openfeature/web-sdk"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The main difference between this provider and ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@openfeature/go-feature-flag-provider",children:(0,n.jsx)(t.code,{children:"@openfeature/go-feature-flag-provider"})})," is that it uses a ",(0,n.jsx)(t.strong,{children:"static evaluation context"}),".\nThis provider is more sustainable for client-side implementation."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to know more about this pattern, I encourage you to read this ",(0,n.jsx)(t.a,{href:"https://openfeature.dev/blog/catering-to-the-client-side/",children:"blog post"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"install-the-provider",children:"Install the provider"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm install @openfeature/go-feature-flag-web-provider @openfeature/web-sdk\n"})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-the-provider",children:"How to use the provider?"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const evaluationCtx: EvaluationContext = {\n  targetingKey: 'user-key',\n  email: 'john.doe@gofeatureflag.org',\n  name: 'John Doe',\n};\n\nconst goFeatureFlagWebProvider = new GoFeatureFlagWebProvider({\n  endpoint: endpoint,\n  // ...\n}, logger);\n\nawait OpenFeature.setContext(evaluationCtx); // Set the static context for OpenFeature\nOpenFeature.setProvider(goFeatureFlagWebProvider); // Attach the provider to OpenFeature\nconst client = await OpenFeature.getClient();\n\n// You can now use the client to use your flags\nif(client.getBooleanValue('my-new-feature', false)){\n    //...\n}\n\n// You can add handlers to know what happen in the provider\nclient.addHandler(ProviderEvents.Ready, () => { ... });\nclient.addHandler(ProviderEvents.Error, () => { //... });\nclient.addHandler(ProviderEvents.Stale, () => { //... });\nclient.addHandler(ProviderEvents.ConfigurationChanged, () => { //... });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"available-options",children:"Available options"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"endpoint"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"endpoint is the URL where your GO Feature Flag server is located."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"apiTimeout"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"0 = no timeout"}),(0,n.jsx)(t.td,{children:"(optional) timeout is the time in millisecond we wait for an answer from the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"apiKey"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"websocketRetryInitialDelay"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"(optional) initial delay in millisecond to wait before retrying to connect the websocket"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"websocketRetryDelayMultiplier"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsxs)(t.td,{children:["(optional) multiplier of websocketRetryInitialDelay after each failure ",(0,n.jsx)(t.em,{children:"(example: 1st connection retry will be after 100ms, second after 200ms, third after 400ms ...)"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"websocketMaxRetries"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"(optional) maximum number of retries before considering the websocket unreachable"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"reconnection",children:"Reconnection"}),"\n",(0,n.jsxs)(t.p,{children:["If the connection to the GO Feature Flag instance fails, the provider will attempt to reconnect with an exponential back-off.\nThe ",(0,n.jsx)(t.code,{children:"websocketMaxRetries"})," can be specified to customize reconnect behavior."]}),"\n",(0,n.jsx)(t.h3,{id:"event-streaming",children:"Event streaming"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"GoFeatureFlagWebProvider"})," receives events from GO Feature Flag with changes.\nCombined with the event API in the web SDK, this allows for subscription to flag value changes in clients."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"client.addHandler(ProviderEvents.ConfigurationChanged, (ctx: EventDetails) => {\n  // do something when the configuration has changed.\n  // ctx.flagsChanged contains the list of changed flags.\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,n.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,n.jsx)(t.a,{href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag-web",children:(0,n.jsx)(t.code,{children:"open-feature/js-sdk-contrib"})})," repository."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(86010);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),i=r(12466),o=r(16550),s=r(20469),l=r(91980),c=r(67392),d=r(50012);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=v({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),m=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);