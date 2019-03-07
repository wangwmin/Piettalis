<!-- 子导航页面，根据传回的id不同，显示不同的内容 -->
<template>
	<div class="NavChildLink">
		<div class="navChild-box" v-if="art.pid!=10" v-for="art in artical" :key="art.id">
			<div :class="{'navChild-interpreta':art.pid==7}" v-if="art.pid<9" v-html="art.contents"></div>
			<div class="navChild-culture"  v-if="art.pid==9">
				<div class="culture-title">
					<h3>{{art.title}}</h3>
					<p>{{art.description}}</p>
				</div>
				<div class="w-1200" v-html="art.contents"></div>
			</div>
		</div>
		<div v-if="this.pid==10">
			<div class="w-1200 navChild-honor">
				<ul class="honor-ul">
					<li class="honor-list" v-for="art in artical" :key="art.id">
						<img class="honor-img" :src="art.banner">
						<p class="honor-title">
							{{art.title}}
						</p>
					</li>
					<li class="clear"></li>
				</ul>
			</div>
		</div>
		<div v-if="$props.id==1&this.pid==11">
			<div class="w-1200 navChild-video">
				<div class="video-box">
					<video width="100%" height="100%" controls="controls" x-webkit-airplay="true" webkit-playsinline="false" preload="none" src=""><br>您的浏览器不支持视频播放。<br>请使用谷歌、火狐、360、IE8以上版本浏览器进行观看。</video>
				</div>
			</div>
		</div>
		<div class="" v-if="$props.id==2">
			<div class="w-1200">
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
					<router-link :to="'/navLink/'+$props.id+'/arti/'+art.id" tag="li" class="w-1200 news-importe" v-for="art in hotType" :key="art.id">
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
		<div class="navChild-pro" v-if="$props.id==3">
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
				<div v-if="page.length>0">
					<span class="page-prev page-p" @click="pageCode = page.prev"></span>
					<span :class="{'page-p':true,'page-active':pageCode == p}" v-for="p in page.pageList" @click="pageCode = p">{{p}}</span>
					<span class="page-next page-p" @click="pageCode = page.next"></span>
					<!-- <div class="clear"></div> -->
				</div>
			</div>
		</div>
		<!-- 工程案例 -->
		<div class="navChild-three" v-if="$props.id==4">
			<div>
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
				<div class="cases-page w-1200" v-if="page.pageList.length>1">
					<span class="page-prev page-p" @click="pageCode = page.prev"></span>
					<span :class="{'page-p':true,'page-active':pageCode == p}" v-for="p in page.pageList" @click="pageCode = p">{{p}}</span>
					<span class="page-next page-p" @click="pageCode = page.next"></span>
				</div>
			</div>
		</div>
		<!-- 技术支持 -->
		<div class="technology" v-if="$props.id==5">
			<!-- 子导航内显示 所有子导航 -->
			<div class="full-width navTop-nav">
				<ul class="w-1200">
					<li class="navTop-nav-list" :style="'width:'+ 100/childNav.length +'%'" v-for="child in childNav">
						<router-link :to="child.linkSrc+'/'+$props.id+'/'+child.id" @click.native="getTecA(child.id)">
							{{child.navName}}
						</router-link>
					</li>
					<li class="clear"></li>
				</ul>
			</div>
			<div class="tec-body w-1200">
				<div class="tec-body-arti">
					<div class="tec-body-less" v-if="tec_artical.length==1">
						<div class="" v-for="data in tec_artical">
							<h4 v-if="data.title" style="font-size: 16px;padding-bottom: 5px!important;color: rgb(41, 41, 41);">{{data.title}}</h4>
							<p v-if="data.description" style="text-indent: 2em;">{{data.description}}</p>
							<p v-html="data.contents"></p>
						</div>
					</div>
					<div class="tec-body-none w-1200" v-if="tec_artical.length==0">
						<div class="">
							<form action="">
								<input class="tec-form-input" type="text" placeholder="您的名字">
								<input class="tec-form-input" type="text" placeholder="您的邮箱">
								<input class="tec-form-input" type="text" placeholder="您的手机">
								<textarea class="tec-form-input tec-form-content" type="text" placeholder="您的留言信息"></textarea>
								<div class="tec-form-btn">
									<button class="submit-btn">发表留言</button>
								</div>
							</form>
						</div>
					</div>
					<div class="tec-body-most" v-if="tec_artical.length>1">
						<ul>
							<li class="tec-hot-list tec-hot-detail" v-for="data in tec_artical" :key="data.id">
								<router-link class="tec-hot-title" tag="h3" style="cursor: pointer;" to="" @click.native="getOneA(data.id)">{{data.title}}</router-link>
								<p class="tec-hot-desc" v-if="data.description">{{data.description}}</p>
								<router-link to="" @click.native="getOneA(data.id)" class="tec-hot-more-big">
									<img src="../../assets/img/more_big.png" class="more_big_move">
									<img src="../../assets/img/more_big_hover.png" class="more_big_hover">
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../../Config.js'
	export default {
		name:"NavChildLink",
		data(){
			return {
				childNav:[],
				artical:[],
				hotType:[],
				_pid:"",
				_id:"",
				pagePid:[],
				pageArt:[],
				page:[],
				pageCode:1,
				tec_artical:[],
			}
		},
		props:['id','pid','first'],
		watch:{
			pid(to,from){
				this._pid=to;
				this.getArt(this._pid);
				this.getArtHotType(this._pid,2);
				this.getPageArt(this._pid);
				this.getTecA(this._pid);
			},
			id(to,from){
				this._id=to;
				this.getPageArt(to);
				this.getOneA(to);
			},
			pageCode(to,from){
				this.$ajax.get(`${config.server_url}/get_article_page?pid=${this._pid}&pageShow=8&pageCode=${to}`).then(da=>{
					this.pageArt=da.data.data1;
					this.page=da.data.data2;
				});
			}
		},
		methods:{
			getNav(_id){
				this.$ajax.get(`${config.server_url}/get_topNav_all`,{params:{ pid:_id }}).then(da=>{
					this.childNav=da.data;
				})
			},
			getArt(_pid){
				this.$ajax.get(`${config.server_url}/get_article_conditions`,{params:{ pid:_pid }}).then(da=>{
					this.artical=da.data;
				})
			},
			getArtHotType(_pid,_type){
				this.$ajax.get(`${config.server_url}/get_article_conditions`,{params:{ pid:_pid,type:_type }}).then(da=>{
					this.hotType=da.data;
				})
			},
			getPageArt(_pid){
				this.$ajax.get(`${config.server_url}/get_article_page?pid=${_pid}&pageShow=8&pageCode=1`).then(da=>{
					this.pageArt=da.data.data1;
					this.page=da.data.data2;
				})
			},
			getTecA(_pid){
				this.$ajax.get(`${config.server_url}/get_Nav_allArticle`,{params:{ pid:_pid }}).then(da=>{
					this.tec_artical=da.data;
				})
			},
			getOneA(_id){
				this.$ajax.get(`${config.server_url}/get_article_only`,{params:{ id:_id }}).then(da=>{
					this.tec_artical=da.data;
				})
			}
		},
		created(){
			this._pid=this.$props.pid?this.$props.pid:this.$props.first;
			this._id=this.$props.id;
			this.getNav(this._id);
			this.getArt(this._pid);
			this.getArtHotType(this._pid,2);
			this.getPageArt(this._pid);
			this.getTecA(this._pid);
		}
	}
</script>

<style scoped>
@import url('../../assets/css/NavChildLink.css');
</style>
