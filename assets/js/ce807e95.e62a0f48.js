"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[5049],{86115:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=i(85893),t=i(11151);const l={sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},r="Migrate from v0.x.x to v1.x.x",a={id:"migrate_v0_v1",title:"Migrate from v0.x.x to v1.x.x",description:"How to migrate from v0.x.x to v1.x.x",source:"@site/versioned_docs/version-v1.14.1/migrate_v0_v1.md",sourceDirName:".",slug:"/migrate_v0_v1",permalink:"/docs/v1.14.1/migrate_v0_v1",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.1/migrate_v0_v1.md",tags:[],version:"v1.14.1",sidebarPosition:90,frontMatter:{sidebar_position:90,description:"How to migrate from v0.x.x to v1.x.x"},sidebar:"tutorialSidebar",previous:{title:"Custom Notifier",permalink:"/docs/v1.14.1/go_module/notifier/custom"},next:{title:"Lint your config",permalink:"/docs/v1.14.1/linter"}},s={},c=[{value:"Install the migration command line",id:"install-the-migration-command-line",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the migration command line",id:"use-the-migration-command-line",level:2},{value:"Update your flag file",id:"update-your-flag-file",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"migrate-from-v0xx-to-v1xx",children:"Migrate from v0.x.x to v1.x.x"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Version ",(0,o.jsx)(n.code,{children:"v1.0.0"})," has introduced a new flag format that push the limits of ",(0,o.jsx)(n.strong,{children:"GO Feature Flag"})," even further.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.strong,{children:"BUT"})," the flag format from all the versions ",(0,o.jsx)(n.code,{children:"v0.x.x"})," are still compatible and supported by the ",(0,o.jsx)(n.code,{children:"v1.0.0"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["A command line is available to help you to convert your actual configuration file to the version ",(0,o.jsx)(n.code,{children:"v1.x.x"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"install-the-migration-command-line",children:"Install the migration command line"}),"\n",(0,o.jsx)(n.h3,{id:"install-using-homebrew-mac-and-linux",children:"Install using Homebrew (mac and linux)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-migration-cli\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-using-scoop-windows",children:"Install using Scoop (windows)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"scoop bucket add org https://github.com/go-feature-flag/scoop.git\nscoop install go-feature-flag-migration-cli\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-using-docker",children:"Install using Docker"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker pull thomaspoignant/go-feature-flag-migration-cli:latest\n"})}),"\n",(0,o.jsx)(n.h2,{id:"use-the-migration-command-line",children:"Use the migration command line"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./go-feature-flag-migration-cli \\\n  --input-format=yaml \\\n  --input-file=/config/my-go-feature-flag-config-v0.x.x.yaml \\\n  --output-format=yaml \\\n  --output-file=/config/my-go-feature-flag-config-v1.x.x.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"The command line has 4 arguments you should specify."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"input-format"}),": Format of your input file (",(0,o.jsx)(n.code,{children:"YAML"}),", ",(0,o.jsx)(n.code,{children:"JSON"})," or ",(0,o.jsx)(n.code,{children:"TOML"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"input-file"}),": Location of the flag file you want to convert."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"output-format"}),": Format of your output file (",(0,o.jsx)(n.code,{children:"YAML"}),", ",(0,o.jsx)(n.code,{children:"JSON"})," or ",(0,o.jsx)(n.code,{children:"TOML"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"output-file"}),": Location of the converted flag file."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"update-your-flag-file",children:"Update your flag file"}),"\n",(0,o.jsx)(n.p,{children:"When your file is ready, you just have to replace your file in the location where GO Feature Flag is retrieving it."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If for any reason your file is not readable by GO Feature Flag, it will not break anything, we will keep the latest version we have in memory."})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var o=i(67294);const t={},l=o.createContext(t);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);