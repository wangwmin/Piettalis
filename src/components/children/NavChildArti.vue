<!-- 子页面显示文章内容 -->
<template>
	<div class="NavChildArti">
		<div class="childArti full-width">
			<div class="arti-box w-1200">
				<h3 class="arti-title">{{detail.title}}</h3>
				<p class="arti-date" v-if="$route.params.id!=4">{{new Date(detail.dates).toLocaleDateString()}}</p>
				<div class="arti-content" v-html="detail.contents"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../../Config.js'
	export default {
		name:"NavChildArti",
		data(){
			return {
				detail:[]
			}
		},
		props:['childId'],
		watch:{
			$route(to,from){
				this.getA(to.params.childId);
			}
		},
		methods:{
			getA(id){
				this.$ajax.get(`${config.server_url}/get_article_only`,{params:{id:id}}).then(da=>{
					this.detail=da.data[0];
				})
			}
		},
		created(){
			this.getA(this.$route.params.childId);
		}
	}
</script>

<style scoped>
	.childArti{
		padding: 50px 0;
	}
	.arti-box{
		background: #fff;
		padding: 60px 120px;
	}
	.arti-title{
		text-align: center;
		margin-bottom: 15px;
		font-size: 20px;
		color: #292929;
	}
	.arti-date{
		text-align: center;
	}
	.arti-content{
		padding: 50px 0;
	}
</style>
