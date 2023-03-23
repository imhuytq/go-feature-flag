"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[22553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={slug:"introduction-blog-post",title:"Introduction blog post",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},i=void 0,l={permalink:"/blog/introduction-blog-post",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2021-01-11-introduction-blog-post/index.md",source:"@site/blog/2021-01-11-introduction-blog-post/index.md",title:"Introduction blog post",description:"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags.",date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"v0.x.x",permalink:"/blog/tags/v-0-x-x"}],readingTime:4.035,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"GO Feature Flag owner",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{slug:"introduction-blog-post",title:"Introduction blog post",authors:["thomaspoignant"],tags:["GO Feature Flag","v0.x.x"]},prevItem:{title:"Automate Your Product Release Cycles Using Go Feature Flag",permalink:"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:n(12785).Z,width:"400",height:"380"}))),(0,r.kt)("p",null,"I absolutely don\u2019t think human/manual QA gates should be involved in between the writing of code and its being live. To avoid breaking things every time and to have an early cutoff system, you should use feature flags."),(0,r.kt)("p",null,"There are a lot of systems available on the market to manage your flags, like ",(0,r.kt)("a",{parentName:"p",href:"https://launchdarkly.com/"},"LaunchDarkly")," or ",(0,r.kt)("a",{parentName:"p",href:"https://unleash.org/"},"UNLEASH"),", that have Golang support \u2014 but this option is expensive, and you have to host a server somewhere to manage your flags."),(0,r.kt)("p",null,"From this starting point, I came up with the idea to create a simple library with only one file in the back end. This file can be stored in different places (AWS S3, GitHub, an HTTP endpoint somewhere, etc.). This is the only thing you have to host \u2014 all the decision logic stands inside the Go module."))}g.isMDXComponent=!0},12785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logo-26e5adbbf02da2d72eb5d51280cc5ba9.png"}}]);