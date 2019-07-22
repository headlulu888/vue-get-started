<template>
  <div>
      <h2>test</h2>
      <label for="">
        <input type="checkbox" value="instagram" v-model="socials">Instagram
      </label>

      <label for="">
        <input type="checkbox" value="vk" v-model="socials">Vk
      </label>

      <label for="">
        <input type="checkbox" value="facebook" v-model="socials">Facebook
      </label>

      <hr>

      <ul>
        <li v-for="s of socials">{{ s }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        'vk'
      ]
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
