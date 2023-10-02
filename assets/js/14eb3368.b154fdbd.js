"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9817],{19242:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(67294),r=a(44873),i=a(2247),l=a(51402),s=a(34334),c=a(88746),o=a(71699),m=a(11614);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,a=e.children;return n.createElement(c.default,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer)},a)}function v(e){var t=e.href,a=e.icon,r=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i},i))}function h(e){var t,a=e.item,r=(0,i.Wl)(a);return r?n.createElement(v,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function b(e){var t,a,r=e.item,l=(0,o.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(v,{href:r.href,icon:l,title:r.label,description:null!=(a=r.description)?a:null==s?void 0:s.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,a=(0,i.jA)();return n.createElement(p,{items:a.items,className:t})}function p(e){var t=e.items,a=e.className;if(!t)return n.createElement(g,e);var r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},r.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}var E=a(6724),N=a(18554),k=a(42826),L=a(89372),Z=a(34055);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function x(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement("div",{className:_.generatedIndexPage},n.createElement(N.Z,null),n.createElement(L.default,null),n.createElement(k.default,null),n.createElement("header",null,n.createElement(Z.default,{as:"h1",className:_.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(p,{items:a.items,className:_.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(E.default,{previous:t.navigation.previous,next:t.navigation.next})))}function I(e){return n.createElement(n.Fragment,null,n.createElement(T,e),n.createElement(x,e))}},6724:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(87462),r=a(67294),i=a(11614),l=a(34334),s=a(88746);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(s.default,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},42826:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(34334),i=a(11614),l=a(18015),s=a(6141);function c(e){var t=e.className,a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},18554:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(34334),i=a(6832),l=a(88746),s=a(11614),c=a(29394),o=a(18015),m=a(4049),d=a(6141);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.default,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,l=e.versionMetadata,s=(0,i.default)().siteConfig.title,d=(0,c.useActivePlugin)({failfast:!0}).pluginId,u=(0,m.J)(d).savePreferredVersionName,b=(0,c.useDocVersionSuggestions)(d),f=b.latestDocSuggestion,g=b.latestVersionSuggestion,p=null!=f?f:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:g.label,to:p.path,onClick:function(){return u(g.name)}})))}function f(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}},34055:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(87462),r=a(63366),i=a(67294),l=a(34334),s=a(11614),c=a(96793),o=a(88746);const m={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,c.L)().navbar.hideOnScroll;if("h1"===t||!a)return i.createElement(t,(0,n.Z)({},u,{id:void 0}));var h=(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:a});return i.createElement(t,(0,n.Z)({},u,{className:(0,l.Z)("anchor",v?m.anchorWithHideOnScrollNavbar:m.anchorWithStickyNavbar,u.className),id:a}),u.children,i.createElement(o.default,{className:"hash-link",to:"#"+a,"aria-label":h,title:h},"\u200b"))}},89372:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(87462),r=a(67294),i=a(94397),l=a(18015),s=a(2247),c=a(18407),o=a(88746),m=a(11614),d=a(51402),u=a(16550);function v(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_IbIC"};function b(){var e=(0,d.Z)("/"),t=(0,u.TH)().pathname.replace(new RegExp("^"+e),""),a=(0,d.Z)(t.split("/")[0]),n="/"===e?a:e;return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:n},r.createElement(v,{className:h.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_TXK0"};function g(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.default,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function p(e){var t=e.children,a=e.active,l=e.index,s=e.addMicrodata;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){var e,t=null==(e=(0,s.s1)())?void 0:e.slice(0,-1),a=(0,c.Ns)();return t&&0!==t.length?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},a&&r.createElement(b,null),t.map((function(e,t){return r.createElement(p,{key:t,active:false,index:t,addMicrodata:!!e.href},r.createElement(g,{href:e.href,isLast:false},e.label))})))):null}}}]);