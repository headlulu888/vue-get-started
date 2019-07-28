<template>
  <div class="container">
    <form>
      <div class="form-group pt-3">
        <label for="email">email</label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>

      <div class="form-group pt-3">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
      </div>

      <div class="form-group pt-3">
        <label for="Confirm">Confirm password</label>
        <input 
          type="password" 
          id="Confirm" 
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @blur="$v.confirmPassword.$touch()"
          v-model="confirmPassword"
        >
        <div class="invalid-feedback" v-if="!$v.password.sameAs">
          password should match
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
}
</script>

<style>

</style>
