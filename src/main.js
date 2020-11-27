import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from "axios"
import VCharts from 'v-charts'
import VueAxios from "vue-axios"
import router from "./router"
import { Notify } from 'vant'
import { Dialog } from 'vant'
import { Lazyload } from 'vant'
import vuetify from './plugins/vuetify'

Vue.use(Dialog);
Vue.use(VCharts)
Vue.use(Lazyload)
Vue.use(Notify);
Vue.use(VueAxios, axios)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,

  data() {
    return {
      timerList: [],
      addTimer: (f, interval) => {
        let timer;
        timer = setInterval(() => {
          f()
        }, interval);
        this.timerList.push(timer)
        console.log("[INFO] Add timer -> " + timer)
      },
      resetAllTimer: () => {
        console.log("[INFO] Clear all timer")
        this.timerList.forEach((item) => {
          console.log("[INFO] Clear timer -> " + item)
          clearInterval(item)
        })
        this.timerList = []
      }
    }
  },

  vuetify,
  render: h => h(App)
}).$mount('#app')
