<template>
    <div class="row">
        <div class="col-12">
            <h1>Ish e'lon berish bo'limi</h1>
            <form class="col-5" @submit.prevent="jobAdd">
                <div v-if="error" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Ish nomi</label>
                    <input type="text" class="form-control" id="name" v-model="form.name">
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Ish haqida ma'lumot</label>
                    <textarea class="form-control" placeholder="Qisqacha ma'lumot" id="floatingTextarea2"
                              style="height: 100px" v-model="form.text"></textarea>
                </div>


                <div class="mb-3">
                    <label for="" class="form-label">Necha kishi kerak?</label>


                    <select v-model="form.person" class="form-select" aria-label="Default select example">
                        <option value="1">1 kishi</option>
                        <option value="2">2 kishi</option>
                        <option value="3">3 kishi</option>
                        <option value="4">4 kishi</option>
                        <option value="5">5 kishi</option>
                        <option value="6">6 kishi</option>
                        <option value="7">7 kishi</option>
                        <option value="8">8 kishi</option>
                        <option value="9">9 kishi</option>
                        <option value="10">10 kishi</option>
                        <option value="0">Cheksiz(tanlamaslik)</option>

                    </select>

                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Ish manzili <span class="form-text">(To'ldirish shart emas!)</span></label>
                    <input type="text" class="form-control" id="address" v-model="form.address">
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Telefon raqamingiz</label>
                    <input type="text" class="form-control" id="tel" v-model="form.tel">
                </div>

                <div class="mb-3">
                    <label for="" class="form-label">Ish qaysi viloyatda joylashgan?</label>
                    <input type="text" class="form-control" id="category" v-model="form.category">
                </div>

                <button type="submit" class="btn btn-primary">
                    <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                    Qo'shish
                </button>


            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "JobAdd",
    data() {
        return {
            loading: null,
            error: null,
            form: {
                name: null,
                text: null,
                person: null,
                address: null,
                tel: null,
                category: null,
            }
        }
    },
    methods: {
        ...mapActions(['pushJob']),
        jobAdd() {
            console.log('vue job add ishladi')
            this.loading = true
            this.pushJob(this.form)
                .then(() => {
                    this.$router.push('/job-added')
                })
                .catch(() => {
                    this.loading = null
                    console.log('Ish joylashda xatolik')
                    this.error = 'Ish joylashda xatolik!';
                })
        }
    }
}
</script>

<style scoped>

</style>