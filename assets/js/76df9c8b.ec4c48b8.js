"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6344],{63568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"crawl-all-links",title:"Crawl all links on a website"},s=void 0,u={unversionedId:"examples/crawl-all-links",id:"version-2.3/examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the Apify.enqueueLinks() method to add new links to the RequestQueue as the crawler navigates",source:"@site/versioned_docs/version-2.3/examples/crawl_all_links.md",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/sdk/js/docs/2.3/examples/crawl-all-links",draft:!1,editUrl:"https://github.com/apify/apify-sdk-js/edit/master/website/versioned_docs/version-2.3/examples/crawl_all_links.md",tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1698075636,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"version-2.3/docs",previous:{title:"Cheerio crawler",permalink:"/sdk/js/docs/2.3/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/sdk/js/docs/2.3/examples/crawl-multiple-urls"}},p={},c=[],d={toc:c},f="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"Apify.enqueueLinks()")," method to add new links to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")," as the crawler navigates\nfrom page to page. If only the required parameters are defined, all links will be crawled."),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestQueue\n    const requestQueue = await Apify.openRequestQueue();\n    // Define the starting URL\n    await requestQueue.addRequest({ url: 'https://apify.com/' });\n    // Function called for each URL\n    const handlePageFunction = async ({ request, $ }) => {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await Apify.utils.enqueueLinks({\n            $,\n            requestQueue,\n            baseUrl: request.loadedUrl,\n        });\n    };\n    // Create a CheerioCrawler\n    const crawler = new Apify.CheerioCrawler({\n        requestQueue,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestQueue\n    const requestQueue = await Apify.openRequestQueue();\n    // Define the starting URL\n    await requestQueue.addRequest({ url: 'https://apify.com/' });\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await Apify.utils.enqueueLinks({\n            page,\n            requestQueue,\n        });\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PuppeteerCrawler({\n        requestQueue,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("p",null,"\\\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestQueue\n    const requestQueue = await Apify.openRequestQueue();\n    // Define the starting URL\n    await requestQueue.addRequest({ url: 'https://apify.com/' });\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await Apify.utils.enqueueLinks({\n            page,\n            requestQueue,\n        });\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PlaywrightCrawler({\n        requestQueue,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")))}m.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);