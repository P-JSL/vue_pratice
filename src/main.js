import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import Select from './components/select';
Vue.component(Select.name,Select)
new Vue({
  render: h => h(App),
}).$mount('#app')
