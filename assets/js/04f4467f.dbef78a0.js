"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],l={id:"puppeteer-launch-context",title:"PuppeteerLaunchContext"},i=void 0,s={unversionedId:"typedefs/puppeteer-launch-context",id:"version-2.3/typedefs/puppeteer-launch-context",title:"PuppeteerLaunchContext",description:"_Deprecated_",source:"@site/versioned_docs/version-2.3/typedefs/PuppeteerLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/puppeteer-launch-context",permalink:"/docs/2.3/typedefs/puppeteer-launch-context",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1667395744,formattedLastUpdatedAt:"Nov 2, 2022",frontMatter:{id:"puppeteer-launch-context",title:"PuppeteerLaunchContext"},sidebar:"version-2.3/docs",previous:{title:"PuppeteerCrawlerOptions",permalink:"/docs/2.3/typedefs/puppeteer-crawler-options"},next:{title:"ProxyConfigurationOptions",permalink:"/docs/2.3/typedefs/proxy-configuration-options"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>launchOptions</code>",id:"launchoptions",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>userAgent</code>",id:"useragent",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>launcher</code>",id:"launcher",level:3},{value:"<code>useIncognitoPages</code>",id:"useincognitopages",level:3},{value:"<code>stealth</code>",id:"stealth",level:3},{value:"<code>stealthOptions</code>",id:"stealthoptions",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"puppeteerlaunchcontext"}),(0,a.kt)("h1",{id:"puppeteerlaunchcontext"},(0,a.kt)("del",{parentName:"h1"},(0,a.kt)("inlineCode",{parentName:"del"},"PuppeteerLaunchContext"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible\n",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Puppeteer options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"launchoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record<string, any>")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer.launch")," ",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v13.5.1&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},"options")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useragent"},(0,a.kt)("inlineCode",{parentName:"h3"},"userAgent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," HTTP header used by the browser. If not provided, the function sets ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," to a reasonable default to reduce the chance of\ndetection of the crawler."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usechrome"},(0,a.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Puppeteer will launch full Google Chrome browser available on the machine rather than the bundled Chromium.\nThe path to Chrome executable is taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical Google\nChrome executable location specific for the operating system. By default, this option is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"launcher"},(0,a.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"*")),(0,a.kt)("p",null,"Already required module (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"). This enables usage of various Puppeteer wrappers such as ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer-extra"),"."),(0,a.kt)("p",null,"Take caution, because it can cause all kinds of unexpected errors and weird behavior. Apify SDK is not tested with any other library besides\n",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," itself."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useincognitopages"},(0,a.kt)("inlineCode",{parentName:"h3"},"useIncognitoPages")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"With this option selected, all pages will be opened in a new incognito browser context. This means they will not share cookies nor cache and their\nresources will not be throttled by one another."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stealth"},(0,a.kt)("inlineCode",{parentName:"h3"},"stealth")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stealthoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"stealthOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/stealth-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"StealthOptions"))),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);