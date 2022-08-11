(self.webpackChunk=self.webpackChunk||[]).push([[4561],{85448:(e,t,n)=>{"use strict";n.d(t,{F:()=>l});var r=n(67294),a=n(69688),s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){var n=(0,r.useState)(),c=n[0],l=n[1],i=(0,r.useCallback)((function(){var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,r.useEffect)((function(){i()}),[i]),function(e,t,n){void 0===n&&(n=s);var c=(0,a.zX)(t),l=(0,a.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(c);return e&&t.observe(e,l),function(){return t.disconnect()}}),[e,c,l])}(c,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=(0,r.useState)(!1),s=a[0],l=a[1],i=(0,r.useRef)(null),u=(0,r.useCallback)((function(){var e=i.current.querySelector("code");t?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),n((function(e){return!e}))}),[i,t]),o=(0,r.useCallback)((function(){var e=i.current,t=e.scrollWidth>e.clientWidth||i.current.querySelector("code").hasAttribute("style");l(t)}),[i]);return c(i,o),(0,r.useEffect)((function(){o()}),[t,o]),(0,r.useEffect)((function(){return window.addEventListener("resize",o,{passive:!0}),function(){window.removeEventListener("resize",o)}}),[o]),{codeBlockRef:i,isEnabled:t,isCodeScrollable:s,toggle:u}}},66412:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var r=n(92949),a=n(86668);function s(){var e=(0,a.L)().prism,t=(0,r.I)().colorMode,n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},37016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>d,bc:()=>o,nZ:()=>m,nt:()=>f});var r=n(26528),a=n(87594),s=n.n(a),c=(0,r.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),l=(0,r.Z)(/\{([\d,-]+)\}/,{range:1}),i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function u(e,t){var n=e.map((function(e){var n=i[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function o(e){var t,n;return null!=(t=null==e||null==(n=e.match(c))?void 0:n.groups.title)?t:""}function f(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){var t=e.split(" ").find((function(e){return e.startsWith("language-")}));return null==t?void 0:t.replace(/language-/,"")}function m(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,c=t.metastring;if(c&&l.test(c)){var o=c.match(l).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+c+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var f=a[0].className,d=s()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[f]]}));return{lineClassNames:Object.fromEntries(d),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var m=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);default:return u(Object.keys(i),t)}}(r,a),p=n.split("\n"),v=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),h=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),b=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),g=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),E=0;E<p.length;){var k=p[E].match(m);if(k){var j=k.slice(1).find((function(e){return void 0!==e}));h[j]?v[h[j]].range+=E+",":b[j]?v[b[j]].start=E:g[j]&&(v[g[j]].range+=v[g[j]].start+"-"+(E-1)+","),p.splice(E,1)}else E+=1}n=p.join("\n");var N={};return Object.entries(v).forEach((function(e){var t=e[0],n=e[1].range;s()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}function p(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],s=t[r];s&&"string"==typeof a&&(n[s]=a)})),n}},70538:(e,t,n)=>{"use strict";var r=n(67294),a=n(39960),s=n(28754),c=n(12974),l=n(92503),i=n(96892),u=n(25845),o=n(37850),f=function(e){return e&&e.__esModule?e:{default:e}},d=f(r),m=f(a),p=f(l);function v(e,t,n){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&n&&n.name!==t.version){var r="current"===n.name?"next":n.name;return e.endsWith("/api")?e+"/"+r:e.replace("/api/","/api/"+r+"/")}return e}e.exports=function(e){var t=e.options,n=e.packages,a=e.history,l=c.useDocsVersion(),f=s.useDocsPreferredVersion(l.pluginId).preferredVersion;return r.useEffect((function(){1===n.length?a.replace(v(n[0].entryPoints[0].reflection.permalink,l,f)):f&&a.replace(v(a.location.pathname,l,f))}),[n,a,l,f]),d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"col apiItemCol"},t.banner&&d.default.createElement("div",{className:"alert alert--info margin-bottom--md",role:"alert"},d.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.banner}})),d.default.createElement(o.VersionBanner,null),d.default.createElement("div",{className:"apiItemContainer"},d.default.createElement("article",null,d.default.createElement("div",{className:"markdown"},d.default.createElement("header",null,d.default.createElement(p.default,{as:"h1"},"API")),d.default.createElement("section",{className:"tsd-panel"},d.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),d.default.createElement("div",{className:"tsd-panel-content"},d.default.createElement("ul",{className:"tsd-index-list"},n.map((function(e){return d.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},d.default.createElement(m.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},d.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",d.default.createElement("span",null,i.removeScopes(e.packageName,t.scopes))))})))))),d.default.createElement(u.Footer,null)))))}},96892:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScopes=function(e,t){return 0===t.length?e:t.reduce((function(e,t){return e.replace(new RegExp("^("+t+"-|@"+t+"/)"),"")}),e)}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);