<template>
  <div>
    <h1>parent - {{ carName }}</h1>
    
    <app-counter :counter="counter"></app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNameToAudi"
      @nameChange="carName = $event"
      @counterUpdate="counter = $event"
    >
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './counter'

export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,
      counter: 0
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
