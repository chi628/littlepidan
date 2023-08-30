import "./assets/main.scss"
import "./assets/tailwind.css"
import "./assets/icon.scss"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import VueLazyLoad from "vue3-lazyload"
//  @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueLazyLoad, {})
app.mount("#app")
AOS.init()

