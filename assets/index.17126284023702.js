import{_ as u,u as l,a as n,L as a}from"./index.1712628402370.js";import{d,aA as i,A as _,H as m,ad as c,o as p,O as f,S as y,k as v}from"./vue.1712628402370.js";import"./cesium.1712628402370.js";const L=d({name:"layout",components:{defaults:i(()=>n(()=>import("./defaults.1712628402370.js"),["assets/defaults.1712628402370.js","assets/vue.1712628402370.js","assets/index.1712628402370.js","assets/index.1712628402370.css","assets/cesium.1712628402370.js","assets/aside.1712628402370.js","assets/main.1712628402370.js","assets/main.1712628402370.css","assets/logo-mini.1712628402370.js","assets/parent.1712628402370.js"])),classic:i(()=>n(()=>import("./classic.1712628402370.js"),["assets/classic.1712628402370.js","assets/index.1712628402370.js","assets/index.1712628402370.css","assets/vue.1712628402370.js","assets/cesium.1712628402370.js","assets/aside.1712628402370.js","assets/main.1712628402370.js","assets/main.1712628402370.css","assets/logo-mini.1712628402370.js","assets/parent.1712628402370.js"])),transverse:i(()=>n(()=>import("./transverse.1712628402370.js"),["assets/transverse.1712628402370.js","assets/main.1712628402370.js","assets/main.1712628402370.css","assets/vue.1712628402370.js","assets/index.1712628402370.js","assets/index.1712628402370.css","assets/cesium.1712628402370.js","assets/logo-mini.1712628402370.js","assets/parent.1712628402370.js"])),columns:i(()=>n(()=>import("./columns.1712628402370.js"),["assets/columns.1712628402370.js","assets/columns.1712628402370.css","assets/index.1712628402370.js","assets/index.1712628402370.css","assets/vue.1712628402370.js","assets/cesium.1712628402370.js","assets/aside.1712628402370.js","assets/main.1712628402370.js","assets/main.1712628402370.css","assets/logo-mini.1712628402370.js","assets/parent.1712628402370.js"]))},setup(){const{proxy:t}=v(),r=l(),e=_(()=>r.state.themeConfig.themeConfig),o=()=>{a.get("oldLayout")||a.set("oldLayout",e.value.layout);const s=document.body.clientWidth;s<1e3?(e.value.isCollapse=!1,t.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:s})):t.mittBus.emit("layoutMobileResize",{layout:a.get("oldLayout")?a.get("oldLayout"):e.value.layout,clientWidth:s})};return m(()=>{o(),window.addEventListener("resize",o)}),c(()=>{window.removeEventListener("resize",o)}),{getThemeConfig:e}}});function g(t,r,e,o,s,E){return p(),f(y(t.getThemeConfig.layout))}var R=u(L,[["render",g]]);export{R as default};
