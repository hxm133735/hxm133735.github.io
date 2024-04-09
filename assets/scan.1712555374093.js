import{w as K,_ as X}from"./index.1712555374093.js";import{d as Y,h as V,l as J,a as W,b as O,ax as $,ay as Z,o as z}from"./vue.1712555374093.js";var H={exports:{}};(function(D,x){var T;(function(I,_){D.exports=_()})(K,function(){function I(t){this.mode=p.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var a=[],n=this.data.charCodeAt(e);n>65536?(a[0]=240|(n&1835008)>>>18,a[1]=128|(n&258048)>>>12,a[2]=128|(n&4032)>>>6,a[3]=128|n&63):n>2048?(a[0]=224|(n&61440)>>>12,a[1]=128|(n&4032)>>>6,a[2]=128|n&63):n>128?(a[0]=192|(n&1984)>>>6,a[1]=128|n&63):a[0]=n,this.parsedData.push(a)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}I.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}};function _(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}_.prototype={addData:function(t){var e=new I(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[r][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=_.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var a=-1;a<=7;a++)e+a<=-1||this.moduleCount<=e+a||(0<=r&&r<=6&&(a==0||a==6)||0<=a&&a<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=a&&a<=4?this.modules[t+r][e+a]=!0:this.modules[t+r][e+a]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var a=f.getLostPoint(this);(r==0||t>a)&&(t=a,e=r)}return e},createMovieClip:function(t,e,r){var a=t.createEmptyMovieClip(e,r),n=1;this.make();for(var o=0;o<this.modules.length;o++)for(var s=o*n,i=0;i<this.modules[o].length;i++){var h=i*n,l=this.modules[o][i];l&&(a.beginFill(0,100),a.moveTo(h,s),a.lineTo(h+n,s),a.lineTo(h+n,s+n),a.lineTo(h,s+n),a.endFill())}return a},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var a=t[e],n=t[r];if(this.modules[a][n]==null)for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)o==-2||o==2||s==-2||s==2||o==0&&s==0?this.modules[a+o][n+s]=!0:this.modules[a+o][n+s]=!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var a=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=a}for(var r=0;r<18;r++){var a=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=a}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,a=f.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&(a>>n&1)==1;n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(var n=0;n<15;n++){var o=!t&&(a>>n&1)==1;n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,a=this.moduleCount-1,n=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(s==6&&s--;;){for(var i=0;i<2;i++)if(this.modules[a][s-i]==null){var h=!1;o<t.length&&(h=(t[o]>>>n&1)==1);var l=f.getMask(e,a,s-i);l&&(h=!h),this.modules[a][s-i]=h,n--,n==-1&&(o++,n=7)}if(a+=r,a<0||this.moduleCount<=a){a-=r,r=-r;break}}}},_.PAD0=236,_.PAD1=17,_.createData=function(t,e,r){for(var a=C.getRSBlocks(t,e),n=new k,o=0;o<r.length;o++){var s=r[o];n.put(s.mode,4),n.put(s.getLength(),f.getLengthInBits(s.mode,t)),s.write(n)}for(var i=0,o=0;o<a.length;o++)i+=a[o].dataCount;if(n.getLengthInBits()>i*8)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+i*8+")");for(n.getLengthInBits()+4<=i*8&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=i*8||(n.put(_.PAD0,8),n.getLengthInBits()>=i*8));)n.put(_.PAD1,8);return _.createBytes(n,a)},_.createBytes=function(t,e){for(var r=0,a=0,n=0,o=new Array(e.length),s=new Array(e.length),i=0;i<e.length;i++){var h=e[i].dataCount,l=e[i].totalCount-h;a=Math.max(a,h),n=Math.max(n,l),o[i]=new Array(h);for(var u=0;u<o[i].length;u++)o[i][u]=255&t.buffer[u+r];r+=h;var d=f.getErrorCorrectPolynomial(l),c=new L(o[i],d.getLength()-1),w=c.mod(d);s[i]=new Array(d.getLength()-1);for(var u=0;u<s[i].length;u++){var m=u+w.getLength()-s[i].length;s[i][u]=m>=0?w.get(m):0}}for(var B=0,u=0;u<e.length;u++)B+=e[u].totalCount;for(var M=new Array(B),R=0,u=0;u<a;u++)for(var i=0;i<e.length;i++)u<o[i].length&&(M[R++]=o[i][u]);for(var u=0;u<n;u++)for(var i=0;i<e.length;i++)u<s[i].length&&(M[R++]=s[i][u]);return M};for(var p={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},E={L:1,M:0,Q:3,H:2},A={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case A.PATTERN000:return(e+r)%2==0;case A.PATTERN001:return e%2==0;case A.PATTERN010:return r%3==0;case A.PATTERN011:return(e+r)%3==0;case A.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case A.PATTERN101:return e*r%2+e*r%3==0;case A.PATTERN110:return(e*r%2+e*r%3)%2==0;case A.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new L([1],0),r=0;r<t;r++)e=e.multiply(new L([1,g.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case p.MODE_NUMBER:return 10;case p.MODE_ALPHA_NUM:return 9;case p.MODE_8BIT_BYTE:return 8;case p.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case p.MODE_NUMBER:return 12;case p.MODE_ALPHA_NUM:return 11;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case p.MODE_NUMBER:return 14;case p.MODE_ALPHA_NUM:return 13;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,a=0;a<e;a++)for(var n=0;n<e;n++){for(var o=0,s=t.isDark(a,n),i=-1;i<=1;i++)if(!(a+i<0||e<=a+i))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||i==0&&h==0||s==t.isDark(a+i,n+h)&&o++;o>5&&(r+=3+o-5)}for(var a=0;a<e-1;a++)for(var n=0;n<e-1;n++){var l=0;t.isDark(a,n)&&l++,t.isDark(a+1,n)&&l++,t.isDark(a,n+1)&&l++,t.isDark(a+1,n+1)&&l++,(l==0||l==4)&&(r+=3)}for(var a=0;a<e;a++)for(var n=0;n<e-6;n++)t.isDark(a,n)&&!t.isDark(a,n+1)&&t.isDark(a,n+2)&&t.isDark(a,n+3)&&t.isDark(a,n+4)&&!t.isDark(a,n+5)&&t.isDark(a,n+6)&&(r+=40);for(var n=0;n<e;n++)for(var a=0;a<e-6;a++)t.isDark(a,n)&&!t.isDark(a+1,n)&&t.isDark(a+2,n)&&t.isDark(a+3,n)&&t.isDark(a+4,n)&&!t.isDark(a+5,n)&&t.isDark(a+6,n)&&(r+=40);for(var u=0,n=0;n<e;n++)for(var a=0;a<e;a++)t.isDark(a,n)&&u++;var d=Math.abs(100*u/e/e-50)/5;return r+=d*10,r}},g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},v=0;v<8;v++)g.EXP_TABLE[v]=1<<v;for(var v=8;v<256;v++)g.EXP_TABLE[v]=g.EXP_TABLE[v-4]^g.EXP_TABLE[v-5]^g.EXP_TABLE[v-6]^g.EXP_TABLE[v-8];for(var v=0;v<255;v++)g.LOG_TABLE[g.EXP_TABLE[v]]=v;function L(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&t[r]==0;)r++;this.num=new Array(t.length-r+e);for(var a=0;a<t.length-r;a++)this.num[a]=t[a+r]}L.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var a=0;a<t.getLength();a++)e[r+a]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(a)));return new L(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),r=new Array(this.getLength()),a=0;a<this.getLength();a++)r[a]=this.get(a);for(var a=0;a<t.getLength();a++)r[a]^=g.gexp(g.glog(t.get(a))+e);return new L(r,0).mod(t)}};function C(t,e){this.totalCount=t,this.dataCount=e}C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(t,e){var r=C.getRsBlockTable(t,e);if(r==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var a=r.length/3,n=[],o=0;o<a;o++)for(var s=r[o*3+0],i=r[o*3+1],h=r[o*3+2],l=0;l<s;l++)n.push(new C(i,h));return n},C.getRsBlockTable=function(t,e){switch(e){case E.L:return C.RS_BLOCK_TABLE[(t-1)*4+0];case E.M:return C.RS_BLOCK_TABLE[(t-1)*4+1];case E.Q:return C.RS_BLOCK_TABLE[(t-1)*4+2];case E.H:return C.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};function k(){this.buffer=[],this.length=0}k.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var P=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function F(){return typeof CanvasRenderingContext2D!="undefined"}function y(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var N=function(){var t=function(e,r){this._el=e,this._htOption=r};return t.prototype.draw=function(e){var r=this._htOption,a=this._el,n=e.getModuleCount();Math.floor(r.width/n),Math.floor(r.height/n),this.clear();function o(u,d){var c=document.createElementNS("http://www.w3.org/2000/svg",u);for(var w in d)d.hasOwnProperty(w)&&c.setAttribute(w,d[w]);return c}var s=o("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:r.colorLight});s.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.appendChild(s),s.appendChild(o("rect",{fill:r.colorLight,width:"100%",height:"100%"})),s.appendChild(o("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;i<n;i++)for(var h=0;h<n;h++)if(e.isDark(i,h)){var l=o("use",{x:String(h),y:String(i)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),s.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),U=document.documentElement.tagName.toLowerCase()==="svg",S=U?N:F()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this&&this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(o,s,i,h,l,u,d,c,w){if("nodeName"in o&&/img/i.test(o.nodeName))for(var m=arguments.length-1;m>=1;m--)arguments[m]=arguments[m]*e;else typeof c=="undefined"&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function a(o,s){var i=this;if(i._fFail=s,i._fSuccess=o,i._bSupportDataURI===null){var h=document.createElement("img"),l=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)},u=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)};h.onabort=l,h.onerror=l,h.onload=u,h.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";return}else i._bSupportDataURI===!0&&i._fSuccess?i._fSuccess.call(i):i._bSupportDataURI===!1&&i._fFail&&i._fFail.call(i)}var n=function(o,s){this._bIsPainted=!1,this._android=y(),this._htOption=s,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=s.width,this._elCanvas.height=s.height,o.appendChild(this._elCanvas),this._el=o,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(o){var s=this._elImage,i=this._oContext,h=this._htOption,l=o.getModuleCount(),u=h.width/l,d=h.height/l,c=Math.round(u),w=Math.round(d);s.style.display="none",this.clear();for(var m=0;m<l;m++)for(var B=0;B<l;B++){var M=o.isDark(m,B),R=B*u,b=m*d;i.strokeStyle=M?h.colorDark:h.colorLight,i.lineWidth=1,i.fillStyle=M?h.colorDark:h.colorLight,i.fillRect(R,b,u,d),i.strokeRect(Math.floor(R)+.5,Math.floor(b)+.5,c,w),i.strokeRect(Math.ceil(R)-.5,Math.ceil(b)-.5,c,w)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&a.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(o){return o&&Math.floor(o*1e3)/1e3},n}():function(){var t=function(e,r){this._el=e,this._htOption=r};return t.prototype.draw=function(e){for(var r=this._htOption,a=this._el,n=e.getModuleCount(),o=Math.floor(r.width/n),s=Math.floor(r.height/n),i=['<table style="border:0;border-collapse:collapse;">'],h=0;h<n;h++){i.push("<tr>");for(var l=0;l<n;l++)i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+s+"px;background-color:"+(e.isDark(h,l)?r.colorDark:r.colorLight)+';"></td>');i.push("</tr>")}i.push("</table>"),a.innerHTML=i.join("");var u=a.childNodes[0],d=(r.width-u.offsetWidth)/2,c=(r.height-u.offsetHeight)/2;d>0&&c>0&&(u.style.margin=c+"px "+d+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function Q(t,e){for(var r=1,a=G(t),n=0,o=P.length;n<o;n++){var s=0;switch(e){case E.L:s=P[n][0];break;case E.M:s=P[n][1];break;case E.Q:s=P[n][2];break;case E.H:s=P[n][3];break}if(a<=s)break;r++}if(r>P.length)throw new Error("Too long data");return r}function G(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return T=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:E.H},typeof e=="string"&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];typeof t=="string"&&(t=document.getElementById(t)),this._htOption.useSVG&&(S=N),this._android=y(),this._el=t,this._oQRCode=null,this._oDrawing=new S(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},T.prototype.makeCode=function(t){this._oQRCode=new _(Q(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},T.prototype.makeImage=function(){typeof this._oDrawing.makeImage=="function"&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},T.prototype.clear=function(){this._oDrawing.clear()},T.CorrectLevel=E,T})})(H);var j=H.exports;const q=Y({name:"loginScan",setup(){const D=V(null),x=()=>{D.value.innerHTML="",new j(D.value,{text:"https://qm.qq.com/cgi-bin/qm/qr?k=RdUY97Vx0T0vZ_1OOu-X1yFNkWgDwbjC&jump_from=webapi",width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})};return J(()=>{x()}),{qrcodeRef:D}}}),tt=D=>($("data-v-f45b5236"),D=D(),Z(),D),et={class:"login-scan-container"},rt={ref:"qrcodeRef"},at=tt(()=>O("div",{class:"font12 mt20 login-msg"},"\u6253\u5F00\u624B\u673A\u626B\u4E00\u626B\uFF0C\u5FEB\u901F\u767B\u5F55/\u6CE8\u518C",-1));function nt(D,x,T,I,_,p){return z(),W("div",et,[O("div",rt,null,512),at])}var st=X(q,[["render",nt],["__scopeId","data-v-f45b5236"]]);export{st as default};