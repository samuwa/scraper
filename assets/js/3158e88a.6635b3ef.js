"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id_old:"version-1.3-environment-variables",title:"Environment Variables",id:"environment-variables"},p=void 0,s={unversionedId:"guides/environment-variables",id:"version-1.3/guides/environment-variables",title:"Environment Variables",description:"The following is a list of the environment variables used by Apify SDK that are available to the user.",source:"@site/versioned_docs/version-1.3/guides/environment_variables.md",sourceDirName:"guides",slug:"/guides/environment-variables",permalink:"/docs/1.3/guides/environment-variables",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1665762897,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id_old:"version-1.3-environment-variables",title:"Environment Variables",id:"environment-variables"},sidebar:"version-1.3/docs",previous:{title:"Result Storage",permalink:"/docs/1.3/guides/result-storage"},next:{title:"Proxy Management",permalink:"/docs/1.3/guides/proxy-management"}},d={},u=[{value:"Important env vars:",id:"important-env-vars",level:2},{value:"<code>APIFY_LOCAL_STORAGE_DIR</code>",id:"apify_local_storage_dir",level:3},{value:"<code>APIFY_TOKEN</code>",id:"apify_token",level:3},{value:"Combinations of <code>APIFY_LOCAL_STORAGE_DIR</code> and <code>APIFY_TOKEN</code>",id:"combinations-of-apify_local_storage_dir-and-apify_token",level:3},{value:"Convenience env vars:",id:"convenience-env-vars",level:2},{value:"<code>APIFY_HEADLESS</code>",id:"apify_headless",level:3},{value:"<code>APIFY_LOG_LEVEL</code>",id:"apify_log_level",level:3},{value:"<code>APIFY_MEMORY_MBYTES</code>",id:"apify_memory_mbytes",level:3},{value:"<code>APIFY_PROXY_PASSWORD</code>",id:"apify_proxy_password",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following is a list of the environment variables used by Apify SDK that are available to the user.\nThe SDK is capable of running without any env vars present, but certain features will only become available\nafter env vars are properly set. You can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI"),"\nto set the env vars for you. ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform")," also sets the variables automatically."),(0,o.kt)("h2",{id:"important-env-vars"},"Important env vars:"),(0,o.kt)("p",null,"The following environment variables have large impact on the way Apify SDK works and its behavior\ncan be changed significantly by setting or unsetting them."),(0,o.kt)("h3",{id:"apify_local_storage_dir"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_LOCAL_STORAGE_DIR")),(0,o.kt)("p",null,"Defines the path to a local directory where ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),",\n",(0,o.kt)("a",{parentName:"p",href:"../api/dataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Dataset")),", and ",(0,o.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," store their data.\nTypically it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage"),". If omitted, you should define the ",(0,o.kt)("a",{parentName:"p",href:"#apify_token",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN")),"\nenvironment variable instead."),(0,o.kt)("h3",{id:"apify_token"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")),(0,o.kt)("p",null,"The API token for your Apify account. It is used to access the Apify API, e.g. to access cloud storage\nor to run an actor on the Apify platform. You can find your API token on the\n",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page. If omitted,\nyou should define the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable instead."),(0,o.kt)("h3",{id:"combinations-of-apify_local_storage_dir-and-apify_token"},"Combinations of ",(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_LOCAL_STORAGE_DIR")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_TOKEN")),(0,o.kt)("p",null,"By combining the env vars in various ways, you can greatly influence the behavior of Apify SDK."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Env Vars"),(0,o.kt)("th",{parentName:"tr",align:null},"API"),(0,o.kt)("th",{parentName:"tr",align:null},"Storages"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"none OR ",(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_DIR")),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"local")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Apify platform")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")," AND ",(0,o.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_DIR")),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"local+platform")))),(0,o.kt)("p",null,"When using both ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR"),", you can use all the Apify platform\nfeatures and your data will be stored locally by default. If you want to access platform storages,\nyou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ forceCloud: true }")," option in their respective functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const localDataset = await Apify.openDataset('my-local-data');\nconst remoteDataset = await Apify.openDataset('my-remote-data', { forceCloud: true });\n")),(0,o.kt)("h2",{id:"convenience-env-vars"},"Convenience env vars:"),(0,o.kt)("p",null,"The next group includes env vars that can help achieve certain goals without having to change\nyour code, such as temporarily switching log level to DEBUG."),(0,o.kt)("h3",{id:"apify_headless"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_HEADLESS")),(0,o.kt)("p",null,"If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", web browsers launched by Apify SDK will run in the headless mode. You can still override\nthis setting in the code, e.g. by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"headless: true")," option to the\n",(0,o.kt)("a",{parentName:"p",href:"../api/apify#launchpuppeteer",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.launchPuppeteer()"))," function. But having this setting\nin an environment variable allows you to develop the crawler locally in headful mode to simplify the debugging,\nand only run the crawler in headless mode once you deploy it to the Apify platform. By default, the browsers\nare launched in headful mode, i.e. with windows."),(0,o.kt)("h3",{id:"apify_log_level"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_LOG_LEVEL")),(0,o.kt)("p",null,"Specifies the minimum log level, which can be one of the following values (in order of severity):\n",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),". By default, the log level is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),",\nwhich means that ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," messages are not printed to console. See the ",(0,o.kt)("a",{parentName:"p",href:"../api/log",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"utils.log")),"\nnamespace for logging utilities."),(0,o.kt)("h3",{id:"apify_memory_mbytes"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_MEMORY_MBYTES")),(0,o.kt)("p",null,"Sets the amount of system memory in megabytes to be used by the ",(0,o.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPool")),".\nIt is used to limit the number of concurrently running tasks. By default, the max amount of memory\nto be used is set to one quarter of total system memory, i. e. on a system with 8192 MB of memory,\nthe autoscaling feature will only use up to 2048 MB of memory."),(0,o.kt)("h3",{id:"apify_proxy_password"},(0,o.kt)("inlineCode",{parentName:"h3"},"APIFY_PROXY_PASSWORD")),(0,o.kt)("p",null,"Optional password to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," for IP address rotation.\nIf you have an Apify Account, you can find the password on the ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"Proxy page"),"\nin the Apify app. The password is automatically inferred using the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," env var,\nso in most cases, you don't need to touch it. You should use it when, for some reason,\nyou need access to Apify Proxy, but no access to Apify API, or when you need access to\nproxy from a different account than your token represents."))}m.isMDXComponent=!0}}]);