"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[30878],{13194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var l=t(85893),r=t(11151);const s={},o="Scheduled rollout",a={id:"rollout/scheduled",title:"Scheduled rollout",description:"Scheduling introduces the ability for users to changes their flags for future points in time.",source:"@site/versioned_docs/version-v0.28.2/rollout/scheduled.md",sourceDirName:"rollout",slug:"/rollout/scheduled",permalink:"/docs/v0.28.2/rollout/scheduled",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v0.28.2/rollout/scheduled.md",tags:[],version:"v0.28.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Progressive rollout",permalink:"/docs/v0.28.2/rollout/progressive"},next:{title:"Export data",permalink:"/docs/v0.28.2/data_collection/"}},d={},i=[{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"scheduled-rollout",children:"Scheduled rollout"}),"\n",(0,l.jsxs)(n.p,{children:["Scheduling introduces the ability for users to changes their flags for future points in time.",(0,l.jsx)(n.br,{}),"\n","While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."]}),"\n",(0,l.jsx)(n.p,{children:"For example, you may want to turn a feature ON for internal testing tomorrow and then enable it for your \u2018beta\u2019 user segment four days later."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.h3,{id:"yaml",children:"YAML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'linenums="1" hl_lines="6-13"',children:'scheduled-flag:\n  true: "B"\n  false: "A"\n  default: "Default"\n  # highlight-start\n  rollout:\n    scheduled:\n      steps:\n        - date: 2020-04-10T00:00:00.10+02:00\n          rule: beta eq "true"\n          percentage: 100\n        \n        - date: 2022-05-12T15:36:00.10+02:00\n          rule: beta eq "false"\n  # highlight-end\n'})}),"\n",(0,l.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "scheduled-flag": {\n    "true": "B",\n    "false": "A",\n    "default": "Default",\n    # highlight-start\n    "rollout": {\n      "scheduled": {\n        "steps": [\n          {\n            "date": "2020-04-09T22:00:00.100Z",\n            "rule": "beta eq \\"true\\"",\n            "percentage": 100\n          },\n          {\n            "date": "2022-05-12T13:36:00.100Z",\n            "rule": "beta eq \\"false\\""\n          }\n        ]\n      }\n    }\n  # highlight-end\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"toml",children:"TOML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'[scheduled-flag]\ntrue = "B"\nfalse = "A"\ndefault = "Default"\n  # highlight-start\n  [scheduled-flag.rollout]\n\n    [scheduled-flag.rollout.scheduled]\n\n      [[scheduled-flag.rollout.scheduled.steps]]\n      date = 2020-04-09T22:00:00.100Z\n      rule = "beta eq \\"true\\""\n      percentage = 100.0\n\n      [[scheduled-flag.rollout.scheduled.steps]]\n      date = 2022-05-12T13:36:00.100Z\n      rule = "beta eq \\"false\\""\n  # highlight-end\n'})}),"\n",(0,l.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["You can change any fields that are available on your flag.",(0,l.jsx)(n.br,{}),"\n","Since your configuration has not been changed manually, it does not trigger any notifier."]})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"steps"})})}),(0,l.jsxs)(n.td,{children:["The only mandatory field in a ",(0,l.jsx)(n.strong,{children:"step"})," is the ",(0,l.jsx)(n.code,{children:"date"}),".",(0,l.jsx)("br",{}),(0,l.jsx)(n.strong,{children:"If no date is provided the step will be skipped."}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"The other attributes of your ",(0,l.jsx)(n.code,{children:"step"})," are what you want to update your flag, so every field available in the ",(0,l.jsx)(n.a,{href:"../flag_format",children:"flag format"})," can be updated.",(0,l.jsx)("br",{}),"The new value in a field will override the existing one."]})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var l=t(67294);const r={},s=l.createContext(r);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);