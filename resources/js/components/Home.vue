<template>
    <div class="overview">
        <div class="title">YOUR PROFILE</div>
        <!-- <div class="container content">
            <div class="row no-padding ">
                <div class="col-4 avatar">
                    <div class="image-container">              
                        <img src="../assets/hcmut1.png" alt="" class="image-avatar" >
                    </div>
                    <div class="name">
                        Nhan Vo
                    </div>
                </div>
                <div class="col filling text-left">
                    <form action="">
                        <div class="no-padding input-field">User ID<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="1" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Position<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="Warehouse Manager" style="font-size: 20px;">
                        <div class="no-padding input-field">Email<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="nhanvo@hcmut.edu.vn" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Birthday<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="2001-10-03" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Phone number<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="0919140703" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Address<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" value="Ho Chi Minh City" style="font-size: 20px;"> <br>
                    </form>
                    
                    <div class="button-below">
                        <router-link to="/admin/changePassword">     
                            <button class="change-password">Change password</button>
                        </router-link>

                        <router-link to="/admin/editProfile">     
                            <button class="edit-profile">Edit Profile</button>
                        </router-link>
                        
                        
                    </div>
                    
                            
                </div>
                
            </div>
        </div> -->


        <!-- Have data() script-->

        <!-- {{user_account}} -->
        <div class="container content">
            <div class="row no-padding ">
                <div class="col-4 avatar">
                    <div class="image-container">              
                        <img src="../../../public/images/warehouse/hcmut1.png" alt="" class="image-avatar" >
                    </div>
                    <div class="name">
                        {{user_account.username}}
                    </div>
                </div>
                <div class="col filling text-left">
                    <!-- <div> {{this.user_account}} </div> -->

                    <form action="">
                        <div class="no-padding input-field">User ID<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.user_id" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Position<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.role" style="font-size: 20px;">
                        <div class="no-padding input-field">Email<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.email" style="font-size: 20px;"> <br>
                        <!-- <div class="no-padding input-field">Birthday<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.birthday" style="font-size: 20px;"> <br> -->
                        <div class="no-padding input-field">Phone number<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.phone" style="font-size: 20px;"> <br>
                        <div class="no-padding input-field">Address<span class="star">*</span> </div>
                        <input type="text" class="input-filling" size="60" :disabled="locking" v-model="user_account.address" style="font-size: 20px;"> <br>
                    </form>
                    
                    <div class="button-below">
                        <router-link :to="{name: 'changePassword', params: {userID: user_account.user_id}}">     
                            <button class="change-password">Change password</button>
                        </router-link>
                        
                        <router-link :to="{name: 'editProfile', params: {userID: user_account.user_id}}">   
                            <button class="edit-profile">Edit Profile</button>
                        </router-link> 
                    </div>
                    
                            
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import editProfile from './EditProfile.vue'
import changePassword from './ChangePassword.vue'

    export default {
        components: {
            editProfile,
            changePassword
        },


        data() {
            return {
                locking:true,
                // user: {
                //     id: 1910409,
                //     position: 'Warehouse Manager',
                //     email: 'nhanvo@hcmut.edu.vn',
                //     birthday: '2001-10-03',
                //     phone: '0919140703',
                //     address: 'Ha Tien City'
                // },
                user_account: {},
                language: '',
            }
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
    }
</script>

<style scoped>
.overview {         /*not use*/
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
    border: 3px solid #0084B4;
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
    background-color: #0084B4;
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
    color: #0084B4;
    font-weight: normal;
    margin-top: 10px;
}

.input-filling {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.button-below {
    margin-top: 30px;
    margin-bottom: 5px;
}

.change-password {
    background-color: #EEEEEE;
    border: none ;
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
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
}

.edit-profile:hover {
    background-color: #0084B4;
}

.edit-profile:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}


</style>