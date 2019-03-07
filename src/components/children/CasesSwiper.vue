<!-- 工程案例下的轮播图 -->
<template>
	<div class="CasesSwiper">
		<div class="cases-swiper">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="hot in hotArti" :key="hot.id">
						<router-link :to="'/navLink/'+$props.id+'/arti/'+hot.id" tag="div" class="slide-banner">
							<img :src="hot.banner">
						</router-link>
						<p class="slide-local">{{hot.title}}</p>
					</div>
				</div>
				<div class="swiper-button-prev swiper-btn"></div><!--左箭头-->
				<div class="swiper-button-next swiper-btn"></div><!--右箭头-->
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import config from '../../Config.js';
export default {
	name: 'CasesSwiper',
	data() {
		return {
			_id: '',
			pid: '',
			childNav: [],
			hotArti: [],
			pagePid: []
		};
	},
	props: ['id'],
	methods: {
		getChildNav(_id) {
			this.$ajax
				.get(`${config.server_url}/get_topNav_all`, { params: { pid: _id } })
				.then(da => {
					this.childNav = da.data;
					this.childNav.map(value => {
						this.pagePid = this.pagePid.concat(value.id);
					});
					this.pagePid.join();
					this.$ajax
						.get(`${config.server_url}/get_hot_article?pid=${this.pagePid}&type=2`)
						.then(da => {
							this.hotArti = da.data;
						});
				});
		},
		case_swiper() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				effect: 'fade',
				touchRatio: 0.6,
				autoplay:true,
				pagination: {
					el: '.swiper-pagination'
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
				// 				autoplay: {
				// 					delay: 2000
				// 				}
			});
		}
	},
	created() {
		this.getChildNav(this.$props.id);
	},
	updated() {
		this.case_swiper();
	}
};
</script>

<style scoped>
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.cases-swiper {
	padding: 50px 0;
}
.swiper-container {
	width: 100%;
}
.swiper-slide {
	height: 600px;
	overflow: hidden;
	position: relative;
}
.slide-banner {
	height: 600px;
	overflow: hidden;
	cursor: pointer;
}
.slide-banner img {
	width: 100%;
	height: 100%;
}
.slide-local {
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 12px 0;
	width: 100%;
	font-size: 20px;
	color: #383838;
	text-indent: 1em;
	background: rgba(255, 255, 255, 0.9);
}
.swiper-btn{
	position: absolute;
	top: auto;
	bottom: 7px;
	left: auto;
	width: 30px;
	height: 30px;
	overflow: hidden;
}
.swiper-button-prev {
	background: url(../../assets/img/arrows.png) no-repeat 0px 0px;
	right: 60px;
}
.swiper-button-next{
	background: url(../../assets/img/arrows.png) no-repeat -40px 0px;
	right: 20px;
}
</style>
