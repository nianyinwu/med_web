import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import ListView from '../views/ListView.vue'
import SearchView from '../views/SearchView.vue'
import AcontView from '../views/AcontView'
import AcSearchView from '../views/AcSearchView'
import LockView from '../views/LockView'
import CheckAllView from '../views/CheckAllView'
import CheckMView from '../views/CheckMView'
import TableView from '../views/TableView'
import ResultView from '../views/ResultView'
import DetcView from '../views/DetcView'
import LayerView from '../views/LayerView'
import AddView from '../views/AddView'
import RecordLostView from '../views/RecordLostView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/account',
    name: 'account',
    component: AcontView
  },
  {
    path: '/acsearch',
    name: 'acsearch',
    component: AcSearchView
  },
  {
    path: '/lock',
    name: 'lock',
    component: LockView
  },
  {
    path: '/check-all',
    name: 'check-all',
    component: CheckAllView
  },
  {
    path: '/check-month',
    name: 'check-month',
    component: CheckMView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView
  },
  {
    path: '/detect',
    name: 'detect',
    component: DetcView
  },
  {
    path: '/layer',
    name: 'layer',
    component: LayerView
  },
  {
    path: '/add',
    name: 'add',
    component: AddView
  },
  {
    path: '/recordlost',
    name: 'recordlost',
    component: RecordLostView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
   const isLogin = localStorage.getItem('token') == 'ImLogin' ;
   if( isLogin ){
     next();
   } else {
     if( to.path !== '/')
       next('/');
     else
       next();
   }
 });

export default router
