"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[44044],{45476:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(85893),r=i(11151);const s={sidebar_position:6},o="GitLab",l={id:"go_module/store_file/gitlab",title:"GitLab",description:"The Gitlab Retriever",source:"@site/versioned_docs/version-v1.10.4/go_module/store_file/gitlab.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/gitlab",permalink:"/docs/v1.10.4/go_module/store_file/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.4/go_module/store_file/gitlab.md",tags:[],version:"v1.10.4",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Github",permalink:"/docs/v1.10.4/go_module/store_file/github"},next:{title:"File",permalink:"/docs/v1.10.4/go_module/store_file/file"}},d={},a=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"gitlab",children:"GitLab"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gitlabretriever/#Retriever",children:(0,n.jsx)(t.strong,{children:"Gitlab Retriever"})}),"\nwill perform an HTTP Request to the Gitlab API to get your flags."]}),"\n",(0,n.jsxs)(t.p,{children:["!!! Tip\nGitlab has rate limits, be sure to correctly set your ",(0,n.jsx)(t.code,{children:"PollingInterval"})," to avoid reaching the limit."]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gitlab.Retriever{\n        RepositorySlug: "thomaspoignant/go-feature-flag",\n        Branch: "main",\n        FilePath: "testdata/flag-config.yaml",\n        GitlabToken: "XXXX",\n        Timeout: 2 * time.Second,\n\t\t    BaseURL: "https://gitlab.com",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsx)(t.p,{children:"To configure the access to your GitLab file:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"BaseURL"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The domain name of your Gitlab instance ",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.a,{href:"https://gitlab.com",children:"https://gitlab.com"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RepositorySlug"})})}),(0,n.jsxs)(t.td,{children:["Your Gitlab slug ",(0,n.jsx)(t.code,{children:"org/repo-name"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"FilePath"})})}),(0,n.jsx)(t.td,{children:"The path of your file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Branch"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The branch where your file is.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.code,{children:"main"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"GitlabToken"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Gitlab token is used to access a private repository"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Timeout"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Timeout for the HTTP call ",(0,n.jsx)("br",{}),"Default: 10 seconds"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);