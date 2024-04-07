var I=Object.defineProperty;var $=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var k=(s,t,n)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,S=(s,t)=>{for(var n in t||(t={}))E.call(t,n)&&k(s,n,t[n]);if($)for(var n of $(t))q.call(t,n)&&k(s,n,t[n]);return s};import{d as W,az as H,a1 as M,A as _,i as B,l as N,aD as P,ag as R,a0 as m,o as h,O as b,P as p,a as w,a5 as x,F as v,W as C,b as A,V as F,a6 as z,H as O,k as j,Q as U,R as J,T as Q,J as G}from"./vue.1712481511709.js";import{u as V,_ as D}from"./index.1712481511709.js";import{S as K,L as X}from"./main.1712481511709.js";const Y=W({name:"navMenuVertical",components:{SubItem:K},props:{menuList:{type:Array,default:()=>[]}},setup(s){const t=V(),n=H(),r=M({defaultActive:n.meta.isDynamic?n.meta.isDynamicPath:n.path,isCollapse:!1}),y=_(()=>s.menuList),u=_(()=>t.state.themeConfig.themeConfig),c=i=>{const{path:a,meta:l}=i,d=l.isDynamic?l.isDynamicPath.split("/"):a.split("/");return d.length>=4&&l.isHide?d.splice(0,3).join("/"):a};return B(t.state.themeConfig.themeConfig,()=>{document.body.clientWidth<=1e3?r.isCollapse=!1:r.isCollapse=u.value.isCollapse},{immediate:!0}),N(()=>{r.defaultActive=c(n)}),P(i=>{r.defaultActive=c(i),document.body.clientWidth<1e3&&(u.value.isCollapse=!1)}),S({menuLists:y,getThemeConfig:u},R(r))}});function Z(s,t,n,r,y,u){const c=m("SvgIcon"),i=m("SubItem"),a=m("el-sub-menu"),l=m("el-menu-item"),d=m("el-menu");return h(),b(d,{router:"","default-active":s.defaultActive,"background-color":"transparent",collapse:s.isCollapse,"unique-opened":s.getThemeConfig.isUniqueOpened,"collapse-transition":!1},{default:p(()=>[(h(!0),w(v,null,x(s.menuLists,e=>(h(),w(v,null,[e.children&&e.children.length>0?(h(),b(a,{index:e.path,key:e.path},{title:p(()=>[C(c,{name:e.meta.icon},null,8,["name"]),A("span",null,F(e.meta.title),1)]),default:p(()=>[C(i,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(h(),b(l,{index:e.path,key:e.path},z({default:p(()=>[C(c,{name:e.meta.icon},null,8,["name"])]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:p(()=>[A("span",null,F(e.meta.title),1)])}:{name:"title",fn:p(()=>[A("a",{href:e.meta.isLink,target:"_blank",rel:"opener",class:"w100"},F(e.meta.title),9,["href"])])}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}var ee=D(Y,[["render",Z]]);const te=W({name:"layoutAside",components:{Logo:X,Vertical:ee},setup(){const{proxy:s}=j(),t=V(),n=M({menuList:[],clientWidth:0}),r=_(()=>t.state.tagsViewRoutes.isTagsViewCurrenFull),y=_(()=>{const{layout:e,isCollapse:o,menuBar:f}=t.state.themeConfig.themeConfig,g=["#FFFFFF","#FFF","#fff","#ffffff"].includes(f)?"layout-el-aside-br-color":"";if(n.clientWidth<=1e3)if(o){document.body.setAttribute("class","el-popup-parent--hidden");const T=document.querySelector(".layout-container"),L=document.createElement("div");return L.setAttribute("class","layout-aside-mobile-mode"),T.appendChild(L),L.addEventListener("click",u),[g,"layout-aside-mobile","layout-aside-mobile-open"]}else return u(),[g,"layout-aside-mobile","layout-aside-mobile-close"];else return e==="columns"?o?[g,"layout-aside-pc-1"]:[g,"layout-aside-pc-220"]:o?[g,"layout-aside-pc-64"]:[g,"layout-aside-pc-220"]}),u=()=>{const e=document.querySelector(".layout-aside-mobile-mode");e==null||e.setAttribute("style","animation: error-img-two 0.3s"),setTimeout(()=>{var f;(f=e==null?void 0:e.parentNode)==null||f.removeChild(e)},300),document.body.clientWidth<1e3&&(t.state.themeConfig.themeConfig.isCollapse=!1),document.body.setAttribute("class","")},c=_(()=>{let{layout:e,isShowLogo:o}=t.state.themeConfig.themeConfig;return o&&e==="defaults"||o&&e==="columns"}),i=()=>{if(t.state.themeConfig.themeConfig.layout==="columns")return!1;n.menuList=a(t.state.routesList.routesList)},a=e=>e.filter(o=>!o.meta.isHide).map(o=>(o=Object.assign({},o),o.children&&(o.children=a(o.children)),o)),l=e=>{n.clientWidth=e},d=e=>{let{layout:o}=t.state.themeConfig.themeConfig;if(o!=="columns")return!1;e||s.mittBus.emit("restoreDefault"),t.dispatch("routesList/setColumnsMenuHover",e)};return B(t.state.themeConfig.themeConfig,e=>{if(e.isShowLogoChange!==e.isShowLogo){if(!s.$refs.layoutAsideScrollbarRef)return!1;s.$refs.layoutAsideScrollbarRef.update()}}),B(t.state,e=>{let{layout:o,isClassicSplitMenu:f}=e.themeConfig.themeConfig;if(o==="classic"&&f)return!1;i()}),O(()=>{l(document.body.clientWidth),i(),s.mittBus.on("setSendColumnsChildren",e=>{n.menuList=e.children}),s.mittBus.on("setSendClassicChildren",e=>{let{layout:o,isClassicSplitMenu:f}=t.state.themeConfig.themeConfig;o==="classic"&&f&&(n.menuList=[],n.menuList=e.children)}),s.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{i()}),s.mittBus.on("layoutMobileResize",e=>{l(e.clientWidth),u()})}),S({setCollapseStyle:y,setShowLogo:c,isTagsViewCurrenFull:r,onAsideEnterLeave:d},R(n))}}),se={class:"h100"};function ne(s,t,n,r,y,u){const c=m("Logo"),i=m("Vertical"),a=m("el-scrollbar"),l=m("el-aside");return U((h(),w("div",se,[C(l,{class:G(["layout-aside",s.setCollapseStyle])},{default:p(()=>[s.setShowLogo?(h(),b(c,{key:0})):Q("",!0),C(a,{class:"flex-auto",ref:"layoutAsideScrollbarRef",onMouseenter:t[0]||(t[0]=d=>s.onAsideEnterLeave(!0)),onMouseleave:t[1]||(t[1]=d=>s.onAsideEnterLeave(!1))},{default:p(()=>[C(i,{menuList:s.menuList},null,8,["menuList"])]),_:1},512)]),_:1},8,["class"])],512)),[[J,!s.isTagsViewCurrenFull]])}var ue=D(te,[["render",ne]]);export{ue as A};
