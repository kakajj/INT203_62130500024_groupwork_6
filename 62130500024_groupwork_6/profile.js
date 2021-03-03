const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            errors: null,
            numOfPhoto: 200,
            numOfFriend: 1105,
            profilePic: 'https://lh3.googleusercontent.com/proxy/pGsfvmRM94gOwIepSWDwlQS5uQCMedctrS4H1huyZgz7EKRDaXKC2CxzFeoLkSWuHgkjsT9w4rUDgpUvzsYqI7Zg-iwZo-eI',
            coverPic: 'https://pbs.twimg.com/media/EUaV7lWUYAAialH?format=jpg&name=large',
            bgPic: './images/bg.jpg',
            sucCess:false,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    age: this.age,
                    gender: this.gender,
                    email: this.email,
                    phone: this.phone
                },
                constraints)
            if (!this.errors) {
                this.success();
                alert("Your profile is updated successfully.")
            }
        },
        success(){
            this.$refs.anyName.reset();
            this.sucCess = !this.sucCess;
            
        }
    }
})

app.mount('#app')