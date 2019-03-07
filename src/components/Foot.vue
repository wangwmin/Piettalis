<!-- 页面底部 -->
<template>
	<div class="Foot">
		<div class="foot-box">
			<div class="w-1200">
				<ul class="f-nav">
					<li class="f-nav-li">
						<router-link to="/">返回首页</router-link>
					</li>
					<li v-for="nav in nav" class="f-nav-li">
						<router-link :to="nav.linkSrc+'/'+nav.id">{{nav.navName}}</router-link>
					</li>
					<li class="f-nav-li">
						<router-link to="/contact">联系我们</router-link>
					</li>
				</ul>
				<div class="f-line"></div>
				<div class="f-msg">
					<p class="f-msg-margin">
						COPYRIGHT ©2016 PIETTA·LIS ALL RIGHTS RESERVED 闽ICP备12006874号-2  闽公网安备 号   网站设计：<a href="#" title="互动创想">互动创想</a>
					</p>
					<p>
						<span class="f-msg-phone f-msg-contact">
							<i class="fa fa-phone"></i>
							联系电话
						</span>
						<span class="f-msg-marker f-msg-contact">
							<i class="fa fa-map-marker"></i>
							公司地址
						</span>
						<span class="f-msg-fax f-msg-contact">
							<i class="fa fa-fax"></i>
							传真
						</span>
						<span class="f-msg-mail f-msg-contact">
							<i class="fa fa-envelope-o"></i>
							联系邮箱
						</span>
						<span class="f-msg-qq f-msg-contact">
							<i class="fa fa-qq"></i>
							QQ号
						</span>
					</p>
				</div>
				<div class="Qr-code">
					<div class="Qr-code-content">
						<img src="../assets/img/code_1.jpg">
						<p>官方微信</p>
					</div>
					<div class="Qr-code-content">
						<img src="../assets/img/code_2.jpg">
						<p>官方网站</p>
					</div>
				</div>
				<div class="back-to-top">
					<span @click="backTop()" class="click-back">BACK  TO  TOP</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../Config.js'
	export default {
		name:"Foot",
		data(){
			return {
				nav:[],
			}
		},
		methods:{
			backTop(){
				let T=setInterval(function(){
					document.documentElement.scrollTop=document.documentElement.scrollTop-40
					if(document.documentElement.scrollTop<=0){
						clearInterval(T)
					}
				},10);
				
			}
		},
		created() {
			this.$ajax.get(`${config.server_url}/get_nav_top`).then(da=>{
				this.nav=da.data;
			})
		}
	}
</script>

<style scoped>
.foot-box {
	padding-top: 55px;
	padding-bottom: 90px;
	background: #1e1e1e;
	color: #fff;
	text-align: center;
}
.f-nav {
	width: 100%;
}
.f-nav-li {
	display: inline-block;
	margin: 0 35px;
	font-size: 14px;
	transition: color 0.3s linear;
}
.f-nav-li:hover {
	color: rgba(255, 255, 255, 0.5);
}
.f-line {
	background: #626262;
	height: 1px;
	width: 32px;
	margin: 45px auto;
}
.f-msg {
	font-size: 12px;
}
.f-msg-margin {
	margin-bottom: 15px;
}
.f-msg-contact {
	margin-right: 5px;
}
.f-msg-contact .fa {
	font-size: 14px;
}
.back-to-top {
	margin: 40px 0;
}
.click-back {
	transition: all 0.5s linear;
	opacity: 0.5;
	cursor: pointer;
}
.click-back:hover {
	opacity: 0.9;
}
.click-back:before {
	content: '';
	display: inline-block;
	width: 12px;
	height: 6px;
	margin-right: 8px;
	background: url(../assets/img/back.png) no-repeat center center;
}
.Qr-code{
	margin: 40px 0;
}
.Qr-code-content{
	display: inline-block;
	margin: 0 20px;
}
.Qr-code-content img{
	margin: 0 3px;
	width: 104px;
	height: 104px;
}
</style>
