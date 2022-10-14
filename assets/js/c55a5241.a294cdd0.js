"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],s={},i=void 0,p={unversionedId:"readme/overview",id:"version-2.3/readme/overview",title:"overview",description:"Overview",source:"@site/versioned_docs/version-2.3/readme/overview.md",sourceDirName:"readme",slug:"/readme/overview",permalink:"/docs/2.3/readme/overview",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1665762897,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{}},c={},u=[{value:"Overview",id:"overview",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Apify SDK is available as the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify"))," NPM package and it provides the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/cheerio-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," - Enables the parallel crawling of a large\nnumber of web pages using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"cheerio")," HTML parser. This is the most\nefficient web crawler, but it does not work on websites that require JavaScript.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/puppeteer-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," - Enables the parallel crawling of\na large number of web pages using the headless Chrome browser and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer"),".\nThe pool of Chrome browsers is automatically scaled up and down based on available system resources.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/playwright-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler"))," - Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),"\nyou can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," to manage almost any headless browser.\nIt also provides a cleaner and more mature interface while keeping the ease of use and advanced features.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/basic-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"BasicCrawler"))," - Provides a simple framework for the parallel\ncrawling of web pages whose URLs are fed either from a static list or from a dynamic queue of URLs. This class\nserves as a base for the more specialized crawlers above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/request-list",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestList"))," - Represents a list of URLs to crawl.\nThe URLs can be passed in code or in a text file hosted on the web. The list persists its state so that crawling\ncan resume when the Node.js process restarts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," - Represents a queue of URLs to crawl,\nwhich is stored either on a local filesystem or in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify Cloud"),". The queue is used\nfor deep crawling of websites, where you start with several URLs and then recursively follow links to other pages.\nThe data structure supports both breadth-first and depth-first crawling orders.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/dataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Dataset"))," - Provides a store for structured data and enables their export\nto formats like JSON, JSONL, CSV, XML, Excel or HTML. The data is stored on a local filesystem or in the Apify Cloud.\nDatasets are useful for storing and sharing large tabular crawling results, such as a list of products or real estate offers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," - A simple key-value store for arbitrary data\nrecords or files, along with their MIME content type. It is ideal for saving screenshots of web pages, PDFs\nor to persist the state of your crawlers. The data is stored on a local filesystem or in the Apify Cloud.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/autoscaled-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," - Runs asynchronous background tasks,\nwhile automatically adjusting the concurrency based on free system memory and CPU usage. This is useful for running\nweb scraping tasks at the maximum capacity of the system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/api/puppeteer",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Browser Utils"))," - Provides several helper functions useful\nfor web scraping. For example, to inject jQuery into web pages or to hide browser origin."))),(0,o.kt)("p",null,"Additionally, the package provides various helper functions to simplify running your code on the Apify Cloud and thus\ntake advantage of its pool of proxies, job scheduler, data storage, etc.\nFor more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK Programmer's Reference"),"."))}d.isMDXComponent=!0}}]);