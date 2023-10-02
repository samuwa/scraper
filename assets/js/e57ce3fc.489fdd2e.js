"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9329],{68889:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(88746),o=a(6141),s=a(6832);const i=function(e){var t=e.to,a=e.children,i=(0,o.E)(),l=i.version,d=i.isLast;if((0,s.default)().siteConfig.presets[0][1].docs.disableVersioning)return r.createElement(n.default,{to:"/api/"+t},a);var c=l+"/";return"current"===l?c="next/":d&&(c=""),r.createElement(n.default,{to:"/api/"+c+t},a)}},5982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(14563),i=a(68889);const l="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a dataset where we will store the results.\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n";var d=["components"],c={id:"add-data-to-dataset",title:"Add data to dataset"},p=void 0,u={unversionedId:"examples/add-data-to-dataset",id:"version-3.0/examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/versioned_docs/version-3.0/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/sdk/js/docs/3.0/examples/add-data-to-dataset",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1695815288,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/sdk/js/docs/3.0/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/sdk/js/docs/3.0/examples/basic-crawler"}},m={},f=[],y={toc:f},w="wrapper";function v(e){var t=e.components,a=(0,n.Z)(e,d);return(0,o.kt)(w,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,o.kt)(i.Z,{to:"apify/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Actor.openDataset()"))),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},l),(0,o.kt)("p",null,"Each item in this dataset will be saved to its own file in the following directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/datasets/default/\n")))}v.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);