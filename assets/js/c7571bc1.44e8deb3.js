"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2006],{58619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var s=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],o={id_old:"version-1.3-request-list-options",title:"RequestListOptions",id:"request-list-options"},l=void 0,p={unversionedId:"typedefs/request-list-options",id:"version-1.3/typedefs/request-list-options",title:"RequestListOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/RequestListOptions.md",sourceDirName:"typedefs",slug:"/typedefs/request-list-options",permalink:"/sdk/js/docs/1.3/typedefs/request-list-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Ji\u0159\xed Morav\u010d\xedk",lastUpdatedAt:1689853654,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id_old:"version-1.3-request-list-options",title:"RequestListOptions",id:"request-list-options"},sidebar:"version-1.3/docs",previous:{title:"RequestOptions",permalink:"/sdk/js/docs/1.3/typedefs/request-options"},next:{title:"RequestAsBrowserOptions",permalink:"/sdk/js/docs/1.3/typedefs/request-as-browser-options"}},u={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>sources</code>",id:"sources",level:3},{value:"<code>sourcesFunction</code>",id:"sourcesfunction",level:3},{value:"<code>persistStateKey</code>",id:"persiststatekey",level:3},{value:"<code>persistRequestsKey</code>",id:"persistrequestskey",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>keepDuplicateUrls</code>",id:"keepduplicateurls",level:3}],c={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(m,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"requestlistoptions"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"sources"},(0,i.kt)("inlineCode",{parentName:"h3"},"sources")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Array<(RequestOptions|Request|string)>"))),(0,i.kt)("p",null,"An array of sources of URLs for the ",(0,i.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestList")),". It can be either an array of strings, plain objects that define at least the\n",(0,i.kt)("inlineCode",{parentName:"p"},"url")," property, or an array of ",(0,i.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))," instances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," array will be consumed (left empty) after ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," initializes. This is a measure to prevent memory leaks in\nsituations when millions of sources are added."),(0,i.kt)("p",null,"Additionally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestsFromUrl")," property may be used instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", which will instruct ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," to download the source URLs from a given\nremote location. The URLs will be parsed from the received response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[\n    // A single URL\n    'http://example.com/a/b',\n\n    // Modify Request options\n    { method: PUT, 'https://example.com/put, payload: { foo: 'bar' }}\n\n    // Batch import of URLs from a file hosted on the web,\n    // where the URLs should be requested using the HTTP POST request\n    { method: 'POST', requestsFromUrl: 'http://example.com/urls.txt' },\n\n    // Batch import from remote file, using a specific regular expression to extract the URLs.\n    { requestsFromUrl: 'http://example.com/urls.txt', regex: /https:\\/\\/example.com\\/.+/ },\n\n    // Get list of URLs from a Google Sheets document. Just add \"/gviz/tq?tqx=out:csv\" to the Google Sheet URL.\n    // For details, see https://help.apify.com/en/articles/2906022-scraping-a-list-of-urls-from-a-google-sheets-document\n    { requestsFromUrl: 'https://docs.google.com/spreadsheets/d/1GA5sSQhQjB_REes8I5IKg31S-TuRcznWOPjcpNqtxmU/gviz/tq?tqx=out:csv' }\n]\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sourcesfunction"},(0,i.kt)("inlineCode",{parentName:"h3"},"sourcesFunction")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-list-sources-function",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestListSourcesFunction"))),(0,i.kt)("p",null,"A function that will be called to get the sources for the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList"),", but only if ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," was not able to fetch their persisted version (see\n",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-list-options#persistrequestskey",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestListOptions.persistRequestsKey")),"). It must return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," of\n",(0,i.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))," or ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestOptions")),"."),(0,i.kt)("p",null,"This is very useful in a scenario when getting the sources is a resource intensive or time consuming task, such as fetching URLs from multiple\nsitemaps or parsing URLs from large datasets. Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sourcesFunction")," in combination with ",(0,i.kt)("inlineCode",{parentName:"p"},"persistStateKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"persistRequestsKey")," will allow\nyou to fetch and parse those URLs only once, saving valuable time when your actor migrates or restarts."),(0,i.kt)("p",null,"If both ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-list-options#sources",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestListOptions.sources"))," and\n",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-list-options#sourcesfunction",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestListOptions.sourcesFunction"))," are provided, the sources returned by the function will be\nadded after the ",(0,i.kt)("inlineCode",{parentName:"p"},"sources"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Let's say we want to scrape URLs extracted from sitemaps.\n\nconst sourcesFunction = async () => {\n    // With super large sitemaps, this operation could take very long\n    // and big websites typically have multiple sitemaps.\n    const sitemaps = await downloadHugeSitemaps();\n    return parseUrlsFromSitemaps(sitemaps);\n};\n\n// Sitemaps can change in real-time, so it's important to persist\n// the URLs we collected. Otherwise we might lose our scraping\n// state in case of an actor migration / failure / time-out.\nconst requestList = new RequestList({\n    sourcesFunction,\n    persistStateKey: 'state-key',\n    persistRequestsKey: 'requests-key',\n});\n\n// The sourcesFunction is called now and the Requests are persisted.\n// If something goes wrong and we need to start again, RequestList\n// will load the persisted Requests from storage and will NOT\n// call the sourcesFunction again, saving time and resources.\nawait requestList.initialize();\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"persiststatekey"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistStateKey")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Identifies the key in the default key-value store under which ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," periodically stores its state (i.e. which URLs were crawled and which\nnot). If the actor is restarted, ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," will read the state and continue where it left off."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"persistStateKey")," is not set, ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," will always start from the beginning, and all the source URLs will be crawled again."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"persistrequestskey"},(0,i.kt)("inlineCode",{parentName:"h3"},"persistRequestsKey")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Identifies the key in the default key-value store under which the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," persists its Requests during the\n",(0,i.kt)("a",{parentName:"p",href:"../api/request-list#initialize",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestList.initialize()"))," call. This is necessary if ",(0,i.kt)("inlineCode",{parentName:"p"},"persistStateKey")," is set and the source URLs might potentially\nchange, to ensure consistency of the source URLs and state object. However, it comes with some storage and performance overheads."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"persistRequestsKey")," is not set, ",(0,i.kt)("a",{parentName:"p",href:"../api/request-list#initialize",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestList.initialize()"))," will always fetch the sources from their origin,\ncheck that they are consistent with the restored state (if any) and throw an error if they are not."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"state"},(0,i.kt)("inlineCode",{parentName:"h3"},"state")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/request-list-state",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestListState"))),(0,i.kt)("p",null,"The state object that the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," will be initialized from. It is in the form as returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList.getState()"),", such as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    nextIndex: 5,\n    nextUniqueKey: 'unique-key-5'\n    inProgress: {\n        'unique-key-1': true,\n        'unique-key-4': true,\n    },\n}\n")),(0,i.kt)("p",null,"Note that the preferred (and simpler) way to persist the state of crawling of the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateKeyPrefix")," parameter instead."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keepduplicateurls"},(0,i.kt)("inlineCode",{parentName:"h3"},"keepDuplicateUrls")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,i.kt)("code",null," = false")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," will deduplicate the provided URLs. Default deduplication is based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property of passed source\n",(0,i.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))," objects."),(0,i.kt)("p",null,"If the property is not present, it is generated by normalizing the URL. If present, it is kept intact. In any case, only one request per ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueKey"),"\nis added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList")," resulting in removal of duplicate URLs / unique keys."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"keepDuplicateUrls")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will append an additional identifier to the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueKey")," of each request that does not already include a\n",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueKey"),". Therefore, duplicate URLs will be kept in the list. It does not protect the user from having duplicates in user set ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqueKey"),"s however.\nIt is the user's responsibility to ensure uniqueness of their unique keys if they wish to keep more than just a single copy in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestList"),"."),(0,i.kt)("hr",null))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?s.createElement(h,a(a({ref:t},u),{},{components:n})):s.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);