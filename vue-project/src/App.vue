<template>
  <div>
      <h1 v-colored:background.font="'red'">{{ title }}</h1>
      <h1 v-colored:color.delay.font="'blue'">{{ title }}</h1>
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
