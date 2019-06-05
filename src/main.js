import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css';
import './assets/css/animation.css';
import './assets/css/css.css';
import Swiper from "swiper";
import $ from "jquery";
import {CountUp} from 'countup.js';
import {fenxiang} from "./lib/fenxiang"

let index = 0
let air = 1 / 40;
let clickTimes = 0;
let score = 0;
let rem = document.documentElement.clientWidth
console.log(`width is ${rem}`);
let play_now = true;
let music_now = true;
let playused = false;
let change = false
let scrolled = false
$(() =>{
    fenxiang("守护蓝天，我助力！", "浙里的蓝天要你一起守护", "浙里的蓝天要你一起守护", 'http://hudong.cztv.com/259978', "http://o.cztvcloud.com/181/5252245/images/fenxiang.jpg")
    init()
    setTimeout(() =>{
        $('.loading').hide()
    }, 500)
    let mySwiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        direction: 'horizontal',
        loop: true,
        speed: 300,
        autoplay: false,//可选选项，自动滑动
    })
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener("WeixinJSBridgeReady", function (){
        document.getElementById("musics").load();
        document.getElementById("musics2").load();
        document.getElementById("musics").play();
    }, false);
    document.getElementById("musics").play();
    $(".music_play").click(function (){
        if (play_now) {
            $(".music_play").removeClass("music_pause");
            $(".music_play").addClass("music_pause");
            play_now = false;
            playused = false;
            $(".bgMusic")[0].pause();
            // $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-off.png")
        } else {
            $(".music_play").removeClass("music_pause");
            play_now = true;
            playused = false;
            $(".bgMusic")[0].play();
            // $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-on.png")
        }
    });
    document.getElementById('scrollbox').onscroll = throttle(listenTop, 100)
    function listenTop(){
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.getElementById("scrollbox").scrollTop;
        let remDistence = scrollTop * 7.50 / rem
        // console.log("滚动距离:" + remDistence);
        if (!t2_3[1]) {
            if (remDistence > t2_3[0]) {
                t2_3[1] = true
                console.log("t2_3")
            }
        }
        else if (!t4 [1]) {
            if (remDistence > t4[0]) {
                t4[1] = true
                console.log("t4")
            }
        }
        else if (!t5 [1]) {
            if (remDistence > t5[0]) {
                t5[1] = true
                console.log("t5")
            }
        }
        else if (!t6 [1]) {
            if (remDistence > t6[0]) {
                t6[1] = true
                console.log("t6")
            }
        }
        else if (!t78 [1]) {
            if (remDistence > t78[0]) {
                t78[1] = true
                console.log("t78")
            }
        }
        else if (!t9 [1]) {
            if (remDistence > t9[0]) {
                t9[1] = true
                console.log("t9")
            }
        }
        else if (!t1011[1]) {
            if (remDistence > t1011[0]) {
                t1011[1] = true
                console.log("t1011")
            }
        }
        else if (!t1213[1]) {
            if (remDistence > t1213[0]) {
                t1213[1] = true
                console.log("t1213")
            }
        }
        else if (!t14 [1]) {
            if (remDistence > t14[0]) {
                t14[1] = true
                console.log("t14")
            }
        }
        else if (!t15 [1]) {
            if (remDistence > t15[0]) {
                t15[1] = true
                console.log("t15")
            }
        }
        else if (!t16 [1]) {
            if (remDistence > t16[0]) {
                t16[1] = true
                console.log("t16")
            }
        }
        else if (!t17 [1]) {
            if (remDistence > t17[0]) {
                t17[1] = true
                console.log("t17")
            }
        }
        else if (!t18 [1]) {
            if (remDistence > t18[0]) {
                t18[1] = true
                console.log("t18")
            }
        }
        else if (!t19 [1]) {
            if (remDistence > t19[0]) {
                t19[1] = true
                console.log("t19")
            }
        }
        else if (!t20 [1]) {
            if (remDistence > t20[0]) {
                t20[1] = true
                console.log("t20")
            }
        }
        else if (!t2122[1]) {
            if (remDistence > t2122[0]) {
                t2122[1] = true
                console.log("t2122")
            }
        }
        else if (!t23 [1]) {
            if (remDistence > t23[0]) {
                t23[1] = true
                console.log("t23")
            }
        }
        else if (!t24 [1]) {
            if (remDistence > t24[0]) {
                t24[1] = true
                console.log("t24")
            }
        }
        else if (!t25 [1]) {
            if (remDistence > t25[0]) {
                t25[1] = true
                console.log("t25")
            }
        }
        else if (!t26 [1]) {
            if (remDistence > t26[0]) {
                t26[1] = true
                console.log("t26")
            }
        }
    }
    let t2_3 = [7.56, false];
    let t4 = [16.48, false];
    let t5 = [28.8, false];
    let t6 = [33.7, false];
    let t78 = [43.26, false];
    let t9 = [53, false];
    let t1011 = [56.78, false];
    let t1213 = [67.7, false];
    let t14 = [77.14, false];
    let t15 = [80.9, false];
    let t16 = [82, false];
    let t17 = [95.16, false];
    let t18 = [98.74, false];
    let t19 = [107, false];
    let t20 = [119.44, false];
    let t2122 = [130, false];
    let t23 = [140, false];
    let t24 = [152, false];
    let t25 = [154, false];
    let t26 = [167.7, false];
})
function throttle(fun, wait){//节流函数
    let pre = new Date().getTime()
    return function (){
        let context = this;
        let args = arguments;
        let now = new Date().getTime()
        if ((now - pre) > wait) {
            fun.apply(context, args)
            pre = new Date().getTime()
        }
    }
}
function init(){
    var w, h
    if (IsPC()) {
        var height = window.innerHeight
        var width = height * 414 / 799
        w = 414;
        h = 666;
        var pcw = 750 * (w / 750);//rem
        var pch = 1334 * (w / 750);//
        $("html").css({
                          "width": width,
                          "margin": "0 auto",
                          "marginTop": "0",
                          "height": height,
                          "background": "#fff"
                      });
        $("html").css({fontSize: w / 750 * 100 + "px"});
        $("html").css({minHeight: h});
    }
}
function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function GetQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
function orient(){
    if (window.orientation == 0 || window.orientation == 180) {//竖屏;//ipad、iphone竖屏；Andriod横屏
        $(".loading").hide().removeClass("hp");
        return false;
    } else if (window.orientation == 90 || window.orientation == -90) {//横屏;//ipad、iphone横屏；Andriod竖屏
        $(".loading").show().addClass("hp");
        var video = document.getElementById("video");
        video.ended();
        video.addEventListener("ended", function (){
            $("#video,.mask").hide()
        })
        $("#video").hide()
        return false;
    } else {
        $(".loading").fadeOut();
    }
}
function isAndroid(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    return isAndroid
}
function musicreturn(){
    $('#video').hide()
    if (playused) {
        $(".music_play").removeClass("music_pause");
        play_now = true;
        playused = false;
        $(".bgMusic")[0].play();
        // $(".music").attr("src", "https://o.cztvcloud.com/181/4984956/images/musicon.png")
    }
}
var videolists = [
    "http://v3.cztv.com/cztv/vod/2019/05/27/367acf32a5ad4175a619e833eb93d77d/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/a40e799358d44d9c834573abee880b7d/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/f169977498b34343afae837b4382e2e2/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/65d9f684f3c04899bcbe6349ddc4f779/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/d340f808ff4a4052b9b4253ed0bc9360/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/aebd763c3c60409598fbd337f15803ff/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/d0d969948778451c8e15147b1b8724cb/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/d30caca5c5404214846c1c09d528ccb9/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/ec57bd41a3fa4e64baacb9b4843f72e9/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/3c5515d9b22443cfbbbce19005b12acc/h264_1500k_mp4.mp4",
    "http://v3.cztv.com/cztv/vod/2019/05/27/717d127f4eaa49a78e6630362351c01a/h264_1500k_mp4.mp4",
]
var city = ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州", "台州", "丽水", "舟山"]
//点击量
$.ajax({
           url: 'http://d.cztvcloud.com/media/news?data_id=5252245&terminal=web&channel_id=181', /*url     :'http://d.cztvcloud.com/media/news?data_id=764588&terminal=web&channel_id=192',*/
           type: 'get',
           dataType: 'jsonp',
           success: function (rlt){
               var hints = rlt.data.hits
               var analysisurl = "http://d.cztvcloud.com/visit/ie";
               var channelId = '181';
               var itemId = '5252245';
               var title = 'read';
               var editorId = '';
               var type = '';
               analysis(analysisurl, channelId, itemId, title, editorId, 1, type);
               function analysis(url, channelId, itemId, title, editorId, terminal, type){
                   var data = {
                       channel_id: channelId,
                       item_id: itemId,
                       title: title,
                       editor_id: editorId,
                       terminal: terminal,
                       type: type
                   }
                   $.ajax({
                              type: "GET",
                              url: url,
                              data: data,
                              dataType: "jsonp",
                              success: function (data){
                                  console.log(data);
                              }
                          });
               }
           }
       })
