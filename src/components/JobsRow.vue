<template>
  <div class="row">
      <div class="col-12">
          <div class="list-group mb-4">
              <router-link
                  v-for="job of getJobs"
                  :key="job.id"
                  :to="'/job-info/' + job.id"
                  class="list-group-item list-group-item-action activeuz dark">
                  {{ job.name }}
              </router-link>
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