"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"social-handles",title:"SocialHandles"},s=void 0,p={unversionedId:"typedefs/social-handles",id:"version-2.3/typedefs/social-handles",title:"SocialHandles",description:"Representation of social handles parsed from a HTML page.",source:"@site/versioned_docs/version-2.3/typedefs/SocialHandles.md",sourceDirName:"typedefs",slug:"/typedefs/social-handles",permalink:"/docs/2.3/typedefs/social-handles",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1664796616,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id:"social-handles",title:"SocialHandles"},sidebar:"version-2.3/docs",previous:{title:"SessionState",permalink:"/docs/2.3/typedefs/session-state"},next:{title:"SystemInfo",permalink:"/docs/2.3/typedefs/system-info"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>emails</code>",id:"emails",level:3},{value:"<code>phones</code>",id:"phones",level:3},{value:"<code>phonesUncertain</code>",id:"phonesuncertain",level:3},{value:"<code>linkedIns</code>",id:"linkedins",level:3},{value:"<code>twitters</code>",id:"twitters",level:3},{value:"<code>instagrams</code>",id:"instagrams",level:3},{value:"<code>facebooks</code>",id:"facebooks",level:3},{value:"<code>youtubes</code>",id:"youtubes",level:3},{value:"<code>tiktoks</code>",id:"tiktoks",level:3},{value:"<code>pinterests</code>",id:"pinterests",level:3},{value:"<code>discords</code>",id:"discords",level:3}],u={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"socialhandles"}),(0,i.kt)("p",null,"Representation of social handles parsed from a HTML page."),(0,i.kt)("p",null,"The object has the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  emails: String[],\n  phones: String[],\n  phonesUncertain: String[],\n  linkedIns: String[],\n  twitters: String[],\n  instagrams: String[],\n  facebooks: String[],\n  youtubes: String[],\n  tiktoks: String[],\n  pinterests: String[],\n  discords: String[],\n}\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"emails"},(0,i.kt)("inlineCode",{parentName:"h3"},"emails")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"phones"},(0,i.kt)("inlineCode",{parentName:"h3"},"phones")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"phonesuncertain"},(0,i.kt)("inlineCode",{parentName:"h3"},"phonesUncertain")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linkedins"},(0,i.kt)("inlineCode",{parentName:"h3"},"linkedIns")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"twitters"},(0,i.kt)("inlineCode",{parentName:"h3"},"twitters")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instagrams"},(0,i.kt)("inlineCode",{parentName:"h3"},"instagrams")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"facebooks"},(0,i.kt)("inlineCode",{parentName:"h3"},"facebooks")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"youtubes"},(0,i.kt)("inlineCode",{parentName:"h3"},"youtubes")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tiktoks"},(0,i.kt)("inlineCode",{parentName:"h3"},"tiktoks")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pinterests"},(0,i.kt)("inlineCode",{parentName:"h3"},"pinterests")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"discords"},(0,i.kt)("inlineCode",{parentName:"h3"},"discords")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,i.kt)("hr",null))}k.isMDXComponent=!0}}]);