// 懒加载路由
const Login = () => import('./Login.vue')
export default {
  path: '/login', 
  name: 'login',
  component: Login,
  children: [
  ]
}
