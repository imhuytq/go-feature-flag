"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:6},i="Github",l={unversionedId:"go_module/store_file/github",id:"version-v1.15.1/go_module/store_file/github",title:"Github",description:"The Github Retriever",source:"@site/versioned_docs/version-v1.15.1/go_module/store_file/github.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/github",permalink:"/docs/v1.15.1/go_module/store_file/github",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.1/go_module/store_file/github.md",tags:[],version:"v1.15.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/docs/v1.15.1/go_module/store_file/google_cloud_storage"},next:{title:"GitLab",permalink:"/docs/v1.15.1/go_module/store_file/gitlab"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github"},"Github"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/githubretriever/#Retriever"},(0,a.kt)("strong",{parentName:"a"},"Github Retriever")),"\nwill perform an HTTP Request with your GitHub configuration to get your flags."),(0,a.kt)("p",null,"!!! Tip\nGitHub has rate limits, be sure to correctly set your ",(0,a.kt)("inlineCode",{parentName:"p"},"PollingInterval")," to avoid reaching the limit."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &githubretriever.Retriever{\n        RepositorySlug: "thomaspoignant/go-feature-flag",\n        Branch: "main",\n        FilePath: "testdata/flag-config.yaml",\n        GithubToken: "XXXX",\n        Timeout: 2 * time.Second,\n    },\n})\ndefer ffclient.Close()\n')),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("p",null,"To configure the access to your GitHub file:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"RepositorySlug"))),(0,a.kt)("td",{parentName:"tr",align:null},"Your GitHub slug ",(0,a.kt)("inlineCode",{parentName:"td"},"org/repo-name"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"FilePath"))),(0,a.kt)("td",{parentName:"tr",align:null},"The path of your file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Branch"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"The branch where your file is.",(0,a.kt)("br",null),"Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"main"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"GithubToken"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Github token is used to access a private repository, you need the ",(0,a.kt)("inlineCode",{parentName:"td"},"repo")," permission ",(0,a.kt)("em",{parentName:"td"},"(",(0,a.kt)("a",{parentName:"em",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"},"how to create a GitHub token"),")"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Timeout"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"Timeout for the HTTP call ",(0,a.kt)("br",null),"Default: 10 seconds")))))}d.isMDXComponent=!0}}]);