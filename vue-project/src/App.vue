<template>
  <div>
      <h1 v-colored:background.font="'red'">{{ title }}</h1>
      <h1 v-colored:color.delay.font="'blue'">{{ title }}</h1>

      <h2 v-font>Local font directive</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'hello i am vue'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '80px'
      }
    }
  }
}
</script>

<style scoped>
  /* h1 {
    color: red;
  } */
</style>
