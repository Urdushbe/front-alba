<template>
  <div class="row">
    <div
        v-for="job of getJobs"
        :key="job.id"
        class="col-12 col-sm-6 col-xl-4">
      <div class="fotomaqola mt-2" style="width: 17rem;">
        <img src="/images/newwork.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title mt-2 ">{{job.name}}</h5>
          <p class="card-text">{{job.person}} kishi</p>
          <router-link :to="'/job-info/' + job.id" class="btn btn-warning activeuz">Batafsil</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "JobsRow",
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