"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9955],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id_old:"version-1.3-motivation",title:"Motivation",id:"motivation"},p=void 0,l={unversionedId:"guides/motivation",id:"version-1.3/guides/motivation",title:"Motivation",description:"Thanks to tools like Playwright, Puppeteer or",source:"@site/versioned_docs/version-1.3/guides/motivation.md",sourceDirName:"guides",slug:"/guides/motivation",permalink:"/docs/1.3/guides/motivation",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1667903274,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{id_old:"version-1.3-motivation",title:"Motivation",id:"motivation"},sidebar:"version-1.3/docs",next:{title:"Quick Start",permalink:"/docs/1.3/guides/quick-start"}},c={},u=[],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thanks to tools like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio"),", it is easy to write Node.js code to extract data from web pages. But\neventually things will get complicated. For example, when you try to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Perform a deep crawl of an entire website using a persistent queue of URLs."),(0,a.kt)("li",{parentName:"ul"},"Run your scraping code on a list of 100k URLs in a CSV file, without losing any data when your code crashes."),(0,a.kt)("li",{parentName:"ul"},"Rotate proxies to hide your browser origin and keep user-like sessions."),(0,a.kt)("li",{parentName:"ul"},"Disable browser fingerprinting protections used by websites.")),(0,a.kt)("p",null,"Python has ",(0,a.kt)("a",{parentName:"p",href:"https://scrapy.org/",target:"_blank",rel:"noopener"},"Scrapy")," for these tasks, but there was no such library for ",(0,a.kt)("strong",{parentName:"p"},"JavaScript, the language of\nthe web"),". The use of JavaScript is natural, since the same language is used to write the scripts as well as the data extraction code running in a\nbrowser."),(0,a.kt)("p",null,"The goal of the Apify SDK is to fill this gap and provide a toolbox for generic web scraping, crawling and automation tasks in JavaScript. So don't\nreinvent the wheel every time you need data from the web, and focus on writing code specific to the target website, rather than developing\ncommonalities."))}f.isMDXComponent=!0}}]);