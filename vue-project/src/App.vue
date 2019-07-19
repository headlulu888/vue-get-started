<template>
  <div>
    <app-car>
      <h1 slot="title">{{carName}}</h1>
      <p slot="text">Lorem ipsum dolor sit amet.</p>
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data() {
    return {
      carName: 'Ford'
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style scoped>
  /* h1 {
    color: red;
  } */
</style>
