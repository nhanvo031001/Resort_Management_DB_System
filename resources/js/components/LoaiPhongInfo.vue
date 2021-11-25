<template>
  <div>
    <div class="header-detail-chi-tiet-phong">CHI TIẾT LOẠI PHÒNG THỨ {{loaiPhongID}} </div>

    <!-- day la LoaiPhongInfo.vue
    {{loaiPhongID}}     -->


    <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Tên loại phòng<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.ten_loai_phong" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Diện tích (m2)<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.dien_tich" type="text" size="80" :disabled="locking"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Số khách<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.so_khach" type="text" size="80" :disabled="locking"></div>
            </div>
            
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mô tả khác<span class="red-star">*</span> </div>

                <div class="col text-left"><textarea  v-model="loaiPhong.mo_ta_khac" class="row-input text-area" rows="6" cols="82" :disabled="locking"></textarea></div>
            </div>
            
            <div class="row button-below-info">
                <div class="col-3"></div> 
                <div class="col text-right">

                <router-link to="/admin/loaiphong">
                   <button class="done">Done</button>
                </router-link>  
                 
                </div>
            </div>
    </div>



  </div>
</template>



<script>

export default {

    data() {
        return {
            loaiPhongID: this.$route.params.loaiPhongID,
            loaiPhong: {},
            locking: true,
        }
    },

    props: ['items', 'resultQuery'],

    components: {
        
    },

    created() {
        this.getLoaiPhongByID(this.loaiPhongID);
    },

    methods: {
        getLoaiPhongByID(id) {
            axios.get('/api/loaiPhong/' + id)
            .then (response => {
                console.log(response)
                this.loaiPhong = response.data[0]
                console.log(this.loaiPhong)
            })
            .catch (error => {
                console.log(error)
            })
        },
    }
}
</script>

<style>


.header-detail-chi-tiet-phong {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}

.filling-all-info {
    margin-top: 40px;
}

.one-row-field {
    margin-top: 15px;
}

.row-input {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.field-name-left {
    padding-left: 115px;
    color: #0084B4;
    font-size: 18px;
    font-weight: bold;
}

.field-name-right {
    color: #0084B4;
    font-size: 18px;
    font-weight: bold;
    padding-left: 0px;
}

.red-star {
    color: red;
}

.field-right {
    padding-left: 12px;
}

.text-area {
    margin-left: 3px;
}

.button-below-info {
    margin-top: 20px;
    margin-bottom: 30px;
}

.cancle-detailed {
    background-color: #EEEEEE;
    border: none ;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}

.cancle-detailed:hover {
    background-color: #d0d6d6;
}

.cancle-detailed:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.done {
    /* margin-left: 290px; */
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.done:hover {
    background-color: #0084B4;
}

.done:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}






</style>