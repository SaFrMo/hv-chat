import Vue from 'vue'
import App from './App.vue'

window.addEventListener('load', function(){

    const horizon = Horizon()
    horizon.onReady( () => {
        new Vue({
          el: '#app',
          data: {
              horizon: horizon
          },
          render: h => h(App)
        })
    })
    horizon.connect()

})
