import{_ as d,u as f}from"./index.1712482470355.js";import{A as u}from"./aside.1712482470355.js";import{H as g,M as h,T as C}from"./main.1712482470355.js";import{d as T,A as k,a0 as e,o as n,O as s,P as c,W as o,b,T as w}from"./vue.1712482470355.js";import"./logo-mini.1712482470355.js";import"./parent.1712482470355.js";const y=T({name:"layoutClassic",components:{Aside:u,Header:g,Main:h,TagsView:C},setup(){const t=f();return{getThemeConfig:k(()=>t.state.themeConfig.themeConfig)}}}),V={class:"flex-center layout-backtop"};function x(t,r,A,v,H,M){const i=e("Header"),m=e("Aside"),p=e("TagsView"),_=e("Main"),a=e("el-container"),l=e("el-backtop");return n(),s(a,{class:"layout-container flex-center"},{default:c(()=>[o(i),o(a,{class:"layout-mian-height-50"},{default:c(()=>[o(m),b("div",V,[t.getThemeConfig.isTagsview?(n(),s(p,{key:0})):w("",!0),o(_)])]),_:1}),o(l,{target:".layout-backtop .el-main .el-scrollbar__wrap"})]),_:1})}var W=d(y,[["render",x]]);export{W as default};
