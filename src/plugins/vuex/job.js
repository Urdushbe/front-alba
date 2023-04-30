import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchJobs(context, categoryId = null) {
             let categoryUrl = ''

            if (categoryId){
                categoryUrl = '?category=' + categoryId
            }

            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/jobs' + categoryUrl)
                    .then((response) => {
                        console.log('Ishlar ruyxati olindi')
                        console.log(response)

                        let jobs = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateJobs', jobs)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Ishlar olinmadi!')
                        reject()
                    })
                    .finally(() => {
                        console.log('Tugatildi')
                    })
            })
        },

        fetchJob(context, jobId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/jobs/' + jobId)
                    .then((response) => {
                        console.log('fetchJob ishladi')
                        console.log(response)
                        let job = {
                            id: response.data.id,
                            name: response.data.name,
                            text: response.data.text,
                            person: response.data.person,
                            address: response.data.address,
                            tel: response.data.tel,
                            category: response.data.category
                        }
                        context.commit('updateJob', job)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Ishni id orqali olishda xatolik!')
                        reject()
                    })
            })
        }

    },

    mutations: {
        updateJobs(state, jobs) {
            state.jobs = jobs
        },
        updateJob(state, job) {
            state.job = job
        }
    },

    state: {
        jobs: {
            models: [],
            totalItems: 0
        },
        job: {
            id: null,
            name: null,
            text: null,
            person: null,
            address: null,
            tel: null,
            category: null
        }
    },

    getters: {
        getJobs(state) {
            return state.jobs.models
        },
        getJob(state) {
            return state.job
        }
    }
}