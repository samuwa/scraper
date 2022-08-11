"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r,o=e.lazy,m=e.block,d=e.defaultValue,f=e.values,w=e.groupId,y=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),x=k.tabGroupChoices,C=k.setTabGroupChoices,O=(0,n.useState)(g),T=O[0],P=O[1],U=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var j=x[w];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&P(j)}var E=function(e){var t=e.currentTarget,r=U.indexOf(t),a=h[r].value;a!==T&&(N(t),P(a),null!=w&&C(w,String(a)))},L=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=U.indexOf(e.currentTarget)+1;r=null!=(a=U[n])?a:U[0];break;case"ArrowLeft":var l,o=U.indexOf(e.currentTarget)-1;r=null!=(l=U[o])?l:U[U.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return U.push(e)},onKeyDown:L,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,n.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},43234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=r(65488),i=r(85162),s=r(41435);var u=["components"],c={id:"crawl-sitemap",title:"Crawl a sitemap"},p=void 0,m={unversionedId:"examples/crawl-sitemap",id:"version-3.0/examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap.",source:"@site/versioned_docs/version-3.0/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/apify-sdk-js/docs/examples/crawl-sitemap",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1660220504,formattedLastUpdatedAt:"Aug 11, 2022",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/apify-sdk-js/docs/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/apify-sdk-js/docs/examples/crawl-some-links"}},d={},f=[],w={toc:f};function y(e){var t=e.components,r=(0,n.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n")),(0,l.kt)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n")),(0,l.kt)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\nimport { Actor } from 'apify/src';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n"))))}y.isMDXComponent=!0}}]);