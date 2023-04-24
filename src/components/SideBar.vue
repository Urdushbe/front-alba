<template>
  <div class="col-12 col-md-3 sideBaruz">
    <div class="list-group mt-4 mb-4">
      <router-link
                   v-for="category of getCategory"
                      :key="category.id"
                   :to="'/categories/' + category.id"
                   class="list-group-item list-group-item-action bg-dark">
        {{category.name}}
      </router-link>
      <a href="#" class="list-group-item list-group-item-action  activeuz" aria-current="true">Sherlar</a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HeaderRow",
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