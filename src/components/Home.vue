<!-- 首页 -->
<template>
	<div class="Home f-width" v-if="product && Intro && hot">
		<ProductSwiper></ProductSwiper>
			<div class="home-body">
				<ul class="w-1200 home-pro-nav" v-if="product">
					<router-link tag="li" class="product-li w-1-7" v-for="pro in product" :to="pro.linkSrc+'/3/'+pro.id" :key="pro.id">
						<div>
							<img class="product-logo" :src="pro.banner">
						</div>
						<p class="product-link"><router-link :to="pro.linkSrc" >{{pro.navName}}</router-link></p>
					</router-link>
					<li class="clear"></li>
				</ul>
				<ul class="w-1200 home-pro-ul">
					<router-link class="home-pro-li" tag="li" to="/navChildLink/3/14">
						<img src="../assets/img/KH.jpg">
					</router-link>
					<router-link class="home-pro-li" tag="li" to="/navChildLink/3/15">
						<img src="../assets/img/AW.jpg">
					</router-link>
					<router-link class="home-pro-li" tag="li" to="/navChildLink/3/19">
						<img src="../assets/img/TX.jpg">
					</router-link>
					<li class="clear"></li>
				</ul>
			</div>
		</transition>
		<div class="home-Enterprise-intro f-width" v-if="Intro[0]">
			<div class="intro-bg" :style='"background-image: url("+Intro[0].banner+");"'>
				<div class="w-1200">
					<div class="intro-box">
						<router-link class="intro-title" to="/intro">
							<img class="intro-title-img" src="../assets/img/intro_pic7.png">
							<p class="intro-key">German brands</p>
						</router-link>
						<p class="intro-descript">
							{{Intro[0].description}}
						</p>
						<router-link class="intro-more" to="/navChildLink/1/6"> 查看更多</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="home-case">
			<div class="w-1200 case-box">
				<div class="case-title">
					<img src="../assets/img/case_pic8.png">
					<h4 class="case-title-tag">Our case</h4>
				</div>
				<div class="case-body">
					<ul class="cases-list w-1200" v-if="hot">
						<li class="cases-list-li" v-for="list in hot" :key="list.id">
							<div style="background: #fff;">
								<router-link class="cases-list-banner" :to="'/navLink/4'+'/arti/'+list.id" tag="div">
									<img :src="list.banner">
								</router-link>
								<div class="cases-list-desc">
									<h5>{{list.title}}</h5>
									<p>{{list.description}}</p>
									<router-link class="more" :to="'/navLink/4'+'/arti/'+list.id">
										<span class="more-txt"></span>
										<span class="more-m">查看更多</span>
									</router-link>
								</div>
							</div>
						</li>
						<li class="clear"></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductSwiper from './children/ProductSwiper';
import config from '../Config.js';
export default {
	name: 'Home',
	components: { ProductSwiper },
	data() {
		return {
			product: [],
			Intro: [],
			hot:[]
		};
	},
	methods: {
		getAllData(){
			var arrpid=[];
			/* 得到产品下的所有分类信息 */
			this.$ajax.get(`${config.server_url}/get_topNav_all`, {params:{pid: 3}})
				.then(da => {
					this.product = da.data;
				});
			/* 获取品牌简介相关信息 */
			this.$ajax.get(`${config.server_url}/get_nav_only`, {params:{id: 1}}).then(da => {
				this.Intro = da.data;
				
			});	
			/* 获取工程案例下的所有热门文章 */
			this.$ajax.get(`${config.server_url}/get_topNav_all`, {params:{pid: 4}}).then(da => {
					da.data.map((v)=>{	arrpid.push(v.id)	});
					arrpid=arrpid.toString();
					this.$ajax.get(`${config.server_url}/get_hot_article`, {params:{pid: arrpid}}).then(das => {
						this.hot = das.data;
					});
			});
		},
	},
	created() {
		this.getAllData();
	}
};
</script>

<style scoped>
.home-pro-nav {
	margin: 40px auto;
}
.home-pro-ul{
	padding-top: 80px;
	padding-bottom: 40px;
}
.home-pro-li{
	float: left;
	width: 33.33%;
	padding: 0 10px;
	cursor: pointer;
}
.home-pro-li img{
	width: 100%;
	
}
.product-li {
	color: #666;
	text-align: center;
	padding: 0 10px;
	margin: 0 10px;
	font-size: 16px;
	transition: all 0.3s;
	cursor: pointer;
}
.product-li:hover {
	color: #000;
}
.product-li:hover .product-logo {
	top: -15px;
}
.w-1-7 {
	width: 12.6%;
	float: left;
}
.product-logo {
	position: relative;
	top: 0px;
	transition: top 0.3s linear;
	max-width: 100%;
	height: 70px;
}
.product-link {
	margin-top: 20px;
}

.intro-bg {
	height: 800px;
	background-position: center center;
	background-repeat: no-repeat;
}
.intro-box {
	width: 33.33%;
	padding-top: 214px;
	text-align: center;
}
.intro-title-img {
	width: 400px;
}
.intro-key {
	border: 1px solid #606060;
	line-height: 34px;
	font-size: 14px;
	color: #fff;
	letter-spacing: 12px;
	text-transform: uppercase;
	margin: 30px 44px 20px;
}
.intro-descript {
	margin-right: 10px;
	font-size: 14px;
	line-height: 28px;
	color: #a5a5a5;
	overflow: hidden;
	text-align: justify;
	text-indent: 2em;
}
.intro-more {
	margin: 70px auto 0;
	font-size: 14px;
	padding-bottom: 5px;
	display: inline-block;
	color: #fff;
	border-bottom: 2px solid #fff;
}

.case-box{
	padding-top: 50px;
	padding-bottom: 50px;
}
.case-title{
	text-align: center;
}
.case-title-tag{
	text-transform: uppercase;
	letter-spacing: 2px;
}
.cases-list-li{
	width: 586px;
	float: left;
    margin-top: 28px;
    padding: 0 14px;
}
.cases-list-li:hover .cases-list-banner{
	opacity: 1;
}
.cases-list-li:hover img{
	transform: scale(1.1);
}
.cases-list-banner{
	width: 100%;
	height: 300px;
	opacity: .8;
	transition: opacity .5s;
	overflow: hidden;
}
.cases-list-banner img{
	width: 100%;
	height: 300px;
	transform: scale(1);
	transition: all 1s;
}
.cases-list-desc{
	position: relative;
    padding: 20px 30px;
    background: #fff;
}
.cases-list-desc h5{
	margin-bottom: 8px;
    font-weight: normal;
    line-height: 22px;
	font-size: 18px;
    color: #383838;
    height: 22px;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.cases-list-desc p{
	font-size: 14px;
    color: #8c8c8c;
    line-height: 20px;
    height: 20px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.more{
	position: absolute;
    right: 30px;
    top: 30px;
	transition: all .5s;
	width: 106px;
	line-height: 26px;
	text-align: center;
	border: 1px solid #ddd;
}
.more-m{
	position: relative;
	z-index: 2;
}
.more:hover{
	color: #fff;
}
.more:hover .more-txt{
	width: 106px;
}
.more-txt{
	background: #333;
	position: absolute;
	left: 0;
	top: 0;
	width: 0;
	height: 26px;
	transition: width .5s;
}
</style>
