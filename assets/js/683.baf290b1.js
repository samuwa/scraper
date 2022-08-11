"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[683],{40683:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ze});var n=a(67294),r=a(86010),l=a(10833),i=a(35281),c=a(53791),o=a(43320),s=a(74477),d=a(1116),m=a(92622),u=a(95999),b=a(2730);const p="backToTopButton_sjWU",v="backToTopButtonShow_xfvO";function f(){var e=(0,b.a)({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,p,t&&v),type:"button",onClick:a})}var h=a(76775),E=a(87524),_=a(86668),k=a(87846),g=a(87462);function C(e){return n.createElement("svg",(0,g.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I),onClick:t},n.createElement(C,{className:S}))}var N=a(59689),x=a(12466),y=a(63366),T=a(14353),L=a(69688),M=a(86043),A=a(48596),B=a(39960),w=a(72389),H=["item","onItemClick","activePath","level","index"];function P(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function D(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,s=e.index,d=(0,y.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,f=(0,_.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,w.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),k=(0,A.Mg)(v,l),C=(0,M.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,Z=(0,T.f)(),N=Z.expandedItem,x=Z.setExpandedItem,D=function(e){void 0===e&&(e=!I),x(e?null:s),S(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,L.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:I,updateCollapsed:D}),(0,n.useEffect)((function(){b&&N&&N!==s&&f&&S(!0)}),[b,N,s,S,f]),n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(B.default,(0,g.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),v?D(!1):(e.preventDefault(),D())}:function(){null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=h?h:"#":h},d),u),v&&b&&n.createElement(P,{categoryLabel:u,onClick:function(e){e.preventDefault(),D()}})),n.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(O,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:o+1})))}var F=a(13919),W=a(39471);const R="menuExternalLink_NmtK";var z=["item","onItemClick","activePath","level","index"];function K(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,s=(e.index,(0,y.Z)(e,z)),d=t.href,m=t.label,u=t.className,b=(0,c._F)(t,l),p=(0,F.Z)(d);return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},n.createElement(B.default,(0,g.Z)({className:(0,r.Z)("menu__link",!p&&R,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:a?function(){return a(t)}:void 0},s),m,!p&&n.createElement(W.Z,null)))}const V="menuHtmlItem_M9Kj";function j(e){var t=e.item,a=e.level,l=e.index,c=t.value,o=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),o&&[V,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}var G=["item"];function U(e){var t=e.item,a=(0,y.Z)(e,G);switch(t.type){case"category":return n.createElement(D,(0,g.Z)({item:t},a));case"html":return n.createElement(j,(0,g.Z)({item:t},a));default:return n.createElement(K,(0,g.Z)({item:t},a))}}var Y=["items"];function q(e){var t=e.items,a=(0,y.Z)(e,Y);return n.createElement(T.D,null,t.map((function(e,t){return n.createElement(U,(0,g.Z)({key:t,item:e,index:t},a))})))}const O=(0,n.memo)(q),X="menu_SIkG",J="menuWithAnnouncementBar_GW3s";function Q(e){var t=e.path,a=e.sidebar,l=e.className,c=function(){var e=(0,N.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,x.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",X,c&&J,l)},n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:a,activePath:t,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function ne(e){var t=e.path,a=e.sidebar,l=e.onCollapse,i=e.isHidden,c=(0,_.L)(),o=c.navbar.hideOnScroll,s=c.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.Z)($,o&&ee,i&&te)},o&&n.createElement(k.Z,{tabIndex:-1,className:ae}),n.createElement(Q,{path:t,sidebar:a}),s&&n.createElement(Z,{onClick:l}))}const re=n.memo(ne);var le=a(13102),ie=a(93163),ce=function(e){var t=e.sidebar,a=e.path,l=(0,ie.e)();return n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function oe(e){return n.createElement(le.Zo,{component:ce,props:e})}const se=n.memo(oe);function de(e){var t=(0,E.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(re,e),r&&n.createElement(se,e))}const me="expandButton_m80_",ue="expandButtonIcon_BlDH";function be(e){var t=e.toggleSidebar;return n.createElement("div",{className:me,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:ue}))}const pe="docSidebarContainer_b6E3",ve="docSidebarContainerHidden_b3ry";function fe(e){var t,a=e.children,r=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function he(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,c=(0,h.TH)().pathname,o=(0,n.useState)(!1),s=o[0],d=o[1],m=(0,n.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return n.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,pe,a&&ve),onTransitionEnd:function(e){e.currentTarget.classList.contains(pe)&&a&&d(!0)}},n.createElement(fe,null,n.createElement(de,{sidebar:t,path:c,onCollapse:m,isHidden:s})),s&&n.createElement(be,{toggleSidebar:m}))}const Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,d.V)();return n.createElement("main",{className:(0,r.Z)(Ee.docMainContainer,(t||!l)&&Ee.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},a))}const ke="docPage__5DB",ge="docsWrapper_BCFX";function Ce(e){var t=e.children,a=(0,d.V)(),r=(0,n.useState)(!1),l=r[0],i=r[1];return n.createElement(m.Z,{wrapperClassName:ge},n.createElement(f,null),n.createElement("div",{className:ke},a&&n.createElement(he,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),n.createElement(_e,{hiddenSidebarContainer:l},t)))}var Ie=a(84204),Se=a(90197);function Ze(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Ie.default,null);var m=a.docElement,u=a.sidebarName,b=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Se.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:u,items:b},n.createElement(Ce,null,m)))))}},14353:(e,t,a)=>{a.d(t,{D:()=>c,f:()=>o});var n=a(67294),r=a(69688),l=Symbol("EmptyContext"),i=n.createContext(l);function c(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],c=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(i.Provider,{value:c},t)}function o(){var e=(0,n.useContext)(i);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,a)=>{a.d(t,{a:()=>i});var n=a(67294),r=a(12466),l=a(85936);function i(e){var t=e.threshold,a=(0,n.useState)(!1),i=a[0],c=a[1],o=(0,n.useRef)(!1),s=(0,r.Ct)(),d=s.startScroll,m=s.cancelScroll;return(0,r.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(o.current?o.current=!1:n>=r?(m(),c(!1)):n<t?c(!1):n+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,l.S)((function(e){e.location.hash&&(o.current=!0,c(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}}}]);