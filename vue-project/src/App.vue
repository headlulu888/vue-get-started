<template>
  <div>
      <h2>test</h2>
      <input type="text" v-model.number="age">

      <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 20
    }
  },
  watch: {
    age(value) {
      console.log(value)
      console.log(typeof value)
    }
  }
}
</script>

<style scoped>
  textarea {
    height: 100px;
    width: 350px;
  }

  p {
    white-space: pre;
  }
</style>
