import App from './App.vue'
import compositionApi from '@vue/composition-api'
import Vue from 'vue'
import VueSimpleSVG from 'vue-simple-svg'
import vuetify from './plugins/vuetify'

Vue.use(compositionApi)
Vue.use(VueSimpleSVG)

new Vue({
    vuetify,
    render: (h) => h(App)
}).$mount("#app")