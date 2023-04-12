<template>
  <JobsRow/>
  <PaginationRow/>
</template>

<script>


import JobsRow from "@/components/JobsRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
  name: "HomePage",
  components: {PaginationRow, JobsRow},

}
</script>

<style scoped>

</style>