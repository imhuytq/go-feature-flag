"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[44361],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):g(g({},o),e)),t},l=function(e){var o=s(e.components);return n.createElement(c.Provider,{value:o},e.children)},d="mdxType",A={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,f=d["".concat(c,".").concat(u)]||d[u]||A[u]||r;return t?n.createElement(f,g(g({ref:o},l),{},{components:t})):n.createElement(f,g({ref:o},l))}));function f(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,g=new Array(r);g[0]=u;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[d]="string"==typeof e?e:a,g[1]=i;for(var s=2;s<r;s++)g[s]=t[s];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11029:(e,o,t)=>{t.d(o,{o:()=>l});var n=t(87462),a=t(67294),r=t(39960);const g={card:"card_T8mn",link:"link__uSU",header:"header_EM7g",name:"name_PBEk",message:"message_hSnX",badgeSection:"badgeSection_IiLW",badge:"badge_dpyY",badgeInfo:"badgeInfo_BNxt",badgeWarning:"badgeWarning_s94M",socialIcon:"socialIcon_AyL5",logoImg:"logoImg_jwCD"};var i=t(86010),c=t(45697),s=t.n(c);function l(e){const o=e.cards.map(((e,o)=>a.createElement(d,(0,n.Z)({},e,{key:o}))));return a.createElement("div",{className:"grid grid-pad"},o)}function d(e){return a.createElement("div",{className:(0,i.Z)("col-1-3 mobile-col-1-1")},a.createElement(r.Z,{to:e.docLink,className:g.link},a.createElement("div",{className:g.card},a.createElement("div",{className:g.header},a.createElement("span",{className:g.socialIcon},e.logoCss&&a.createElement("i",{className:e.logoCss}),e.logoImg&&a.createElement("img",{src:e.logoImg,className:g.logoImg}))),a.createElement("div",null,a.createElement("p",{className:g.name},e.title)),a.createElement("p",{className:g.message},e.content),a.createElement("div",{className:g.badgeSection},e.badges&&e.badges.map(((e,o)=>a.createElement("span",{className:(0,i.Z)(g.badge,g.badgeInfo),key:e},e))),e.warningBadges&&e.warningBadges.map(((e,o)=>a.createElement("span",{className:(0,i.Z)(g.badge,g.badgeWarning),key:e},e)))))))}l.prototype={cards:s().array.isRequired},d.propTypes={title:s().string.isRequired,badges:s().array,warningBadges:s().array,logoCss:s().string,logoImg:s().string,docLink:s().string}},33866:(e,o,t)=>{t.d(o,{V:()=>c});var n=t(67294),a=t(45697),r=t.n(a),g=t(39960);const i={button:"button_WfGi",linkBox:"linkBox_yNIn"};function c(e){return n.createElement("div",{className:i.linkBox},e.relayproxyLink&&n.createElement(g.Z,{to:e.relayproxyLink},n.createElement("button",{className:i.button},n.createElement("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy")),e.goModuleLink&&n.createElement(g.Z,{to:e.goModuleLink},n.createElement("button",{className:i.button},n.createElement("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module")))}c.prototype={goModuleLink:r().array,relayproxyLink:r().array}},67756:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>C,contentTitle:()=>w,default:()=>v,frontMatter:()=>f,metadata:()=>p,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),r=t(11029),g=t(33866),i=t(24642),c=t(48353),s=t(36812),l=t(7029),d=t(71350),A=t(57085),u=t(61053);const f={sidebar_position:40,description:"How to export evaluation data?"},w="How to export evaluation data",p={unversionedId:"configure_flag/export_flags_usage",id:"version-v1.15.2/configure_flag/export_flags_usage",title:"How to export evaluation data",description:"How to export evaluation data?",source:"@site/versioned_docs/version-v1.15.2/configure_flag/export_flags_usage.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/export_flags_usage",permalink:"/docs/v1.15.2/configure_flag/export_flags_usage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.15.2/configure_flag/export_flags_usage.mdx",tags:[],version:"v1.15.2",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"How to export evaluation data?"},sidebar:"tutorialSidebar",previous:{title:"Scheduled rollout",permalink:"/docs/v1.15.2/configure_flag/rollout/scheduled"},next:{title:"SDKs",permalink:"/docs/v1.15.2/openfeature_sdk/sdk"}},C={},m=[{value:"Available exporters",id:"available-exporters",level:2}],B={toc:m},y="wrapper";function v(e){let{components:o,...t}=e;return(0,a.kt)(y,(0,n.Z)({},B,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-export-evaluation-data"},"How to export evaluation data"),(0,a.kt)("p",null,"GO Feature Flag allows for the collection of flag usage data.\nDuring flag evaluation, the key, flag variation and other non-sensitive information used are collected and cached for a\nconfigurable period of time."),(0,a.kt)("p",null,"The usage data is then written to a file in a chosen format (",(0,a.kt)("inlineCode",{parentName:"p"},"parquet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV"),") at a specified interval and\nexported to your desired location. This provides a single source for easy processing of the data. The feature can be\nconfigured with options for file format, flush interval, and file location."),(0,a.kt)("p",null,"To use, simply configure, use the feature flag as normal, and analyze the collected usage data."),(0,a.kt)("h2",{id:"available-exporters"},"Available exporters"),(0,a.kt)(r.o,{cards:[{logoImg:d.Z,title:"AWS S3",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#s3-1",goModuleLink:"../go_module/data_collection/s3",mdxType:"ConfigCardContent"})},{logoImg:u.Z,title:"AWS SQS",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#sqs",goModuleLink:"../go_module/data_collection/sqs",mdxType:"ConfigCardContent"})},{logoImg:s.Z,title:"Google Storage",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#google-storage-1",goModuleLink:"../go_module/data_collection/google_cloud_storage",mdxType:"ConfigCardContent"})},{logoImg:A.Z,title:"Webhook",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#webhook",goModuleLink:"../go_module/data_collection/webhook",mdxType:"ConfigCardContent"})},{logoImg:c.Z,title:"Local File",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#file-1",goModuleLink:"../go_module/data_collection/file",mdxType:"ConfigCardContent"})},{logoImg:l.Z,title:"Webhook",content:(0,a.kt)(g.V,{relayproxyLink:"../relay_proxy/configure_relay_proxy#log",goModuleLink:"../go_module/data_collection/log",mdxType:"ConfigCardContent"})},{logoImg:i.Z,title:"Custom ...",content:(0,a.kt)(g.V,{goModuleLink:"../go_module/data_collection/custom",mdxType:"ConfigCardContent"})}],mdxType:"Cards"}))}v.isMDXComponent=!0},24642:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,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"},48353:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},36812:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},7029:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/log-36f8c60eb626d8d51f0254752f22e300.png"},71350:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/s3-c5757b62c88da5897cb06dd9d469ec8d.png"},61053:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAEsCAYAAADuCX6GAAAgrUlEQVR4Xu2de5BcVZ3HQ1FF+Yf/bJW1tX/4pyaIypYgCSnRWkVdFBKmZnogC4koJbrL1oouJLgwebGrxfoqSiM+JobKQ9ARQQnTM3kRQNytUMKybDYlqCTzAgIxZdY8IK+793u7f92nT5/ue3vu7T7n3vP9VX1qnpmcmbmf8/uec0/3zJnD8qLWr7rk8g0rL9m9Z+MVv5kc618cBME5+uewWKyc1fo18/vWr1zw1H1rLg1+eOf8YN+Di4IjTy4JpscGng25Ye/I4Hn6v2GxWI4XxEbHhtgb14ZyD82H4Mf3/WzRiVe2lYLXdg4Gr4dMbx98+uXx/utGRgbP1b8Gi8VyrDYMLSgZxBYiwWfGB4KJ0f5gMgSiH9p1TU10dnQWy8FSo/jGtQt1sY2CCxAd3TwSndGdxXKnhocWfLJNx9YxCq6KzujOYjlQLdbYcbQVXO/oqujs6CxWD6oxiicWuyPBjaIzurNY3asOo3grOhJcFZ3RncXqQs0yirdiVoLroqu77hSdxZpFZSy2kEpwVXSJ7uHre7hGZ7ESVkZRvBWZCC6YRGdHZ7EM1aWOrZOp4IJp152is1hzUu+Kd0pXBBdMojO6s7wsRPH1Q/O39UhsoauCC6bozkevsbwoS2ILPRFcUEWfGS/9aro8WGJ0ZxWyerTGjqOnggumjk7RWYWoLu+Kd4oVwQWKzipMNUbxlo/u6jVWBRe0I7C/RnTnGp2Vi5IovmHVAhc6to4Tggvs6KzclHTsitjOdGwdpwQXRHQcg0VH5647y5lyNIq3wknBBV10RneWtXJkV7xTnBZcYHRnWaucRPFW5EJwwdTRKTqrK5VzsYVcCS6oosuBGUZ3Vial3sfedFduxRZyKbgA0fFYdHUzjh2dNasqSMfWybXggim6s6OzElVBxRYKIbhgiu7675PFikqiOMQuQBRvRaEEF9TozjU6q6HUjl1gsYVCCi7oa3SK7nHhr20WOIq3otCCCxLdDzK6+1eedWwdLwQXGN09KrVjeyi24JXgAnfdC1yVP3w//xHPxRa8FFzQo/vkWP9i/Xph5aQ8j+Kt8FpwQaI7RJ8sDzzBI7A5KordFgquMDVaF53R3fHiGjsRFNyAKjp33R0rduyOoOBtMEV3dnRLxY49Kyh4AhjdLRZ3xVNBwTtAj+7cde9iMYpnAgWfBQ2ij5V2saNnWIzimULBU2CK7vr1ykpYjOJdgYJnQE30HZWOzujeQVHsrkLBM0SP7hS9TTGK9wQK3gVU0eX2mn59e1vs2D2FgncRRnelKLYVKHgP8Dq6U2yrUPAeonZ0RPdCi06xnYCCW2CqPFDc6E6xnYKCW6RQonNX3EkouAPou+65En145fwPsmM7CwV3iFztujOK5wIK7iBOR3eKnSsouMM4tevOKJ5LKHgOsNrR2bFzDQXPET0VnWIXAgqeQ1TRM4/uEsXXr6TYBYCC55hMO7p0bIpdKI6/8NCiN1/ZVmq6eEh+SCU6o3jBCH9/mKTBd267+M/PPXDliVe3lyoXR9jJ8Uyi+gVE8kFH0Z1RvCAoQuP1795+cfCNL74vWPPZ9wS3L5sXDH3mguh95Xs+HDx3/5WR4BAeXX26zOieR0R0/B6jjr699HGKXSRUqcO31624KPj3f7ywJvWt182NWH595fVbBt8ZfCEEH4P8P//aB4OnN15x9g+/vDoSvXKhsLvnDVX0qXL/eCT6D4bmv7TlXyl27qhKjZffv+P9wT23XhR85e/fG3XoFUsbpcbbJkT2fyq9I3od/37j2kuDJ4Y/enbfg4uiCC9RHocw9AuKuImIjkQWCS4zP3GYNtH7jhveVevOeNlO6lbIv4fskB4Txb1frkd5XDiQnVE+P0B0Cu4yHURvXdi0mKL8yN2XMcrnDAruGorUs43eWWOO8gujKP/CQ4ujCB/Jzl1556DgtmkRvSFRFtE7azCGL11bkd0U5SE4o7w7UHAbKFL/IOzSvYzeWSKTD2I8d+XdhIL3CkXq7/2LG9E7a8xRvrIrzyhvBwreLXIWvbNG35VHOkFaMUV57PbqFybJBgqeJQWJ3t1AurtEeSQYRvnuQ8HT4uCut+uYojxOUTLKZw8F75DhO83RO6sDJ76h7srjJSZGRvnsoOBJ0A6coEszemdPkl15dHZG+eRQ8FYweluHUT49FFzwfNfbdfQor+/K48Ew8rBXRvk6fgtu8aw3mT2mKK/vyjPKV/BPcEbvwmGK8ngINKO8B4Lru944N83oXVzUKK8esNm27iNn9/70qijK+7QrX0zBGb3J0uYojwldovwzWz5x9sCjlXV7kaN8cQRn9CYxqFEe1wEmfUT5p370sQBRHl29aE9GmVvB9ejNXW/SCaZd+WE1ypcrT1eV9yifL8EZvUkX6CTK4zHueeru7gvO6E16TLso/2I1yudlV945wfXozV1vYpNWUX7Hdy8PEOXR0V2O8m4IzuhNcoAa5dHhJcr/8lsfcjbK2xOc0ZvknHZR/ncPK49xtxjleyY4ozcpMq5G+e4KzuhNPMSlKJ+94IboDakZvYmvtIvy3d6Vz0RwRm9CkmGM8qFDapTP8mGvqQVHhxah0aVFaHZpQtqjRnn1gE2WUX7WguMROnjOazzgHi/V5yWTQcsjegBmK7xf/yYJIRXaRXnZle/0rPysBceT9+M/x38K8MXwQHvEDAwIkQNH/TatXXj0O7dd/CYGe+enLzh529/NOylPnyubEGqEZ9cnxBzl4WmnUT614IgReIwt/hOAh93JTFN5GF7pDID8+3626ASecQMPxH/o6x86Fn6d43iQyN03X3gC8uOb+sLgO04D6f6M+8R31Cgvu/K4I5UkymcieLu4gI+BSP7qM2uoYEI4sLXv5AsPLXoTg33s+5cfhfz42mHn/zPkx9oenV8VX439lJ/4RCdRvuuCx4F/i1kHg5EJ4ODOSvefLA+cqsi/OHjugStPQH6s+aux/89yT13kV6M/5GfsJ0UGZ0nwEsLjesfbcEL9087WBW8Huj7kBzIrRTNTNfbj/0bnh/yYvdD5Ib/E/lU3vvs45K/Em+bYz00/4jIQFiCSAyRZFbyv8rlzX7t96fn/e/v15++47fp5m8Nr/t/+ecncm4Y++56/cVrwVtRif4is+WXDQV6i82PNj6fUlTU/xouxy5ofPyBMABBf1jeM/aRX3A7aCBx16GVzj6sCh2+vF4HvWPbuvx268cJ5qz99wV+tXn3BeXNMlUfBk6DG/lr331np/pAfJ4jU2D9y92W1NT9iP36weuzXd/z1XxghgsjbTmBpMLrAy5fOvUMV+MvXvfcvVIGDIDhHXh8ZGTxXfbupiip4K2TNLxOAiI9JAPLj47LmR+zHU/gg9off83EcQjDFflnzc8ffL9oJLO8TgVcsO/85NUKv+NT5N0DgFTfOez86cCtJ8f5WH0tUvgneDon+suaXnX71Xn+05g9jP273yY4/fn6y5pdfqrrmZ+zPJ+0EjovQEBhr4NgI3e2i4MmR+/xNsX+8cqsPtyhwCAHio/PjoE/4szoO+XGUVw76SORn7LdH0ggdCbxs7mQnEdqpouDpkfv8EvvVW31R7C8PnMJBH8R+dH6cRpKDPoj9mABwIcntDtOOP+XvjDiBGyJ0KPCK6+c9owp8x7J3LZEODIF1b3JTFLy71Hb8W8R+TAqI/djxVw/64F4mjvi2OuiDicD36N9OYD1CRwIvnfeICKxHaGxW6W6gUq+BbRcFtwt+dmrsNx302ffgotqaH8cT1YM+9diPI76VyC8TQJ4P+sR1YD1CR5tYocDLr5+7ThcYHbiVwIUvCu4utdgv5/t31g/6RPKHP3v9fP/wnQsOy4N7ZMffxdgfJ7C8TwRevnTe02oHLkyE7nZR8Pyhxn71fL/c6sP75ME9iP0i/6a7FkZPyCEHfSCXetAn69gfJ7AaoUVg6cAQGLeQKHDKouDFQ271Seyv7fhXu7+c75c1P2K/+uAe9aCPGvvVHX9dYD0+N6yBZROrwwid67WvK0XB/aImf3Xdr57wk9gvB33Q+ZUH97yJJ/WQ2A/JVYFNHbi2ieXqLSQfioIXl4bbd1WhW/2uarF/tH7QR31Mf3S+v/rgHrBn4xW/YYTOQVHw/NIgcPXcfQ08zv7RyrPsRB35/itrTw4w29+XrPmPPLkk+OPjnxvRryWWg0XB3UTvqNKBVYHxMREYJ+ggsJyfx7oaD6DBxpo82y2eOw+f3+4pfpJw+LFrwpd9v9CvJZaDRcHtYYrQ6gEYfLy2Jq52YHm+OxEYv4MNqyrPQQ+J8Vh4AW/j94QnyMTr+NwsBD+065rwa/SP79+9+i369cRyrCh4d9E3tVTwMQgnZ9hVgeUhrCIwfuaQFM/FpQsMuSGx/jsy/b6yEDxKF+WBU+HLyZA9k+WrH5gul74RdvVbpsuDpZkdA++bLve/fe/uwbfq1xurx0XBZ08tRmsdWCI0xMbPBwLjNBq6MATe9b1KB8aDUVSB8TOFuCJxJwLHkaXgQI7eYgcekf3w49dGL7Eph4+FP5djU6N9L4YTwRMyAcyMlW6e3F76uEwATAA9KAo+O3ARA11gOVWGDiwC37fm0uivV0BYPUarAqeVuB1ZC25CX3JA9tdlAgjB65gQqnsLB8PP2ycTwMRoac302MANMgG8vHvR20z3xlkdFgXvHFzAEFkVGD9DiKrKK104iw6cll4IHockHvU2HKTHml5SQHQ7bmvfSUwASABY64f/Zj0mgHDcN2ECmNo+8E5MAHtHBnl/Pa6KLHgtQo82r4PTjBn/HjvVeKindGAXJG6HC4InQZY76gQg8uN1fAzr/ygBjA08q04AL4/3XzdT7v+ATAD6te5l5V1wPRaq62DTTjQ6rzx/NMTXv14S8LWxEYYOrf9cXCUvgrdD/V3r63+kgNeqT70Vft6xyeoGYGUCGFg3NTqwPNoArE4A3qz/XRe8VQcWifFxXLR4EkV9J1q9FywbWdjAwtixZsbX0/+/JFBwN5HEJgkAwtfif5XKBuDAkfDzD2ACKPwdANuCyy9FolnDrSRlJ7qVwLIOlu8B42q3E42X+FwK3vx9+YCc+pPH3UcTAO4AhOB9+BwkAOMdgLH+xbm7A+CC4LITDYElRuNWkr4Tjf9X3YmGxLrAcetgCu634O0w3gGo3v6L7gDsGIw+PlHuP6TfAYg2AKsTANb/zjwSzqbg+EGiGyNCRwIP1Ttwt3aiKTgFnw0NSXO88ig8dH/1DgASgXN3AKwKruxGy060/v9kDQWn4N1CXf+rdwDw4BxMBHIHAAkgfP35ntwBsC14r0Wh4BTcBvo+kyQAuQMgf3wDCWCyegcAD+gx3QHoaAOQgjePKw4b404LBXeXWvwfbX8HoHLbt34HABNAwx2AcAJougNAwZvHFYeNcaeFgucfWf/H3QGYwARQ3QCk4IZxxWFj3Gmh4MVGPSsiCQBdn4IbxhWHjXGnhYL7CQU3jCsOG+NOCwX3EwpuGFccNsadFgruJxTcMK44bIw7LRTcTyi4YVxx2Bh3Wii4n1Bww7jisDHutFBwP6HghnHFYWPcaaHgfkLBDeOKw8a400LB/YSCG8YVh41xp4WC+wkFN4wrDhvjTgsF9xMKbhhXHDbGnRYK7icU3DCuOGyMOy0U3E8ouGFccdgYd1oouJ9QcMO44rAx7rRQcD+h4IZxxWFj3Gmh4H5CwQ3jisPGuNNCwf2EghvGFYeNcaeFgvsJBTeMKw4b404LBfcTCm4YVxw2xp0WCu4nFNwwrjhsjDstFNxPKLhhXHHYGHdaKLifUHDDuOKwMe60UHA/oeCGccVhY9xpoeB+QsEN44rDxrjTQsH9hIIbxhWHjXGnhYL7CQU3jCsOG+NOCwX3EwpuGFccNsadFgruJxTcMK44bIw7LRTcTyi4YVxx2Bh3Wii4n1Bww7jisDHutFBwP6HghnHFYWPcaaHgfkLBDeOKw8a400LB/YSCG8YVh41xp4WC+wkFN4wrDhvjTgsF9xMKbhhXHDbGnRYK7icU3DCuOGyMOy0U3E8ouGFccdgYd1oouJ9QcMO44rAx7rRQcD+h4IZxxWFj3Gmh4H5CwQ3jisPGuNNCwf2EghvGFYeNcaeFgvsJBTeMKw4b404LBfcDuAjwO8b1TcEN44rDxrjTQsGLA3ybrgr8yrZScHDnYHD4sWuCw49fGxzadU1wcMdgdI2Gn3eMghvGFYeNcaeFgueLqAOP1wWGuCLxa+Hb1U59bKJcmglf7pkY7fvF5OjAuqnRgeXT5cHSTLn/A1PbB95JwQ3jisPGuNNCwd1AIrR0YQgMYWsCV5EOPFXum5oeG3hWFfjl8f7rIPB0uf/te3cPvjUIgnPmtCoK3jyuOGyMOy0UvHfIGjiK0eG1UuvAEqHDtyH2ga19J0XgqXL/uC4wOjAE1p1FQWoV/eO1ckHwe269KFi34qJImHu/fHH0tSHiD0L0/zctFJyCZ8FUSG0NHK55X6+ug488uSSSGB+bLA+cCj/vYF3g/vUTo6U14ds3iMAv7170NpOgieRNUjYFx4UG0Z760ceCXd+7PCjf8+Fg5O7Loq+7YVVlTJBIJe0EQMEpeBx6hJYOrMboV7eXKhEaApcH9qkChz/fmya3lz4uAu8dGTxP9w6VicBxZVNwID9ESIPX8bXwNV94aHGw96dXBc9s+cRZTAAQ6pff+lDDBABZITxES5oAKDgFb4rQO+oRGvJiTYz34XMhcHidPB924ycmy1c/IB0YAs/sGHhfqw6MavX+npZtwVVk5kT8kdsA+AXUQOwJP4aLVJ8Atq37yFmZADbdtTCSGOOE8JBfJgCRkoI3f19FAteJRGh0W0gru9B4ifcjQofr3iOtOjAExkbW/t2r36J7k5tySfAkNMy+ygQQpYDwbYxHJoDn7r8yeHrjFWefGP7oWZkAMGZAwZu/r7xQawRKB8YaWL2VhFgNgSfK/YemRvteVDvwzFjp5smx/sXSgUXgnkTmXlfeBG+H+otXJwBZAsiFjYsc49b/fVJEcKQC/efiKnkTXE1xcitJui9khsDRBF0VOIzNv4bA0+XSN1SB0YFHRgbP1a97b6pIgsehTgBpxqwK3sn63yauCY6fv6yBEaHVW0nKJhY4Fn7+AVXgidG+W1SBW91KYs3xS/CswPf7YrgEkPW/3AH4+dc+WL8DMFRf/2d1ByANvRS8NpGOViZDWQOru9B4vfJ5A0fCl5Mhe0Rg9TRWnMCFi9RZFwWfHbL+Q3yU9T9+Dvh5QH51AxATgH4HAILLHQB9AsDHsp4AshZcklDtXrBsYlXlhdDRRlYocPj5ByCwnMZCB1YFzvUmlutFwbNBuhbQNwDlDgCESHoHQCYA9Q5AmgSQteCyz4HTWI3nofvX6+eh4zowu3AXi4L3Dul6rSaAuDsAmADuW3NpbQJQ1/96Amj1+8pC8GiHOhRaPY3VbiOLAlssCu4OpglAvQMgEwBu8akTgLr+37i2MgHg96PGf0wE+FgWgmMjDOtl/VpiOVgUPB9I/K9NAIr8mAyiuBz+Ln73cOMEoG4AAnw8teDhOhtxXL+WWA4WBS8OMgE0xX8lAXR8///RqyMObF0cHHjkqgjch6bgOSkK7geR/Ib3R1QlnthaEThi66IzeInTYDM7P/UGOPjEzcHhPUNHjzz71aNH/+ebfzqzf+OG4MCmodMT9y8NJjZ/LJjYckHw+01/yTW3Q0XBPaLaiSsiX1mROAQfm9625NSrj3/+xOtPffH4H//ztrMVib9+8o3f3huc+v19b5x+adObZ/ZvCc5O3H8GBFMPBMFrDwbBwZEgmPlJgLfxOadf2nww/Ly94es7Wk0A+jXI6mJR8AIhcVq6MCSuioxODIlf2fXZABIf3nNH8H/P3nUWnfiNF75/4s0XhyNBqwJD5AhIDUJx8XEDeP/m8HM2h5+/JRI9eOWnFfFV2k0AB7bcqE4ArR5eyZpFUfB8Ea2ha3EaAlfjdNiZJU7XJR46WpE47MShxNVOHJw5sOWUKrJIXBFZFzgbGiYAdHyZBJACwtfxsdOGCeDUS5vv0ieAdrfkWFpRcAeRTa1oY6vehUG0iRZKjDh96Kkv1dbEx/beE4jEisBKN5YuLDRLaI9Q/ij+YwL4cWUCEPljlgANE8BLm/+aewBaUXBLaDvT9W7cdxJRembHpwJZEyNOQ+ITe799TF0Tq1E6WZzOK9UlwH5tAtCWAJWfC5cADUXBu4hpdxo8WtnUkp1pidNHn7s7iCRGJ/7DfU1RGh2uuBKno+0SIHzZyRKgUBMABU9JU5yWNfGiM9Pj1zbFaWxqSZzGBRcJa1gTuxun80iyJQAm1bYTQB6XABQ8AaY4rexMS5zG7SV9Z1pZEzdF6W5uapFOSLAECN932pAAwtfXhq9/Tp0AnHp0HAXvbx2lqwc9RGI56BFJXI3TENgUpxslZhfOP7IEqE4A2hIA7z9tmABO7d/01dMyAdhYAngleMxBD1kTqwc9EKdNBz3UNTGjtO+o5wB+XD8LIPLj9cpdAHxu6wmgmgAyvQ1YOMGrBz30+8RRJw7XxM2ntdIe9CAkjgRLgHASOG1IAKmXAHkTXA56NK6JIXH8QQ+RmGti4h7aBJBiCdAwATgpeNPOdGcHPaIZ03CLqR6l2Y1Jvmi5BKieBMT7cJ2rE8AfH//ciD3BlS7cGKf7TkadONVBj+YfECHFA9LLtb85gBvY/I2Wn08uiR63313BW+xO433ND35oPuhxmmtiQhqobvRGwBEkVzRAeATnpFFG3oVvZyJ4XeJqF1Yk1uO07EzLQQ9TnG7cmabIxGewQVeRGi+xj4RGCJ+QchsOWMFFrcmmFlzuD8vtJXkYYiRxNU4rm1pNxy7lm2j+xgjxlXr0xtvwCE7BMdwJqjRR7EstbhJaZ9aC45k78e92bQhnkV99JTj22+H67l/4knGakOR0Gr2TMmvBRfLvLL8werreLV/5SCT7b7cPBX96/rvRgOWMLze+CNFJF72TkkpwVXRIDtkBvt4j6/qDZx7+YvDq09+MZqRoaz/aymdHJ76SXfROSiaC6+Avb0D0b9/67kj+n33zk8F//OQf6lFebuZHN+8pOyku3YreSemK4CryFzggO558n1GeFJv20btylDp99E5K1wVXSRTlq7JXH6BPSA7offROSk8F12GUJ3nFdvROilXBVSA7IjyjPHETt6J3UpwRXEWiPGQH+HvaiPL/9cit3JUnPcTd6J0UJwXXUaM8XmeUJ92iXfTGYy5cid5JyYXgKujuEuVNB2yih9QxypPE5DN6JyV3gquoUR4d/r41lwaP3ltilCcx5D96JyXXgutwV560omjROymFElwlble+HuV/zChfSIodvZNSWMFVTFFe3ZXHBcEoXwTqUuNtc/S+qhDROyleCK4TH+Urf/6GsrtPfPSuPwGJfvH7gJeCq6hRvv2uPKO8GzB6d4L3gquYory6K48LjFHeBh3senvaqVtBwduAp6VqH+Uru/KUPXvio3cxd72zhoInhFG+25ijN57nj9F79lDwWcAonxVq9K48r3fL6G24eEk8FDwD1CiPtxnlW9MueuOv1vi+6501FDxj1CiPZ7JpH+X9kN0UvU273pQ6eyh4F+k8yjfLkU/UAycx0ZtSdxUK3kPio3x+D9gwersJBbdEZ7vyLsreftcbO92M3vah4A6QKMrLk1FGt+BsCc/onTcouIPIM8+6EeXrt7IYvfMHBXeczqJ8Nht1jN7FYc7wnQsO40kN9QuLuEeiKC+78h1F+ZjoLX8ni9E7N+A472s7B4M5G1bOf2Tj2ksD8MOh5ouKuEu6XXlG7yICsV8PxYbc02MDv56DGh5a8MkNKy/ZjY6wce1Cip5DEkX56H67OXrzwEm+EbEBxH55vP+6SG61KHoxaBXlITujd7FQxQ5f3wOxR0YGz9Xdbqj1a+b31UVndM87IvtwKP4LD4Uyb2WXzjsNHXv74NMQe+/I4Hm6y22rsaNT9DyD9Tp+h797+OpgOlxj6xcMyQcmsWM7dlw1dnRG9zxCwfNNV8TWC6KvX7ngKXb0/EHB84mIfWjXNbOP4p0Wo3v+oOD5Qu5jq2Jn3rHjiptx+YGC5wMRu3q769mQG7reseNqw9CCEqO721Bwt2mI4q6IrRc7urtQcDdp6Ni2oninRdHdg4K7hZNRvNNidHcHCu4GDZtneRVbL3Z0+1Bwu+i74oUQWy/eR7cHBbdDITt2uwqC4BxG995DwXuLd2KbitG9d1Dw3qCL3ZOTZ64Xo3v3oeDdRRfby47drhjduwsF7w4msffvXv0W/fpmVUtEZ3TPFgqeLV7sine7GN2zg4Jng6ljU+wUVYvuqxbswQVK0WcHBU+HKvbM2MDzU+WBmxjFMyycz5U1OkXvHAo+O0wdm2J3ubgZ1zkUvDNMYjOK97DQ0UPJlyC6U/R4KHgyGMUdK0b3ZFDw9pg6NsV2rCh6ayi4GVPHZhR3uNToTtHrUPBGTGKzY+eoaqKzo0dQ8AqM4gUs7rpTcIh9kLvixS3fo7uvgjOKe1a+RnffBBexDz9Gsb0s9dFrPojui+Ds2KyG8iW6F11wdmxW24pEX7VgWVE7elEFl80zis1KVEV99FrRBFd3xSk2q+MqWnQviuBqxw6/j33RybPdg2/Vf38sVqKqRfeci553wRnFWV0tU0cfNojkKnkVnFGc1dPSRcfpuDyInjfBTVGcYrN6VqtXX3CeHt1dFj0vgutRfGasdDPX2CxrpXd0V0V3XXBdbHZsllMlog8PXfKMi5txrgquR3F2bJbT5Wp0d01wU8em2KzclGvR3RXBTWIzirNyW3IfXY3uNkS3LTijOKvQJdFdRO/17TVbglNsllelR/deiW5DcN7HZnlbenTvtui9Epwdm8VSCtF9eGjBZ7otei8Ep9gsVovq9u21bgqui80ozmK1qG5F96wFZxRnsVKUKbrr0nZCloJTbBYro9Kj+2xFz0JwXWxGcRYro0p7H322gqtRfGq078WJ0b5b2LFZrC6VRPcfDr3/vzvZjJuN4GrHptgsVg+r0+jeieB6FKfYLJalSrrrnkTwgzsoNovlZKnRfdNdC5s6ejvBucZmsXJSps24VoKzY7NYOS1d9A2rFtQEf50dm8UqRqnRfeTuy4JXtpUoNotVtJKHqfJhm37V/wO5GCF0wGBP3wAAAABJRU5ErkJggg=="},57085:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/webhook-d76efdb9a6df32fc3dc653a1d61e7a89.png"}}]);