<template>
  <div class="row">
    <div
        v-for="job of getJobs"
        :key="job.id"
        class="col-12 col-sm-6 col-xl-4">
      <div class="fotomaqola mt-2" style="width: 17rem;">
        <img src="images/newwork.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title mt-2 ">{{job.name}}</h5>
          <p class="card-text">{{job.person}} kishi</p>
          <router-link to="/job-info" class="btn btn-warning activeuz">Ko'rish</router-link>
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
    this.fetchJobs()
  }
}
</script>

<style scoped>

</style>