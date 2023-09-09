import { createSSRApp } from 'vue';
import App from './App.vue';
import { hamiVuex } from '@/store';

import 'uno.css';

export function createApp() {
  const app = createSSRApp(App);
  app.use(hamiVuex);
  return {
    app,
  };
}
