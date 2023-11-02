"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[12588],{98362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(85893),o=a(11151);const r={slug:"automate-your-product-release-cycles-using-go-feature-flag",title:"Automate Your Product Release Cycles Using Go Feature Flag",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},l=void 0,s={permalink:"/blog/automate-your-product-release-cycles-using-go-feature-flag",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md",source:"@site/blog/2021-05-26-Automate-Your-Product-Release-Cycles-Using-Go-Feature-Flag/index.md",title:"Automate Your Product Release Cycles Using Go Feature Flag",description:"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging.",date:"2021-05-26T00:00:00.000Z",formattedDate:"May 26, 2021",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"v0.x.x",permalink:"/blog/tags/v-0-x-x"}],readingTime:4.42,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{slug:"automate-your-product-release-cycles-using-go-feature-flag",title:"Automate Your Product Release Cycles Using Go Feature Flag",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},unlisted:!1,prevItem:{title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",permalink:"/blog/2022/07/01/feature-flags-devobs-podcast"},nextItem:{title:"Introduction blog post",permalink:"/blog/introduction-blog-post"}},i={authorsImageUrls:[void 0]},u=[{value:"How To Use go-feature-flag",id:"how-to-use-go-feature-flag",level:2},{value:"Progressive Rollout",id:"progressive-rollout",level:2},{value:"Scheduling Workflows",id:"scheduling-workflows",level:2},{value:"Experimentation Rollout",id:"experimentation-rollout",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(1615).Z+"",width:"6000",height:"4000"})}),"\n",(0,n.jsx)(t.p,{children:"When you build a new feature, orchestrating the actual launch schedule between the Product, Engineering, and Marketing teams can be challenging."}),"\n",(0,n.jsx)(t.p,{children:"While it seems easy to launch something new, a poorly executed rollout can end up being your worst nightmare."}),"\n",(0,n.jsxs)(t.p,{children:["In this article, I will present to you how to use the Go module go-feature-flag to roll out your new features smoothly and help you be confident during the rollout phase. If you are not familiar with the concept of feature flags or feature toggles, I encourage you to read this ",(0,n.jsx)(t.a,{href:"https://www.martinfowler.com/articles/feature-toggles.html",children:"article by Martin Fowler"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"go-feature-flag is a Go module to easily manage your flags. You can refer to this article I wrote a few months ago to understand how it works."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-go-feature-flag",children:"How To Use go-feature-flag"}),"\n",(0,n.jsx)(t.p,{children:"The library is super simple to use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Install the module:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"go get github.com/thomaspoignant/go-feature-flag\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Init the client with the location of your configuration file for your flags:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n    PollInterval: 60,\n    Retriever: &ffclient.HTTPRetriever{\n        URL:    "http://example.com/flag-config.yaml",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Put your new features conditionally based on the flag value:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'user := ffcontext.NewEvaluationContext("user-unique-key")\nhasFlag, _ := ffclient.BoolVariation("test-flag", user, false)\nif hasFlag {\n    // flag "test-flag" is true for the user\n} else {\n    // flag "test-flag" is false for the user\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can have way more configuration, but I\u2019ll let you check the ",(0,n.jsx)(t.a,{href:"https://thomaspoignant.github.io/go-feature-flag/",children:"documentation"})," for that."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"progressive-rollout",children:"Progressive Rollout"}),"\n",(0,n.jsx)(t.p,{children:"When you release a new feature that can have a strong impact on your system, you probably don\u2019t want to go all-in with this new feature for all your users."}),"\n",(0,n.jsx)(t.p,{children:"For example, you are deploying something that can be CPU-consuming and you want to have time to check if your servers handle it correctly. This is typically a great use case for a progressive rollout."}),"\n",(0,n.jsx)(t.p,{children:"It progressively increases how many users are impacted by your feature flag to avoid a big-bang rollout for all your users at once. During that time, it allows you to monitor your system and be confident that your infrastructure can handle this new load."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"progressive-flag:\n  true: true\n  false: false\n  default: false\n  rollout:\n    progressive:\n      percentage:\n        initial: 0\n        end: 100\n      releaseRamp:\n        start: 2021-03-20T00:00:00.10-05:00\n        end: 2021-03-21T00:00:00.10-05:00\n"})}),"\n",(0,n.jsx)(t.p,{children:"To do that in go-feature-flag, you will configure your flag like in the example above. You set up a progressive rollout with an initial percentage value and a release ramp. Over time, more and more users can be affected by the flag and will have the new feature."}),"\n",(0,n.jsx)(t.p,{children:"Depending on how critical this feature is, you can have a long or a short release ramp. If something goes wrong, you can edit your flag to stop the rollout at any time."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"scheduling-workflows",children:"Scheduling Workflows"}),"\n",(0,n.jsx)(t.p,{children:"Scheduling introduces the ability for users to change their flags for future points in time. While this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."}),"\n",(0,n.jsx)(t.p,{children:"For example, you may want to turn a feature on for internal testing tomorrow and then enable it for your \u201cbeta\u201d user segment four days later."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'scheduled-flag:\n  true: true\n  false: false\n  default: false\n  percentage: 0\n  rollout:\n    scheduled:\n      steps:\n        - date: 2020-04-10T00:00:00.00+02:00\n          rule: internal eq true\n          percentage: 100        - date: 2020-04-14T00:00:00.00+02:00\n          rule: internal eq true and beta eq true        - date: 2020-04-18T00:00:00.00+02:00\n          rule: ""\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example, you can see that we are updating the flag multiple times to perform actions in the future. Let\u2019s detail what will happen in this configuration:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Before ",(0,n.jsx)(t.code,{children:"2020\u201304\u201310"}),", the flag is not served."]}),"\n",(0,n.jsxs)(t.li,{children:["After the first update of the flag (",(0,n.jsx)(t.code,{children:"2020\u201304\u201310"}),"), we have 100% of the internal users who received the flag as true."]}),"\n",(0,n.jsxs)(t.li,{children:["Four days later, we add the users who have a ",(0,n.jsx)(t.code,{children:"bet"}),"a flag as ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Finally, four days later, we open the feature to all users."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As you can see, this is really powerful because your release management is now ready without doing any manual deployment/action, and this scheduling can be done by a non-technical user (aka your product manager)."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"experimentation-rollout",children:"Experimentation Rollout"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes you also want to experiment, collect the data, and decide later if you want to roll out the feature to all your users."}),"\n",(0,n.jsx)(t.p,{children:"To do that correctly, you can configure your flag with a start date and an end date for a subset of your users."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'experimentation-flag:\n  percentage: 50\n  true: true\n  false: false\n  default: false\n  rule: userId sw "9"\n  rollout:\n    experimentation:\n      start: 2021-03-20T00:00:00.10-05:00\n      end: 2021-03-21T00:00:00.10-05:00\n'})}),"\n",(0,n.jsx)(t.p,{children:"In this example, 50% of your users with a userId that starts with 9 will be impacted by the flag between the start and the end dates of the experimentation."}),"\n",(0,n.jsxs)(t.p,{children:["With the module, you can also collect the data of your variation (see the ",(0,n.jsx)(t.a,{href:"https://thomaspoignant.github.io/go-feature-flag/data_collection/",children:"documentation"})," for more info) to join them with the data of what you are testing."]}),"\n",(0,n.jsx)(t.p,{children:"So you can see the results of your experimentation and decide whether you want to roll out this flag for real or not."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Using feature flags really is a great thing, but it becomes even better if you use some advanced rollout strategies."}),"\n",(0,n.jsx)(t.p,{children:"If you start using them, you will love it because you decouple the deployment and the release and you can have fine-grained control over what your users can do."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1615:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/head-fde6026d2dea516f2cc2afbb10cf20c4.jpg"},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var n=a(67294);const o={},r=n.createContext(o);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);