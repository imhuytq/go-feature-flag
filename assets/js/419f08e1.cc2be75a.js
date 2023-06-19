"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[29441],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),y=n,d=p["".concat(u,".").concat(y)]||p[y]||f[y]||o;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function f(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=f(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=d({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),m=(()=>{const e=u??p;return y({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var m=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),f=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==i&&(p(t),u(r))},y=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:y,onClick:f},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function k(e){const t=(0,m.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},81875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},u=void 0,s={permalink:"/blog/2023/04/12/relay_proxy_api_keys",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-04-12-relay_proxy_api_keys/index.mdx",source:"@site/blog/2023-04-12-relay_proxy_api_keys/index.mdx",title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"feature flag",permalink:"/blog/tags/feature-flag"},{label:"relay-proxy",permalink:"/blog/tags/relay-proxy"}],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},prevItem:{title:"Enhancing Flag Configuration with Flag Metadata",permalink:"/blog/2023/06/09/flag-metadata"},nextItem:{title:"Feature Flag best practice",permalink:"/blog/feature-flag-best-practice"}},c={authorsImageUrls:[void 0]},p=[{value:"Limiting Access with API Keys",id:"limiting-access-with-api-keys",level:2},{value:"Using Client API Keys with Openfeature Providers",id:"using-client-api-keys-with-openfeature-providers",level:2},{value:"Conclusion",id:"conclusion",level:2}],f={toc:p},y="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(y,(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"security",src:a(25914).Z,width:"1000",height:"682"})),(0,n.kt)("p",null,"GO Feature Flag Relay Proxy is a powerful tool that enables you to evaluate your feature flags without deploying code changes.\nIt allows you to test and roll out new features to your users gradually, and to monitor the performance of your code in real-time."),(0,n.kt)("p",null,"With the recent release of version ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.7.0"),", GO Feature Flag Relay Proxy introduces a new feature that enhances the\nsecurity of your feature flag evaluations.\nThis new feature allows you to control who can access your relay proxy by configuring API Keys."),(0,n.kt)("h2",{id:"limiting-access-with-api-keys"},"Limiting Access with API Keys"),(0,n.kt)("p",null,"With the release of GO Feature Flag Relay Proxy version ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.7.0"),", you can now limit access to the relay proxy by configuring API Keys.\nThis feature allows you to restrict access to only known clients, adding an additional layer of security to your feature flag evaluations."),(0,n.kt)("p",null,"To enable this feature, you need to add a list of API Keys to your configuration.\nOnly requests with these API Keys will be accepted. This means that any requests without a valid API Key will be rejected."),(0,n.kt)("p",null,"In your ",(0,n.kt)("strong",{parentName:"p"},"relay proxy")," configuration file it will look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\n# List of authorized API keys.\n# Each request will need to provide one of authorized key inside Authorization header with format Bearer <api-key>.\n# There will be no authorization when this config is not configured.\napiKeys:\n  - 6147795c-4438-44f1-8ab2-18cb3fa9591f # apiKey for client 1\n  - 3e3fb534-c8fd-42e9-8f2e-c80276b1685c # apiKey for client 2\n  - 6603f9f8-2871-4149-81e8-8a362a8ae266 # apiKey for client 3\n  - 0fc30ffe-b9bc-4398-a9f1-6f8b8486e8ce # apiKey for client 4\n  - 500d222e-2654-41a4-bd31-e24a629cb78a # apiKey for client 5\n\n# ...\n")),(0,n.kt)("h2",{id:"using-client-api-keys-with-openfeature-providers"},"Using Client API Keys with Openfeature Providers"),(0,n.kt)("p",null,"If you are using Open Feature and our providers, we have updated them to handle the ",(0,n.kt)("inlineCode",{parentName:"p"},"apiKey")," for you.\nYou can now specify your ",(0,n.kt)("inlineCode",{parentName:"p"},"apiKey")," directly when you are initializing your provider. This will authenticate every request\nto the relay proxy with this apiKey."),(0,n.kt)("p",null,"To use this feature, you need to specify the client API Key in your Open Feature provider initialization.\nThis can be done by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"apiKey")," like this:"),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"go",label:"GO",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'provider, err := gofeatureflag.NewProvider(gofeatureflag.ProviderOptions{\n  //...\n  APIKey:   "6147795c-4438-44f1-8ab2-18cb3fa9591f",\n})\n'))),(0,n.kt)(l.Z,{value:"dotnet",label:".NET",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dotnet"},'GoFeatureFlagProviderOptions options = new GoFeatureFlagProviderOptions{\n    // ...\n    ApiKey = "6147795c-4438-44f1-8ab2-18cb3fa9591f"\n  }\n\nGoFeatureFlagProvider authenticatedProvider = new GoFeatureFlagProvider(options);\n'))),(0,n.kt)(l.Z,{value:"java",label:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'GoFeatureFlagProviderOptions options =\n      GoFeatureFlagProviderOptions.builder()\n      .apiKey("6147795c-4438-44f1-8ab2-18cb3fa9591f")\n      .endpoint(relayProxyAuthenticatedEndpoint)\n      .build();\n\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n'))),(0,n.kt)(l.Z,{value:"javascript",label:"JS / TS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const goFeatureFlagProvider = new GoFeatureFlagProvider({\n  // ...\n  apiKey: '6147795c-4438-44f1-8ab2-18cb3fa9591f'\n});\n")))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The new feature of GO Feature Flag Relay Proxy 1.7.0 allows you to limit access to your relay proxy by configuring API Keys."),(0,n.kt)("p",null,"This adds an extra layer of security to your feature flag evaluations, ensuring that only known clients can access your relay proxy."),(0,n.kt)("p",null,"This feature is easy to configure and can be set up in a matter of minutes, giving you peace of mind knowing that your feature flags are secure."))}d.isMDXComponent=!0},25914:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20945235-e99155028d107342da6c9cac92235b61.png"}}]);