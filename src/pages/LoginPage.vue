<template>
  <div class="row">
    <div class="col-12">
      <form class="col-5" @submit.prevent="auth">
        <div v-if="error" class="alert alert-danger" role="alert">
          {{error}}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1"  class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="form.email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Parol</label>
          <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1">
          <div id="emailHelp" class="form-text">Login yoki parol esdan chiqdimi? <a href="/">Tiklash!</a></div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Eslab qolish</label>
        </div>

          <span class="" role="status" aria-hidden="true"></span>



        <button type="submit" class="btn btn-primary"><div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div> Kirish</button>


      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  data(){
    return {
      loading: null,
      error: null,
        form: {
          email: null,
          password: null,
        }
    }
  },
  methods: {
    ...mapActions(['fetchLogin']),
    auth() {
      this.loading = true
      this.fetchLogin(this.form)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {
            this.loading = null
            console.log('Login yoki parol xato!')
            this.error = 'Login yoki parol xato!';
          })
    }
  }
}
</script>

<style scoped>

</style>