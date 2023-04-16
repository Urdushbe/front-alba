import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8888/api/categories')
                    .then((response) => {
                        console.log('Kategoriyalar olindi')
                        console.log(response)

                        let category = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateCategory', category)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kategoriyalar olinmadi!')
                        reject()
                    })
                    .finally(() => {
                        console.log('Tugatildi')
                    })
            })
        }
    },

    mutations: {
        updateCategory(state, category) {
            state.category = category
        }
    },

    state: {
        category: {
            models: [],
            totalItems: 0
        }
    },

    getters: {
        getCategory(state) {
            return state.category.models
        }
    }
}