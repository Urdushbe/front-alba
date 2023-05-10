<template>
    <div class="row">
        <div class="col-12">
            <form class="col-5" @submit.prevent="reg">
                <div v-if="error" class="alert alert-danger" role="alert">
                    {{error}}
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1"  class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="form.email" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Parol </label>
                    <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1">

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1"  class="form-label">To'liq ismingiz <spam id="emailHelp" class="form-text">(Majburiy emas!)</spam></label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="form.fullName" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1"  class="form-label">Telefon raqamingiz</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="form.tel" aria-describedby="emailHelp">
                </div>

                <span class="" role="status" aria-hidden="true"></span>



                <button type="submit" class="btn btn-primary"><div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div> Ro'yxatdan o'tish</button>


            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "RegistrationPage",
    data(){
        return {
            loading: null,
            error: null,
            form: {
                email: null,
                password: null,
                fullName: null,
                tel: null
            }
        }
    },
    methods: {
        ...mapActions(['fetchReg']),
        reg() {
            this.loading = true
            this.fetchReg(this.form)
                .then(() => {
                    this.$router.push('/login')
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