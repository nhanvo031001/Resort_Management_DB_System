<template>
    <div id="footer">
        <div class="container-custom">
            <div class="row">
                <div class="col">
                    <img src="/images/logo-footer.png" alt="Hcmut">
                </div>

                <div class="col">
                    <h4 class="font-500">
                        Team members
                    </h4>
                    <ul>
                        <li class="font-400">Le Gia Huy</li>
                        <li class="font-400">Vo Nguyen Thien Nhan</li>
                        <li class="font-400">Tran Duc Duy</li>
                        <li class="font-400">Nguyen Dinh An</li>
                        <li class="font-400">Pham Ngoc Than</li>
                    </ul>
                </div>
                <div class="col" style="margin-right: 100px;">
                    <h4 class="font-500">
                        Contact Us
                    </h4>
                    <p class="d-flex justify-content-between">
                        <span class="font-400">Phone number:</span>
                        <span class="font-500">123-456-789</span>
                    </p>
                </div>
                <div id="social" class="col">
                    <h4 class="font-500">Social</h4>
                    <ul class="d-flex justify-content-between">
                        <li class="item">
                            <i class="fab fa-facebook-f"></i>
                        </li>
                        <li class="item">
                            <i class="fab fa-instagram"></i>
                        </li>
                        <li class="item">
                            <i class="fab fa-twitter"></i>
                        </li>
                        <li class="item">
                            <i class="fab fa-youtube"></i>
                        </li>
                        <li class="item">
                            <i class="fab fa-whatsapp"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row d-flex justify-content-center">
                <img src="/images/divider.svg" style="width: 1200px; margin-top: 100px;" alt="">
            </div>


            <div id="copy-right" class="row d-flex justify-content-center">
                <p style="margin-top: 25px;">
                    © 2021 Alien X Group | All Rights Reserved
                </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>


<style scoped>
#footer {
    background-color: #091139;
    height: 527px;
    padding-top: 90px;
    margin-top: 300px;
}


.container-custom {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

#social ul li {
    display: inline-block;
}

.font-500 {
    font-family: "IBM Plex Sans";
    font-weight: 500;
    color: #FFFFFF;
    
}

.font-400 {
    font-family: "IBM Plex Sans";
    opacity: 70%;
    font-weight: 400;
    color: #FFFFFF;
}

h4 {
    font-size: 22px;
}

.item {
    color: white;
    font-size: 23px;
}

#copy-right {
    font-family: "IBM Plex Sans";
    opacity: 80%;
    color: white;
    font-size: 16px;
}
</style>


