<template>
  <div>
      <div class="header-changeinfo">CHANGE INFORMATION</div>
      <!-- <div> {{this.user}} </div> -->
      <div class="container filling-change-info">
          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Email</div>
              <div class="col text-left"><input class="row-input" type="text" size="80" v-model="user.email"></div>
          </div>

          <!-- <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Birthday</div>
              <div class="col text-left"><input class="row-input" type="text" size="80" v-model="user.birthday"></div>
          </div> -->

          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Phone</div>
              <div class="col text-left"><input class="row-input" type="text" size="80" v-model="user.phone"></div>
          </div>

          <div class="row filling-one-row">
              <div class="col-3 text-left field-name-left">Address</div>
              <div class="col text-left"><input class="row-input" type="text" size="80" v-model="user.address"></div>
          </div>


          <div class="row button-below">
                <div class="col-3"></div> 
                <div class="col text-right">
                  <router-link to="/admin"> <button class="cancle">Cancel</button> </router-link>
                  <button class="change" @click="updateUser(userID)" v-on:click="success_change_info()">Change</button>
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
      userID: this.$route.params.userID
    }
  },

  created() {
    // this.getUser(this.userID)
  },

  methods: {
    getUser(userID) {
    //   axios.get('/api/user/' + userID)
    //   .then (response => {
    //       console.log(response)
    //       this.user = response.data[0]
    //       //console.log(this.book)
    //   })
    //   .catch (error => {
    //       console.log(error)
    //   })
                // axios.get('/api/getUser')
                // .then (response => {
                //     console.log(response)
                //     this.user = response.data[0]
                //     console.log(this.book)
                // })
                // .catch (error => {
                //     console.log(error)
                // })
    
    },

    updateUser(userID) {
    //   axios.put('/api/user/' + userID, {email: this.user.email, birthday: this.user.birthday, phone_number: this.user.phone_number,
    //   address: this.user.address})
        axios.put('/api/user/' + userID, {email: this.user.email, phone: this.user.phone,
                    address: this.user.address})
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
    },
    success_change_info() {
        alert("Sucessfully change information!")
    }
  }
}
</script>

<style>
.header-changeinfo {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}

.filling-change-info {
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