import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import register from './views/Register.vue'
import Release from './views/Release.vue'
import editor from './components/editor.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      children:[
        { path: '',name: 'Discover', component: () => import(/* webpackChunkName: "about" */ './components/Discover.vue')},
        { path: 'Discover',name: 'Discover', component: () => import(/* webpackChunkName: "about" */ './components/Discover.vue')},
        { path: 'Attention',name: 'Attention', component: () => import(/* webpackChunkName: "about" */ './components/Attention.vue'),
          children:[
            {path: 'Quanbu',name: 'Quanbu', component: () => import(/* webpackChunkName: "about" */ './components/Quanbu.vue')},
            {path: 'Zhiye',name: 'Zhiye', component: () => import(/* webpackChunkName: "about" */ './components/Zhiye.vue')},
            {path: 'Zhiye1',name: 'Zhiye1', component: () => import(/* webpackChunkName: "about" */ './components/Zhiye1.vue')},
            {path: 'Zhiye2',name: 'Zhiye2', component: () => import(/* webpackChunkName: "about" */ './components/Zhiye2.vue')},
           ]
        },
        { path: 'information',name: 'information', component: () => import(/* webpackChunkName: "about" */ './components/Information.vue'),
        children:[
          {path: 'discuss1',name: 'discuss1', component: () => import(/* webpackChunkName: "about" */ './components/Discuss1.vue')},
          {path: 'discuss',name: 'discuss', component: () => import(/* webpackChunkName: "about" */ './components/Discuss.vue')}, 
      ]
      }
    ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/Release',
      name: 'Release',
      component: Release,
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
