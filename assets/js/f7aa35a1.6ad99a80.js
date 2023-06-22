"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2976],{68889:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(88746),o=r(6141),s=r(6832);const i=function(e){var t=e.to,r=e.children,i=(0,o.E)(),l=i.version,p=i.isLast;if((0,s.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var c=l+"/";return"current"===l?c="next/":p&&(c=""),n.createElement(a.default,{to:"/api/"+c+t},r)}},26569:(e,t,r)=>{r.d(t,{B:()=>i,T:()=>s});var n=r(67294),a=r(88746),o="https://crawlee.dev",s=function(e){var t=e.to,r=e.children,s=e.version;return n.createElement(a.default,{href:o+"/api"+(s?"/"+s:"")+"/"+t},r)},i=function(e){var t=e.to,r=e.children;return n.createElement(a.default,{href:o+"/"+t},r)}},76897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>w,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(14563),i=r(68889),l=r(26569);const p="import { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\n// Launch the web browser.\nconst browser = await launchPuppeteer();\n\n// Create and navigate new page\nconsole.log('Open target page');\nconst page = await browser.newPage();\nawait page.goto('https://github.com/search/advanced');\n\n// Fill form fields and select desired search options\nconsole.log('Fill in search form');\nawait page.type('#adv_code_search input.js-advanced-search-input', 'apify-js');\nawait page.type('#search_from', 'apify');\nawait page.type('#search_date', '>2015');\nawait page.select('select#search_language', 'JavaScript');\n\n// Submit the form and wait for full load of next page\nconsole.log('Submit search form');\nawait Promise.all([\n    page.waitForNavigation(),\n    page.click('#adv_code_search button[type=\"submit\"]'),\n]);\n\n// Obtain and print list of search results\nconst results = await page.$$eval('div.f4.text-normal a', (nodes) => nodes.map((node) => ({\n    url: node.href,\n    name: node.innerText,\n})));\n\nconsole.log('Results:', results);\n\n// Store data in default dataset\nawait Actor.pushData(results);\n\n// Close browser\nawait browser.close();\n\nawait Actor.exit();\n";var c=["components"],u={id:"forms",title:"Forms"},d=void 0,m={unversionedId:"examples/forms",id:"version-3.0/examples/forms",title:"Forms",description:"This example demonstrates how to use PuppeteerCrawler to",source:"@site/versioned_docs/version-3.0/examples/forms.mdx",sourceDirName:"examples",slug:"/examples/forms",permalink:"/sdk/js/docs/examples/forms",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1687464155,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{id:"forms",title:"Forms"},sidebar:"docs",previous:{title:"Crawl some links on a website",permalink:"/sdk/js/docs/examples/crawl-some-links"},next:{title:"Dataset Map and Reduce methods",permalink:"/sdk/js/docs/examples/map-and-reduce"}},f={},h=[],y={toc:h},g="wrapper";function w(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(g,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(l.T,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," to\nautomatically fill and submit a search form to look up repositories on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub")," using headless Chrome / Puppeteer.\nThe actor first fills in the search term, repository owner, start date and language of the repository, then submits the form\nand prints out the results. Finally, the results are saved either on the Apify platform to the\ndefault ",(0,o.kt)(i.Z,{to:"apify/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"dataset"))," or on the local machine as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},p))}w.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);