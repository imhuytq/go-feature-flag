"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[27258],{37652:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=s(85893),a=s(11151);const i={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},n="go-feature-flag",l={id:"index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v0.28.2/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v0.28.2/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v0.28.2/index.md",tags:[],version:"v0.28.2",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/v0.28.2/quickstart"}},r={},c=[{value:"What is go-feature-flag?",id:"what-is-go-feature-flag",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})}),"\n",(0,o.jsxs)("p",{align:"center",children:[(0,o.jsx)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/ci.yml",children:(0,o.jsx)("img",{src:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/ci.yml/badge.svg",alt:"Build Status"})}),(0,o.jsx)("a",{href:"https://coveralls.io/github/thomaspoignant/go-feature-flag",children:(0,o.jsx)("img",{src:"https://coveralls.io/repos/github/thomaspoignant/go-feature-flag/badge.svg",alt:"Coverage Status"})}),(0,o.jsx)("a",{href:"https://sonarcloud.io/dashboard?id=thomaspoignant_go-feature-flag",children:(0,o.jsx)("img",{src:"https://sonarcloud.io/api/project_badges/measure?project=thomaspoignant_go-feature-flag&metric=alert_status",alt:"Sonarcloud Status"})}),(0,o.jsx)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/actions/workflows/codeql-analysis.yml",children:(0,o.jsx)("img",{src:"https://github.com/thomaspoignant/go-feature-flag/workflows/CodeQL/badge.svg",alt:"Build Status"})}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/releases",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/v/release/thomaspoignant/go-feature-flag",alt:"Release version"})}),(0,o.jsx)("a",{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag",children:(0,o.jsx)("img",{src:"https://godoc.org/github.com/thomaspoignant/go-feature-flag?status.svg",alt:"GoDoc"})}),(0,o.jsx)("img",{src:"https://img.shields.io/github/go-mod/go-version/thomaspoignant/go-feature-flag?logo=go%20version",alt:"Go version"}),(0,o.jsx)("a",{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/LICENSE",children:(0,o.jsx)("img",{src:"https://img.shields.io/github/license/thomaspoignant/go-feature-flag",alt:"License"})}),(0,o.jsx)("a",{href:"https://github.com/avelino/awesome-go/#server-applications",children:(0,o.jsx)("img",{src:"https://awesome.re/mentioned-badge-flat.svg",alt:"Mentioned in Awesome Go"})}),(0,o.jsx)("a",{href:"https://gophers.slack.com/messages/go-feature-flag",children:(0,o.jsx)("img",{src:"https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=green",alt:"Join us on slack"})})]}),"\n",(0,o.jsx)(t.h1,{id:"go-feature-flag",children:"go-feature-flag"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Feature flags with no complex system to maintain!"})}),"\n",(0,o.jsx)(t.h2,{id:"what-is-go-feature-flag",children:"What is go-feature-flag?"}),"\n",(0,o.jsx)(t.p,{children:"A simple and complete feature flag solution, without any complex backend system to install, all you need is a file as your backend."}),"\n",(0,o.jsx)(t.p,{children:"No server is needed, just add a file to your central system and all your services will react to the changes in this file."}),"\n",(0,o.jsxs)(t.p,{children:["If you are not familiar with feature flags, also called feature Toggles, you can read this ",(0,o.jsx)(t.a,{href:"https://www.martinfowler.com/articles/feature-toggles.html",children:"article from Martin Fowler"}),"\nwhere he explains why this is a great pattern."]}),"\n",(0,o.jsxs)(t.p,{children:["I've also written an ",(0,o.jsx)(t.a,{href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986",children:"article"})," that explains why feature flags can fasten your iteration cycle."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"go-feature-flags supports:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Storing your configuration flags file on various locations (",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_file/http",children:(0,o.jsx)(t.code,{children:"HTTP"})}),", ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_file/s3",children:(0,o.jsx)(t.code,{children:"S3"})}),", ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_file/github",children:(0,o.jsx)(t.code,{children:"GitHub"})}),", ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_file/file",children:(0,o.jsx)(t.code,{children:"file"})}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["Configuring your flags in various ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_format",children:"format"})," (",(0,o.jsx)(t.code,{children:"JSON"}),", ",(0,o.jsx)(t.code,{children:"TOML"})," and ",(0,o.jsx)(t.code,{children:"YAML"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["Adding complex ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/flag_format#rule-format",children:"rules"})," to target your users."]}),"\n",(0,o.jsxs)(t.li,{children:["Use complex rollout strategy for your flags :","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/v0.28.2/rollout/experimentation",children:"Run A/B testing experimentation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/v0.28.2/rollout/progressive",children:"Progressively rollout a feature"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/docs/v0.28.2/rollout/scheduled",children:"Schedule your flag updates"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["Exporting your flags usage data (",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/data_collection/s3",children:(0,o.jsx)(t.code,{children:"s3"})}),", ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/data_collection/log",children:(0,o.jsx)(t.code,{children:"log"})})," and ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/data_collection/file",children:(0,o.jsx)(t.code,{children:"file"})}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["Getting notified when a flag has been changed (",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/notifier/webhook",children:(0,o.jsx)(t.code,{children:"webhook"})})," and ",(0,o.jsx)(t.a,{href:"/docs/v0.28.2/notifier/slack",children:(0,o.jsx)(t.code,{children:"slack"})}),")."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>n});var o=s(67294);const a={},i=o.createContext(a);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);