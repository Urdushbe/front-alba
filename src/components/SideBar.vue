<template>
  <div class="col-12 col-md-3 sideBaruz">

        <button class="btn btn-primary list-group mt-4 mb-4" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
            Hududni tanlash
        </button>
      <button class="navbar-toggler activeuz" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseExample" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse" id="collapseExample">

        <div class="list-group mt-4 mb-4">
            <router-link
                v-for="category of getCategory"
                :key="category.id"
                :to="'/categories/' + category.id"
                class="list-group-item list-group-item-action activeuz">
                {{category.name}}
            </router-link>
        </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HeaderRow",
    data(){
        return {
            active: "activeuz",


        }
    },
  methods: {
    ...mapActions(['fetchCategories'])
  },
  computed: {
    ...mapGetters(['getCategory'])
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style scoped>

</style>