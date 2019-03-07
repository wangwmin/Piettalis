<!-- 子页面首页 -->
<template>
	<div class="NavChildHome" v-if="artical && hotType">
		<!-- 品牌简介 -->
		<div class="navChild-box" v-if="$props.id==1" v-for="art in artical" :key="art.id">
			<div v-html="art.contents"></div>
		</div>
		<!-- 新闻中心 -->
		<div class="navChild-two" v-if="$props.id==2" key="navChild-two">
			<div v-if="$route.params.childId" >
				<!-- <NavChildArti :childId="childId"></NavChildArti> -->
					<router-view></router-view>
			</div>
			<div class="w-1200" v-else>
				<ul class="navChild-news">
					<router-link :to="'/navLink/'+$props.id+'/arti/'+art.id" tag="li" class="news-company" v-for="art in artical" :key="art.id" v-if="art.type==1">
						<div class="news-banner">
							<img :src="art.banner">
						</div>
						<div class="news-text">
							<h3 v-text="art.title"></h3>
							<div class="news-time">
								<i class="fa fa-clock-o"></i>
								{{new Date(art.dates).toLocaleDateString().replace(/\//g,'-')}}
								<span class="news-more">
									<i class="fa fa-angle-right"></i>
								</span>
							</div>
						</div>
					</router-link>
					<router-link :to="'/navLink/'+$props.id+'/arti/'+art.id" tag="li" class="news-importe w-1200" v-for="art in hotType" :key="art.id">
						<div class="news-importe-banner">
							<img :src="art.banner">
						</div>
						<div class="news-importe-text">
							<h3 v-text="art.title"></h3>
							<p v-text="art.description"></p>
							<div class="news-time">
								<i class="fa fa-clock-o"></i>
								{{new Date(art.dates).toLocaleDateString().replace(/\//g,'-')}}
							</div>
						</div>
						<div class="news-importe-more"></div>
					</router-link>
					<li class="clear"></li>
				</ul>
			</div>
		</div>
		<!-- 产品系列展示 -->
		<div class="navChild-pro" v-if="$props.id==3" key="navChild-pro">
			<div class="cases-list pro-list w-1200">
				<ul class="pro-list-ul">
					<router-link tag="li" :to="'/proDetail/'+list.id+'/'+list.pid" class="pro-list-li" v-for="list in pageArt" :key="list.id">
						<div class="pro-li-box">
							<div class="pro-li-logo"><img :src="list.banner"></div>
							<p>{{list.title}}</p>
							<div class="pro-li-desc" v-html="'<p>'+list.description.replace(/,/g,'</p><p>')+'</p>'">
							</div>
						</div>
					</router-link>
					<li class="clear"></li>
				</ul>
			</div>
			<div class="cases-page w-1200">
				<!-- <div v-if="page.length>0"> -->
					<span class="page-prev page-p" @click="pageCode = page.prev"></span>
					<span :class="{'page-p':true,'page-active':pageCode == p}" v-for="p in page.pageList" @click="pageCode = p">{{p}}</span>
					<span class="page-next page-p" @click="pageCode = page.next"></span>
					<!-- <div class="clear"></div> -->
				<!-- </div> -->
			</div>
		</div>
		<!-- 工程案例 -->
		<div class="navChild-three" v-if="$props.id==4" key="navChild-three">
			<div v-if="$route.params.childId">
				<router-view></router-view>
			</div>
			<div v-else>
				<ul class="cases-list w-1200">
					<li class="cases-list-li" v-for="list in pageArt" :key="list.id">
						<div style="background: #fff;">
							<router-link class="cases-list-banner" :to="'/navLink/'+$props.id+'/arti/'+list.id" tag="div">
								<img :src="list.banner">
							</router-link>
							<div class="cases-list-desc">
								<h5>{{list.title}}</h5>
								<p>{{list.description}}</p>
								<router-link class="more" :to="'/navLink/'+$props.id+'/arti/'+list.id">
									<span class="more-txt"></span>
									<span class="more-m">查看更多</span>
								</router-link>
							</div>
						</div>
					</li>
					<li class="clear"></li>
				</ul>
				<div class="cases-page w-1200">
					<span class="page-prev page-p" @click="pageCode = page.prev"></span>
					<span :class="{'page-p':true,'page-active':pageCode == p}" v-for="p in page.pageList" @click="pageCode = p">{{p}}</span>
					<span class="page-next page-p" @click="pageCode = page.next"></span>
					<!-- <div class="clear"></div> -->
				</div>
			</div>
		</div>
		<!-- 技术支持 -->
		<div class="technology" v-if="$props.id==5" key="technology">
			<div class="tec-body">
				<ul class="tec-nav w-1200">
					<router-link tag="li" :to="nav.linkSrc+'/'+$props.id+'/'+nav.id" class="tec-nav-list" v-for="nav in childNav" :key="nav.id">
						<div :class="'tec-nav-logo tec-nav-'+nav.keyWord" :style='"background-image: url("+nav.banner+");"'></div>
						<p class="tec-nav-name">{{nav.navName}}</p>
					</router-link>
					<li class="clear"></li>
				</ul>
				<div class="tec-main">
					<div class="w-1200">
						<div class="tec-problem-hot">
							<h3>热门问题</h3>
							<ul>
								<li class="tec-hot-list" v-for="problem in hotProblem" v-if="problem.pid==27">
									<router-link tag="p" style="cursor: pointer;" :to="'/artical/'+$props.id+'/'+problem.id">{{problem.title}}</router-link>
									<router-link to="" :to="'/artical/'+$props.id+'/'+problem.id" class="tec-hot-more">
										<img src="../../assets/img/more.png" class="more_move">
										<img src="../../assets/img/more_hover.png" class="more_hover">
									</router-link>
								</li>
							</ul>
						</div>
						<div class="tec-download">
							<h3>下载中心</h3>
							<ul>
								<li class="tec-hot-list" v-for="download in hotProblem" v-if="download.pid==28">
									<router-link tag="p" style="cursor: pointer;" :to="'/navChildLink/'+$props.id+'/'+download.pid">{{download.title}}</router-link>
									<router-link :to="'/artical/'+$props.id+'/'+download.id" class="tec-hot-more">
										<img src="../../assets/img/more.png" class="more_move">
										<img src="../../assets/img/more_hover.png" class="more_hover">
									</router-link>
								</li>
							</ul>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../../Config.js'
	import NavChildArti from '@/components/children/NavChildArti'
	export default {
		name:"NavChildHome",
		components:{ NavChildArti },
		data(){
			return {
				_id:"",
				pid:"",
				childId:"",
				childNav:[],
				artical:[],
				hotType:[],
				pagePid:[],
				pageArt:[],
				page:[],
				pageCode:1,
				hotProblem:[],
			}
		},
		props:['id'],
		methods:{
			getChildNav(_id){
				this.$ajax.get(`${config.server_url}/get_topNav_all`,{params:{ pid:_id }}).then(da=>{
					this.pid=da.data[0].id;
					this.childNav=da.data;
					this.$ajax.get(`${config.server_url}/get_article_conditions`,{params:{ pid:da.data[0].id }}).then(data=>{
						this.artical=data.data;
					});
					this.$ajax.get(`${config.server_url}/get_article_conditions`,{params:{ pid:da.data[0].id,type:2 }}).then(da=>{
						this.hotType=da.data;
					});
					this.childNav.map((value)=>{ this.pagePid=this.pagePid.concat(value.id); })
					this.pagePid.join();
					this.$ajax.get(`${config.server_url}/get_article_page?pid=${this.pagePid}&pageShow=8&pageCode=1`).then(da=>{
						this.pageArt=da.data.data1;
						this.page=da.data.data2;
					});
					this.$ajax.get(`${config.server_url}/get_hot_article?pid=${this.pagePid}`).then(da=>{
						this.hotProblem=da.data;
					});
				})
			}
		},
		watch:{
			id(to,from){
				this._id=to;
				this.childNav=[];
				this.artical=[];
				this.hotType=[];
				this.pagePid=[];
				this.pageArt=[];
				this.page=[];
				this.hotProblem=[];
				this.getChildNav(this._id);
			},
			pageCode(to,from){
				this.$ajax.get(`${config.server_url}/get_article_page?pid=${this.pagePid}&pageShow=8&pageCode=${to}`).then(da=>{
					this.pageArt=da.data.data1;
					this.page=da.data.data2;
				});
			},
		},
		created(){
			this._id=this.$props.id;
			this.getChildNav(this._id);
		}
	}
</script>

<style scoped>
	@import url('../../assets/css/NavChildLink.css');
</style>