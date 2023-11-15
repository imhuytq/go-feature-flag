"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[37050],{22530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(85893),i=n(11151),a=n(74866),o=n(85162);const s={sidebar_position:51,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},l=void 0,d={id:"openfeature_sdk/client_providers/openfeature_android",title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application",source:"@site/versioned_docs/version-v1.18.1/openfeature_sdk/client_providers/openfeature_android.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_android",permalink:"/docs/openfeature_sdk/client_providers/openfeature_android",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.1/openfeature_sdk/client_providers/openfeature_android.mdx",tags:[],version:"v1.18.1",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Android / Kotlin",description:"How to use the OpenFeature Kotlin SDK for your Android application"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/docs/openfeature_sdk/server_providers/openfeature_dotnet"},next:{title:"Javascript / Typescript",permalink:"/docs/openfeature_sdk/client_providers/openfeature_javascript"}},c={},u=[{value:"About this provider",id:"about-this-provider",level:2},{value:"Install the provider",id:"install-the-provider",level:2},{value:"How to use the provider?",id:"how-to-use-the-provider",level:2},{value:"Available options",id:"available-options",level:3},{value:"Reconnection",id:"reconnection",level:3},{value:"Event streaming",id:"event-streaming",level:3},{value:"Features status",id:"features-status",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/status-experimental-red",alt:"Static Badge"})}),"\n",(0,r.jsx)(t.p,{children:"This OpenFeature provider is a Kotlin implementation for Android to communicate with the GO Feature\nFlag Server."}),"\n",(0,r.jsxs)(t.p,{children:["The OpenFeature Kotlin is experimental, and the provider is also experimental.",(0,r.jsx)(t.br,{}),"\n","We don't recommend using this in production yet."]}),"\n",(0,r.jsx)(t.h2,{id:"about-this-provider",children:"About this provider"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://gofeatureflag.org",children:"GO Feature Flag"})," provider allows you to connect to your GO Feature Flag\ninstance with the OpenFeature Kotlin SDK."]}),"\n",(0,r.jsxs)(t.p,{children:["This is a client provider made for Android, we do not recommend using it in a server environment.",(0,r.jsx)(t.br,{}),"\n","If you want to use it in a server environment, you should use\nthe ",(0,r.jsxs)(t.a,{href:"/docs/openfeature_sdk/server_providers/openfeature_java",children:[(0,r.jsx)(t.code,{children:"Java"})," provider"]}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"install-the-provider",children:"Install the provider"}),"\n",(0,r.jsxs)(a.Z,{groupId:"code",children:[(0,r.jsx)(o.Z,{value:"gradle",label:"gradle",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'implementation("org.gofeatureflag.openfeature:gofeatureflag-kotlin-provider:0.0.1-beta.1")\n'})})}),(0,r.jsx)(o.Z,{value:"maven",label:"maven",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.gofeatureflag.openfeature</groupId>\n  <artifactId>gofeatureflag-kotlin-provider</artifactId>\n  <version>:0.0.1-beta.1</version>\n</dependency>\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-the-provider",children:"How to use the provider?"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val evaluationContext = ImmutableContext(\n    targetingKey = "0a23d9a5-0a8f-42c9-9f5f-4de3afd6cf99",\n    attributes = mutableMapOf(\n        "region" to Value.String("us-east-1"),\n        "email" to Value.String("john.doe@gofeatureflag.org")\n    )\n)\n\nOpenFeatureAPI.setProvider(\n    GoFeatureFlagProvider(\n        options = GoFeatureFlagOptions(\n            endpoint = "http://localhost:1031"\n        )\n    ), evaluationContext\n)\n\nval client = OpenFeatureAPI.getClient("my-client")\nif (client.getBooleanValue("my-flag", false)) {\n    println("my-flag is enabled")\n}\nOpenFeatureAPI.shutdown()\n'})}),"\n",(0,r.jsx)(t.h3,{id:"available-options",children:"Available options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"endpoint"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"endpoint is the URL where your GO Feature Flag server is located."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"(optional) timeout is the time in millisecond we wait for an answer from the server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxIdleConnections"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"1000"}),(0,r.jsx)(t.td,{children:"(optional) maxIdleConnections is the maximum number of connexions in the connexion pool."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"keepAliveDuration"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"7200000"}),(0,r.jsx)(t.td,{children:"(optional) keepAliveDuration is the time in millisecond we keep the connexion open."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"apiKey"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retryDelay"}),(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"300"}),(0,r.jsx)(t.td,{children:"(optional) delay in millisecond to wait before retrying to connect the websocket"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"reconnection",children:"Reconnection"}),"\n",(0,r.jsx)(t.p,{children:"If the connection to the GO Feature Flag instance fails, the provider will attempt to reconnect."}),"\n",(0,r.jsx)(t.h3,{id:"event-streaming",children:"Event streaming"}),"\n",(0,r.jsx)(t.p,{children:"Event streaming is not implemented yet in the GO Feature Flag provider."}),"\n",(0,r.jsx)(t.h2,{id:"features-status",children:"Features status"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Status"}),(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Flag evaluation"}),(0,r.jsx)(t.td,{children:"It is possible to evaluate all the type of flags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u2705"}),(0,r.jsx)(t.td,{children:"Cache invalidation"}),(0,r.jsx)(t.td,{children:"Websocket mechanism is in place to refresh the cache in case of configuration change"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Logging"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Flag Metadata"}),(0,r.jsx)(t.td,{children:"Not supported by the SDK"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Event Streaming"}),(0,r.jsx)(t.td,{children:"Not implemented"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsx)(t.td,{children:"Unit test"}),(0,r.jsx)(t.td,{children:"Not implemented"})]})]})]}),"\n",(0,r.jsx)("sub",{children:"Implemented: \u2705 | In-progress: \u26a0\ufe0f | Not implemented yet: \u274c"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(86010);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),i=n(86010),a=n(12466),o=n(16550),s=n(20469),l=n(91980),d=n(67392),c=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,u]=f({queryString:n,groupId:i}),[v,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,c.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),m=(()=>{const e=d??v;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==r&&(d(t),o(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...a,className:(0,i.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=v(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);