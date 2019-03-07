<!-- 每个页面固定头部 -->
<template>
	<div class="Head">
		<header class="header">
			<div class="h-top w-1200">
				<div class="h-top-child h-top-left">
					<div class="h-top-link weixin">
						<div class="h-top-filter"></div>
						<div class="weixin-code">
							<img src="../assets/img/code.jpg" class="weixin-code-img">
						</div>
					</div>
					<div class="h-top-link qq" title="QQ客服"><div class="h-top-filter"></div></div>
					<div class="h-top-link qq" title="QQ客服"><div class="h-top-filter"></div></div>
				</div>
				<div class="h-top-child h-top h-top-right">
					<span class="h-top-contact">
						0592－7230698
					</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="h-nav">
				<div class="w-1200">
					<router-link class="logo-link" to="/" title="德国·百达丽声音响">
						<img src="../assets/img/logo.png">
					</router-link>
					<div class="h-nav-box">
						<ul class="h-nav-ul">
							<li class="h-nav-li h-nav-home">
								<router-link to="/" id="home">首页</router-link>
							</li>
							<li class="h-nav-li" v-for="top in nav" v-if="top.pid==0">
								<router-link :to="top.linkSrc+'/'+top.id">{{top.navName}}</router-link>
								<ul class="h-subnav-ul">
									<li class="h-subnav-li" v-for="subnav in nav" v-if="top.id==subnav.pid">
										<router-link :to="subnav.linkSrc+'/'+top.id+'/'+subnav.id">{{subnav.navName}}</router-link>
									</li>
								</ul>
							</li>
							<li class="h-nav-li">
								<router-link to="/contact">联系我们</router-link>
							</li>
							<!-- <li class="h-top-search">
								<div>
									<input type="text">
									<span class="h-search-btn"></span>
								</div>
							</li> -->
							<li class="clear"></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	import config from "../Config.js"
	export default {
		name:"Head",
		data(){
			return {
				topId:1,
				nav:[]
			}
		},
		methods:{
			
		},
		created() {
			this.$ajax.get(`${config.server_url}/get_navJson`).then(da=>{
				this.nav=da.data;
			})
		}
	}
</script>

<style scoped>
	
	.header{
		background: #000;
		color: #7b7b7b;
		font-size: 14px;
	}
	.h-top{
		height: 42px;
		line-height: 42px;
	}
	.h-top-child{
		height: 42px;
		line-height: 42px;
		float: left;
	}
	.h-top-left{
		width: 900px;
	}
	.h-top-right{
		width: 300px;
	}
	.h-top-link{
		width: 42px;
		height: 42px;
		display: inline-block;
	/* 	overflow: hidden; */
		cursor: pointer;
	}
	.h-top-link:hover .h-top-filter{
		background: transparent;
	}
	.h-top-filter{
		width: 42px;
		height: 42px;
		transition: background .6s;
		background: rgba(0,0,0,.5);
	}
	.weixin{
		position: relative;
		background: url(../assets/img/top_icon.png) no-repeat -29px 13px;
	}
	.weixin:hover .weixin-code{
		display: block;
	}
	.weixin-code{
		cursor: auto;
		position: absolute;
		display: none;
		left: -37px;
		top: 24px;
		z-index: 10px;
		width: 146px;
		height: 162px;
		line-height: 162px;
		text-align: center;
		background: url(../assets/img/ewmbox.png) no-repeat center;
	}
	.weixin-code-img{
		display: inline-block;
		width: 104px;
		height: 104px;
		margin-right: 7px;
		vertical-align: middle;
	}
	.qq{
		background: url(../assets/img/top_icon.png) no-repeat -70px 13px;
	}
	.h-top-contact{
		background: url(../assets/img/tel.png) no-repeat left center;
		padding-left: 30px;
		line-height: 42px;
		font-size: 14px;
		font-family: "Arial" !important;
		font-weight: bold;
		float: right;
	}
	.h-nav{
		background: #fff;
		height: 64px;
		position: relative;
	}
	.logo-link{
		display: inline-block;
		height: 64px;
		line-height: 64px;
		position: absolute;
	}
	.logo-link img{
		vertical-align: middle;
	}
	.h-nav-box{
		width: 100%;
		height: 64px;
		padding-left: 155px;
	}
	.h-nav-li{
		float: left;
		font-size: 16px;
		line-height: 64px;
		color: #484848;
	}
	.h-nav-home>#home{
		width: auto;
	}
	.h-nav-li>a{
		display: inline-block;
		text-align: center;
		width: 110px;
		height: 64px;
		padding: 0 20px;
		position: relative;
	}
	.h-nav-li:hover .h-subnav-ul{
		height: auto;
		max-height: 300px;
	}
	.h-subnav-ul{
		width: 110px;
		max-height: 0;
		transition: max-height .6s ease-out;
		background-color: #e6e6e6;
		color: #666;
		text-align: center;
		overflow: hidden;
		position: absolute;
		z-index: 100;
	}
	.h-subnav-li:hover a{
		background: #333;
		color: #fff;
	}
	.h-subnav-li a{
		display: block;
		padding: 5px 0;
		line-height: 30px;
		font-size: 14px;
		color: #666;
		text-align: center;
		transition: all .5s;
	}
	.h-top-search{
		width: 152px;
		float: left;
		position: relative;
		font-size: 16px;
		line-height: 64px;
		color: #484848;
		margin-left: 20px;
		background: url(../assets/img/search_box.jpg) no-repeat left center;
	}
	.h-top-search input{
		outline: none;
		border: none;
		width: 112px;
		margin-left: 10px;
	}
	.h-search-btn{
		cursor: pointer;
		width: 28px;
		height: 28px;
		position: absolute;
		top: 18px;
		z-index: 2;
		right: 0px;
		background: url(../assets/img/search.png) no-repeat center;
	}
</style>
