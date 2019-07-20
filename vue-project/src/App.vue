<template>
  <div>
      <h1 v-colored v-if="visible">{{ title }}</h1>      
      <button @click="visible = !visible">Toggle</button>
      <button @click="title = 'New title'">Change title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'hello i am vue',
      visible: true
    }
  }
}
</script>

<style scoped>
  /* h1 {
    color: red;
  } */
</style>
