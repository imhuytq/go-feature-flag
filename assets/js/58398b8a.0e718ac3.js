"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(m,a(a({ref:t},f),{},{components:n})):o.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},a="Slack Notifier",l={unversionedId:"go_module/notifier/slack",id:"version-v1.0.0/go_module/notifier/slack",title:"Slack Notifier",description:"The Slack notifier allows you to get notification on your favorite slack channel when an instance of go-feature-flag is detecting changes in the configuration file.",source:"@site/versioned_docs/version-v1.0.0/go_module/notifier/slack.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/slack",permalink:"/docs/v1.0.0/go_module/notifier/slack",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.0/go_module/notifier/slack.md",tags:[],version:"v1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Notify flag changes",permalink:"/docs/v1.0.0/go_module/notifier/"},next:{title:"Webhook Notifier",permalink:"/docs/v1.0.0/go_module/notifier/webhook"}},c={},s=[{value:"Configure Slack Notification",id:"configure-slack-notification",level:2},{value:"Configuration fields",id:"configuration-fields",level:3}],f={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slack-notifier"},"Slack Notifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Slack")," notifier allows you to get notification on your favorite slack channel when an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," is detecting changes in the configuration file."),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/docs/notifier/slack_notification.png"})),(0,r.kt)("h2",{id:"configure-slack-notification"},"Configure Slack Notification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, you need to create an incoming webhook on your slack instance.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"You can follow this ",(0,r.kt)("a",{parentName:"em",href:"https://api.slack.com/messaging/webhooks#getting_started"},"documentation to see how to do it"))),(0,r.kt)("li",{parentName:"ol"},"Copy your webhook URL.",(0,r.kt)("br",{parentName:"li"}),"It should look like: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"),"."),(0,r.kt)("li",{parentName:"ol"},"In your init method add a slack notifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1" hl_lines="5"',linenums:'"1"',hl_lines:'"5"'},'ffclient.Config{ \n    // ...\n    Notifiers: []notifier.Notifier{\n        &slacknotifier.Notifier{\n            SlackWebhookURL: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",\n        },\n        // ...\n    },\n}\n')),(0,r.kt)("h3",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SlackWebhookURL")),(0,r.kt)("td",{parentName:"tr",align:null},"The complete URL of your incoming webhook configured in Slack.")))))}p.isMDXComponent=!0}}]);