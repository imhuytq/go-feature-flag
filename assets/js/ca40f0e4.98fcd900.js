"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[61285],{87872:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var a=o(85893),n=o(11151);const s={slug:"introduction-blog-post",title:"Introduction blog post",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},i=void 0,r={permalink:"/blog/introduction-blog-post",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2021-01-11-introduction-blog-post/index.md",source:"@site/blog/2021-01-11-introduction-blog-post/index.md",title:"Introduction blog post",description:"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.",date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"v0.x.x",permalink:"/blog/tags/v-0-x-x"}],readingTime:4.035,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{slug:"introduction-blog-post",title:"Introduction blog post",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},unlisted:!1,prevItem:{title:"Automate Your Product Release Cycles Using Go Feature Flag",permalink:"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},l={authorsImageUrls:[void 0]},h=[{value:"Why a new solution?",id:"why-a-new-solution",level:2},{value:"How Does It Work?",id:"how-does-it-work",level:2},{value:"How to Use It",id:"how-to-use-it",level:2},{value:"What\u2019s Next?",id:"whats-next",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("center",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(12785).Z+"",width:"400",height:"380"})})}),"\n",(0,a.jsx)(t.p,{children:"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags."}),"\n",(0,a.jsxs)(t.p,{children:["There are a lot of systems available on the market to manage your flags, like ",(0,a.jsx)(t.a,{href:"https://launchdarkly.com/",children:"LaunchDarkly"})," or ",(0,a.jsx)(t.a,{href:"https://unleash.org/",children:"UNLEASH"}),", that have Golang support \u2014 but this option is expensive, and you have to host a server somewhere to manage your flags."]}),"\n",(0,a.jsx)(t.p,{children:"From this starting point, I came up with the idea to create a simple library with only one file in the back end. This file can be stored in different places (AWS S3, GitHub, an HTTP endpoint somewhere, etc.). This is the only thing you have to host \u2014 all the decision logic stands inside the Go module."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"why-a-new-solution",children:"Why a new solution?"}),"\n",(0,a.jsx)(t.p,{children:"There are some solutions available for Go to manage feature flags. I can classify them into two categories:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You need to run a specific service: ",(0,a.jsx)(t.a,{href:"https://github.com/markphelps/flipt",children:"markphelps/flipt"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/checkr/flagr",children:"checkr/flagr"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/Unleash/unleash",children:"Unleash/unleash"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/vsco/dcdr",children:"vsco/dcdr"}),", etc."]}),"\n",(0,a.jsxs)(t.li,{children:["You need to have a database: ",(0,a.jsx)(t.a,{href:"https://github.com/xchapter7x/toggle",children:"xchapter7x/toggle"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/AntoineAugusti/feature-flags",children:"AntoineAugusti/feature-flags"}),", etc."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"All of these solutions are great and have a lot of features, but I was a bit worried about having a full setup with things to install before doing feature flags on a basic service."}),"\n",(0,a.jsx)(t.p,{children:"I don\u2019t want to host/maintain/monitor a full feature-flag system if my needs are really small."}),"\n",(0,a.jsx)(t.p,{children:"So I decided to make go-feature-flag, a simple and easy-to-implement feature-flag system, with no back end at all except a shared configuration file you can store anywhere (S3, GitHub, HTTP endpoint, etc.)."}),"\n",(0,a.jsx)(t.p,{children:"The goal is to experience the usage of feature flags without a complex solution, and if you end up liking it and need a more advanced pattern, you can go to any open-source solution or SaaS solution \u2014 like LaunchDarkly, for example."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"how-does-it-work",children:"How Does It Work?"}),"\n",(0,a.jsx)(t.p,{children:"How this Go module works is easy. It just reads the shared file every x seconds and gives you a way to get the value of your flag in the type you expect."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(61570).Z+"",width:"1695",height:"589"})}),"\n",(0,a.jsx)(t.p,{children:"As you can see, what go-feature-flag is providing is a way for you to keep in sync with the feature-flag config file. It also allows you to evaluate the flag for your users."}),"\n",(0,a.jsxs)(t.p,{children:["A rule system based on ",(0,a.jsx)(t.a,{href:"https://github.com/nikunjy/rules",children:"nikunjy/rules"})," allows you to specify complex rules to apply the flag only for a subset of your users."]}),"\n",(0,a.jsx)(t.p,{children:"The percentage allows you to select which percentage of users will get the true value, but I\u2019m sure you wonder how the repartition is done. It\u2019s really easy \u2014 we\u2019re doing a hash of the key of the user with the flag name used as a salt (it guarantees that the repartition isn\u2019t always to the same users)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:o(52420).Z+"",width:"700",height:"266"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-it",children:"How to Use It"}),"\n",(0,a.jsx)(t.p,{children:"The main goal of go-feature-flag is to be super simple so you don\u2019t have much to do in order to use it."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The first thing to do is host your config file somewhere (S3, GitHub, etc.)"}),"\n",(0,a.jsx)(t.li,{children:"During app initialization, init go-feature-flag with a configuration:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n    PollInterval: 3,\n    Retriever: &ffClient.HTTPRetriever{\n        URL:    "https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/testdata/test.yaml",\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Now that you\u2019ve done an init on go-feature-flag, you can see the value of the flag for your users, with something like this:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'user := ffcontext.NewEvaluationContext("user-unique-key")\nhasFlag, _ := ffclient.BoolVariation("test-flag", user, false)\nif hasFlag {\n    // flag "test-flag" is true for the user\n} else {\n    // flag "test-flag" is false for the user\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": Your variation will return the default value (the last parameter) if you have an error (flag not present, wrong type, etc.)."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"It\u2019s a basic example, but you can put as many properties as you want for your User to make complex queries on your flag"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'user = ffcontext.NewEvaluationContextBuilder("user-unique-key").\n AddCustom("firstname", "John").\n AddCustom("lastname", "Doe").\n AddCustom("email", "john.doe@example.com").\n Build()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This allows you to have a rule like ",(0,a.jsx)(t.code,{children:'email eq "john.doe@example.com"'})," to select a specific user with your flag."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What\u2019s Next?"}),"\n",(0,a.jsx)(t.p,{children:"As you can see go-feature-flag is simple, and the goal is to keep it as simple as possible. But this doesn\u2019t mean it\u2019s finished."}),"\n",(0,a.jsx)(t.p,{children:"For now, I see an evolutionary path for go-feature-flag: First, it should be able to store the flag config file anywhere, so we have to support more retrievers. The second thing is to get more feedback. For now, we\u2019re logging some stuff, but maybe some users would like to have a webhook or Slack notification."}),"\n",(0,a.jsx)(t.p,{children:"go-feature-flag is also open to contribution, so if you want to contribute any ideas or help, I\u2019d really love to hear from you concerning what you think about this library and what you want in it."}),"\n",(0,a.jsxs)(t.p,{children:["So feel free to write ",(0,a.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/discussions",children:"a discussion"})," on GitHub, open an ",(0,a.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/issues",children:"issue"}),", or send me an ",(0,a.jsx)(t.a,{href:"mailto:contact@gofeatureflag.org",children:"email"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},52420:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/code-32fe376c0c545b7131c562369bb98a3e.png"},12785:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/logo-26e5adbbf02da2d72eb5d51280cc5ba9.png"},61570:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sdk-explanation-a10220a7d1f500bcd9ebad26dffec168.jpg"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var a=o(67294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);