"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2568],{77208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=r(85893),s=r(11151);const i={sidebar_position:21,description:"How to create a rule to target specific users"},l="How to target specific users",d={id:"configure_flag/rule_format",title:"How to target specific users",description:"How to create a rule to target specific users",source:"@site/docs/configure_flag/rule_format.md",sourceDirName:"configure_flag",slug:"/configure_flag/rule_format",permalink:"/docs/next/configure_flag/rule_format",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/configure_flag/rule_format.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"How to create a rule to target specific users"},sidebar:"tutorialSidebar",previous:{title:"How to configure a flag",permalink:"/docs/next/configure_flag/flag_format"},next:{title:"Rollout strategies",permalink:"/docs/next/category/rollout-strategies"}},c={},o=[{value:"Rule format",id:"rule-format",level:2},{value:"Format details",id:"format-details",level:3},{value:"Query format",id:"query-format",level:3},{value:"Examples",id:"examples",level:4},{value:"Environments",id:"environments",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-target-specific-users",children:"How to target specific users"}),"\n",(0,t.jsx)(n.h2,{id:"rule-format",children:"Rule format"}),"\n",(0,t.jsx)(n.p,{children:"A rule is a configuration that allows to serve a variation based on some conditions."}),"\n",(0,t.jsx)(n.h3,{id:"format-details",children:"Format details"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{width:"20%",children:"Field"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"name"}),(0,t.jsx)("br",{}),(0,t.jsx)("i",{children:"(optional)"})]}),(0,t.jsxs)("td",{children:["Name of your rule.",(0,t.jsx)("br",{}),"This is needed when your are updating a rule using a ",(0,t.jsx)("a",{href:"./rollout/scheduled",children:"scheduled rollout"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"query"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Query represents an antlr query in the nikunjy/rules format.\n",(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"This field is mandatory in every rule used in the targeting field"}),"."]})}),(0,t.jsx)("p",{children:(0,t.jsxs)("i",{children:["See ",(0,t.jsx)("a",{href:"#query-format",children:"query format"})," to have the syntax."]})}),(0,t.jsx)("p",{children:(0,t.jsxs)("i",{children:["Note: if you use the field ",(0,t.jsx)("code",{children:"query"})," in a ",(0,t.jsx)("code",{children:"defaultRule"})," it will be ignored."]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"variation"}),(0,t.jsx)("br",{}),(0,t.jsx)("i",{children:"(optional)"})]}),(0,t.jsx)("td",{children:"Name of the variation to return."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"percentage"}),(0,t.jsx)("br",{}),(0,t.jsx)("i",{children:"(optional)"})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"Represents the percentage we should give to each variation."}),(0,t.jsx)("pre",{children:(0,t.jsxs)(n.p,{children:["percentage:",(0,t.jsx)("br",{}),"  variationA: 10.59",(0,t.jsx)("br",{}),"  variationB: 9.41",(0,t.jsx)("br",{}),"  variationC: 80"]})}),(0,t.jsx)("p",{children:"The format is the name of the variation and the percentage for this one."}),(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"Note: if your total is not equals to 100% this rule will be considered as invalid."})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"progressiveRollout"}),(0,t.jsx)("br",{}),(0,t.jsx)("i",{children:"(optional)"})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:"Allow to ramp up the percentage of your flag over time."})}),(0,t.jsx)("p",{children:(0,t.jsx)(n.p,{children:"You can decide at which percentage you starts with and at what percentage you ends with in your release ramp.\nBefore the start date we will serve the initial percentage and, after we will serve the end percentage."})}),(0,t.jsx)("p",{children:(0,t.jsxs)("i",{children:["See ",(0,t.jsx)("a",{href:"./rollout/progressive",children:"progressive rollout"})," to have more info on how to use it."]})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"disable"}),(0,t.jsx)("br",{}),(0,t.jsx)("i",{children:"(optional)"})]}),(0,t.jsxs)("td",{children:[(0,t.jsxs)("p",{children:["Set to ",(0,t.jsx)("code",{children:"true"})," if you want to disable the rule."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"Default:"})," ",(0,t.jsx)("code",{children:"true"}),"."]})]})]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"variation"}),", ",(0,t.jsx)(n.code,{children:"percentage"})," and ",(0,t.jsx)(n.code,{children:"progressiveRollout"})," are optional but you ",(0,t.jsx)(n.strong,{children:"must have one of the 3"}),"."]}),(0,t.jsxs)(n.p,{children:["If you have more than one field we will use the first one in that order\n",(0,t.jsx)(n.code,{children:"progressiveRollout"})," > ",(0,t.jsx)(n.code,{children:"percentage"})," > ",(0,t.jsx)(n.code,{children:"variation"}),"."]})]}),"\n",(0,t.jsx)(n.h3,{id:"query-format",children:"Query format"}),"\n",(0,t.jsxs)(n.p,{children:["The rule format is based on the ",(0,t.jsx)(n.a,{href:"https://github.com/nikunjy/rules",children:(0,t.jsx)(n.code,{children:"nikunjy/rules"})})," library."]}),"\n",(0,t.jsxs)(n.p,{children:["All the operations can be written capitalized or lowercase (ex: ",(0,t.jsx)(n.code,{children:"eq"})," or ",(0,t.jsx)(n.code,{children:"EQ"})," can be used).\nLogical Operations supported are ",(0,t.jsx)(n.code,{children:"AND"})," ",(0,t.jsx)(n.code,{children:"OR"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Compare Expression and their definitions (",(0,t.jsx)(n.code,{children:"a|b"})," means you can use either one of the two ",(0,t.jsx)(n.code,{children:"a"})," or ",(0,t.jsx)(n.code,{children:"b"}),"):"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Operator"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"eq"}),", ",(0,t.jsx)(n.code,{children:"=="})]}),(0,t.jsx)(n.td,{children:"equals to"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"ne"}),", ",(0,t.jsx)(n.code,{children:"!="})]}),(0,t.jsx)(n.td,{children:"not equals to"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"lt"}),", ",(0,t.jsx)(n.code,{children:"<"})]}),(0,t.jsx)(n.td,{children:"less than"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"gt"}),", ",(0,t.jsx)(n.code,{children:">"})]}),(0,t.jsx)(n.td,{children:"greater than"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"le"}),", ",(0,t.jsx)(n.code,{children:"<="})]}),(0,t.jsx)(n.td,{children:"less than equal to"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,t.jsx)(n.code,{children:"ge"}),", ",(0,t.jsx)(n.code,{children:">="})]}),(0,t.jsx)(n.td,{children:"greater than equal to"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"co"})}),(0,t.jsx)(n.td,{children:"contains"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"sw"})}),(0,t.jsx)(n.td,{children:"starts with"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"ew"})}),(0,t.jsx)(n.td,{children:"ends with"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"in"})}),(0,t.jsx)(n.td,{children:"in a list"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"pr"})}),(0,t.jsx)(n.td,{children:"present"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"not"})}),(0,t.jsx)(n.td,{children:"not of a logical expression"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select a specific user: ",(0,t.jsx)(n.code,{children:'key eq "example@example.com"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select all identified users: ",(0,t.jsx)(n.code,{children:"anonymous ne true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select a user with a custom property: ",(0,t.jsx)(n.code,{children:'userId eq "12345"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select on multiple criteria:\n",(0,t.jsxs)(n.em,{children:["All users with ids finishing by ",(0,t.jsx)(n.code,{children:"@test.com"})," that have the role ",(0,t.jsx)(n.code,{children:"backend engineer"})," in the ",(0,t.jsx)(n.code,{children:"pro"})," environment for the\ncompany ",(0,t.jsx)(n.code,{children:"go-feature-flag"})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'(key ew "@test.com") and (role eq "backend engineer") and (env eq "pro") and (company eq "go-feature-flag")\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"environments",children:"Environments"}),"\n",(0,t.jsxs)(n.p,{children:["When you initialise ",(0,t.jsx)(n.code,{children:"go-feature-flag"})," you can set an ",(0,t.jsx)(n.a,{href:"../go_module/configuration/#option_environment",children:"environment"})," for the instance of this SDK."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'ffclient.Init(ffclient.Config{\n    // ...\n    Environment:    "prod",\n    // ...\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When an environment is set, it adds a new field in your user called ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"env"})})," that you can use in your queries.\nIt means that you can decide to activate a flag only for some ",(0,t.jsx)(n.strong,{children:"environment"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example of flag configuration based on the environment:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'my-flag:\n  variations:\n    A: "A"\n    B: "B"\n    C: "C"\n  targeting:\n    - name: Target pre environment\n      query: env eq "pre"\n      variation: A\n    - name: Target pro environment\n      query: env eq "pro"\n      variation: B\n  defaultRule:\n    variation: C\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var t=r(67294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);