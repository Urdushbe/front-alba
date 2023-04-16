import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchJobs(context) {
            console.log('fetchJobs ishladi')
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/jobs')
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
        }
    },

    mutations: {
        updateJobs(state, jobs) {
            state.jobs = jobs
        }
    },

    state: {
        jobs: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getJobs(state) {
            return state.jobs.models
        }
    }
}