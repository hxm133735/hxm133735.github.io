import{i as a}from"./initCesium.1712481511709.js";import{_ as r}from"./index.1712481511709.js";import{l as c,a as h,b as v,W as _,P as m,a0 as y,o as E,U as p}from"./vue.1712481511709.js";const o=window.Cesium;class u{constructor(e,i,t){this.position=e,this.html=i,this.id=t,this.scratch3dPosition=new o.Cartesian3,this.scratch2dPosition=new o.Cartesian2,this.isEntityVisible=!0,this.initDivEntity(),this.addEventListener()}initDivEntity(){this.entity=window.viewer.entities.add({id:this.id,position:this.position,point:{pixelSize:10,color:o.Color.YELLOW}}),this.testElement=document.createElement("div"),this.testElement.style.position="absolute",this.testElement.style.color="#fff",this.testElement.innerHTML=this.html,this.testElement.id=this.id,window.viewer.container.appendChild(this.testElement)}addEventListener(){window.viewer.clock.onTick.addEventListener(e=>{let i,t;if(this.entity.position&&(i=this.entity.position.getValue(e.currentTime,this.scratch3dPosition)),i&&(t=o.SceneTransforms.wgs84ToWindowCoordinates(window.viewer.scene,i,this.scratch2dPosition)),t){const s=this.testElement.clientWidth,n=this.testElement.clientHeight;this.testElement.style.left=t.x-s/2+"px",this.testElement.style.top=t.y-n/2+"px",this.isEntityVisible||(this.isEntityVisible=!0,this.testElement.style.display="block")}else this.isEntityVisible&&(this.isEntityVisible=!1,this.testElement.style.display="none")})}}const w={id:"cesiumContainer"},f={class:"btnList"},b=p("\u751F\u6210mark"),C={name:"DivBillboardEntity"},x=Object.assign(C,{setup(d){const e=window.Cesium,i=()=>{window.viewer=a("cesiumContainer"),window.viewer._cesiumWidget._creditContainer.style.display="none"},t=()=>{let s=`<div class="divEntityMark">
    <div class="div-entity-title">div\u70B9\u4F4D\u6807\u9898</div>
    <div class="div-entity-line"></div>
    <div class="div-entity-con">div\u70B9\u4F4D\u5185\u5BB9</div>
</div>
    <div class="divEntityMarkFooter"><div class="trangle"></div></div>`,n=e.Cartesian3.fromDegrees(-75.59777,40.03883);new u(n,s,"divEntity")};return c(()=>{i()}),(s,n)=>{const l=y("el-button");return E(),h("div",w,[v("div",f,[_(l,{onClick:t},{default:m(()=>[b]),_:1})])])}}});var B=r(x,[["__scopeId","data-v-6e67e4d6"]]);export{B as default};
