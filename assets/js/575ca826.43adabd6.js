"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(a),m=r,c=g["".concat(s,".").concat(m)]||g[m]||f[m]||o;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release"]},i=void 0,l={permalink:"/blog/2023/02/01/introducing-v1.0.0",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-02-01-introducing-v1.0.0/index.md",source:"@site/blog/2023-02-01-introducing-v1.0.0/index.md",title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",description:"GO Feature Flag logo",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"Open Feature",permalink:"/blog/tags/open-feature"},{label:"release",permalink:"/blog/tags/release"}],readingTime:4.895,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"GO Feature Flag owner",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",authors:["thomaspoignant"],tags:["GO Feature Flag","Open Feature","release"]},prevItem:{title:"Lint your feature flag config in you CI/CD pipelines \u274c \u2705",permalink:"/blog/2023/02/20/lint-your-feature-flags"},nextItem:{title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",permalink:"/blog/2022/07/01/feature-flags-devobs-podcast"}},s={authorsImageUrls:[void 0]},u=[{value:"Flag configuration format",id:"flag-configuration-format",level:2},{value:"Migrate from v0.x.x to v1.x.x",id:"migrate-from-v0xx-to-v1xx",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Flag Editor",id:"flag-editor",level:2}],p={toc:u},g="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(g,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GO Feature Flag logo",src:a(72024).Z,width:"1531",height:"597"})),(0,r.kt)("h1",{id:"-announcing-go-feature-flag-v100-get-more-from-your-feature-flags"},"\ud83d\ude80 Announcing GO Feature Flag v1.0.0, get more from your feature flags"),(0,r.kt)("p",null,"We are so happy to finally announce that ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," v1.0.0 is released. \ud83c\udf89 \ud83e\udd73 \ud83d\ude80"),(0,r.kt)("p",null,"It was a long journey before this release but we are happy to propose you an even better experience with feature flags always keeping simplicity in mind and building a lightweight solution."),(0,r.kt)("p",null,"Our goal is still the same, we want you to experience the world of feature flags with a lightweight self-hosted solution."),(0,r.kt)("p",null,"With this new version you will now be able to enhance your usage of feature flagging with opening the creation of more complex and more advance toggles."),(0,r.kt)("h1",{id:"what-is-changing"},"What is changing?"),(0,r.kt)("h2",{id:"flag-configuration-format"},"Flag configuration format"),(0,r.kt)("p",null,"The main change is the format of your flags configuration. "),(0,r.kt)("p",null,"After using the version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.x.x")," for quite some time we notice some limitation on the way our flag configuration was designed.\nIt was hard to return more than 2 different values with the same flag and we wanted to find a better way to represent our flags to be more extensible."),(0,r.kt)("p",null,"The new representation of the flag is a bit more verbose but allows a lot more possibility in the long term, being able to create more advanced flag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Old format:")),(0,r.kt)("p",null,"In the previous versions the flag representation was looking like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'test-flag:\n  rule: key eq "random-key"\n  percentage: 40\n  true: true\n  false: false\n  default: false\n')),(0,r.kt)("p",null,"As you can see on this example you can only have a value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," variation and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," variation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"variation was applying if the user was not part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"New format:")),(0,r.kt)("p",null,"The same flag in the new format will looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'test-flag:\n  variations:\n    variation_A: true\n    variation_B: false\n  targeting:\n    - query: key eq "random-key"\n      percentage:\n        variation_B: 60\n        variation_A: 40\n  defaultRule:\n    variation: variation_B\n')),(0,r.kt)("p",null,"With the new format you have an unlimited number of variation possible you can define but also more than one rule for a specific flag."),(0,r.kt)("p",null,"It allows to target different types of users with different values for the same feature flag."),(0,r.kt)("p",null,"Let\u2019s take a real life example, we want to get the background color for our website based on this criterias:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pro")," users should have a red background"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enterprise")," users should have a green background"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"40%")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"free")," users should have a ",(0,r.kt)("strong",{parentName:"li"},"grey")," background and ",(0,r.kt)("strong",{parentName:"li"},"60%")," a ",(0,r.kt)("strong",{parentName:"li"},"yellow")," background"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"other types")," of user have a white background")),(0,r.kt)("p",null,"We can come-up with a flag, the configuration will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'user-background-color:\n  variations:\n    pro: #ff1f00\n    enterprise: #114f03\n    free_grey: #b0b3af\n    free_yellow: #ecec0a\n    default: #ffffff\n  targeting:\n    - query: type eq "pro"\n      variation: pro\n    - query: type eq "enterprise"\n      variation: enterprise\n    - query: type eq "free"\n      percentage:\n        free_grey: 40\n        free_yellow: 60\n  defaultRule:\n    variation: default\n')),(0,r.kt)("p",null,"As you can see we can have a way more advanced flag configuration with this new format. This format is solving all the limitation we had with the version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.x.x")," of ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag"),"."),(0,r.kt)("h3",{id:"migrate-from-v0xx-to-v1xx"},"Migrate from v0.x.x to v1.x.x"),(0,r.kt)("p",null,"First of all you should know that all flags from the version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.x.x")," are still compatible with this new version of ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag"),". We made it possible to reduce the disagreement to have to convert all your flag directly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BUT")," we encourage you to migrate your flag to the new version and for this we have created a tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag-migration-cli")," to convert flags in ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.x.x")," format to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," format."),(0,r.kt)("p",null,"The easiest way to use it is probably to use our docker image like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -v $(pwd)/your/configuration_folder:/config \\\n  thomaspoignant/go-feature-flag-migration-cli:latest \\\n  --input-format=yaml \\\n  --input-file=/config/my-go-feature-flag-config-v0.x.x.yaml \\\n  --output-format=yaml \\\n  --output-file=/config/my-go-feature-flag-config-v1.x.x.yaml\n")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"We use the opportunity of the ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," to revamp our documentation and to highlight how you can use ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag")," in 2 different modes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The GO module"),", this is where we started and this is the core of what we propose. In the documentation you will find all the information on how to use the module into your GO project."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("strong",{parentName:"li"},"Open-Feature"),", the new open-source vendor agnostic standard for feature flags. You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"relay-proxy")," our server component that allows to use ",(0,r.kt)("strong",{parentName:"li"},"GO Feature Flag")," with multiple languages ",(0,r.kt)("em",{parentName:"li"},"(for now we support ",(0,r.kt)("inlineCode",{parentName:"em"},"javascript"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"typescript"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"java"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"GO")," and ",(0,r.kt)("inlineCode",{parentName:"em"},".Net"),")"),". In the documentation you will find how to use the ",(0,r.kt)("strong",{parentName:"li"},"GO Feature Flag providers")," in combination with the ",(0,r.kt)("strong",{parentName:"li"},"Open Feature SDKs"),".")),(0,r.kt)("h2",{id:"flag-editor"},"Flag Editor"),(0,r.kt)("p",null,"Our old flag editor was not compatible anymore with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," flag format. "),(0,r.kt)("p",null,"So we decided to restart our flag editor from scratch and to allow the possibility to create flags configuration from a simple UI. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kapture 2023-01-20 at 16.16.50.gif",src:a(25047).Z,width:"639",height:"524"})),(0,r.kt)("p",null,"For now it is a tiny UI that make your life easier, but the goal is to evolve it more and more to be the place where you want to go to build your new feature flags."),(0,r.kt)("h1",{id:"what-has-not-changed"},"What has not changed?"),(0,r.kt)("p",null,"Yes a lot of things have changed but our internals are solids and we have ensure to be consistent with the previous versions."),(0,r.kt)("p",null,"Our main points of attention where the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User segmentation is similar between ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.x.x")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.0.0")," meaning that if a user was affected by a flag (in a percentage for example) he will continue to be in the same cohort."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"retrievers")," and data ",(0,r.kt)("inlineCode",{parentName:"li"},"exporters")," have not changed and are still working exactly the same way as before."),(0,r.kt)("li",{parentName:"ul"},"You can continue using ",(0,r.kt)("strong",{parentName:"li"},"GO Feature Flags")," with your old flags."),(0,r.kt)("li",{parentName:"ul"},"Moving to the version ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.0.0")," is transparent and you just have to change the version."),(0,r.kt)("li",{parentName:"ul"},"You can still use our advance rollout capabilities such as ",(0,r.kt)("strong",{parentName:"li"},"experimentation"),", ",(0,r.kt)("strong",{parentName:"li"},"scheduled rollout"),", ",(0,r.kt)("strong",{parentName:"li"},"progressive rollout \u2026"))),(0,r.kt)("h1",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Feedbacks is our only way to evolve GO Feature Flag, so please contact us to give us any feedback."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Via ",(0,r.kt)("a",{parentName:"li",href:"mailto:contact@gofeaturegflag.org"},"email")),(0,r.kt)("li",{parentName:"ul"},"Via a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/thomaspoignant/go-feature-flag/issues/new/choose"},"GitHub Issue"))))}f.isMDXComponent=!0},72024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-34a26e8932ddeca9afc888ec3d0198a3.png"},25047:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flag_editor-53ff4148297fa5d57431ab268cd5e52c.gif"}}]);