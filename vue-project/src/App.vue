<template>
  <div>
      <h2>test</h2>
      <label for="">
        <input type="radio" value="instagram" v-model="socials">Instagram
      </label>

      <label for="">
        <input type="radio" value="vk" v-model="socials">Vk
      </label>

      <label for="">
        <input type="radio" value="facebook" v-model="socials">Facebook
      </label>

      <hr>

      <p>{{ socials }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: 'vk'
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
