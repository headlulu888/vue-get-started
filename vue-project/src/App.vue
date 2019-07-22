<template>
  <div>
      <h2>test</h2>
      <input type="text" v-model.lazy="name">
      <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'initial state'
    }
  }
}
</script>

<style scoped>
</style>
