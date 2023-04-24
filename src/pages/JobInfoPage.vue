<template>
  <div class="row">
    <div
        v-for="job of getJobs"
        :key="job.id"
        class="col-12">
      <h1>{{job.name}}</h1>
      <p>{{job.text}}
      </p>
        <p>
            Ishchi soni: {{ job.person }} kishi<br />
            Manzil: {{ job.address }}<br />
            Telefon raqam: {{ job.tel }}<br />
            Bolim: {{ job.category }}
        </p>
    </div>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  name: "JobInfoPage",
    methods: {
        ...mapActions(['fetchJobs'])
    },
    computed: {
        ...mapGetters(['getJobs'])
    },
    mounted() {
        this.fetchJobs(this.$route.params.id)
    },
    watch: {
        '$route.params.id'(){
            console.log('watch ishladi')
            this.fetchJobs(this.$route.params.id)
        }
    }

}
</script>

<style scoped>

</style>