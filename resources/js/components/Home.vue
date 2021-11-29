<template>
    <div class="overview">
        <div class="welcome">WELCOME TO BK RESORT</div>
    </div>
</template>

<script>
// import editProfile from './EditProfile.vue'
// import changePassword from './ChangePassword.vue'

export default {
    components: {
        // editProfile,
        // changePassword
    },

    data() {
        return {
            locking: true,
            // user: {
            //     id: 1910409,
            //     position: 'Warehouse Manager',
            //     email: 'nhanvo@hcmut.edu.vn',
            //     birthday: '2001-10-03',
            //     phone: '0919140703',
            //     address: 'Ha Tien City'
            // },
            user_account: {},
            language: ""
        };
    },

    created() {
        // this.getUser();
    },

    methods: {
        // getUser() {
        // //console.log('hihihi')
        // axios.get('/api/users')
        // .then(response => {
        //     this.user_account = response.data[0];       // one object
        //     console.log(this.user_account)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });
        // }
        // getUser() {
        //     // axios.get('/api/user/' + 1910409)
        //     axios.get('/api/getUser')
        //     .then (response => {
        //         console.log(response)
        //         this.user_account = response.data[0]
        //         console.log(this.book)
        //     })
        //     .catch (error => {
        //         console.log(error)
        //     })
        // },
    }
};
</script>

<style scoped>
.overview {
    /*not use*/
    /* display: flex;
    justify-content: center;
    align-items: center; */
    height: 100%;
    width: 100%;
    font-size: 30px;
    /* color: rgb(167, 167, 167); */
    color: black;
    font-weight: 600;
    margin-top: 30px;
}

.no-padding {
    padding: 0;
}

.star {
    color: red;
}

.avatar {
    font-size: 20px;
}

.image-container {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #0084b4;
    margin-left: 75px;
}

.image-avatar {
    /* margin-top: 10px;
    border-radius: 50%;
    border: 2px solid blue; */
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
}

.name {
    margin-top: 30px;
    /* border: 1px solid red; */
    width: 200px;
    margin-left: 75px;
    background-color: #0084b4;
    border-radius: 20px 0px 20px 0px;
    color: white;
    border: none;
    height: 50px;
    padding-top: 10px;
}

.title {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* height: 100%;
    width: 100%; */
    font-size: 30px;
    /* color: rgb(167, 167, 167); */
    color: black;
    font-weight: bold;
    margin-top: 30px;
}

.content {
    margin-top: 40px;
    overflow: hidden;
}

.filling {
    font-size: 23px;
}

.input-field {
    font-size: 20px;
    color: #0084b4;
    font-weight: normal;
    margin-top: 10px;
}

.input-filling {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.button-below {
    margin-top: 30px;
    margin-bottom: 5px;
}

.change-password {
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
}

.change-password:hover {
    background-color: #d0d6d6;
}

.change-password:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.edit-profile {
    margin-left: 290px;
    background-color: #00aced;
    border: none;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
}

.edit-profile:hover {
    background-color: #0084b4;
}

.edit-profile:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.welcome {
    color: #0084b4;
}
</style>
