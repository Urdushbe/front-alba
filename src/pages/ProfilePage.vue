<template>
<div>
    Mening sahifam
</div>
</template>

<script>


export default {
    name: "ProfilePage",
    props:["userID"],
    data() {
        return {
            UserID: this.$route.params.userID,

        }}}
</script>

<style scoped>

</style>