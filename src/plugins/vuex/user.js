import axios from "axios";

export default {
    actions: {
        fetchLogin(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/users/login', data)
                    .then((response) => {
                        console.log('Kirish amalga oshirildi')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Login yoki Parol xato!')
                        reject()
                    })
                    .finally(() => {
                        console.log('Tugatildi')
                    })
            })
        },

        fetchReg(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/users/registration', data)
                    .then((response) => {
                        console.log('Ro`yxatdan o`tdingiz. Tabriklaymiz!')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Ro`yxatdan o`tishda xatolik!')
                        reject()
                    })
                    .finally(() => {
                        console.log('Tugatildi')
                    })
            })
        },


},

    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        }
    },

    state: {
        token: localStorage.getItem('token')
    },

    getters: {
        getToken(state) {
            return state.token
        }
    }
}