<template>
  <div>
      <h2>test</h2>
      <textarea v-model="textarea">{{ textarea }}</textarea>
      <p>{{ textarea }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: 'initial state'
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
