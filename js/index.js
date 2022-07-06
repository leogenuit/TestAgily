
new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://openweathermap.org/api/one-call-api')
        .then(response => (this.info = response))
    }
  })