<!-- 展示热门文章banner图的轮播组件 -->
<template>
	<div class="ProductSwiper f-width" v-if="banner">
		<div class="home-slide">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="src in banner" >
						<div class="slide-banner">
							<router-link tag="div" :to="'navChildLink/3/'+src.pid">
								<img :src="src.banner_link">
							</router-link>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import config from '../../Config.js'
	export default {
		name:"ProductSwiper",
		data() {
			return {
				banner:[],
			};
		},
		methods: {
			home_swiper() {
				var mySwiper = new Swiper('.swiper-container', {
					loop: true,
					effect: 'fade',
					touchRatio: 0.6,
					autoplay:true,
					pagination: {
						el: '.swiper-pagination',
					},
				});
			},
			get_banner(){
				this.$ajax.get(`${config.server_url}/get_banner`,{params:{pageCode:1}}).then(da=>{
					this.banner=da.data;
				})
			},
		},
		created() {
			this.get_banner();
		},
		updated() {
			this.home_swiper();
		}
	}
</script>

<style scoped>
	@import '../../../node_modules/swiper/dist/css/swiper.min.css';
	.home-slide {
		/* height: 100px; */
	}
	.swiper-container {
		width: 100%;
		/* height: 300px; */
	}
	.swiper-slide{
		overflow: hidden;
	}
	.slide-banner{
		cursor: pointer;
		overflow: hidden;
		text-align: center;
	}
	.slide-banner img{
		text-align: center;
		width: 100%;
	}
</style>
