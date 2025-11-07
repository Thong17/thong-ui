import { App } from 'vue'
import Button from '@/components/shared/Button.vue'
import '@/styles/index.css'

export { Button }

export default {
  install(app: App) {
    app.component('UiButton', Button)
  },
}
