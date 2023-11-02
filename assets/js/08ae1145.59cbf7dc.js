"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[50326],{94373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const o={sidebar_position:91,description:"Lint your config"},l="Lint your config",r={id:"linter",title:"Lint your config",description:"Lint your config",source:"@site/versioned_docs/version-v1.3.0/linter.md",sourceDirName:".",slug:"/linter",permalink:"/docs/v1.3.0/linter",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.3.0/linter.md",tags:[],version:"v1.3.0",sidebarPosition:91,frontMatter:{sidebar_position:91,description:"Lint your config"},sidebar:"tutorialSidebar",previous:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.3.0/migrate_v0_v1"},next:{title:"Frequently Asked Questions",permalink:"/docs/v1.3.0/faq"}},a={},c=[{value:"Install the linter",id:"install-the-linter",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the linter",id:"use-the-linter",level:2},{value:"GitHub Actions",id:"github-actions",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"lint-your-config",children:"Lint your config"}),"\n",(0,i.jsxs)(n.p,{children:["A faulty configuration could make ",(0,i.jsx)(n.strong,{children:"GO Feature Flag"})," not the way you expect.",(0,i.jsx)(n.br,{}),"\n","This is why we have introduced the ",(0,i.jsx)(n.code,{children:"go-feature-flag-lint"})," a command line tool validates that a flags file can be parsed by ",(0,i.jsx)(n.strong,{children:"GO Feature Flag"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"We recommend you to use this command line in your CI/CD pipelines to avoid any disappointment."})}),"\n",(0,i.jsx)(n.h2,{id:"install-the-linter",children:"Install the linter"}),"\n",(0,i.jsx)(n.h3,{id:"install-using-homebrew-mac-and-linux",children:"Install using Homebrew (mac and linux)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-lint\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-using-scoop-windows",children:"Install using Scoop (windows)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-lint\n"})}),"\n",(0,i.jsx)(n.h3,{id:"install-using-docker",children:"Install using Docker"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker pull thomaspoignant/go-feature-flag-lint:latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use-the-linter",children:"Use the linter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"./go-feature-flag-lint \\\n  --input-format=yaml \\\n  --input-file=/input/my-go-feature-flag-config.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"The command line has 2 arguments you should specify."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--input-file"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"(mandatory)"})," The location of your configuration file."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--input-format"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"(mandatory)"})," The format of your current configuration file. ",(0,i.jsx)("br",{}),"Available formats are ",(0,i.jsx)(n.code,{children:"yaml"}),", ",(0,i.jsx)(n.code,{children:"json"}),", ",(0,i.jsx)(n.code,{children:"toml"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,i.jsxs)(n.p,{children:["You can run ",(0,i.jsx)(n.code,{children:"go-feature-flag-lint"})," using GitHub actions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: docker://thomaspoignant/go-feature-flag-lint:latest\n        with:\n          args: --input-file=/github/workspace/path/to/your/config.yaml --input-format=yaml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var i=t(67294);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);