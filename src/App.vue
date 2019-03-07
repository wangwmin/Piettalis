<template>
  <div id="app" class="f-width">
	<Head></Head>
		<router-view></router-view>
	<Foot></Foot>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import config from './Config.js';
import Head from '@/components/Head';
import Foot from '@/components/Foot';

export default {
	name: 'App',
	components: { Head, Foot },
};
</script>

<style>
@import url('./assets/css/animate.css');
@import url('./assets/css/font-awesome.min.css');
@import url('./assets/css/NavChildLink.css');
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'HELVETI1ca Neue', 'Microsoft Yahei', '微软雅黑', 'Tohoma';
}
html,
body {
	width: 100%;
	font: 12px/1.5 'Microsoft YaHei', tahoma, arial, Hiragino Sans GB, \5b8b\4f53;
}
ul,
ol {
	list-style: none;
}
body {
	min-width: 1200px;
	color: #666;
	line-height: 1.2;
	font-style: normal;
	background: #f1f1f1;
}
a {
	text-decoration: none;
	color: inherit;
}
.full-width {
	width: 100%;
	margin: auto;
}
.w-1200 {
	width: 1200px;
	margin: 0 auto;
}
.clear {
	margin: 0 !important;
	padding: 0 !important;
	border: 0 !important;
	width: 0 !important;
	height: 0 !important;
	clear: both;
}
.router-link-exact-active {
	color: #000;
	/* background: #fff; */
}
/* 首页轮播图样式 */
.swiper-pagination-bullet {
	display: inline-block;
	width: 10px;
	height: 10px;
	border: 2px solid #fff;
	border-radius: 50%;
	background: transparent;
	margin: 0 5px;
}
.swiper-pagination-bullet-active {
	background: #fff;
}

/* 产品展示页面 table样式 */
td span{
	white-space: pre-wrap !important;
}
.proDet-intro-content{
	width: 100%;
}
.proDet-intro-content table {
	width: 100% !important;
	border-collapse: collapse;
}
.td-left {
	display: inline-block;
	width: 20% !important;
}
.td-left * {
	font-size: 16px !important;
}
.td-right {
	display: inline-block !important;
	width: 75% !important;
}
.td-right span {
	font-size: 14px !important;
}
.firstRow,
.twoRow,
.threeRow,
.forthRow,
.fifthRow {
	width: 100% !important;
	box-sizing: content-box !important;
	display: block !important;
	padding: 30px 0 !important;
	border-top: 1px solid #9c9c9c;
}

.arti-content img {
	width: 100% !important;
}
.arti-content p span{
	display: block;
}
.arti-content span img {
	display: block;
	width: 40% !important;
	margin: 0 auto;
}
.__bg_gif{
	display: none;
}
</style>
