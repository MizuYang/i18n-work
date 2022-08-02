import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from '../i18n/lang'//* 多國語系

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.productionTip = false

app.component('IsLoading', VueLoading)

app.use(i18n)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
