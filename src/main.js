import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css';
import './assets/css/animation.css';
import './assets/css/css.css';
import $ from "jquery";
import {CountUp} from 'countup.js';
import {fenxiang} from "./lib/fenxiang"
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
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
    // var vConsole = new VConsole();
    // console.log(vConsole);
    fenxiang("端午，原来你是这样一个时髦boy","中国蓝融媒体中心","端午，原来你是这样一个时髦boy",'',"https://ohudong.cztv.com/5/260003/images/fenxiang.jpg")
    init()
    setTimeout(() =>{
        $('.loading').hide()
        $('.t1').fadeIn()
    },1000)
    //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
    document.addEventListener("WeixinJSBridgeReady",function(){
        document.getElementById("musics").load();
        document.getElementById("longzhou").load();
        document.getElementById("toujiang").load();
        document.getElementById("zongzi").load();
        document.getElementById("musics").play();
    },false);
    document.getElementById("musics").play();
    $(".music_play").click(function(){
        if(play_now){
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
    document.body.onscroll = throttle(listenTop,100)

    function listenTop(){
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        ;
        let remDistence = scrollTop * 7.50 / rem
        // console.log("滚动距离:" + remDistence);
        if(!t2_3[1]){
            if(remDistence > t2_3[0]){
                t2_3[1] = true
                console.log("t2_3")
                $('.t2,.t3').show()
            }
        }
        else if(!t4 [1]){
            if(remDistence > t4[0]){
                t4[1] = true
                console.log("t4")
                $('.t4,.g3').show()
            }
        }
        else if(!t5 [1]){
            if(remDistence > t5[0]){
                t5[1] = true
                console.log("t5")
                $('.t5,.g4').show()
            }
        }
        else if(!t6 [1]){
            if(remDistence > t6[0]){
                t6[1] = true
                console.log("t6")
                $('.t6').show()
                document.getElementById("toujiang").play();
                BgMUsicPause()
                document.getElementById("toujiang").addEventListener('ended',musicreturn);
            }
        }
        else if(!t78 [1]){
            if(remDistence > t78[0]){
                t78[1] = true
                console.log("t78")
                $('.t7,.t8,.t9').show()
            }
        }
        else if(!t9 [1]){
            if(remDistence > t9[0]){
                t9[1] = true
                console.log("t9")
            }
        }
        else if(!t1011[1]){
            if(remDistence > t1011[0]){
                t1011[1] = true
                console.log("t1011")
                $('.t10,.t11').show()
            }
        }
        else if(!t1213[1]){
            if(remDistence > t1213[0]){
                t1213[1] = true
                console.log("t1213")
                $('.t12,.t13').show()
            }
        }
        else if(!t14 [1]){
            if(remDistence > t14[0]){
                t14[1] = true
                console.log("t14")
                $('.t14,.t15,.t16').show()
            }
        }
        else if(!t15 [1]){
            if(remDistence > t15[0]){
                t15[1] = true
                console.log("t15")
            }
        }
        else if(!t16 [1]){
            if(remDistence > t16[0]){
                t16[1] = true
                console.log("t16")
            }
        }
        else if(!t17 [1]){
            if(remDistence > t17[0]){
                t17[1] = true
                console.log("t17")
                $('.t17').show()
                document.getElementById("toujiang").pause();
                document.getElementById("toujiang").currentTime = 0;
                document.getElementById("toujiang").removeEventListener('ended',musicreturn)
                document.getElementById("zongzi").play();
                BgMUsicPause()
                document.getElementById("zongzi").addEventListener('ended',musicreturn);
            }
        }
        else if(!t18 [1]){
            if(remDistence > t18[0]){
                t18[1] = true
                console.log("t18")
                $('.t18').show()
            }
        }
        else if(!t19 [1]){
            if(remDistence > t19[0]){
                t19[1] = true
                console.log("t19")
                $('.t19').show()
            }
        }
        else if(!t20 [1]){
            if(remDistence > t20[0]){
                t20[1] = true
                console.log("t20")
                $('.t20').show()
            }
        }
        else if(!t2122[1]){
            if(remDistence > t2122[0]){
                t2122[1] = true
                console.log("t2122")
                $('.t21,.t22').show()
            }
        }
        else if(!t23 [1]){
            if(remDistence > t23[0]){
                t23[1] = true
                console.log("t23")
                $('.t23').show()
                document.getElementById("zongzi").pause();
                document.getElementById("zongzi").currentTime = 0;
                document.getElementById("longzhou").play();
                BgMUsicPause()
                document.getElementById("zongzi").removeEventListener('ended',musicreturn);
                document.getElementById("longzhou").addEventListener('ended',musicreturn);
                $('.g17_1').addClass('longzhou1')
                $('.g17_2').addClass('longzhou2')
                $('.g17_3').addClass('longzhou3')
                $('.g17_4').addClass('longzhou4')
            }
        }
        else if(!t24 [1]){
            if(remDistence > t24[0]){
                t24[1] = true
                console.log("t24")
                $('.t24,.t25,.t26,.t27').show()
            }
        }
        else if(!t25 [1]){
            if(remDistence > t25[0]){
                t25[1] = true
                console.log("t25")
            }
        }
        else if(!t26 [1]){
            if(remDistence > t26[0]){
                t26[1] = true
                console.log("t26")
            }
        }
    }

    let t2_3 = [7.56,false];
    let t4 = [16.48,false];
    let t5 = [28.8,false];
    let t6 = [33.7,false];
    let t78 = [43.26,false];
    let t9 = [53,false];
    let t1011 = [56.78,false];
    let t1213 = [67.7,false];
    let t14 = [77.14,false];
    let t15 = [80.9,false];
    let t16 = [82,false];
    let t17 = [95.16,false];
    let t18 = [98.74,false];
    let t19 = [107,false];
    let t20 = [119.44,false];
    let t2122 = [130,false];
    let t23 = [140,false];
    let t24 = [152,false];
    let t25 = [154,false];
    let t26 = [167.7,false];
})

function throttle(fun,wait){//节流函数
    let pre = new Date().getTime()
    return function(){
        let context = this;
        let args = arguments;
        let now = new Date().getTime()
        if((now - pre) > wait){
            fun.apply(context,args)
            pre = new Date().getTime()
        }
    }
}

function init(){
    var w,h
    if(IsPC()){
        var height = window.innerHeight
        var width = height * 414 / 799
        w = 414;
        h = 666;
        var pcw = 750 * (w / 750);//rem
        var pch = 1334 * (w / 750);//
        $("html").css({
            "width"      : width,
            "margin"     : "0 auto",
            "marginTop"  : "0",
            "height"     : height,
            "background" : "#fff"
        });
        $("html").css({fontSize : w / 750 * 100 + "px"});
        $("html").css({minHeight : h});
    }
}

function IsPC(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");
    var flag = true;
    for(var v = 0 ; v < Agents.length ; v++){
        if(userAgentInfo.indexOf(Agents[v]) > 0){
            flag = false;
            break;
        }
    }
    return flag;
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return unescape(r[2]);
    return null;
}

function orient(){
    if(window.orientation == 0 || window.orientation == 180){//竖屏;//ipad、iphone竖屏；Andriod横屏
        $(".loading").hide().removeClass("hp");
        return false;
    } else if(window.orientation == 90 || window.orientation == -90){//横屏;//ipad、iphone横屏；Andriod竖屏
        $(".loading").show().addClass("hp");
        var video = document.getElementById("video");
        video.ended();
        video.addEventListener("ended",function(){
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

function BgMUsicPause(){
    if(play_now){
        $(".music_play").removeClass("music_pause");
        $(".music_play").addClass("music_pause");
        play_now = false;
        playused = true;
        $(".bgMusic")[0].pause();
        // $(".music").attr("src", "https://o.cztvcloud.com/181/4892748/images/music-off.png")
    }
}

function musicreturn(){
    console.log('Ended')
    if(playused){
        console.log('Ended2323')
        $(".music_play").removeClass("music_pause");
        play_now = true;
        playused = false;
        $(".bgMusic")[0].play();
        // $(".music").attr("src", "https://o.cztvcloud.com/181/4984956/images/musicon.png")
    }
}

//点击量
$.ajax({
    url      : 'http://d.cztvcloud.com/media/news?data_id=260003&terminal=web&channel_id=181',/*url     :'http://d.cztvcloud.com/media/news?data_id=764588&terminal=web&channel_id=192',*/
    type     : 'get',
    dataType : 'jsonp',
    success  : function(rlt){
        var hints = rlt.data.hits
        console.log(hints);
        var analysisurl = "http://d.cztvcloud.com/visit/ie";
        var channelId = '181';
        var itemId = '260003';
        var title = 'read';
        var editorId = '';
        var type = '';
        analysis(analysisurl,channelId,itemId,title,editorId,1,type);

        function analysis(url,channelId,itemId,title,editorId,terminal,type){
            var data = {
                channel_id : channelId,
                item_id    : itemId,
                title      : title,
                editor_id  : editorId,
                terminal   : terminal,
                type       : type
            }
            $.ajax({
                type     : "GET",
                url      : url,
                data     : data,
                dataType : "jsonp",
                success  : function(data){
                    console.log(data);
                }
            });
        }
    }
})
