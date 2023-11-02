"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[40034],{97876:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=o(85893),i=o(11151);const r={sidebar_position:30},s="Custom Notifier",c={id:"go_module/notifier/custom",title:"Custom Notifier",description:"To create a custom notifier you must have a struct that implements the",source:"@site/docs/go_module/notifier/custom.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/custom",permalink:"/docs/next/go_module/notifier/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/notifier/custom.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Webhook Notifier",permalink:"/docs/next/go_module/notifier/webhook"},next:{title:"Linter",permalink:"/docs/next/tooling/linter"}},a={},u=[];function f(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"custom-notifier",children:"Custom Notifier"}),"\n",(0,n.jsxs)(e.p,{children:["To create a custom notifier you must have a ",(0,n.jsx)(e.code,{children:"struct"})," that implements the\n",(0,n.jsx)(e.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier",children:(0,n.jsx)(e.code,{children:"notifier.Notifier"})})," interface."]}),"\n",(0,n.jsxs)(e.p,{children:["In parameter you will receive a ",(0,n.jsx)(e.code,{children:"notifier.DiffCache"})," struct that will tell you what has changed in your flag configuration."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-go",children:'import (\n\tffclient "github.com/thomaspoignant/go-feature-flag"\n\t"github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n\t"sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache) error {\n\t// ...\n\t// do whatever you want here\n}\n'})})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(f,{...t})}):f(t)}},11151:(t,e,o)=>{o.d(e,{Z:()=>c,a:()=>s});var n=o(67294);const i={},r=n.createContext(i);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);