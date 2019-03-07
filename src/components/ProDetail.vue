<!-- 展示产品具体信息 -->
<template>
	<div class="proDetail">
		<div class="proDet-body full-width">
			<div class="full-width proDet-banner">
				<img :src="banner">
			</div>
			<div class="proDet-detail">
				<div class="proDet-bg">
					<div class="proDet-title">
						<div class="proDet-name">
							<p class="proDet-name-p">{{proDetail.keyWord}}</p>
							<p class="proDet-name-p proDet-Serial-name">{{proDetail.title}}</p>
						</div>
						<img :src="proDetail.banner">
					</div>
				</div>
				<div class="proDet-intro w-1200">
					<h3>产品介绍</h3>
					<div class="proDet-intro-content" v-html="proDetail.contents"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import config from '../Config.js';
export default {
	name: 'proDetail',
	data() {
		return {
			banner: '',
			proDetail:[]
		};
	},
	methods: {
		getProBanner(pid) {
			this.$ajax.get(`${config.server_url}/get_banner`).then(da => {
				da.data.map(v => {
					if (v.pid == pid) {
						this.banner = v.banner_link;
					}
				});
			});
		},
		getProD(id){
			this.$ajax.get(`${config.server_url}/get_article_only`,{params:{id:id}}).then(da=>{
				this.proDetail=da.data[0];
			})
		}
	},
	created() {
		this.getProBanner(this.$route.params.pid);
		this.getProD(this.$route.params.id);
	}
};
</script>

<style scoped>
.proDet-banner img {
	width: 100%;
}
.proDet-bg {
	background: url(../assets/img/pro_pic2.jpg) no-repeat center;
	height: 608px;
}
.proDet-title{
	margin-left: 250px;
	width: 653px;
	height: 600px;
	line-height: 600px;
	position: relative;
}
.proDet-title img{
	vertical-align: middle;
}
.proDet-name{
	position: absolute;
	top: 50px;
	left: -50px;
	/* width: 100px; */
}
.proDet-name-p{
	height: 26px;
	line-height: 26px;
	font-size: 24px;
	text-align: left;
	margin-bottom: 15px;
	font-family: "HELVETI1ca Neue","Microsoft Yahei","å¾®è½¯é›…é»‘","Tohoma";
}
.proDet-Serial-name{
	font-size: 44px;
	font-family: "Arial" !important;
	text-transform: uppercase;
}
.proDet-intro{
	padding: 50px;
}
.proDet-intro h3{
	color: #4e4d4d;
    font-weight: normal;
	font-size: 22px;
	padding-bottom: 20px;
	/* border-bottom: 1px solid #9c9c9c; */
}
.proDet-intro-content{
	/* margin-top: 30px; */
}
</style>
