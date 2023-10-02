"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8536],{53860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"request-options",title:"RequestOptions"},l=void 0,s={unversionedId:"typedefs/request-options",id:"version-2.3/typedefs/request-options",title:"RequestOptions",description:"Specifies required and optional fields for constructing a Request.",source:"@site/versioned_docs/version-2.3/typedefs/RequestOptions.md",sourceDirName:"typedefs",slug:"/typedefs/request-options",permalink:"/sdk/js/docs/2.3/typedefs/request-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1695815288,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{id:"request-options",title:"RequestOptions"},sidebar:"version-2.3/docs",previous:{title:"LoggerOptions",permalink:"/sdk/js/docs/2.3/typedefs/logger-options"},next:{title:"RequestListOptions",permalink:"/sdk/js/docs/2.3/typedefs/request-list-options"}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>uniqueKey</code>",id:"uniquekey",level:3},{value:"<code>method</code>",id:"method",level:3},{value:"<code>payload</code>",id:"payload",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>userData</code>",id:"userdata",level:3},{value:"<code>keepUrlFragment</code>",id:"keepurlfragment",level:3},{value:"<code>useExtendedUniqueKey</code>",id:"useextendeduniquekey",level:3}],m={toc:u},c="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"requestoptions"}),(0,o.kt)("p",null,"Specifies required and optional fields for constructing a ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request")),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"url"},(0,o.kt)("inlineCode",{parentName:"h3"},"url")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"URL of the web page to crawl. It must be a non-empty string."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uniquekey"},(0,o.kt)("inlineCode",{parentName:"h3"},"uniqueKey")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"A unique key identifying the request. Two requests with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," are considered as pointing to the same URL."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is not provided, then it is automatically generated by normalizing the URL. For example, the URL of ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP://www.EXAMPLE.com/something/"),"\nwill produce the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.example.com/something"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"keepUrlFragment")," option determines whether URL hash fragment is included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," or not."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useExtendedUniqueKey")," options determines whether method and payload are included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey"),", producing a ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," in the following\nformat: ",(0,o.kt)("inlineCode",{parentName:"p"},"METHOD(payloadHash):normalizedUrl"),". This is useful when requests point to the same URL, but with different methods and payloads. For example:\nform submits."),(0,o.kt)("p",null,"Pass an arbitrary non-empty text value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property to override the default behavior and specify which URLs shall be considered equal."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"method"},(0,o.kt)("inlineCode",{parentName:"h3"},"method")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ",(0,o.kt)("code",null," = ",'"',"'","GET","'",'"')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payload"},(0,o.kt)("inlineCode",{parentName:"h3"},"payload")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,o.kt)("p",null,"HTTP request payload, e.g. for POST requests."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"headers"},(0,o.kt)("inlineCode",{parentName:"h3"},"headers")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object<string, string>")),(0,o.kt)("p",null,"HTTP headers in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    Accept: 'text/html',\n    'Content-Type': 'application/json'\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"userdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"userData")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,o.kt)("p",null,"Custom user data assigned to the request. Use this to save any request related data to the request's scope, keeping them accessible on retries,\nfailures etc."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"keepurlfragment"},(0,o.kt)("inlineCode",{parentName:"h3"},"keepUrlFragment")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," then the hash part of a URL is removed when computing the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property. For example, this causes the ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.example.com#foo"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.example.com#bar")," URLs to have the same ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"http://www.example.com")," and thus the URLs are considered equal. Note that this\noption only has an effect if ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is not set."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useextendeduniquekey"},(0,o.kt)("inlineCode",{parentName:"h3"},"useExtendedUniqueKey")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," then the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqueKey")," is computed not only from the URL, but also from the method and payload properties. This is useful when making requests\nto the same URL that are differentiated by method or payload, such as form submit navigations in browsers."),(0,o.kt)("hr",null))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);