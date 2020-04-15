import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css';
import './assets/css/animation.css';
import './assets/css/cssfromps.css';
import './assets/css/css.css';
import $ from "jquery";

var jQuery = require("jquery-easing");
import {CountUp} from 'countup.js';
import {fenxiang} from "./lib/fenxiang"
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let index = 0
let air = 1 / 40;
let clickTimes = 0;
let score = 0;
let rem = document.documentElement.clientWidth
// console.log(`width is ${rem}`);
let play_now = true;
let music_now = true;
let playused = false;
let change = false
let scrolled = false
var truenum = 0
$(() =>{
	// var vConsole = new VConsole();
	// console.log(vConsole);
	fenxiang("浙江方言PK赛 你敢来试试嘛？","够胆来battle","浙江方言PK赛 你敢来试试嘛？",'',"http://o.cztvcloud.com/181/5700816/images/fenxiang.jpg")
	init()
	setTimeout(() =>{
		$('.loading').hide()
		$('.stage').fadeIn()
		setTimeout(() =>{
			$('.warp').fadeIn()
		},500)
	},1000)
	//必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
	document.addEventListener("WeixinJSBridgeReady",function(){
		document.getElementById("musics").load();
		document.getElementById("videotalk").load();
		document.getElementById("talk").load();
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
	// document.body.onscroll = throttle(listenTop,100)
	var auidoright = document.getElementById('right')
	var auidowrong = document.getElementById('wrong')
	$('.enter').click(() =>{
		$('.page1').hide()
		$('.page2').fadeIn()
	})
	$('.sp').click(function(){
		$('.sp').removeClass('spactive xuanren')
		$(this).addClass('spactive')
		document.getElementById('select').play()
	})
	var rem = window.innerWidth / 750 * 100
	console.log("rem is " + rem);
	var k = 0
	var s = 0
	var falsenum = 0
	var talk = document.getElementById('talk')
	
	function qusetionInit(k){
		if(k < 10){
			$('.an').addClass('mayanswer')
			var dataDetail = data[k];
			var right = dataDetail.right
			if(dataDetail.bgmusic){
				$('#talk').attr('src',dataDetail.bgmusic)
			}
			$('.ti').css({
				'background' : dataDetail.bg,
				'border'     : "0.02rem soliid " + dataDetail.border,
			})
			$('.timu').html("Q" + (k + 1) + " : " + dataDetail.timu)
			$('.ana').html("A : " + dataDetail.xuanxiang[0])
			$('.anb').html("B : " + dataDetail.xuanxiang[1])
			$('.anc').html("C : " + dataDetail.xuanxiang[2])
			$('.and').html("D : " + dataDetail.xuanxiang[3])
			$('.an').attr('data-right','')
			$('.an:eq(' + right + ')').attr('data-right','right')
		}
		else {
			$('.mainbox').hide()
		}
	}
	
	$('.sure').click(function(){
		console.log('sure')
		if($('.spactive').attr('id')){
			$('.deadwalker').attr('src','http://o.cztvcloud.com/181/5700816/images/' + $('.spactive').attr('id') + '.gif')
			console.log($('.spactive').attr('id'))
			$('.stage').remove()
			$('.warp,.answer,.mainbox').fadeIn()
			//进场
			qusetionInit(k)
			$('.deadwalker').animate({
				left   : "50%",
				bottom : "1rem"
			},2000)
			console.log(data[k].bgmusic);
			setTimeout(function(){
				talk.play()
				bgmusicpause()
				var playtails = true
				talk.addEventListener('ended',function(){
					dati(k)
					musicreturn()
				})
			},1500)
		}
	})
	$('.mayanswer').click(function(){
		if(k <= 10){
			//判断对错
			var right = $(this).attr('data-right')
			if(right == 'right'){
				$('.trueorfalse').attr('src','http://o.cztvcloud.com/181/5700816/images/true.png')
				auidoright.play()
				++truenum
			} else {
				$('.trueorfalse').attr('src','http://o.cztvcloud.com/181/5700816/images/false.png')
				auidowrong.play()
			}
			$('.an').removeClass('mayanswer')
			//计算当前对错位置
			var top = parseInt($(".mainbox").position().top) + parseInt($(this).position().top) + 0.15 * rem
			var left = parseInt($(".mainbox").position().left) + parseInt($(this).position().left) + 5 * rem
			$('.trueorfalse').css({
				"position" : "fixed",
				"top"      : top,
				"left"     : left
			})
			//答题卡关闭
			setTimeout(function(){
				$('.mainbox').hide()
				if(right == "right"){
					$('.trueorfalse').animate({
						"position"  : "fixed",
						"top"       : ["1rem","easeInOutQuart"],
						"left"      : ["6.2rem","easeOutBack"],
						"transform" : 'rotate(360deg)'
					},1500,() =>{
						$('.trueorfalse').hide()
						$('.truenum').html(truenum)//数字+1
					})
				} else {
					$('.trueorfalse').animate({
						"position"  : "fixed",
						"top"       : ["1.7rem","easeInOutQuart"],
						"left"      : ["6.2rem","easeOutBack"],
						"transform" : 'rotate(360deg)'
					},1500,() =>{
						$('.trueorfalse').hide()
						$('.falsenum').html(++falsenum)//数字+1
					})
				}
			},500)
			$('.trueorfalse').show()
			//画面转场
			if(k < 6){
				s = k
				$('.warp').animate({
					"bottom" : [-(++s) * 14.48 + "rem",'swing']
				},2500)
			} else if(k == 6){
				$('.warp').animate({
					"bottom" : -115.12 + "rem"
				},5000)
			} else if(k == 7){
				$('.warp').animate({
					"bottom" : "-133.36rem"
				},3000)
			} else if(k > 7){
				$('.warp').animate({
					"bottom" : -(130.36 + (k - 7) * 14.48) + "rem"
				},2500)
			}
			k++
			//人物归位
			$('.deadwalker').animate({
				left   : "50%",
				bottom : "-5rem"
			},1000)
			//人物到场
			clearTimeout(peoWalk)
			var peoWalk = setTimeout(() =>{
				console.log('场景 ' + k)
				if(k == 2){//第2场景
					$('.deadwalker').animate({
						left   : "30%",
						bottom : "2.5rem"
					},3000)
				} else if(k == 3){//第3场景
					$('.deadwalker').animate({
						left   : "30%",
						bottom : "3rem"
					},3000)
				} else if(k == 4){//第4场景
					$('.deadwalker').animate({
						left   : "50%",
						bottom : "0.7rem"
					},3000)
				} else if(k == 6){//第六场景
					$('.deadwalker').animate({
						left   : "30%",
						bottom : "2rem"
					},4000)
				} else if(k == 7){ //第七场景
					$('.deadwalker').animate({
						left   : "50%",
						bottom : "2rem"
					},5000)
				} else if(k == 8){ //第8场景
					$('.deadwalker').animate({
						left   : "54.5%",
						bottom : "4.4rem"
					},4000)
				} else { //第...场景
					$('.deadwalker').animate({
						left   : "41.6%",
						bottom : "2rem"
					},3000)
				}
			},1000)
			setTimeout(function(){
				qusetionInit(k)
				if(k < 9 && !data[k].video1){
					$('#videotalk').attr('src','')
				}
				$('.mainbox').show()
				console.log("now k is " + k);
				$('.videobox').hide()
				$('.duihua').hide()
				if(k < 10){
					if(data[k].video1){
						// $('.ul').hide()
						$('.mainbox').fadeIn()
						$('#videotalk').attr('src',data[k].video1)
						$('.videobox').fadeIn()
						document.getElementById('videotalk').play()
						videotalk.addEventListener('play',function(){
							bgmusicpause()
						})
						document.getElementById('videotalk').addEventListener('ended',function(){
							// $('.videobox').remove()
							musicreturn()
							dati(k)
							// $('.ul').show()
						})
					} else {
						if(k == 2){
							$('.ul').hide()
							$('.mainbox').fadeIn()
							$('.duihua').fadeIn()
							setTimeout(function(){
								$('.duihua1').fadeIn()
								$('.duihua2').fadeIn()
								$('.duihua3').fadeIn()
								// setTimeout(function(){
								// 	$('.duihua1').hide()
								// 	$('.duihua2').fadeIn()
								// 	setTimeout(function(){
								// 		$('.duihua1').hide()
								// 		$('.duihua2').hide()
								// 		$('.duihua3').fadeIn()
								// 	},1500)
								// },1500)
							},1500)
						}
						if(data[k].bgmusic){
							$('.ul').show()
							// if(false){
							console.log(data[k].bgmusic);
							talk.play()
							bgmusicpause()
							talk.addEventListener('ended',function(){
								dati(k)
								musicreturn()
							})
						} else {
							dati(k)
						}
					}
				} else {
					dati(k)
				}
			},2000)
		}
		else {
			dati(10)
		}
	})
	$('.SlideUp2').click(() =>{
		/*$('.bmy').fadeIn()
		$('.final').hide()*/
		window.location.href = "http://www.cztv.com/subject/jxm/wap"
	})
	$('.close').click(() =>{
		$('.bmy').hide()
		$('.final').fadeIn()
	})
	$('.SlideUp3').click(function(){
		$('.shared').fadeIn()
	})
	$(".baoming").click(function(){
		var ckable = $('.baoming').attr('ckable')
		if(ckable == "true"){
			var name = $('.name').val()
			var cell = $('.cell').val()
			if(name == ''){
				miniAlert('请输入你的姓名')
			} else if(cell == ''){
				miniAlert('请输入你的联系方式')
			} else if(!(/^1[3456789]\d{9}$/.test(cell))){
				miniAlert('手机号码输入有误，请重新输入')
			} else {
				console.log('提交')
				var formData3 = new FormData();
				formData3.append("work_author",name)
				formData3.append("mobile",cell)
				formData3.append("work_title",name)
				formData3.append("work_intro","方言大赛")
				formData3.append("work_type",2)
				console.log(formData3);
				$('.baoming').attr('ckable',"false")
				$.ajax({
					type        : "POST",
					cache       : false,
					dataType    : "json",
					contentType : false,
					processData : false,
					crossDomain : true,
					url         : "http://d.cztvcloud.com/activity/homeletter?channel_id=181&activity_id=71",
					data        : formData3,
					success     : function(data){
						console.log(data);
						if(data.code == 200){
							$('.baoming').attr('ckable',"true")
							$('.succeed').fadeIn()
						}
					},
					error       : function(request){
						miniAlert('报名失败，请稍候重试！')
						$('.baoming').attr('ckable',"false")
					}
				});
			}
		}
	})
})

function miniAlert(w){
	$('.tipos').html(w).fadeIn()
	setTimeout(() =>{
		$('.tipos').fadeOut()
	},1500)
}

function dati(k){
	if(k <= 9){
		// $('.mainbox').show()
	} else {
		$('.mainbox').hide()
		talk.pause()
		$('.final').fadeIn()
		$('.fenshu,.collect').hide()
		musicreturn()
		$('.scoreText').html(truenum * 10 + "分")
	}
}

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

//点击量
$.ajax({
	url      : 'http://d.cztvcloud.com/media/news?data_id=5700816&terminal=web&channel_id=181',/*url     :'http://d.cztvcloud.com/media/news?data_id=764588&terminal=web&channel_id=192',*/
	type     : 'get',
	dataType : 'jsonp',
	success  : function(rlt){
		var hints = rlt.data.hits
		// console.log(hints);
		var analysisurl = "http://d.cztvcloud.com/visit/ie";
		var channelId = '181';
		var itemId = '5700816';
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

function bgmusicpause(){
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
	if(playused){
		$(".music_play").removeClass("music_pause");
		play_now = true;
		playused = false;
		$(".bgMusic")[0].play();
		// $(".music").attr("src", "https://o.cztvcloud.com/181/4984956/images/musicon.png")
	}
}

var data = [
	{
		"diqu"      : "杭州",
		"bg"        : "rgba(0, 32, 23, 0.6)",
		"border"    : "#b2d1c5",
		"timu"      : "年糕蘸哪种调料是不好吃的？",
		"xuanxiang" : ["糖","酱油","沙拉酱","盐"],
		"right"     : '1',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/20/e425f6dc934f4e948b942d3520c8d04e/h264_128k_mp3.mp3",
		//"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/17/1ee57515d15940ddbaa0ce9936b4e33e/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "台州",
		"bg"        : "#rgba(0, 32, 13, 0.6)",
		"border"    : "#b1cdbe",
		"timu"      : "台州谜语“冬瓜冬瓜 两头开花”的谜底是什么？",
		"xuanxiang" : ["哪吒","枕头","大白兔奶糖","螃蟹"],
		"right"     : '1',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/17/1ee57515d15940ddbaa0ce9936b4e33e/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "绍兴",
		"bg"        : "rgba(32, 23, 0, 0.6)",
		"border"    : "#e5d1b7",
		"timu"      : "所以，小红到底想吃什么？",
		"xuanxiang" : ["螃蟹、鱼、鸭","螃蟹、虾、猪","螃蟹、鸭、鸡","鱼、螃蟹、鸭"],
		"right"     : '0',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/18/f8f39ed67af64220aa528f026754fb8e/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "丽水",
		"bg"        : "rgba(32, 16, 0, 0.6)",
		"border"    : "#ebc9ad",
		"timu"      : "录音中方言最有可能出现在哪部电视剧中？",
		"xuanxiang" : ["《破冰行动》","《麦香》","《金枝欲孽》","《乡村爱情故事》"],
		"right"     : '1',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/19/5f845c8b8a5d428ebd9378d1f090a0eb/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "宁波 金华",
		"bg"        : "rgba(21, 32, 0, 0.6)",
		"border"    : "#d4ddc3",
		"timu"      : "两段RAP分别是哪里的方言？",
		"xuanxiang" : ["丽水、衢州","台州、舟山","宁波、金华","这是两段很精彩的rap"],
		"right"     : '2',
		"video1"    : "http://v3.cztv.com/cztv/vod/2019/07/22/66c480f671a948c58588a22a50a1f0bd/h264_800k_mp4.mp4",
		"video2"    : "http://v3.cztv.com/cztv/vod/2019/07/21/1833b12f0bb34e7ba884abd4ca330c97/h264_1500k_mp4.mp4",
		"bgmusic"   : "",
		"talks"     : "",
	},
	{
		"diqu"      : "湖州",
		"bg"        : "rgba(32, 17, 0, 0.61)",
		"border"    : "#f7d5b5",
		"timu"      : "湖州小伙东西掉了一地，他会说_____",
		"xuanxiang" : ["叽遭撒旦","齐整","插烂污","结棍"],
		"right"     : '0',
		"bgmusic"   : "",
		"talks"     : "",
	},
	{
		"diqu"      : "嘉兴",
		"bg"        : "rgba(32, 13, 0, 0.6)",
		"border"    : "#e6c2a6",
		"timu"      : "音频中的嘉兴小姐姐怎么了？？",
		"xuanxiang" : ["脑袋撞伤了","扭到脚了","胳膊受伤了","膝盖出血了"],
		"right"     : '1',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/17/d38d9c985f7e43fa836a729aef0d0750/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "温州",
		"bg"        : "rgba(11, 0, 32, 0.6)",
		"border"    : "#bfa6d0",
		"timu"      : "温州姑娘下一步打算做什么？",
		"xuanxiang" : ["喝汤","找地方休息","找美女","打架"],
		"right"     : '1',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/20/4f7d08f7b1f4468986a7ec1cbd79bd22/h264_128k_mp3.mp3",
		"talks"     : "",
	},
	{
		"diqu"      : "衢州",
		"bg"        : "rgba(32, 8, 0, 0.61)",
		"border"    : "#d0aea6",
		"timu"      : "衢州大姐说的第2个爱吃的食物是什么？",
		"xuanxiang" : ["兔头","豆浆","田螺","丝瓜"],
		"right"     : '3',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/25/0f4ef837dc0f4bfebfa866c8032d35ce/h264_128k_mp3.mp3",
		// "bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/17/545ad083d0b6416598bbdcd1b1b46ba7/h264_128k_mp3.mp3",
		"talks"     : "http://v3.cztv.com/cztv/vod/2019/07/17/e99d07aabd0c460a9ac49fadb265ab39/h264_128k_mp3.mp3",
	},
	{
		"diqu"      : "舟山",
		"bg"        : "rgba(32, 0, 25, 0.61)",
		"border"    : "#d0a6b4",
		"timu"      : "这首《千里之外》是用____唱的？",
		"xuanxiang" : ["宁波话","丽水话","台州话","舟山话"],
		"right"     : '3',
		"bgmusic"   : "http://v3.cztv.com/cztv/vod/2019/07/20/e9aa4c34a6b44e8397d8af0c9b2e078a/h264_128k_mp3.mp3",
		"talks"     : "",
	},
]
