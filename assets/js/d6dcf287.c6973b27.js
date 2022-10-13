"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,w=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(w,s(s({ref:t},p),{},{components:r})):a.createElement(w,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],l={id_old:"version-1.3-basic-crawler",title:"Basic crawler",id:"basic-crawler"},o=void 0,c={unversionedId:"examples/basic-crawler",id:"version-1.3/examples/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the",source:"@site/versioned_docs/version-1.3/examples/basic_crawler.md",sourceDirName:"examples",slug:"/examples/basic-crawler",permalink:"/docs/1.3/examples/basic-crawler",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1665666608,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id_old:"version-1.3-basic-crawler",title:"Basic crawler",id:"basic-crawler"},sidebar:"version-1.3/docs",previous:{title:"Add data to dataset",permalink:"/docs/1.3/examples/add-data-to-dataset"},next:{title:"Call actor",permalink:"/docs/1.3/examples/call-actor"}},p={},u=[],d={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/basic-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"BasicCrawler")),". You probably don't need to go this deep though, and it would be better to start with one of the full\nfeatured crawlers like ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/cheerio-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," or\n",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/examples/playwright-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),"."),(0,i.kt)("p",null,"The script simply downloads several web pages with plain HTTP requests using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/utils#requestasbrowser",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Apify.utils.requestAsBrowser()")),"\nconvenience function and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,i.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\n// Apify.main() function wraps the crawler logic (it is optional).\nApify.main(async () => {\n    // Create and initialize an instance of the RequestList class that contains\n    // a list of URLs to crawl. Here we use just a few hard-coded URLs.\n    const requestList = await Apify.openRequestList('start-urls', [\n        { url: 'http://www.google.com/' },\n        { url: 'http://www.example.com/' },\n        { url: 'http://www.bing.com/' },\n        { url: 'http://www.wikipedia.com/' },\n    ]);\n\n    // Create a BasicCrawler - the simplest crawler that enables\n    // users to implement the crawling logic themselves.\n    const crawler = new Apify.BasicCrawler({\n        // Let the crawler fetch URLs from our list.\n        requestList,\n\n        // This function will be called for each URL to crawl.\n        handleRequestFunction: async ({ request }) => {\n            console.log(`Processing ${request.url}...`);\n\n            // Fetch the page HTML via Apify utils requestAsBrowser\n            const { body } = await Apify.utils.requestAsBrowser(request);\n\n            // Store the HTML and URL to the default dataset.\n            await Apify.pushData({\n                url: request.url,\n                html: body,\n            });\n        },\n    });\n\n    // Run the crawler and wait for it to finish.\n    await crawler.run();\n\n    console.log('Crawler finished.');\n});\n")))}f.isMDXComponent=!0}}]);