import { App } from 'vue'
import Button from '@/components/shared/Button.vue'
import AutoComplete from '@/components/shared/AutoComplete.vue'
import '@/styles/index.css'

export { Button, AutoComplete }

export default {
  install(app: App) {
    app.component('TUiButton', Button)
    app.component('TUiAutoComplete', AutoComplete)
  },
}
