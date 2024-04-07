var C=Object.defineProperty;var F=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(e,o,n)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,y=(e,o)=>{for(var n in o||(o={}))k.call(o,n)&&w(e,n,o[n]);if(F)for(var n of F(o))B.call(o,n)&&w(e,n,o[n]);return e};import{d as v,az as V,aB as N,a1 as A,A as R,ag as U,O as x,P as s,a0 as i,o as P,W as t,b as I,J as q,U as E,ax as $,ay as D}from"./vue.1712483380094.js";import{_ as T,u as L,p as j,q as b,r as z,t as H,v as O}from"./index.1712483380094.js";const W=v({name:"loginAccount",setup(){const e=L(),o=V(),n=N(),d=A({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),g=R(()=>j(new Date)),h=async()=>{d.loading.signIn=!0;let a=[],l=[],u=["admin"],c=["btn.add","btn.del","btn.edit","btn.link"],m=["common"],r=["btn.add","btn.link"];d.ruleForm.userName==="admin"?(a=u,l=c):(a=m,l=r);const _={userName:d.ruleForm.userName,photo:d.ruleForm.userName==="admin"?"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg",time:new Date().getTime(),roles:a,authBtnList:l};b.set("token",Math.random().toString(36).substr(0)),b.set("userInfo",_),e.dispatch("userInfos/setUserInfos",_),e.state.themeConfig.themeConfig.isRequestRoutes?(await H(),f()):(await z(),f())},f=()=>{var u,c,m,r;let a=g.value;(u=o.query)!=null&&u.redirect?n.push({path:(c=o.query)==null?void 0:c.redirect,query:Object.keys((m=o.query)==null?void 0:m.params).length>0?JSON.parse((r=o.query)==null?void 0:r.params):""}):n.push("/"),d.loading.signIn=!0;const l="\u6B22\u8FCE\u56DE\u6765\uFF01";O.success(`${a}\uFF0C${l}`)};return y({onSignIn:h},U(d))}}),G=e=>($("data-v-edb861d6"),e=e(),D(),e),J=E("1234"),K=G(()=>I("span",null,"\u767B \u5F55",-1));function M(e,o,n,d,g,h){const f=i("ele-User"),a=i("el-icon"),l=i("el-input"),u=i("el-form-item"),c=i("ele-Unlock"),m=i("ele-Position"),r=i("el-col"),_=i("el-button"),S=i("el-form");return P(),x(S,{size:"large",class:"login-content-form"},{default:s(()=>[t(u,{class:"login-animation1"},{default:s(()=>[t(l,{type:"text",placeholder:"\u7528\u6237\u540D admin \u6216\u4E0D\u8F93\u5747\u4E3A common",modelValue:e.ruleForm.userName,"onUpdate:modelValue":o[0]||(o[0]=p=>e.ruleForm.userName=p),clearable:"",autocomplete:"off"},{prefix:s(()=>[t(a,{class:"el-input__icon"},{default:s(()=>[t(f)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{class:"login-animation2"},{default:s(()=>[t(l,{type:e.isShowPassword?"text":"password",placeholder:"\u5BC6\u7801\uFF1A123456",modelValue:e.ruleForm.password,"onUpdate:modelValue":o[2]||(o[2]=p=>e.ruleForm.password=p),autocomplete:"off"},{prefix:s(()=>[t(a,{class:"el-input__icon"},{default:s(()=>[t(c)]),_:1})]),suffix:s(()=>[I("i",{class:q(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:o[1]||(o[1]=p=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","modelValue"])]),_:1}),t(u,{class:"login-animation3"},{default:s(()=>[t(r,{span:15},{default:s(()=>[t(l,{type:"text",maxlength:"4",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",modelValue:e.ruleForm.code,"onUpdate:modelValue":o[3]||(o[3]=p=>e.ruleForm.code=p),clearable:"",autocomplete:"off"},{prefix:s(()=>[t(a,{class:"el-input__icon"},{default:s(()=>[t(m)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(r,{span:1}),t(r,{span:8},{default:s(()=>[t(_,{class:"login-content-code"},{default:s(()=>[J]),_:1})]),_:1})]),_:1}),t(u,{class:"login-animation4"},{default:s(()=>[t(_,{type:"primary",class:"login-content-submit",round:"",onClick:e.onSignIn,loading:e.loading.signIn},{default:s(()=>[K]),_:1},8,["onClick","loading"])]),_:1})]),_:1})}var Z=T(W,[["render",M],["__scopeId","data-v-edb861d6"]]);export{Z as default};
