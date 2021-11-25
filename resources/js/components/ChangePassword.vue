<template>
  <div>
      <div class="header-changepassword">CHANGE PASSWORD</div>
      
      <div class="container filling-change-password">
          <!-- <div> {{user.password}} </div>
          <div> {{temp_old_password}} </div>
          <div> {{temp_new_password}} </div>
          <div> {{temp_new_confirm_password}} </div> -->
          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Old password<span class="red-star">*</span> </div>
              <div class="col text-left"><input v-model="temp_old_password" class="row-input" type="password" size="80"></div>
          </div>

          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">New password<span class="red-star">*</span> </div>
              <div class="col text-left"><input v-model="temp_new_password" class="row-input" type="password" size="80"></div>
          </div>

          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Confirm new password<span class="red-star">*</span> </div>
              <div class="col text-left"><input v-model="temp_new_confirm_password" class="row-input" type="password" size="80"></div>
          </div>


          <div class="row button-below">
                <div class="col-3"></div> 
                <div class="col text-right">
                  <router-link to="/admin"> <button class="cancle">Cancel</button> </router-link>
                  <button class="change" @click="updateUserPassword(userID)" v-on:click="sucess_alert()">Change</button>
                </div>  
          </div>
          
      </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      user: {},
      userID: this.$route.params.userID,
      temp_old_password: '',
      temp_new_password: '',
      temp_new_confirm_password: '',
    }
    },

    created() {
        this.getUser(this.userID)
    },

    methods: {
        getUser(userID) {
            axios.get('/api/user/' + userID)
            .then (response => {
                console.log(response)
                this.user = response.data[0]
                console.log(this.user)
            })
            .catch (error => {
                console.log(error)
            })
        
        },

        updateUserPassword(userID) {

            axios.put('/api/user/password/' + userID, {password: this.temp_new_password})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
        },

        sucess_alert() {
            alert("Successfully change password!")
        }
    }
}
</script>

<style>
.header-changepassword {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}

.filling-change-password {
    margin-top: 40px;
}

.filling-one-row {
    margin-top: 15px;
}

.field-name-left {
    padding-left: 60px;
    color: #0084B4;
    font-size: 18px;
    font-weight: bold;
}

.red-star {
    color: red;
}


.button-below {
    margin-top: 20px;
    margin-bottom: 30px;
}

.cancle {
    background-color: #EEEEEE;
    border: none ;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}

.cancle:hover {
    background-color: #d0d6d6;
}

.cancle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.change {
    /* margin-left: 290px; */
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.change:hover {
    background-color: #0084B4;
}

.change:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}


</style>