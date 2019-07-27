<template>
  <div class="container">
    <form>
      <div class="form-group pt-3">
        <label for="email">email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          @blur="$v.email.$touch()"
          v-model="email"
        >
      </div>

      <pre>
        {{ $v.email }}
      </pre>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style>

</style>
