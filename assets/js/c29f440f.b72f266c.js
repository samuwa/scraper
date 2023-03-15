"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1905],{759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id_old:"version-1.3-playwright-crawler-options",title:"PlaywrightCrawlerOptions",id:"playwright-crawler-options"},p=void 0,s={unversionedId:"typedefs/playwright-crawler-options",id:"version-1.3/typedefs/playwright-crawler-options",title:"PlaywrightCrawlerOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/PlaywrightCrawlerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/playwright-crawler-options",permalink:"/sdk/js/docs/1.3/typedefs/playwright-crawler-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1678907496,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id_old:"version-1.3-playwright-crawler-options",title:"PlaywrightCrawlerOptions",id:"playwright-crawler-options"},sidebar:"version-1.3/docs",previous:{title:"CheerioCrawlerOptions",permalink:"/sdk/js/docs/1.3/typedefs/cheerio-crawler-options"},next:{title:"PlaywrightLaunchContext",permalink:"/sdk/js/docs/1.3/typedefs/playwright-launch-context"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>handlePageFunction</code>",id:"handlepagefunction",level:3},{value:"<code>navigationTimeoutSecs</code>",id:"navigationtimeoutsecs",level:3},{value:"<code>handleFailedRequestFunction</code>",id:"handlefailedrequestfunction",level:3},{value:"<code>preNavigationHooks</code>",id:"prenavigationhooks",level:3},{value:"<code>postNavigationHooks</code>",id:"postnavigationhooks",level:3},{value:"<code>launchContext</code>",id:"launchcontext",level:3},{value:"<code>handlePageTimeoutSecs</code>",id:"handlepagetimeoutsecs",level:3},{value:"<code>browserPoolOptions</code>",id:"browserpooloptions",level:3},{value:"<code>persistCookiesPerSession</code>",id:"persistcookiespersession",level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",level:3},{value:"<code>requestList</code>",id:"requestlist",level:3},{value:"<code>requestQueue</code>",id:"requestqueue",level:3},{value:"<code>maxRequestRetries</code>",id:"maxrequestretries",level:3},{value:"<code>maxRequestsPerCrawl</code>",id:"maxrequestspercrawl",level:3},{value:"<code>autoscaledPoolOptions</code>",id:"autoscaledpooloptions",level:3},{value:"<code>minConcurrency</code>",id:"minconcurrency",level:3},{value:"<code>maxConcurrency</code>",id:"maxconcurrency",level:3},{value:"<code>useSessionPool</code>",id:"usesessionpool",level:3},{value:"<code>sessionPoolOptions</code>",id:"sessionpooloptions",level:3}],d={toc:c},h="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"playwrightcrawleroptions"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"handlepagefunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"handlePageFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/playwright-handle-page-function",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"PlaywrightHandlePageFunction"))),(0,r.kt)("p",null,"Function that is called to process each request. It is passed an object with the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  response: Response,\n  page: Page,\n  session: Session,\n  browserController: BrowserController,\n  proxyInfo: ProxyInfo,\n  crawler: PlaywrightCrawler,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request")," is an instance of the ",(0,r.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," object with details about the URL to open, HTTP method etc. ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," is an instance of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Playwright")," ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"browserController")," is an instance of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#browsercontroller",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserController")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," is an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Playwright"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-response",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"Response")),", which is the main resource response as returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"page.goto(request.url)"),". The\nfunction must return a promise, which is then awaited by the crawler."),(0,r.kt)("p",null,"If the function throws an exception, the crawler will try to re-crawl the request later, up to ",(0,r.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times. If all the retries\nfail, the crawler calls the function provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleFailedRequestFunction")," parameter. To make this work, you should ",(0,r.kt)("strong",{parentName:"p"},"always")," let your\nfunction throw exceptions rather than catch them. The exceptions are logged to the request using the\n",(0,r.kt)("a",{parentName:"p",href:"../api/request#pusherrormessage",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Request.pushErrorMessage()"))," function."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"navigationtimeoutsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"navigationTimeoutSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 60")),(0,r.kt)("p",null,"Timeout in which page navigation needs to finish, in seconds."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlefailedrequestfunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"handleFailedRequestFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/handle-failed-request",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"HandleFailedRequest"))),(0,r.kt)("p",null,"A function to handle requests that failed more than ",(0,r.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times."),(0,r.kt)("p",null,"The function receives the following object as an argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  response: Response,\n  page: Page,\n  session: Session,\n  browserController: BrowserController,\n  proxyInfo: ProxyInfo,\n  crawler: PlaywrightCrawler,\n}\n")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Request"))," instance corresponds to the failed request, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," instance represents the last error thrown during\nprocessing of the request."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prenavigationhooks"},(0,r.kt)("inlineCode",{parentName:"h3"},"preNavigationHooks")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/playwright-hook",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Array<PlaywrightHook>"))),(0,r.kt)("p",null,"Async functions that are sequentially evaluated before the navigation. Good for setting additional cookies or browser properties before navigation.\nThe function accepts two parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gotoOptions"),", which are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"page.goto()")," function the crawler calls to\nnavigate. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"preNavigationHooks: [\n    async (crawlingContext, gotoOptions) => {\n        await page.evaluate((attr) => { window.foo = attr; }, 'bar');\n    }\n]\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postnavigationhooks"},(0,r.kt)("inlineCode",{parentName:"h3"},"postNavigationHooks")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/playwright-hook",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Array<PlaywrightHook>"))),(0,r.kt)("p",null,"Async functions that are sequentially evaluated after the navigation. Good for checking if the navigation was successful. The function accepts\n",(0,r.kt)("inlineCode",{parentName:"p"},"crawlingContext")," as the only parameter. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"postNavigationHooks: [\n    async (crawlingContext) => {\n        const { page } = crawlingContext;\n        if (hasCaptcha(page)) {\n            await solveCaptcha (page);\n        }\n    };\n]\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"launchcontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"launchContext")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/playwright-launch-context",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"PlaywrightLaunchContext"))),(0,r.kt)("p",null,"The same options as used by ",(0,r.kt)("a",{parentName:"p",href:"../api/apify#launchplaywright",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Apify.launchPlaywright()")),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepagetimeoutsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"handlePageTimeoutSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 60")),(0,r.kt)("p",null,"Timeout in which the function passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," needs to finish, in seconds."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"browserpooloptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"browserPoolOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserPoolOptions")),(0,r.kt)("p",null,"Custom options passed to the underlying ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#BrowserPool",target:"_blank",rel:"noopener"},(0,r.kt)("inlineCode",{parentName:"a"},"BrowserPool"))," constructor. You can tweak those to\nfine-tune browser management."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"persistcookiespersession"},(0,r.kt)("inlineCode",{parentName:"h3"},"persistCookiesPerSession")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,r.kt)("code",null," = true")),(0,r.kt)("p",null,"Automatically saves cookies to Session. Works only if Session Pool is used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"proxyconfiguration"},(0,r.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,r.kt)("p",null,"If set, ",(0,r.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," will be configured for all connections to use ",(0,r.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," or your own Proxy URLs provided\nand rotated according to the configuration. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"documentation"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requestlist"},(0,r.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,r.kt)("p",null,"Static list of URLs to be processed. Either ",(0,r.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be provided (or both)."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"requestqueue"},(0,r.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,r.kt)("p",null,"Dynamic queue of URLs to be processed. This is useful for recursive crawling of websites. Either ",(0,r.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be\nprovided (or both)."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxrequestretries"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxRequestRetries")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 3")),(0,r.kt)("p",null,"Indicates how many times the request is retried if\n",(0,r.kt)("a",{parentName:"p",href:"../typedefs/playwright-crawler-options#handlepagefunction",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawlerOptions.handlePageFunction"))," fails."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxrequestspercrawl"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxRequestsPerCrawl")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Maximum number of pages that the crawler will open. The crawl will stop when this limit is reached. Always set this value in order to prevent infinite\nloops in misconfigured crawlers. Note that in cases of parallel crawling, the actual number of pages visited might be slightly higher than this value."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"autoscaledpooloptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"autoscaledPoolOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))),(0,r.kt)("p",null,"Custom options passed to the underlying ",(0,r.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," constructor. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"runTaskFunction")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"isTaskReadyFunction")," options are provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicCrawler")," and cannot be overridden. However, you can provide a custom implementation of\n",(0,r.kt)("inlineCode",{parentName:"p"},"isFinishedFunction"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minconcurrency"},(0,r.kt)("inlineCode",{parentName:"h3"},"minConcurrency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 1")),(0,r.kt)("p",null,"Sets the minimum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,r.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your crawler will run extremely slow or crash. If\nyou're not sure, just keep the default value and the concurrency will scale up automatically."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxconcurrency"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxConcurrency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 1000")),(0,r.kt)("p",null,"Sets the maximum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,r.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usesessionpool"},(0,r.kt)("inlineCode",{parentName:"h3"},"useSessionPool")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,r.kt)("code",null," = true")),(0,r.kt)("p",null,"Playwright crawler will initialize the ",(0,r.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SessionPool"))," with the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions"),". The session instance will be\nthan available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleRequestFunction"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sessionpooloptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"sessionPoolOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions"))),(0,r.kt)("p",null,"The configuration options for ",(0,r.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SessionPool"))," to use."),(0,r.kt)("hr",null))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,k=c["".concat(p,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);