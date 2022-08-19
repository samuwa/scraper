"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const m="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,d=e.defaultValue,h=e.values,f=e.groupId,y=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=w.find((function(e){return e.props.default})))?void 0:n.props.value)?t:w[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),C=g.tabGroupChoices,x=g.setTabGroupChoices,q=(0,r.useState)(b),N=q[0],T=q[1],E=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=C[f];null!=A&&A!==N&&k.some((function(e){return e.value===A}))&&T(A)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==N&&(O(t),T(a),null!=f&&x(f,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;n=null!=(l=E[i])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},y)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:L,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(w.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},14959:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(39960),l=n(74477),i=n(52263);const o=function(e){var t=e.to,n=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?a.createElement(r.default,{to:"/api/"+t},n):a.createElement(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},n)}},43310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>w,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),s=n(41435),u=n(14959);var m=["components"],p={id:"crawl-relative-links",title:"Crawl a website with relative links"},c=void 0,d={unversionedId:"examples/crawl-relative-links",id:"version-3.0/examples/crawl-relative-links",title:"Crawl a website with relative links",description:"When crawling a website, you may encounter different types of links present that you may want to crawl.",source:"@site/versioned_docs/version-3.0/examples/crawl_relative_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/apify-sdk-js/docs/examples/crawl-relative-links",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1660901114,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"docs",previous:{title:"Crawl multiple URLs",permalink:"/apify-sdk-js/docs/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/apify-sdk-js/docs/examples/crawl-single-url"}},h={},f=[],y={toc:f};function w(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When crawling a website, you may encounter different types of links present that you may want to crawl.\nTo facilitate the easy crawling of such links, we provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method on the crawler context, which will\nautomatically find links and add them to the crawler's ",(0,l.kt)(u.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")),"."),(0,l.kt)("p",null,"We provide 3 different strategies for crawling relative links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#All",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"All"))," which will enqueue all links found, regardless of the domain they point to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameHostname",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameHostname"))," which will enqueue all links found for the same hostname (regardless of any subdomains present)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(u.Z,{to:"core/enum/EnqueueStrategy#SameSubdomain",mdxType:"ApiLink"},(0,l.kt)("inlineCode",null,"SameSubdomain"))," which will enqueue all links found that have the same subdomain and hostname. This is the default strategy.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For these examples, we are using the ",(0,l.kt)(u.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", however\nthe same method is available for both the ",(0,l.kt)(u.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"\nand ",(0,l.kt)(u.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", and you use it\nthe exact same way.")),(0,l.kt)(i.Z,{groupId:"enqueue_strategy",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"all",label:"All Links",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Any urls found will be matched by this strategy, even if they go off of the site you are currently crawling.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'all' will enqueue all links found\n            // highlight-next-line\n            strategy: 'all',\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n")),(0,l.kt)(o.Z,{value:"same_hostname",label:"Same Hostname",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will match relative urls, urls that point to the same\nfull domain or urls that point to any subdomain of the provided domain."),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"https://example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example")," will all be matched by this strategy.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-subdomain' will enqueue all links found that are on the same hostname\n            // as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-hostname'\n            // strategy: 'same-hostname',\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n")),(0,l.kt)(o.Z,{value:"same-subdomain",label:"Same Subdomain",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This is the default strategy when calling ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"),", so you don't have to specify it.")),(0,l.kt)("admonition",{title:"Example domains",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For a url of ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," will only match relative urls or urls that point to the same\nfull domain."),(0,l.kt)("p",{parentName:"admonition"},"For instance, hyperlinks like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://subdomain.example.com/some/path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"/absolute/example")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./relative/example"),"\nwill all be matched by this strategy, while ",(0,l.kt)("inlineCode",{parentName:"p"},"https://other-subdomain.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://otherexample.com")," will not.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-subdomain' will enqueue all links found that are on the same subdomain and hostname\n            // as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-subdomain'\n            // strategy: 'same-subdomain',\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n"))))}w.isMDXComponent=!0}}]);