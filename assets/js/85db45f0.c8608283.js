"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[28009],{7076:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=o(85893),i=o(11151);const r={sidebar_position:30},s="Custom Notifier",a={id:"go_module/notifier/custom",title:"Custom Notifier",description:"To create a custom notifier you must have a struct that implements the",source:"@site/versioned_docs/version-v1.3.0/go_module/notifier/custom.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/custom",permalink:"/docs/v1.3.0/go_module/notifier/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.3.0/go_module/notifier/custom.md",tags:[],version:"v1.3.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Webhook Notifier",permalink:"/docs/v1.3.0/go_module/notifier/webhook"},next:{title:"Use with OpenFeature",permalink:"/docs/v1.3.0/category/use-with-openfeature"}},c={},u=[];function f(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"custom-notifier",children:"Custom Notifier"}),"\n",(0,n.jsxs)(t.p,{children:["To create a custom notifier you must have a ",(0,n.jsx)(t.code,{children:"struct"})," that implements the\n",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier",children:(0,n.jsx)(t.code,{children:"notifier.Notifier"})})," interface."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'import (\n\tffclient "github.com/thomaspoignant/go-feature-flag"\n\t"github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n\t"sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache, wg *sync.WaitGroup) error {\n\tdefer waitGroup.Done() // don\'t forget this line, if you don\'t have it you can break your notifications\n\t\n\t// ...\n\t// do whatever you want here\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(67294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);