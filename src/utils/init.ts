import { createApp } from 'vue'
import type { DefineComponent } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'
import BaseLoading from '../components/BaseLoading.vue'
import 'virtual:windi.css'

export default function (AppComponent: DefineComponent<{}, {}, any>, mountDom = '#app') {
  createApp(AppComponent).component('BaseIcon', BaseIcon).component('BaseLoading', BaseLoading).mount(mountDom)
}
