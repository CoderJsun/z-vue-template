import { createRouter , createWebHashHistory} from 'vue-router' 

// 获取路由信息
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''));
  return page.default;
})


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
