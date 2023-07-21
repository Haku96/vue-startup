import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '@/assets/style/index.scss';
import 'element-plus/dist/index.css';
import './mock';
import App from './App.vue';

import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { registerGlobComp } from '@/components/registerGlobComp';

async function bootstrap() {
  const app = createApp(App);

  // 初始化 Pinia
  setupStore(app);

  // 初始化 vue-router
  setupRouter(app);

  // 全局组件注册
  registerGlobComp(app);
  app.use(ElementPlus);

  app.mount('#app');
}

bootstrap();
