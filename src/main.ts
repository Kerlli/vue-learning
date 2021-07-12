import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElButton, ElInput } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(ElButton)
app.use(ElInput)

app.mount('#app')
