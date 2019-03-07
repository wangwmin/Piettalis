import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NavTopLink from '@/components/NavTopLink'
import Contact from '@/components/Contact'
import ProDetail from '@/components/ProDetail'
import NavChildArti from '@/components/children/NavChildArti'

Vue.use(Router)

export default new Router({
	routes: [
		{path:"/",name:"首页",component:Home},
		{path:"/contact",name:"联系我们",component:Contact},
		{path:"/navLink/:id",name:"顶层导航页面",component:NavTopLink,
			children:[{
				path:"arti/:childId",name:"顶层导航下的文章",component:NavChildArti
			}]
		},
		{path:"/navChildLink/:id/:pid",name:"子导航页面",component:NavTopLink},
		{path:"/proDetail/:id/:pid",name:"产品展示页面",component:ProDetail}
	]
})
