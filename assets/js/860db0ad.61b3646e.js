"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{30433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(63735),u=r(38224),i=r(5730);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,c=e.tabValues,p=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==u&&(m(t),i(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=p.indexOf(e.currentTarget)+1;r=null!=(n=p[a])?n:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;r=null!=(l=p[o])?l:p[p.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return p.push(e)},onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",s.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function p(e){var t=e.lazy,r=e.children,n=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function m(e){var t=(0,u.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",s.tabList)},a.createElement(c,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},38224:(e,t,r)=>{r.d(t,{Y:()=>m});var n=r(67294),a=r(16550),l=r(34423),o=r(20636),u=r(99200);function i(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:i(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,u=(0,a.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(u.location.search);t.set(i,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[i,u])]}function m(e){var t,r,a,l,o=e.defaultValue,i=e.queryString,m=void 0!==i&&i,d=e.groupId,f=s(e),w=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),v=w[0],y=w[1],b=p({queryString:m,groupId:d}),h=b[0],k=b[1],g=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=g[0],x=g[1],q=function(){var e=null!=h?h:C;return c({value:e,tabValues:f})?e:null}();return(0,n.useLayoutEffect)((function(){q&&y(q)}),[q]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),x(e)}),[k,x,f]),tabValues:f}}},32734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>k,frontMatter:()=>d,metadata:()=>w,toc:()=>y});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(65559),u=r(30433),i=r(14563);const s="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n",c="import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n",p="import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n";var m=["components"],d={id:"crawl-all-links",title:"Crawl all links on a website"},f=void 0,w={unversionedId:"examples/crawl-all-links",id:"examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the enqueueLinks() method to add new links to the RequestQueue as the crawler navigates from page to page. If only the",source:"@site/../docs/examples/crawl_all_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/sdk/js/docs/next/examples/crawl-all-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1687464155,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"docs",previous:{title:"Cheerio crawler",permalink:"/sdk/js/docs/next/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/sdk/js/docs/next/examples/crawl-multiple-urls"}},v={},y=[],b={toc:y},h="wrapper";function k(e){var t=e.components,r=(0,a.Z)(e,m);return(0,l.kt)(h,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method to add new links to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")," as the crawler navigates from page to page. If only the\nrequired parameters are defined, all links will be crawled."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},s)),(0,l.kt)(u.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},c)),(0,l.kt)(u.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},p))))}k.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);