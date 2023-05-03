<template>
    <div class="row">
        <div class="col-12">
            <h1>
                {{ getJob.name }}
            </h1>
            <p>
                {{ getJob.text }}
            </p>
            <p>
                Ishchi soni: {{ getJob.person }} kishi <br/>
                Manzil: {{ getJob.address }} <br/>
                Telefon: {{ getJob.tel }} <br/>
            </p>
        </div>
    </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
    name: "JobInfoPage",
    computed: {
        ...mapGetters(['getJob'])
    },
    methods: {
        ...mapActions(['fetchJob'])
    },
    mounted() {
        console.log(this.$route.params.jobId, 'Bu Job id')
        this.fetchJob(this.$route.params.jobId)
            .then(() => {
                console.log(this.getJob)
            })

    }
}


</script>

<style scoped>

</style>