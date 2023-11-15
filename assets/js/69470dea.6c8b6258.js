"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[40439],{66488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=a(85893),i=a(11151),s=a(52991);const n={title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},o="Use the relay proxy",l={id:"relay_proxy/index",title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages.",source:"@site/versioned_docs/version-v1.18.1/relay_proxy/index.mdx",sourceDirName:"relay_proxy",slug:"/relay_proxy/",permalink:"/docs/relay_proxy/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.1/relay_proxy/index.mdx",tags:[],version:"v1.18.1",frontMatter:{title:"Use the relay proxy",description:"GO Feature Flag Relay Proxy is a powerful tool that allows developers to easily integrate feature flagging functionality into their applications. It is a simple API service that can be called directly through the API or via the available OpenFeature providers. The service wraps the GO Feature Flag golang module to evaluate your flags and allows it to be used with all the available languages."},sidebar:"tutorialSidebar",previous:{title:"Javascript / Typescript",permalink:"/docs/openfeature_sdk/client_providers/openfeature_javascript"},next:{title:"Getting started",permalink:"/docs/relay_proxy/getting_started"}},c={},d=[];function h(e){const t={h1:"h1",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-the-relay-proxy",children:"Use the relay proxy"}),"\n",(0,r.jsxs)(t.p,{children:["The GO Feature Flag Relay Proxy serves as the ",(0,r.jsx)(t.strong,{children:"backend"})," for your feature flag solution, housing all the necessary logic for feature flag management."]}),"\n",(0,r.jsxs)(t.p,{children:["It provides APIs to enable remote access to the GO Feature Flag system. While you have the option to interact directly with these APIs, it is recommended to use the ",(0,r.jsx)(t.strong,{children:"Openfeature SDK"})," and the appropriate ",(0,r.jsx)(t.strong,{children:"provider"})," for your programming language for a seamless experience."]}),"\n",(0,r.jsxs)(t.p,{children:["The relay proxy is designed to be ",(0,r.jsx)(t.strong,{children:"simple, lightweight, and stateless"}),". It operates without the need for any databases or complex systems, as it loads feature flag configuration files from a specified location and stores them in memory. Periodic polling ensures the proxy stays up-to-date with any changes in the configuration. This straightforward setup makes installation and usage incredibly easy and hassle-free."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:a(46664).Z+"",width:"684",height:"265"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(s.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},52991:(e,t,a)=>{a.d(t,{Z:()=>y});a(67294);var r=a(86010),i=a(53438),s=a(39960),n=a(13919),o=a(95999),l=a(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=a(85893);function h(e){let{href:t,children:a}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer),children:a})}function u(e){let{href:t,icon:a,title:i,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",c.cardTitle),title:i,children:[a," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const a=(0,i.LM)(t);return a?(0,d.jsx)(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const a=(0,n.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const a=(0,i.jA)();return(0,d.jsx)(y,{items:a.items,className:t})}function y(e){const{items:t,className:a}=e;if(!t)return(0,d.jsx)(m,{...e});const s=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",a),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},46664:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/arch-5ef698ddb50577ad73285434b41d6e7e.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>n});var r=a(67294);const i={},s=r.createContext(i);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);