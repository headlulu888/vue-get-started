import Vue from 'vue'
import App from './App.vue'

import colorDirective from './color'

Vue.directive('colored', colorDirective)
// import Car from './Car.vue'

// Vue.component('app-car', Car)

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  // render: h => h(App)
  render: function(h) {
    return h(App)
  }
})