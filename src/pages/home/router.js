// 懒加载路由
const Home = () => import('./Home.vue')
export default {
  path: '/home', 
  name: 'home',
  component: Home,
  children: [
  ]
}
