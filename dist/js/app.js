webpackJsonp([1],{"4jdx":function(e,n){},"991W":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("Zrlr"),t("v2ns"),t("991W"),t("4jdx"),t("v4pY");var i=t("DNVT"),o=t("7t+N"),a=t.n(o),c=(t("EbL4"),t("fxnj"));var s=document.documentElement.clientWidth;console.log("rem is "+s);var l=!0;a()(function(){var e,n,t,o,d,r,u;e="守护蓝天，我助力！",n="浙里的蓝天要你一起守护",t="浙里的蓝天要你一起守护",o="http://hudong.cztv.com/259978",d="http://o.cztvcloud.com/181/5252245/images/fenxiang.jpg",r={android:!1,android2:!1,iphone:!1,ipad:!1,pc:!1,wechat:!1,chinabluenews:!1},u=window.navigator.userAgent.toLowerCase(),/micromessenger/.test(u)&&(r.wechat=!0,r.chinabluenews=!1),r.wechat&&a.a.getJSON("http://sso.cztvcloud.com/weixin_share/share?channel_id=181&callback=?",{url:location.href.split("#")[0]},function(i){i.success&&c.config({debug:!1,appId:i.appId,timestamp:i.timestamp,nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),c.ready(function(){var i=e,a=o,s=d,l=n,r=t;c.onMenuShareTimeline({title:r,link:a,imgUrl:s}),c.onMenuShareAppMessage({title:i,desc:l,link:a,imgUrl:s}),c.onMenuShareQQ({title:i,desc:l,link:a,imgUrl:s}),c.onMenuShareWeibo({title:i,desc:l,link:a,imgUrl:s}),window.wxIsReady||(window.wxIsReady=!0)})}),function(){var e,n;if(function(){var e=navigator.userAgent;console.log(e);for(var n=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,i=0;i<n.length;i++)if(e.indexOf(n[i])>0){t=!1;break}return t}()){var t=window.innerHeight,i=414*t/799;n=666;e=414;a()("html").css({width:i,margin:"0 auto",marginTop:"0",height:t,background:"#fff"}),a()("html").css({fontSize:e/750*100+"px"}),a()("html").css({minHeight:n})}}(),setTimeout(function(){a()(".loading").hide()},500),console.log("loaded");var m,p,g;new i.a(".swiper-container",{initialSlide:0,direction:"horizontal",loop:!0,speed:300,autoplay:!1});document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("musics").load(),document.getElementById("musics2").load(),document.getElementById("musics").play()},!1),document.getElementById("musics").play(),a()(".music_play").click(function(){l?(a()(".music_play").removeClass("music_pause"),a()(".music_play").addClass("music_pause"),l=!1,!1,a()(".bgMusic")[0].pause()):(a()(".music_play").removeClass("music_pause"),l=!0,!1,a()(".bgMusic")[0].play())}),document.getElementById("scrollbox").onscroll=(m=function(){var e=7.5*document.getElementById("scrollbox").scrollTop/s;console.log("滚动距离:"+e)},p=100,g=(new Date).getTime(),function(){var e=arguments,n=(new Date).getTime();n-g>p&&(m.apply(this,e),g=(new Date).getTime())})});a.a.ajax({url:"http://d.cztvcloud.com/media/news?data_id=5252245&terminal=web&channel_id=181",type:"get",dataType:"jsonp",success:function(e){var n=e.data.hits;console.log(n);!function(e,n,t,i,o,c,s){var l={channel_id:n,item_id:t,title:i,editor_id:o,terminal:c,type:s};a.a.ajax({type:"GET",url:e,data:l,dataType:"jsonp",success:function(e){console.log(e)}})}("http://d.cztvcloud.com/visit/ie","181","5252245","read","",1,"")}})},v2ns:function(e,n){},v4pY:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.js.map