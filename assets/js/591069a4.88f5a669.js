"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7426],{88086:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=t(87462),a=t(63366),p=(t(67294),t(3905)),o=["components"],l={id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},i=void 0,u={unversionedId:"examples/puppeteer-recursive-crawl",id:"version-2.3/examples/puppeteer-recursive-crawl",title:"Puppeteer recursive crawl",description:"Run the following example to perform a recursive crawl",source:"@site/versioned_docs/version-2.3/examples/puppeteer_recursive_crawl.md",sourceDirName:"examples",slug:"/examples/puppeteer-recursive-crawl",permalink:"/sdk/js/docs/2.3/examples/puppeteer-recursive-crawl",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692710618,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},sidebar:"version-2.3/docs",previous:{title:"Puppeteer crawler",permalink:"/sdk/js/docs/2.3/examples/puppeteer-crawler"},next:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/2.3/examples/puppeteer-with-proxy"}},c={},s=[],f={toc:s},m="wrapper";function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,p.kt)(m,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Run the following example to perform a recursive crawl\nof a website using ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/puppeteer-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler")),"."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,p.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestQueue = await Apify.openRequestQueue();\n    await requestQueue.addRequest({ url: 'https://www.iana.org/' });\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestQueue,\n        handlePageFunction: async ({ request, page }) => {\n            const title = await page.title();\n            console.log(`Title of ${request.url}: ${title}`);\n            await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                pseudoUrls: ['https://www.iana.org/[.*]'],\n            });\n        },\n        maxRequestsPerCrawl: 10,\n    });\n\n    await crawler.run();\n});\n")))}d.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||p;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<p;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);