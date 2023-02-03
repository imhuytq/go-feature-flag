"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8240],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),f=n,d=p["".concat(i,".").concat(f)]||p[f]||g[f]||o;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},41320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",authors:["thomaspoignant"],tags:["GO Feature Flag","Openfeature","Podcast"]},s=void 0,l={permalink:"/blog/2022/07/01/feature-flags-devobs-podcast",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/blog/2022-07-01-feature-flags-devobs-podcast/index.md",source:"@site/blog/2022-07-01-feature-flags-devobs-podcast/index.md",title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",description:"Earlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative OpenFeature.",date:"2022-07-01T00:00:00.000Z",formattedDate:"July 1, 2022",tags:[{label:"GO Feature Flag",permalink:"/blog/tags/go-feature-flag"},{label:"Openfeature",permalink:"/blog/tags/openfeature"},{label:"Podcast",permalink:"/blog/tags/podcast"}],readingTime:.35,hasTruncateMarker:!1,authors:[{name:"Thomas Poignant",title:"GO Feature Flag owner",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"\ud83d\udd0a Feature Flags in Dev\u2019Obs Podcast \ud83c\uddeb\ud83c\uddf7",authors:["thomaspoignant"],tags:["GO Feature Flag","Openfeature","Podcast"]},prevItem:{title:"\ud83d\ude80 Announcing GO Feature Flag v1.0.0",permalink:"/blog/2023/02/01/introducing-v1.0.0"},nextItem:{title:"Automate Your Product Release Cycles Using Go Feature Flag",permalink:"/blog/automate-your-product-release-cycles-using-go-feature-flag"}},i={authorsImageUrls:[void 0]},u=[],c={toc:u},p="wrapper";function g(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(71441).Z,width:"1400",height:"933"})),(0,n.kt)("p",null,"Earlier this week the super cool podcast Dev\u2019Obs asked me to talk about feature flags, go-feature-flag and also the super nice initiative OpenFeature."),(0,n.kt)("p",null,"The podcast is in French \ud83c\uddeb\ud83c\uddf7 (yes I know sorry\u2026) but you can learn a lot of cool things, when to use them, what is OpenFeature about and all the cool things that the feature flags can bring to your developer experience."),(0,n.kt)("p",null,"Listen it here: ",(0,n.kt)("a",{parentName:"p",href:"https://www.listennotes.com/podcasts/devobs/devobs-24-feature-flags-rknRoFGL7N5/"},"https://www.listennotes.com/podcasts/devobs/devobs-24-feature-flags-rknRoFGL7N5/")))}g.isMDXComponent=!0},71441:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/devobs-d52cbdd84643dd3ff2668f65eed0f26b.jpg"}}]);