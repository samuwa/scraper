"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[332],{68991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"request-list-state",title:"RequestListState"},l=void 0,p={unversionedId:"typedefs/request-list-state",id:"version-2.3/typedefs/request-list-state",title:"RequestListState",description:"Represents state of a RequestList. It can be used to resume a RequestList which has been previously",source:"@site/versioned_docs/version-2.3/typedefs/RequestListState.md",sourceDirName:"typedefs",slug:"/typedefs/request-list-state",permalink:"/sdk/js/docs/2.3/typedefs/request-list-state",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1678907496,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"request-list-state",title:"RequestListState"},sidebar:"version-2.3/docs",previous:{title:"QueueOperationInfo",permalink:"/sdk/js/docs/2.3/typedefs/queue-operation-info"},next:{title:"SessionState",permalink:"/sdk/js/docs/2.3/typedefs/session-state"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>nextIndex</code>",id:"nextindex",level:3},{value:"<code>nextUniqueKey</code>",id:"nextuniquekey",level:3},{value:"<code>inProgress</code>",id:"inprogress",level:3}],d={toc:c},f="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"requestliststate"}),(0,s.kt)("p",null,"Represents state of a ",(0,s.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"RequestList")),". It can be used to resume a ",(0,s.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"RequestList"))," which has been previously\nprocessed. You can obtain the state by calling ",(0,s.kt)("a",{parentName:"p",href:"../api/request-list#getstate",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"RequestList.getState()"))," and receive an object with the following\nstructure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{\n    nextIndex: 5,\n    nextUniqueKey: 'unique-key-5'\n    inProgress: {\n        'unique-key-1': true,\n        'unique-key-4': true\n    },\n}\n")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"nextindex"},(0,s.kt)("inlineCode",{parentName:"h3"},"nextIndex")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Position of the next request to be processed."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"nextuniquekey"},(0,s.kt)("inlineCode",{parentName:"h3"},"nextUniqueKey")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Key of the next request to be processed."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"inprogress"},(0,s.kt)("inlineCode",{parentName:"h3"},"inProgress")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object<string, boolean>")),(0,s.kt)("p",null,"An object mapping request keys to a boolean value respresenting whether they are being processed at the moment."),(0,s.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,y=c["".concat(l,".").concat(f)]||c[f]||d[f]||s;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);