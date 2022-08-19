"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"autoscaled-pool-options",title:"AutoscaledPoolOptions"},s=void 0,p={unversionedId:"typedefs/autoscaled-pool-options",id:"version-2.3/typedefs/autoscaled-pool-options",title:"AutoscaledPoolOptions",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/AutoscaledPoolOptions.md",sourceDirName:"typedefs",slug:"/typedefs/autoscaled-pool-options",permalink:"/apify-sdk-js/docs/2.3/typedefs/autoscaled-pool-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1660901114,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"autoscaled-pool-options",title:"AutoscaledPoolOptions"},sidebar:"version-2.3/docs",previous:{title:"utils.social",permalink:"/apify-sdk-js/docs/2.3/api/social"},next:{title:"BasicCrawlerOptions",permalink:"/apify-sdk-js/docs/2.3/typedefs/basic-crawler-options"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>runTaskFunction</code>",id:"runtaskfunction",level:3},{value:"<code>isTaskReadyFunction</code>",id:"istaskreadyfunction",level:3},{value:"<code>isFinishedFunction</code>",id:"isfinishedfunction",level:3},{value:"<code>minConcurrency</code>",id:"minconcurrency",level:3},{value:"<code>maxConcurrency</code>",id:"maxconcurrency",level:3},{value:"<code>desiredConcurrency</code>",id:"desiredconcurrency",level:3},{value:"<code>desiredConcurrencyRatio</code>",id:"desiredconcurrencyratio",level:3},{value:"<code>scaleUpStepRatio</code>",id:"scaleupstepratio",level:3},{value:"<code>scaleDownStepRatio</code>",id:"scaledownstepratio",level:3},{value:"<code>maybeRunIntervalSecs</code>",id:"mayberunintervalsecs",level:3},{value:"<code>loggingIntervalSecs</code>",id:"loggingintervalsecs",level:3},{value:"<code>autoscaleIntervalSecs</code>",id:"autoscaleintervalsecs",level:3},{value:"<code>taskTimeoutSecs</code>",id:"tasktimeoutsecs",level:3},{value:"<code>snapshotterOptions</code>",id:"snapshotteroptions",level:3},{value:"<code>systemStatusOptions</code>",id:"systemstatusoptions",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"autoscaledpooloptions"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"runtaskfunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"runTaskFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("p",null,"A function that performs an asynchronous resource-intensive task. The function must either be labeled ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," or return a promise."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"istaskreadyfunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"isTaskReadyFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("p",null,"A function that indicates whether ",(0,r.kt)("inlineCode",{parentName:"p"},"runTaskFunction")," should be called. This function is called every time there is free capacity for a new task and it\nshould indicate whether it should start a new task or not by resolving to either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". Besides its obvious use, it is also useful for\ntask throttling to save resources."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isfinishedfunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"isFinishedFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"function")),(0,r.kt)("p",null,"A function that is called only when there are no tasks to be processed. If it resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," then the pool's run finishes. Being called only when\nthere are no tasks being processed means that as long as ",(0,r.kt)("inlineCode",{parentName:"p"},"isTaskReadyFunction()")," keeps resolving to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isFinishedFunction()")," will never be\ncalled. To abort a run, use the ",(0,r.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#abort",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.abort()"))," method."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"minconcurrency"},(0,r.kt)("inlineCode",{parentName:"h3"},"minConcurrency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 1")),(0,r.kt)("p",null,"The minimum number of tasks running in parallel."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your code might run extremely slow or crash. If you're\nnot sure, just keep the default value and the concurrency will scale up automatically."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxconcurrency"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxConcurrency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 1000")),(0,r.kt)("p",null,"The maximum number of tasks running in parallel."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"desiredconcurrency"},(0,r.kt)("inlineCode",{parentName:"h3"},"desiredConcurrency")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The desired number of tasks that should be running parallel on the start of the pool, if there is a large enough supply of them. By default, it is\n",(0,r.kt)("inlineCode",{parentName:"p"},"minConcurrency"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"desiredconcurrencyratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"desiredConcurrencyRatio")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 0.95")),(0,r.kt)("p",null,"Minimum level of desired concurrency to reach before more scaling up is allowed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scaleupstepratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"scaleUpStepRatio")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 0.05")),(0,r.kt)("p",null,"Defines the fractional amount of desired concurrency to be added with each scaling up. The minimum scaling step is one."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scaledownstepratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"scaleDownStepRatio")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 0.05")),(0,r.kt)("p",null,"Defines the amount of desired concurrency to be subtracted with each scaling down. The minimum scaling step is one."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mayberunintervalsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"maybeRunIntervalSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 0.5")),(0,r.kt)("p",null,"Indicates how often the pool should call the ",(0,r.kt)("inlineCode",{parentName:"p"},"runTaskFunction()")," to start a new task, in seconds. This has no effect on starting new tasks immediately\nafter a task completes."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"loggingintervalsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"loggingIntervalSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 60")),(0,r.kt)("p",null,"Specifies a period in which the instance logs its state, in seconds. Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," to disable periodic logging."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"autoscaleintervalsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"autoscaleIntervalSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 10")),(0,r.kt)("p",null,"Defines in seconds how often the pool should attempt to adjust the desired concurrency based on the latest system status. Setting it lower than 1\nmight have a severe impact on performance. We suggest using a value from 5 to 20."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tasktimeoutsecs"},(0,r.kt)("inlineCode",{parentName:"h3"},"taskTimeoutSecs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 0")),(0,r.kt)("p",null,"Timeout in which the ",(0,r.kt)("inlineCode",{parentName:"p"},"runTaskFunction")," needs to finish, given in seconds."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"snapshotteroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"snapshotterOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/snapshotter-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SnapshotterOptions"))),(0,r.kt)("p",null,"Options to be passed down to the ",(0,r.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Snapshotter"))," constructor. This is useful for fine-tuning the snapshot intervals and history."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"systemstatusoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"systemStatusOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/system-status-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatusOptions"))),(0,r.kt)("p",null,"Options to be passed down to the ",(0,r.kt)("a",{parentName:"p",href:"../api/system-status",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SystemStatus"))," constructor. This is useful for fine-tuning the system status reports. If a\ncustom snapshotter is set in the options, it will be used by the pool."),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);