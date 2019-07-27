<template>
  <div class="container">
    <form>
      <div class="form-group pt-3">
        <label for="email">email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          v-model="email"
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  }
}
</script>

<style>

</style>
