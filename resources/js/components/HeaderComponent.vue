<template>
    <div id="header">
        <div class="container-custom">
            <div class="row no-gutters">
                <div class="col-3 d-flex align-items-center">
                    <h1>
                        
                        <a href="/">
                            <img src="/images/logo.png" alt="Bookstore">
                        </a>
                    </h1>
                </div>


                <div class="col-3 d-flex align-items-center">

                    <form  action="">
                        <input type="text" name="" id="">
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>

                <!-- <div class="col d-flex align-items-center">
                    <form action="">
                        <input type="text">
                        <i class="fa fa-search"></i>
                    </form>
                </div> -->


                <div class="col-15 d-flex align-items-center">
                    <!-- <a href="#"><li>CATEGORY</li></a> -->
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle custom" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            CATEGORY
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/category/1">Fantasy</a>
                            <a class="dropdown-item" href="/category/2">Horror</a>
                            <a class="dropdown-item" href="/category/3">Romance</a>
                        </div>
                    </div>
                </div>

                <div class="col-15 d-flex align-items-center">
                    <a href="/category/best_seller">BEST SELLER</a>
                </div>

                <div class="col-15 d-flex align-items-center">
                    <a href="/category/special_discount">DISCOUNT</a>
                </div>

                <div class="col item d-flex align-items-center justify-content-center">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle custom" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/login" v-if="!isLogin">Log in</a>
                            <a class="dropdown-item" href="/register" v-if="!isLogin">Register</a>
                            <a class="dropdown-item" href="#" v-if="isLogin">{{ username }}</a>
                            <a class="dropdown-item" href="/logout" v-if="isLogin" @click.prevent="handleLogout">Logout</a>
                        </div>
                    </div>
                    
                </div>

                <div class="col item d-flex align-items-center justify-content-end">
                    <i class="fas fa-shopping-cart"></i>
                </div>

            </div>

        </div>


        <form id="logout-form" action="/logout" method="POST" style="display: none;">
            <input type="hidden" name="_token" :value="csrf">
        </form>

    </div>



</template>

<script>
export default {
    data() {
        return {
            isLogin: false,
            username: null,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },
    methods: {
      handleLogout() {
          document.getElementById('logout-form').submit();
      }  
    },
    mounted() {
        this.isLogin = window.isLogin;
        this.username = window.username;
        console.log(this.isLogin);
    }
}
</script>



<style scoped>
#header {
    background-color: rgba(0, 32, 69, 0.91);
    height: 68px;
    margin-bottom: 30px;
}

.col-15 {
    font-family: "Monserat";
    font-weight: 700;
    font-size: 16px;
    margin-right: 47px;
}

.item {
    color: #ffffff;
    font-size: 22px;

}



a, a:hover {
    text-decoration: none;
    color: #FFFFFF;
}

.container-custom {
    height: 100%;
    width: 1200px;
    margin: auto;

}

.row, .col {
    height: 100%;
}



h1 img {
    width: 230px;
}

form {
    position: relative;
}

form input {
    display: inline-block;
    height: 40px;
    width: 280px;
    border-radius: 20px;
    outline: 0;
    border: 0;  
    padding: 0 45px;
}

form .fa {
    color: rgba(83, 82, 83, 0.644);
}

form button {
    position: absolute;
    left: 4px;
    top: 6px;
    border-radius: 100%;
    border: transparent;
    width: 30px;
    height: 30px;
    

}


    /* position: relative; */
    /* top: 50%;
    left: 50%; */

/* form{

    position: relative;
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;

}




input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa{
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover,
form:valid{
    width: 200px;
    cursor: pointer;
}

form:hover input,
form:valid input{
    display: block;
}

form:hover .fa,
form:valid .fa{
    background: #07051a;
    color: white;
}


form a {
  display: none;
  position: absolute;
  top: 70px;
  bottom:0;
  left: 0;
  right: 0;
  font-size: 20px;
  color: white;
  text-align: center; 
  width: 100%;
}

form:valid a {
  display: block;
} */

.custom {
    background-color: transparent;
    border:none;
    font-family: "Monserat";
    font-weight: 700;
    font-size: 16px;
    border: none;
}

.custom:focus {
    background-color: transparent;

}


.dropdown-menu {
    margin-top: 15px;
    background-color: rgba(0, 32, 69, 0.91);
    border-radius: 0;
}

.dropdown-item {
    color: white;
    height: 40px;
    font-size: 20px;
}

.dropdown-item:hover {
    background-color: rgba(5, 56, 114, 0.91);
    
}



.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    background-color: transparent;
    border-color: transparent;
}
</style>