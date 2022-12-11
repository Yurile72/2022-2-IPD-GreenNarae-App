import App from './App.vue'

import { createApp } from 'vue'
import router from './router/index'
import firebaseConfig from '../firebaseConfig'

// Plugins
import { registerPlugins } from '@/plugins'

import {
  initializeApp
} from 'firebase/app'
import {
  // eslint-disable-next-line
  getDatabase,
  // eslint-disable-next-line
  ref,
  // eslint-disable-next-line
  onValue
} from 'firebase/database'


const app = createApp(App)
app.config.globalProperties.$firebase = initializeApp(firebaseConfig)
app.config.globalProperties.user = { name: "상심당", point: 5500, gift: 0, coupon: 0, stamp: 0 },
app.use(router)

registerPlugins(app)

app.mount('#app')
