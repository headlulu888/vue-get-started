<template>
  <div>
      <h1>{{ title }}</h1>

      <input type="text" v-model="searchName">

      <ul>
        <li v-for="name of filteredNames">{{ name }}</li>
      </ul>
      <hr>
      <app-list></app-list>
  </div>
</template>

<script>
import ListMixin from './listMixin'

export default {
  data() {
    return {
      title: 'HellO i am vue'
    }
  },
  mixins: [ListMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style>
</style>
