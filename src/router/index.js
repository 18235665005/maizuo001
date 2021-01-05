import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 导入需要的组件
/* import Films from  '@/views/Films/Index'
import NowPlaying from  '@/views/Films/NowPlaying'
import ComingSoon from  '@/views/Films/ComingSoon'
import Detail from '@/views/Films/Detail' */
// import Cinemas from '@/views/Cinemas/Index'
// import Center from '@/views/Center/Index'

// 导入模块化的路由
import filmsRouter from './routers/films'
import centerRouter from './routers/center'
import cinemasRouter from './routers/cinemas'

// 定义路由
const routes = [
  // 重定向  访问根的时候  让页面重定向到正在热映()
  
    {
      path:'/',
      redirect:'/films/NowPlaying'
    },

    // 模块化的组件
    ...filmsRouter,
    ...centerRouter,
    ...cinemasRouter

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
