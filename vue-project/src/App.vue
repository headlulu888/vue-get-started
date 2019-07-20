<template>
  <div>
    <app-car>
      <h1 v-colored>{{ title }}</h1>      
      <button v-on:></button>
    </app-car>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'hello i am vue'
    }
  }
}
</script>

<style scoped>
  /* h1 {
    color: red;
  } */
</style>
