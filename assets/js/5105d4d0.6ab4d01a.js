"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5620],{60980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"browser-launch-context",title:"BrowserLaunchContext"},p=void 0,s={unversionedId:"typedefs/browser-launch-context",id:"version-2.3/typedefs/browser-launch-context",title:"BrowserLaunchContext",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/BrowserLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/browser-launch-context",permalink:"/sdk/js/docs/2.3/typedefs/browser-launch-context",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1684194554,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{id:"browser-launch-context",title:"BrowserLaunchContext"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>launchOptions</code>",id:"launchoptions",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>useIncognitoPages</code>",id:"useincognitopages",level:3},{value:"<code>userDataDir</code>",id:"userdatadir",level:3},{value:"<code>launcher</code>",id:"launcher",level:3}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"browserlaunchcontext"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"launchoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,a.kt)("p",null,"`Options passed to the browser launcher function. Options are based on underlying library."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usechrome"},(0,a.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Playwright will launch full Google Chrome browser available on the machine rather than the bundled\nChromium. The path to Chrome executable is taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical\nGoogle Chrome executable location specific for the operating system. By default, this option is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useincognitopages"},(0,a.kt)("inlineCode",{parentName:"h3"},"useIncognitoPages")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"With this option selected, all pages will be opened in a new incognito browser context. This means they will not share cookies nor cache and their\nresources will not be throttled by one another."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdatadir"},(0,a.kt)("inlineCode",{parentName:"h3"},"userDataDir")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Sets the ",(0,a.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md",target:"_blank",rel:"noopener"},"User Data Directory")," path. The user data directory contains\nprofile data such as history, bookmarks, and cookies, as well as other per-installation local state. If not specified, a temporary directory is used\ninstead."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"launcher"},(0,a.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"*")),(0,a.kt)("p",null,'By default this function uses\nrequire("playwright").chromium',(0,a.kt)("inlineCode",{parentName:"p"},". If you want to use a different browser you can pass it by this property as"),'require("playwright").firefox'),(0,a.kt)("hr",null))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);