import{i as o}from"./initCesium.1712455886563.js";import{g as r}from"./camera.1712455886563.js";import{_ as s}from"./index.1712455886563.js";import{l as d,a as c,o as l}from"./vue.1712455886563.js";const a=window.Cesium;class m{constructor(e){this.init(e)}init(e){let i=window.viewer.scene.primitives.add(new a.BillboardCollection);for(let t=0;t<100;t++)i.add({position:new a.Cartesian3.fromDegrees(Math.random()*(102-99+1)+99,Math.random()*(28-24+1)+25,50),image:"./plane.png",verticalOrigin:a.VerticalOrigin.BOTTOM,width:32,height:32})}}const _={id:"cesiumContainer"},p={setup(n){const e=()=>{window.viewer=o("cesiumContainer"),window.viewer._cesiumWidget._creditContainer.style.display="none"},i={destination:{x:-1.2183642160355898e6,y:6.0906401364104245e6,z:2447938059039749e-9},orientation:{heading:.149353801108421,pitch:-.5111480844553888,roll:6.282977812735142}};return d(()=>{e(),new m,r(i)}),(t,u)=>(l(),c("div",_))}};var f=s(p,[["__scopeId","data-v-2d9a8afb"]]);export{f as default};
