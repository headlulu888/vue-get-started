<template>
  <div>
      <h1 v-colored="'red'">{{ title }}</h1>
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
