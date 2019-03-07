import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from './vuex'
import axios from 'axios'
import VueJsonp  from  'vue-jsonp'
import { Base64 } from 'js-base64'
import jquery from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.prototype.$ajax=axios;
Vue.use(VueJsonp)
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
	el: '#app',
	router,
	store:vuex,
	VueJsonp,
	components: {
		App
	},
	template: '<App/>', 
});
	