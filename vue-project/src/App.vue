<template>
  <div>
      <h2>test</h2>
      <select v-model="defaultSocial">
        <option v-for="s in socialsList">{{ s }}</option>
      </select>
      <hr>
      <p>{{ defaultSocial }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultSocial: 'vk',
      socialsList: ['instagram', 'vk', 'facebook']
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
