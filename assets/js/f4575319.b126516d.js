"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[284],{30433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),l=r(86010),o=r(63735),u=r(38224),i=r(5730);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function s(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,p=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,f=function(e){var t=e.currentTarget,r=p.indexOf(t),n=s[r].value;n!==u&&(m(t),i(n))},d=function(e){var t,r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":var n,a=p.indexOf(e.currentTarget)+1;r=null!=(n=p[a])?n:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;r=null!=(l=p[o])?l:p[p.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:f},o,{className:(0,l.Z)("tabs__item",c.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function p(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var l=r.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function m(e){var t=(0,u.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",c.tabList)},a.createElement(s,(0,n.Z)({},e,t)),a.createElement(p,(0,n.Z)({},e,t)))}function f(e){var t=(0,i.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},38224:(e,t,r)=>{r.d(t,{Y:()=>m});var n=r(67294),a=r(16550),l=r(34423),o=r(20636),u=r(99200);function i(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:i(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,u=(0,a.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(u.location.search);t.set(i,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[i,u])]}function m(e){var t,r,a,l,o=e.defaultValue,i=e.queryString,m=void 0!==i&&i,f=e.groupId,d=c(e),w=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!s({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),v=w[0],b=w[1],h=p({queryString:m,groupId:f}),y=h[0],g=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,u.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=k[0],T=k[1],C=function(){var e=null!=y?y:x;return s({value:e,tabValues:d})?e:null}();return(0,n.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!s({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),T(e)}),[g,T,d]),tabValues:d}}},62107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>g,frontMatter:()=>f,metadata:()=>w,toc:()=>b});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(65559),u=r(30433),i=r(61806);const c="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, $ }) {\n        const title = $('title').text();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\nawait Actor.exit();\n",s="import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page }) {\n        const title = await page.title();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\nawait Actor.exit();\n",p="import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, page }) {\n        const title = await page.title();\n        console.log(`URL: ${request.url}\\nTITLE: ${title}`);\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    'http://www.example.com/page-1',\n    'http://www.example.com/page-2',\n    'http://www.example.com/page-3',\n]);\n\nawait Actor.exit();\n";var m=["components"],f={id:"crawl-multiple-urls",title:"Crawl multiple URLs"},d=void 0,w={unversionedId:"examples/crawl-multiple-urls",id:"examples/crawl-multiple-urls",title:"Crawl multiple URLs",description:"This example crawls the specified list of URLs.",source:"@site/../docs/examples/crawl_multiple_urls.mdx",sourceDirName:"examples",slug:"/examples/crawl-multiple-urls",permalink:"/sdk/js/docs/next/examples/crawl-multiple-urls",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1678907496,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"crawl-multiple-urls",title:"Crawl multiple URLs"},sidebar:"docs",previous:{title:"Crawl all links on a website",permalink:"/sdk/js/docs/next/examples/crawl-all-links"},next:{title:"Crawl a website with relative links",permalink:"/sdk/js/docs/next/examples/crawl-relative-links"}},v={},b=[],h={toc:b},y="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,m);return(0,l.kt)(y,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example crawls the specified list of URLs."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},c)),(0,l.kt)(u.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},s)),(0,l.kt)(u.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},p))))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);