<template>
  <div class="container-fluid">
    <HeaderRow/>
  </div>

  <div class="container-fluid">

    <div class="row">
      <div class="col-12 col-md-9 mainBaruz">
        <router-view/>
      </div>
    </div>

    <FooterRow/>
  </div>

</template>

<script>


import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";

export default {
  name: 'App',
  components: {FooterRow, HeaderRow},
}
</script>

<style>

</style>
