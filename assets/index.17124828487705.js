var r=Object.defineProperty;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?r(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))_.call(e,t)&&i(o,t,e[t]);if(s)for(var t of s(e))g.call(e,t)&&i(o,t,e[t]);return o};import d from"./account.1712482848770.js";import m from"./mobile.1712482848770.js";import p from"./scan.1712482848770.js";import{_ as u,u as f}from"./index.1712482848770.js";import{l as h}from"./logo-mini.1712482848770.js";import{d as v,a1 as C,A as T,ag as b,a as A,b as n,V as a,W as x,a0 as I,o as S}from"./vue.1712482848770.js";var V="/assets/login-icon-two.1712482848770.svg";const $=v({name:"loginIndex",components:{Account:d,Mobile:m,Scan:p},setup(){const o=f(),e=C({tabsActiveName:"account",isScan:!1}),t=T(()=>o.state.themeConfig.themeConfig);return c({logoMini:h,loginIconTwo:V,getThemeConfig:t},b(e))}}),w={class:"login-container"},y={class:"login-icon-group"},B={class:"login-icon-group-title"},M=["src"],N={class:"login-icon-group-title-text font25"},k=["src"],D={class:"login-content"},E={class:"login-content-main"},R={class:"login-content-title ml15"};function W(o,e,t,j,q,z){const l=I("Account");return S(),A("div",w,[n("div",y,[n("div",B,[n("img",{src:o.logoMini},null,8,M),n("div",N,a(o.getThemeConfig.globalViceTitle),1)]),n("img",{src:o.loginIconTwo,class:"login-icon-group-icon"},null,8,k)]),n("div",D,[n("div",E,[n("h4",R,a(o.getThemeConfig.globalTitle),1),x(l)])])])}var P=u($,[["render",W],["__scopeId","data-v-0792e9e2"]]);export{P as default};