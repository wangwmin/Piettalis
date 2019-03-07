<!-- 联系我们 -->
<template>
	<div class="Contact">
		<div class="contact-box">
			<div class="contact-banner">
				<router-link to="/contact" class="contact-banner-link"></router-link>
			</div>
			<div class="contact-content">
				<div class="w-1200 contact-contact">
					<ul class="contact-link">
						<li class="link-list">
							<div class="link-list-logo"  :style="{backgroundImage:'url('+require('../assets/img/vpk_icon1.png')+')'}">
								<img src="../assets/img/vpk_icon5.png">
							</div>
							<h4 class="link-style">服务热线</h4>
							<p class="link-content">0592－7230698</p>
						</li>
						<li class="link-list">
							<div class="link-list-logo" :style="{backgroundImage:'url('+require('../assets/img/vpk_icon2.png')+')'}">
								<img src="../assets/img/vpk_icon6.png">
							</div>
							<h4 class="link-style">联系地址</h4>
							<p class="link-content">厦门市同安工业集中区思明园101号5楼</p>
						</li>
						<li class="link-list">
							<div class="link-list-logo" :style="{backgroundImage:'url('+require('../assets/img/vpk_icon3.png')+')'}">
								<img src="../assets/img/vpk_icon7.png">
							</div>
							<h4 class="link-style">传真信息</h4>
							<p class="link-content">0592-6377179</p>
						</li>
						<li class="link-list">
							<div class="link-list-logo" :style="{backgroundImage:'url('+require('../assets/img/vpk_icon4.png')+')'}">
								<img src="../assets/img/vpk_icon8.png">
							</div>
							<h4 class="link-style">邮箱地址</h4>
							<p class="link-content">piettalis123@163.com</p>
						</li>
						<li class="clear"></li>
					</ul>
				</div>
			</div>
			<div class="w-1200 contact-map">
				<baidu-map center="厦门" class="bm-view" ak="DD279b2a90afdf0ae7a3796787a0742e">
				</baidu-map>
				<div class="map-opacity"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
	export default {
		name:"Contact",
		components:{ BaiduMap },
		data(){
			return {
				zoom: 5
			}
		}
	}
</script>

<style scoped>
	.contact-banner-link{
		background: url(../assets/img/contact.jpg) no-repeat center center;
		display: block;
		width: 100%;
		height: 600px;
	}
	.contact-content{
		padding-top: 30px;
		width: 100%;
	}
	.contact-link{
		width: 100%;
	}
	.link-list{
		width: 25%;
		float: left;
		text-align: center;
	}
	
	.contact-map{
		height: 555px;
		margin: 80px auto;
		position: relative;
	}
	.bm-view{
		width: 100%;
		height: 100%;
	}
	.map-opacity{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 10;
		opacity: .4;
		top: 0;
		left: 0;
		background: #000;
		cursor: pointer;
	}
	.link-list-logo{
		background-repeat: no-repeat;
		background-position: center center;
	}
	.link-list img{
		transform: scale(0);
		transition: transform .5s;
	}
	.link-list:hover img{
		transform: scale(1);
	}
	.link-style{
		margin-top: 12px;
		margin-bottom: 13px;
		font-size: 18px;
		line-height: 24px;
		color: #383838;
	}
	.link-content{
		font-family: "Arial";
		line-height: 24px;
		color: #383838;
		font-size: 14px;
	}
</style>
