import '@/scss/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {quoteStore} from "@/stores/quote.store";
import {createStore} from "vuex";

const store = createStore({
    modules: {
        quoteStore: quoteStore,
    }
})

createApp(App)
    .use(store)
    .mount('#app')
