import Hello from './Hello.vue'
import VueDiff2Html from './VueDiff2Html.vue'

function plugin (Vue) {
  Vue.component('hello', Hello)
  Vue.component('vue-diff-2-html', VueDiff2Html)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Hello,
  VueDiff2Html,
  version
}
