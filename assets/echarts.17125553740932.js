import{i as y}from"./initCesium.1712555374093.js";import{e as _,r as v,a as w,b as C,c as g,i as L,B as M,d as S}from"./echarts.1712555374093.js";import{_ as E}from"./index.1712555374093.js";import{l as N,a as x,o as O}from"./vue.1712555374093.js";const r=window.Cesium;(function(){function c(a){this._viewer=a,f(this),i(this),h(this)}Object.defineProperties(c.prototype,{chart:{get:function(){return this._chart}}});function f(a){if(!r.defined(_))throw new r.DeveloperError("echarts is undefined.");v("GLMap",d(a._viewer)),w({type:"GLMapRoam",event:"GLMapRoam",update:"updateLayout"},function(t,e){}),C({type:"GLMap",defaultOption:{roam:!1}}),g({type:"GLMap",init:function(t,e){this.api=e,a._viewer.scene.postRender.addEventListener(this.moveHandler,this)},moveHandler:function(t,e){this.api.dispatchAction({type:"GLMapRoam"})},render:function(t,e,s){},dispose:function(t){a._viewer.scene.postRender.removeEventListener(this.moveHandler,this)}})}function i(a){var t=a._viewer.scene;t.canvas.setAttribute("tabIndex",0);var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width=t.canvas.width+"px",e.style.height=t.canvas.height+"px",e.style.pointerEvents="none",e.setAttribute("id","echarts"),e.setAttribute("class","echartMap"),a._viewer.container.appendChild(e),a._echartsContainer=e,a._chart=L(e)}function h(a){window.onresize=function(){var t=a._viewer.scene;a._echartsContainer.style.width=t.canvas.style.width+"px",a._echartsContainer.style.height=t.canvas.style.height+"px",a._chart.resize()}}c.prototype.isDestroyed=function(){return!1},c.prototype.destroy=function(){this._echartsContainer&&(this._viewer.container.removeChild(this._echartsContainer),this._echartsContainer=void 0),this._chart&&(this._chart.dispose(),this._chart=void 0),r.destroyObject(this)};function d(a){function t(e){this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._viewer=a,this._occluder=new r.EllipsoidalOccluder(this._viewer.scene.globe.ellipsoid,this._viewer.scene.camera.position)}return t.prototype.dimensions=["lng","lat"],t.prototype.setMapOffset=function(e){this._mapOffset=e},t.prototype.dataToPoint=function(e){var s=[0,0],n=r.Cartesian3.fromDegrees(e[0],e[1]);if(!n)return s;if(this._occluder.cameraPosition=this._viewer.scene.camera.position,!this._occluder.isPointVisible(n))return[];var o=a.scene.cartesianToCanvasCoordinates(n);return o&&r.Cartesian3.angleBetween(a.scene.camera.position,n)<r.Math.toRadians(75)?[o.x-this._mapOffset[0],o.y-this._mapOffset[1]]:s},t.prototype.pointToData=function(e){var s=this._mapOffset,n=a.scene.pickPosition(new Cartesian2(e[0]+s[0],e[1]+s[1]),new r.Cartesian3),o=r.Cartographic.fromCartesian(n);return[r.Math.toDegrees(o.longitude),r.Math.toDegrees(o.latitude)]},t.prototype.getViewRect=function(){var e=this._api;return new M(0,0,e.getWidth(),e.getHeight())},t.prototype.getRoamTransform=function(){return S()},t.dimensions=t.prototype.dimensions,t.create=function(e,s){var n;e.eachComponent("GLMap",function(o){n=new t(s),n.setMapOffset(o.__mapOffset||[0,0]),o.coordinateSystem=n}),e.eachSeries(function(o){o.get("coordinateSystem")==="GLMap"&&(o.coordinateSystem=n)})},t}window.EchartsLayer=c})();const b=window.Cesium;(function(){function c(f){this.HXMCesium=f,this.transferLayer=null}c.prototype.createTransferLayer=function(f,i,h){let d=f.geoCoordMap,a=function(n){let o=[];for(let l=0;l<n.length;l++){let p=n[l],m=[parseFloat(d[p[0][i]][0]),parseFloat(d[p[0][i]][1])],u=[parseFloat(d[p[1][i]][0]),parseFloat(d[p[1][i]][1])];m&&u&&o.push({fromName:p[0][i],toName:p[1][i],coords:[m,u],value:3})}return o},t=[];f.resultData.forEach(function(n,o){t.push({coordinateSystem:"GLMap",type:"effectScatter",symbolSize:20,hoverAnimation:!0,itemStyle:{color:"rgba(60,53,212,1)",borderColor:"rgba(60,53,212,0.4)",borderWidth:10},data:[{value:[parseFloat(d[n[0][0][i]][0]),parseFloat(d[n[0][0][i]][1])],itemStyle:{normal:{color:"#df27ba"}}}],label:{normal:{show:!0,position:"right",offset:[5,0],formatter:function(l){return n[0][0][h]},fontWeight:8,fontSize:20}}},{name:"Top10",type:"lines",coordinateSystem:"GLMap",zlevel:2,symbol:["none","circle"],emphasis:{lineStyle:{color:"rgb(255,255,108)",width:6}},tooltip:{formatter:"{b}"},animation:!1,symbolSize:10,effect:{show:!0,period:4,trailLength:.02,symbol:"arrow",symbolSize:8},lineStyle:{normal:{color:"#eee",width:1,opacity:1,curveness:.3}},data:a(n)})}),this.transferLayer=new EchartsLayer(this.HXMCesium.viewer);let e={animation:!1,GLMap:{},tooltip:{trigger:"item"},series:t};this.transferLayer.chart.setOption(e),new b.ScreenSpaceEventHandler(this.HXMCesium.viewer.scene.canvas).setInputAction(function(n){let o=this.HXMCesium.viewer.scene.pickPosition(n.position);console.log(o)},b.ScreenSpaceEventType.LEFT_CLICK)},window.EchartsLayerUtil=c})();const D={cbbb669db45c4fe19ce9074bfb4cd1e8:[114.696074,35.898948],e3fb0b7892f74cff96f008567194d947:[110.768251,33.990967],f9dafa255b774af08003811e33c9de10:[115.367576,33.399821],"53f3da71ab124333aff0ad35b915e6ac":[116.342632,37.501695],"7e821d134dd64bc587f31ea73156bfc0":[116.360495,34.836477],b8d343de07304c4fb378db198febd45f:[117.440802,34.944583],"81a5cd1eb9d04b92b0d955fc269b35fc":[115.767717,35.702342],"8425a827de3e48548387ff0f92c62791":[115.783878,34.308761]},G=[[[{entName:"\u738B\u6C0F\u4E2D\u533B\u533B\u9662\u6709\u9650\u8D23\u4EFB\u516C\u53F8",code:"cbbb669db45c4fe19ce9074bfb4cd1e8"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u793E\u533A\u536B\u751F\u670D\u52A1\u4E2D\u5FC3",code:"e3fb0b7892f74cff96f008567194d947"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u6D4E\u5802\u98CE\u6E7F\u75C5\u4E13\u79D1\u533B\u9662",code:"f9dafa255b774af08003811e33c9de10"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u7EA2\u6D4E\u4E2D\u533B\u533B\u9662",code:"53f3da71ab124333aff0ad35b915e6ac"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u6E29\u6CC9\u793E\u533A\u536B\u751F\u670D\u52A1\u4E2D\u5FC3",code:"7e821d134dd64bc587f31ea73156bfc0"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u6E29\u6CC9\u793E\u533A\u536B\u751F\u670D\u52A1\u4E2D\u5FC3",code:"b8d343de07304c4fb378db198febd45f"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]],[[{entName:"\u793E\u533A\u536B\u751F\u670D\u52A1\u4E2D\u5FC3",code:"81a5cd1eb9d04b92b0d955fc269b35fc"},{entName:"\u6C47\u695A\u5371\u9669\u5E9F\u7269\u5904\u7F6E\u6709\u9650\u516C\u53F8",code:"8425a827de3e48548387ff0f92c62791"}]]];var H={geoCoordMap:D,resultData:G};const T={id:"cesiumContainer"},z={setup(c){const f=()=>{window.viewer=y("cesiumContainer"),window.viewer._cesiumWidget._creditContainer.style.display="none",window.viewer.camera.flyTo({destination:{x:-2689490006583785e-9,y:5621561193424309e-9,z:3555849227264351e-9},orientation:{heading:6.250611370357968,pitch:-1.0093454642114317,roll:1854163905790074e-20}});const i={viewer:window.viewer};new EchartsLayerUtil(i).createTransferLayer(H,"code","entName")};return N(()=>{f()}),(i,h)=>(O(),x("div",T))}};var I=E(z,[["__scopeId","data-v-07e700d0"]]);export{I as default};