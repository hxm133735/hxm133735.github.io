import{d as k,az as y,A as H,i as x,a0 as o,o as t,O as s,P as r,W as a,T as d,J as u,k as C}from"./vue.1712481511709.js";import{_ as h,u as F}from"./index.1712481511709.js";import{A as $}from"./aside.1712481511709.js";import{H as A,M as g}from"./main.1712481511709.js";import"./logo-mini.1712481511709.js";import"./parent.1712481511709.js";const w=k({name:"layoutDefaults",components:{Aside:$,Header:A,Main:g},setup(){const{proxy:e}=C(),n=F(),c=y(),l=H(()=>n.state.themeConfig.themeConfig.isFixedHeader);return x(()=>c.path,()=>{e.$refs.layoutDefaultsScrollbarRef.wrap$.scrollTop=0}),{isFixedHeader:l}}});function M(e,n,c,l,D,R){const m=o("Aside"),i=o("Header"),_=o("Main"),f=o("el-scrollbar"),p=o("el-container"),b=o("el-backtop");return t(),s(p,{class:"layout-container"},{default:r(()=>[a(m),a(p,{class:u(["flex-center",{"layout-backtop":!e.isFixedHeader}])},{default:r(()=>[e.isFixedHeader?(t(),s(i,{key:0})):d("",!0),a(f,{ref:"layoutDefaultsScrollbarRef",class:u({"layout-backtop":e.isFixedHeader})},{default:r(()=>[e.isFixedHeader?d("",!0):(t(),s(i,{key:0})),a(_)]),_:1},8,["class"])]),_:1},8,["class"]),a(b,{target:".layout-backtop .el-scrollbar__wrap"})]),_:1})}var V=h(w,[["render",M]]);export{V as default};
