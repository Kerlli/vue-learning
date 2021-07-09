import { createApp } from 'vue'
import { ElButton, ElInput } from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElButton)
app.use(ElInput)

app.mount('#app')
