<template>
  <div>
      <h1>{{ title }}</h1>
      <h1>{{ title | lowercase }}</h1>
      <h1>{{ title | uppercase }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'HellO i am vue'
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style>
</style>
