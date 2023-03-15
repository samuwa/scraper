"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6749],{47219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={id_old:"version-1.3-playwright-launch-context",title:"PlaywrightLaunchContext",id:"playwright-launch-context"},i=void 0,s={unversionedId:"typedefs/playwright-launch-context",id:"version-1.3/typedefs/playwright-launch-context",title:"PlaywrightLaunchContext",description:"Apify extends the launch options of Playwright. You can use any of the Playwright compatible",source:"@site/versioned_docs/version-1.3/typedefs/PlaywrightLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/playwright-launch-context",permalink:"/sdk/js/docs/1.3/typedefs/playwright-launch-context",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1678907496,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id_old:"version-1.3-playwright-launch-context",title:"PlaywrightLaunchContext",id:"playwright-launch-context"},sidebar:"version-1.3/docs",previous:{title:"PlaywrightCrawlerOptions",permalink:"/sdk/js/docs/1.3/typedefs/playwright-crawler-options"},next:{title:"PuppeteerCrawlerOptions",permalink:"/sdk/js/docs/1.3/typedefs/puppeteer-crawler-options"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>launchOptions</code>",id:"launchoptions",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>launcher</code>",id:"launcher",level:3}],h={toc:u},d="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"playwrightlaunchcontext"}),(0,o.kt)("p",null,"Apify extends the launch options of Playwright. You can use any of the Playwright compatible\n",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browsertypelaunchoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Playwright options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"launchoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"LaunchOptions")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"browserType.launch")," ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype?_highlight=launch#browsertypelaunchoptions",target:"_blank",rel:"noopener"},"options")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usechrome"},(0,o.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Playwright will launch full Google Chrome browser available on the machine rather than the bundled\nChromium. The path to Chrome executable is taken from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical\nGoogle Chrome executable location specific for the operating system. By default, this option is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"launcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"*")),(0,o.kt)("p",null,"By default this function uses ",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").chromium'),". If you want to use a different browser you can pass it by this property as e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").firefox')),(0,o.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);