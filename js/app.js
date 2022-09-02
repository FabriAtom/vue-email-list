const app = new Vue({
    el:'#app',
    data: {
        mails: [],
    },
    methods: {
        fetchMail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log(res.data.response)
                    this.randomNumber = res.data.response
                })
        },
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.fetchMail()
        }
    },
})
