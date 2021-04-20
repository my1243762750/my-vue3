import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router/index'
import store from './store'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import installSvgIcon from './icons' // icon
// import '@/permission' // permission control

const app = createApp(App).use(store).use(router)
installElementPlus(app)
installSvgIcon(app)
app.mount('#app')
