"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7370],{30433:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(67294),n=t(34334);const l={tabItem:"tabItem_Ymn6"};function o(e){var r=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:t},r)}},65559:(e,r,t)=>{t.d(r,{Z:()=>f});var a=t(87462),n=t(67294),l=t(34334),o=t(63735),i=t(38224),u=t(5730);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var r=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,p=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var r=e.currentTarget,t=p.indexOf(r),a=c[t].value;a!==i&&(m(r),u(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var a,n=p.indexOf(e.currentTarget)+1;t=null!=(a=p[n])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;t=null!=(l=p[o])?l:p[p.length-1]}null==(r=t)||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:function(e){return p.push(e)},onKeyDown:d,onClick:f},o,{className:(0,l.Z)("tabs__item",s.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===r})}),null!=t?t:r)})))}function p(e){var r=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var o=l.find((function(e){return e.props.value===a}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})})))}function m(e){var r=(0,i.Y)(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",s.tabList)},n.createElement(c,(0,a.Z)({},e,r)),n.createElement(p,(0,a.Z)({},e,r)))}function f(e){var r=(0,u.Z)();return n.createElement(m,(0,a.Z)({key:String(r)},e))}},38224:(e,r,t)=>{t.d(r,{Y:()=>m});var a=t(67294),n=t(16550),l=t(34423),o=t(20636),i=t(99200);function u(e){return function(e){var r,t;return null!=(r=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function s(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:u(t);return function(e){var r=(0,o.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function c(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,t=void 0!==r&&r,o=e.groupId,i=(0,n.k6)(),u=function(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:o});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var r=new URLSearchParams(i.location.search);r.set(u,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[u,i])]}function m(e){var r,t,n,l,o=e.defaultValue,u=e.queryString,m=void 0!==u&&u,f=e.groupId,d=s(e),w=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var n=null!=(r=a.find((function(e){return e.default})))?r:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:d})})),v=w[0],y=w[1],b=p({queryString:m,groupId:f}),h=b[0],g=b[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),t=(0,i.Nk)(r),n=t[0],l=t[1],[n,(0,a.useCallback)((function(e){r&&l.set(e)}),[r,l])]),x=k[0],C=k[1],O=function(){var e=null!=h?h:x;return c({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){O&&y(O)}),[O]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!c({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),g(e),C(e)}),[g,C,d]),tabValues:d}}},6227:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>w,toc:()=>y});var a=t(87462),n=t(63366),l=(t(67294),t(3905)),o=t(65559),i=t(30433),u=t(14563);const s="import { Actor } from 'apify';\nimport { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n",c="import { Actor } from 'apify';\nimport { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n",p="import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\nimport { Actor } from 'apify/src';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n";var m=["components"],f={id:"crawl-sitemap",title:"Crawl a sitemap"},d=void 0,w={unversionedId:"examples/crawl-sitemap",id:"version-3.1/examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap.",source:"@site/versioned_docs/version-3.1/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/sdk/js/docs/examples/crawl-sitemap",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1689869902,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/sdk/js/docs/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/sdk/js/docs/examples/crawl-some-links"}},v={},y=[],b={toc:y},h="wrapper";function g(e){var r=e.components,t=(0,n.Z)(e,m);return(0,l.kt)(h,(0,a.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},s)),(0,l.kt)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},c)),(0,l.kt)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(u.Z,{className:"language-js",mdxType:"CodeBlock"},p))))}g.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),s=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||l;return t?a.createElement(d,o(o({ref:r},c),{},{components:t})):a.createElement(d,o({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);