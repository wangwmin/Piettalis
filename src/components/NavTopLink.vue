<!-- 根据传回的id不同，该组件也会显示出不同的页面 -->
<template>
	<div class="NavTopLink">
		<div class="navTop-box full-width">
			<div class="navTop-banner full-width" v-if="topNav.id!=3">
				<router-link class="navTop-banner-link" :to="topNav.linkSrc+'/'+topNav.id"
					:style="'background:url('+topNav.banner+') center'"
				>
				</router-link>
			</div>
			<!-- 产品系列的轮播图 -->
			<div class="navTop-banner-slide" v-if="topNav.id==3">
				<ProductSwiper></ProductSwiper>
				<ul class="w-1200 home-pro-nav">
					<router-link tag="li" :to="pro.linkSrc+'/'+id+'/'+pro.id" class="product-li w-1-7" v-for="pro in childNav" :key="pro.id">
						<div class="product-li-active">
							<div>
								<img class="product-logo" :src="pro.banner">
							</div>
							<p class="product-link">{{pro.navName}}</p>
						</div>
					</router-link>
					<li class="clear"></li>
				</ul>
			</div>
			<div class="full-width navTop-nav">
				<ul class="w-1200" v-if="topNav.id<3 || topNav.id==4">
					<li class="navTop-nav-list" :style="'width:'+ 100/childNav.length +'%'" v-for="child in childNav">
						<router-link :to="child.linkSrc+'/'+topNav.id+'/'+child.id">
							{{child.navName}}
						</router-link>
					</li>
					<li class="clear"></li>
				</ul>
			</div>
			<div class="w-1200" v-if="topNav.id==4">
				<CasesSwiper :id="id"></CasesSwiper>
			</div>
		</div>
			<div class="navTop-child" v-if="$route.params.pid">
				<NavChildLink :id="id" :pid="pid" :first="first" :key="id"></NavChildLink>
			</div>
			<div class="navTop-child" v-else>
				<NavChildHome :id="id"></NavChildHome>
			</div>
		
		
		
	</div>
</template>

<script>
	import config from '../Config.js'
	import NavChildHome from "@/components/children/NavChildHome"
	import NavChildLink from "@/components/children/NavChildLink"
	import ProductSwiper from "@/components/children/ProductSwiper"
	import CasesSwiper from "@/components/children/CasesSwiper"
	export default {
		name:"NavTopLink",
		components:{ NavChildLink,NavChildHome,ProductSwiper,CasesSwiper },
		data(){
			return {
				topNav:[],
				childNav:[],
				id:1,
				pid:6,
				first:""
			}
		},
		methods:{
			getTopNav(_id){
				this.$ajax.get(`${config.server_url}/get_nav_only`,{params:{ id:_id }}).then(da=>{
					this.topNav=da.data[0];
				})
			},
			getChildNav(_id){
				this.$ajax.get(`${config.server_url}/get_topNav_all`,{params:{ pid:_id }}).then(da=>{
					this.childNav=da.data;
				})
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.pid=this.$route.params.pid?this.$route.params.pid:"";
			this.getTopNav(this.id);
			this.getChildNav(this.id);
		},
		watch:{
			$route :function(to,from){
				this.id=to.params.id;
				this.pid=to.params.pid;
				this.getTopNav(this.id);
				this.getChildNav(this.id);
			}
		}
	}
</script>

<style scoped>
	.navTop-banner{
		overflow: hidden;
		background: #fff;
	}
	.navTop-banner-link{
		display: block;
		text-align: center;
		height: 600px;
	}
	.navTop-banner-img{
		margin-left: -75%;
		transform: translateX(25%);
	}
	
	.navTop-child{
		background: #f1f1f1;
	}
	.home-pro-nav {
		margin: 40px auto;
		padding: 40px 0;
		background: #fff;
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
	.product-li-active{
		box-sizing: content-box;
		padding: 15px 0;
		width: 100%;
	}
	.router-link-exact-active .product-li-active{
		background: #383838;
		color: #fff;
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
</style>
