var w=Object.defineProperty;var m=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var c=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&c(e,a,t[a]);if(m)for(var a of m(t))y.call(t,a)&&c(e,a,t[a]);return e};import{d as k,az as V,a1 as _,A as i,H as C,n as N,ad as R,i as A,ag as K,a as T,W as p,P as h,k as B,a0 as L,o as r,X as P,O as v,S as H,K as S,aC as $}from"./vue.1712482470355.js";import{_ as x,u as z}from"./index.1712482470355.js";const D=k({name:"layoutParentView",props:{minHeight:{type:String,default:""}},setup(){const{proxy:e}=B(),t=V(),a=z(),s=_({refreshRouterViewKey:null,keepAliveNameList:[]}),u=i(()=>a.state.themeConfig.themeConfig.animation),l=i(()=>a.state.themeConfig.themeConfig),n=i(()=>a.state.keepAliveNames.keepAliveNames);return C(()=>{s.keepAliveNameList=n.value,e.mittBus.on("onTagsViewRefreshRouterView",o=>{s.keepAliveNameList=n.value.filter(d=>t.name!==d),s.refreshRouterViewKey=null,N(()=>{s.refreshRouterViewKey=o,s.keepAliveNameList=n.value})})}),R(()=>{e.mittBus.off("onTagsViewRefreshRouterView")}),A(()=>t.fullPath,()=>{s.refreshRouterViewKey=t.fullPath}),f({getThemeConfig:l,getKeepAliveNames:n,setTransitionName:u},K(s))}}),E={class:"h100"};function I(e,t,a,s,u,l){const n=L("router-view");return r(),T("div",E,[p(n,null,{default:h(({Component:o})=>[p(P,{name:e.setTransitionName,mode:"out-in"},{default:h(()=>[(r(),v($,{include:e.keepAliveNameList},[(r(),v(H(o),{key:e.refreshRouterViewKey,class:"w100",style:S({minHeight:e.minHeight})},null,8,["style"]))],1032,["include"]))]),_:2},1032,["name"])]),_:1})])}var W=x(D,[["render",I]]);export{W as default};