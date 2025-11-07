import { App } from 'vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import './style.css'

export { Button, Input }

export default {
  install(app: App) {
    app.component('UiButton', Button)
    app.component('UiInput', Input)
  },
}
