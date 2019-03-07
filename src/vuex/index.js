import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios';
import config from '../Config.js'

Vue.use(vuex)

export default new vuex.Store({
	state:{
		navTopId:1,
		navTopAjax:"",
		
		navChild:"",
		navChildId:""
	},
	getters:{
		topnavData:function(state){
			return state.navTopAjax;
		}
	},
	mutations:{
		getTopnavData(state,id){
			state.navTopId=id;
			/* axios.get(`${config.server_url}/get_nav_only`, { params: { id: state.navTopId } }).then(da => {
					state.navTopAjax=da.data[0];
			});
			axios.get(`${config.server_url}/get_topNav_all`, { params: { id: state.navTopId } }).then(da => {
					state.navChild=da.data[0];
			}); */
		},
		changeChildId(state,id){
			state.navChildId=id;
		}
	},
	actions:{
		ajaxNavTop(context,id){
			context.commit('getTopnavData',id);
		}
	}
})