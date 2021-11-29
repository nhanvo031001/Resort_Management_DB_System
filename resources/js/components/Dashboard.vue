<template>
    <div class="dashboard">
        <Sidebar id="sidebar_id" />
        <div class=".container-fluid no-padding content" id="content_id">
            <div style="background-color: white" class="row header">
                
                
                
                <!-- <div class="col-2 text-left"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list side-bar" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg> 
                </div> -->


                <!-- <div class="col-10 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle icon-admin" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div> -->


                <button class="openbtn" @click="open_sidebar = !open_sidebar" v-on:click="moveSidebar()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>


                <!-- <div class="col text-right dropdown">
                    <button style="border-radius: 50%;" class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="../assets/person.svg" alt=""  width="40px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="http://127.0.0.1:8000/">Logout</a>
                    </div>
                </div> -->

                <div class="col text-right dropdown ">
                    <button style="border-radius: 50%; " class="btn  dropdown-toggle icon-admin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src=".../../../public/images/warehouse/person.svg" alt=""  width="40px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" style="font-weight: bold;">sManager</a>
                        <!-- <a class="dropdown-item" href="http://127.0.0.1:8000/">Logout</a> -->
                        <a class="dropdown-item" href="http://127.0.0.1:8000/" @click.prevent="handleLogout">Đăng xuất</a>
                    </div>
                </div>


                <form id="logout-form" action="/admin/logout" method="POST" style="display: none;">
                    <input type="hidden" name="_token" :value="csrf">
                </form>


            </div>
            <router-view/>
        </div>
    </div>

</template>

<script>
import Sidebar from './Sidebar'
export default {
    name: 'home',

    components: {
        Sidebar
    },

    data() {
        return {
            open_sidebar: true,
            user_account: {},

            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
    },

    methods: {
        moveSidebar(){
            if (this.open_sidebar == true) {
                document.getElementById("content_id").style.width = 'calc(100vw - 330px)';
                document.getElementById("sidebar_id").style.width = '330px';
                document.getElementById("sidebar_id").style.transition = 'all 0.45s ease-in-out';
                document.getElementById("content_id").style.transition = 'all 0.45s ease-in-out';


                document.getElementById("text-description").style.marginLeft = "0px";

            }
            else {
                document.getElementById("content_id").style.width = '100vw';
                document.getElementById("sidebar_id").style.width = '0';
                document.getElementById("sidebar_id").style.transition = 'all 0.45s ease-in-out';
                document.getElementById("content_id").style.transition = 'all 0.45s ease-in-out';

                document.getElementById("text-description").style.marginLeft = "-100px";
            }
        },

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

        handleLogout() {
            document.getElementById('logout-form').submit();
        }
    },

    created() {
        // this.getUser();
    },

}


</script>

<style>
.right {
    background-color: white;
}

.openbtn {
    border: none;
    background-color: transparent;
    margin-left: 15px;
}

.openbtn:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.dashboard {
    display: grid;
    grid-template-columns: 1.1fr 5fr;
    background-color: #1C2A39;
    height: 100vh;
    width: 100vw;
}

.no-padding {
    padding: 0;
}

.content {
    background-color: white;
    /* border-radius: 10px;
    margin: 6px 6px 6px 0px; */
    border-radius: 0px;
    margin: 0px;
    /* overflow: hidden;       */
    overflow-x: hidden;
}

.header {
    /* width: 100%; */
    /* background: white; */
    height: 60px;
    margin-left: 0px;
    margin-right: 0px;
    /* overflow: hidden; */
    border-bottom: 2px solid #D8DBE0;
    background-color: #ffffff;
    color: white
}

.side-bar {
    margin-left: 10px;
    margin-top: 15px;
}

.icon-admin {
   margin-top: 5px;
   margin-right: 10px;
   background-color: transparent;
}


</style>