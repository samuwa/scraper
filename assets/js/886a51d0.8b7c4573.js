"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=r,m=k["".concat(p,".").concat(c)]||k[c]||d[c]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},53575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id_old:"version-1.3-key-value-store",title:"KeyValueStore",id:"key-value-store"},p=void 0,s={unversionedId:"api/key-value-store",id:"version-1.3/api/key-value-store",title:"KeyValueStore",description:"The KeyValueStore class represents a key-value store, a simple data storage that is used for saving and reading data records or files. Each data",source:"@site/versioned_docs/version-1.3/api/KeyValueStore.md",sourceDirName:"api",slug:"/api/key-value-store",permalink:"/docs/1.3/api/key-value-store",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1664796616,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{id_old:"version-1.3-key-value-store",title:"KeyValueStore",id:"key-value-store"},sidebar:"version-1.3/docs",previous:{title:"Dataset",permalink:"/docs/1.3/api/dataset"},next:{title:"AutoscaledPool",permalink:"/docs/1.3/api/autoscaled-pool"}},u={},d=[{value:"<code>keyValueStore.getValue(key)</code>",id:"keyvaluestoregetvaluekey",level:2},{value:"<code>keyValueStore.setValue(key, value, [options])</code>",id:"keyvaluestoresetvaluekey-value-options",level:2},{value:"<code>keyValueStore.drop()</code>",id:"keyvaluestoredrop",level:2},{value:"<code>keyValueStore.getPublicUrl(key)</code>",id:"keyvaluestoregetpublicurlkey",level:2},{value:"<code>keyValueStore.forEachKey(iteratee, [options])</code>",id:"keyvaluestoreforeachkeyiteratee-options",level:2}],k={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"keyvaluestore"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," class represents a key-value store, a simple data storage that is used for saving and reading data records or files. Each data\nrecord is represented by a unique key and associated with a MIME content type. Key-value stores are ideal for saving screenshots, actor inputs and\noutputs, web pages, PDFs or to persist the state of crawlers."),(0,o.kt)("p",null,"Do not instantiate this class directly, use the ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#openkeyvaluestore",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.openKeyValueStore()"))," function instead."),(0,o.kt)("p",null,"Each actor run is associated with a default key-value store, which is created exclusively for the run. By convention, the actor input and output are\nstored into the default key-value store under the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," key, respectively. Typically, input and output are JSON files, although it can\nbe any other format. To access the default key-value store directly, you can use the ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#getvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.getValue()"))," and\n",(0,o.kt)("a",{parentName:"p",href:"../api/apify#setvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.setValue()"))," convenience functions."),(0,o.kt)("p",null,"To access the input, you can also use the ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#getinput",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.getInput()"))," convenience function."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," stores its data either on local disk or in the Apify cloud, depending on whether the\n",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables#apify_local_storage_dir",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_LOCAL_STORAGE_DIR"))," or ",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables#apify_token",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN")),"\nenvironment variables are set."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable is set, the data is stored in the local directory in the following files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/key_value_stores/{STORE_ID}/{INDEX}.{EXT}\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"{STORE_ID}")," is the name or ID of the key-value store. The default key-value store has ID: ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")," environment variable. The ",(0,o.kt)("inlineCode",{parentName:"p"},"{KEY}")," is the key of the record and ",(0,o.kt)("inlineCode",{parentName:"p"},"{EXT}")," corresponds to the MIME content type of the\ndata value."),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables#apify_token",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable is set but\n",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables#apify_local_storage_dir",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_LOCAL_STORAGE_DIR"))," not, the data is stored in the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/storage/key-value-store",target:"_blank",rel:"noopener"},"Apify Key-value store")," cloud storage. Note that you can force usage of the cloud storage also by\npassing the ",(0,o.kt)("inlineCode",{parentName:"p"},"forceCloud")," option to ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#openkeyvaluestore",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.openKeyValueStore()"))," function, even if the\n",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables#apify_local_storage_dir",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_LOCAL_STORAGE_DIR"))," variable is set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Get actor input from the default key-value store.\nconst input = await Apify.getInput();\n// Get some value from the default key-value store.\nconst otherValue = await Apify.getValue('my-key');\n\n// Write actor output to the default key-value store.\nawait Apify.setValue('OUTPUT', { myResult: 123 });\n\n// Open a named key-value store\nconst store = await Apify.openKeyValueStore('some-name');\n\n// Write a record. JavaScript object is automatically converted to JSON,\n// strings and binary buffers are stored as they are\nawait store.setValue('some-key', { foo: 'bar' });\n\n// Read a record. Note that JSON is automatically parsed to a JavaScript object,\n// text data returned as a string and other data is returned as binary buffer\nconst value = await store.getValue('some-key');\n\n// Drop (delete) the store\nawait store.drop();\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"getvalue"}),(0,o.kt)("h2",{id:"keyvaluestoregetvaluekey"},(0,o.kt)("inlineCode",{parentName:"h2"},"keyValueStore.getValue(key)")),(0,o.kt)("p",null,"Gets a value from the key-value store."),(0,o.kt)("p",null,"The function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to the record value, whose JavaScript type depends on the MIME content type of the record. Records with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")," content type are automatically parsed and returned as a JavaScript object. Similarly, records with ",(0,o.kt)("inlineCode",{parentName:"p"},"text/plain")," content types\nare returned as a string. For all other content types, the value is returned as a raw ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Buffer"))," instance."),(0,o.kt)("p",null,"If the record does not exist, the function resolves to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"To save or delete a value in the key-value store, use the ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store#setvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore.setValue()"))," function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = await Apify.openKeyValueStore();\nconst buffer = await store.getValue('screenshot1.png');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Unique key of the record. It can be at most 256 characters long and only consist of the following characters: ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"z"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"A"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"Z"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"9")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"!-_.'()"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../typedefs/key-value-store-value-types",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Promise<KeyValueStoreValueTypes>"))," - Returns a promise that resolves to an object, string or\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Buffer")),", depending on the MIME content type of the record."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"setvalue"}),(0,o.kt)("h2",{id:"keyvaluestoresetvaluekey-value-options"},(0,o.kt)("inlineCode",{parentName:"h2"},"keyValueStore.setValue(key, value, [options])")),(0,o.kt)("p",null,"Saves or deletes a record in the key-value store. The function returns a promise that resolves once the record has been saved or deleted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = await Apify.openKeyValueStore();\nawait store.setValue('OUTPUT', { foo: 'bar' });\n")),(0,o.kt)("p",null,"Beware that the key can be at most 256 characters long and only contain the following characters: ",(0,o.kt)("inlineCode",{parentName:"p"},"a-zA-Z0-9!-_.'()")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is converted to JSON and stored with the ",(0,o.kt)("inlineCode",{parentName:"p"},"application/json; charset=utf-8")," MIME content type. To store the value with another\ncontent type, pass it in the options as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const store = await Apify.openKeyValueStore('my-text-store');\nawait store.setValue('RESULTS', 'my text data', { contentType: 'text/plain' });\n")),(0,o.kt)("p",null,"If you set custom content type, ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," must be either a string or ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Buffer")),", otherwise an error will be thrown."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", the record is deleted instead. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue()")," function succeeds regardless whether the record existed or not."),(0,o.kt)("p",null,"To retrieve a value from the key-value store, use the ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store#getvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore.getValue()"))," function."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Always make sure to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," keyword when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue()"),", otherwise the actor process might finish before the value is\nstored!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Unique key of the record. It can be at most 256 characters long and only consist of the following characters: ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"z"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"A"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"Z"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"-",(0,o.kt)("inlineCode",{parentName:"li"},"9")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"!-_.'()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"value")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/key-value-store-value-types",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStoreValueTypes"))," - Record data, which can be one of the following values:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),", the record in the key-value store is deleted."),(0,o.kt)("li",{parentName:"ul"},"If no ",(0,o.kt)("inlineCode",{parentName:"li"},"options.contentType")," is specified, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," can be any JavaScript object and it will be stringified to JSON."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"options.contentType")," is set, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," is taken as is and it must be a ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," or ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Buffer")),". For any\nother value an error will be thrown."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[contentType]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Specifies a custom MIME content type of the record.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"drop"}),(0,o.kt)("h2",{id:"keyvaluestoredrop"},(0,o.kt)("inlineCode",{parentName:"h2"},"keyValueStore.drop()")),(0,o.kt)("p",null,"Removes the key-value store either from the Apify cloud storage or from the local directory, depending on the mode of operation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"getpublicurl"}),(0,o.kt)("h2",{id:"keyvaluestoregetpublicurlkey"},(0,o.kt)("inlineCode",{parentName:"h2"},"keyValueStore.getPublicUrl(key)")),(0,o.kt)("p",null,"Returns a URL for the given key that may be used to publicly access the value in the remote key-value store."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"foreachkey"}),(0,o.kt)("h2",{id:"keyvaluestoreforeachkeyiteratee-options"},(0,o.kt)("inlineCode",{parentName:"h2"},"keyValueStore.forEachKey(iteratee, [options])")),(0,o.kt)("p",null,"Iterates over key-value store keys, yielding each in turn to an ",(0,o.kt)("inlineCode",{parentName:"p"},"iteratee")," function. Each invocation of ",(0,o.kt)("inlineCode",{parentName:"p"},"iteratee")," is called with three arguments:\n",(0,o.kt)("inlineCode",{parentName:"p"},"(key, index, info)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is the record key, ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," is a zero-based index of the key in the current iteration (regardless of\n",(0,o.kt)("inlineCode",{parentName:"p"},"options.exclusiveStartKey"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," is an object that contains a single property ",(0,o.kt)("inlineCode",{parentName:"p"},"size")," indicating size of the record in bytes."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"iteratee")," function returns a Promise then it is awaited before the next call. If it throws an error, the iteration is aborted and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"forEachKey")," function throws the error."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const keyValueStore = await Apify.openKeyValueStore();\nawait keyValueStore.forEachKey(async (key, index, info) => {\n    console.log(`Key at ${index}: ${key} has size ${info.size}`);\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"iteratee")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/key-consumer",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyConsumer"))," - A function that is called for every key in the key-value store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," - All ",(0,o.kt)("inlineCode",{parentName:"li"},"forEachKey()")," parameters are passed via an options object with the following keys:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[exclusiveStartKey]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - All keys up to this one (including) are skipped from the result.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);