import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/Login')
const Home = () => import('views/Home')
const MyPatientsHome = () => import('@/views/myPatients/MyPatientsHome')
const HosRecord = () => import('views/HosRecord')
const PersonalInfo = () => import('views/PersonalInfo')
const DetailHome = () => import('views/patientsDetail/DetailHome')
const CheckRecords = () => import('@/views/patientsDetail/CheckRecords')
const DrugRecords = () => import('@/views/patientsDetail/DrugRecords')
const CostLists = () => import('@/views/patientsDetail/CostLists')
// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'my-patients-home',
        component: MyPatientsHome
      },
      {
        path: 'hos-record',
        component:HosRecord,
      },
      {
        path: 'personal-info',
        component:PersonalInfo,
      },


    ]
  },
  {
    path: '/detail-home',
    component: DetailHome,
    children: [
      {

        path: 'check-records',
        component: CheckRecords
      },
      {
        path: 'drug-records',
        component:DrugRecords,
      },
      {
        path: 'cost-lists',
        component:CostLists,
      },
    ]
  },


]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
