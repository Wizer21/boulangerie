import { createApp, h } from 'vue'

import Main from './pages/Main.vue'
import Creations from './pages/Creations.vue'

const routes = {
  '/': Main,
  '/creations': Creations,
}
const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || Error
    },
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')  