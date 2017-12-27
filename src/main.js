import Vue from 'vue';
import BGTheme from '@';

import App from './App';

Vue.use(BGTheme);

new Vue({
  render: (h) => h(App)
}).$mount('#app');