<template>
    <div>
        ThemGiuong.vue
        {{arrGiuong}}


        <router-link to="/admin/themLoaiPhong">  
            <button class="addbook" v-on:click="themInfo">Thêm giường</button>
        </router-link>

        <!-- <div class="header-additems-giuong">THÊM GIƯỜNG</div>


        <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Kích thước<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="kichThuoc" type="text" size="80"></div>
            </div>

             <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Số lượng<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="soLuong" type="text" size="80"></div>
            </div>


            <div class="row button-below-them">
                <div class="col-3"></div> 
                <div class="col text-right">

                    <div>
                        <router-link to="/admin/themLoaiPhong"> 
                            <button class="btn icon cancle">
                                Hủy
                            </button>
                        </router-link>
                        
                        <router-link to="/admin/themLoaiPhong">  
                            <button class="addbook" v-on:click="themInfo">Thêm giường</button>
                        </router-link>
                    </div>

                </div>
            </div>

        </div> -->

    </div>
</template>

<script>


import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';


export default {

    components: {
        DatePicker,
    },

    //props: ["arrGiuong"],

    data() {
        return {
            loaiPhong: {
                ma_loai_phong: '', 
                ten_loai_phong: '',
                dien_tich: '',
                so_khach: '',
                mo_ta_khac: '',
            },

            check_add_id: '',

            //arrGiuong: this.$route.params.arrGiuong,

            kichThuoc: '',
            soLuong: '',
        }
    },

    props: ["arrGiuong"],

    methods: {
        themInfo() {
            console.log("themInfo")
            //this.arrGiuong = {kichThuoc: 12, soLuong: 56}
            this.arrGiuong.kichThuoc = 200
            this.arrGiuong.soLuong = 500

            // this.arrGiuong.kichThuoc = 99999999
            // this.arrGiuong.soLuong = 99999999
            

            


            //this.$route.params.arrGiuong = this.arrGiuong
            //console.log(this.arrGiuong)
            //console.log(this.$route.params.arrGiuong)
        },


        refresh() {
            this.loaiPhong.ma_loai_phong = '';
            this.loaiPhong.ten_loai_phong = '';
            this.loaiPhong.dien_tich = '';
            this.loaiPhong.so_khach = '';
            this.loaiPhong.mo_ta_khac = '';
        },

        success_add_room() {
            alert("Thêm thành công")
            
            // if (this.check_add_id == '')
            //     alert("LỖI! Hãy kiểm tra lại thông tin!")
            // else alert("Thêm loại phòng mới thành công!")
        },

        createRoom() {
            //this.check_add_id = this.loaiPhong.ma_loai_phong;

            axios.post('/api/loaiPhong', {/*ma_loai_phong: this.loaiPhong.ma_loai_phong,*/ ten_loai_phong: this.loaiPhong.ten_loai_phong,
            dien_tich: this.loaiPhong.dien_tich, so_khach: this.loaiPhong.so_khach, mo_ta_khac: this.loaiPhong.mo_ta_khac})
            .then(response => {
                console.log("Thêm thành công")
                console.log(response);
            })
            .catch(error => {
                console.log(error.response)
            });

            //this.loaiPhong.ma_loai_phong = '';
            this.loaiPhong.ten_loai_phong = '';
            this.loaiPhong.dien_tich = '';
            this.loaiPhong.so_khach = '';
            this.loaiPhong.mo_ta_khac = '';
        }
    }


}
</script>

<style>
.header-additems-giuong {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}

.select-language {
    width: 210px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.select-category {
    width: 684px;
    height: 30px;
    border: 2px solid #D8DBE0;
    border-radius: 3px;
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

.button-below-them {
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

.addbook {
    /* margin-left: 290px; */
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.addbook:hover {
    background-color: #0084B4;
}

.addbook:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.input-group {
    width: 83%;
}

.custom-file-label {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

#custom-file-label {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}

.custom-file-input {
    opacity: 1;
    padding-top: 3px;
    width: 600px;
}

#upload-button {
    border-radius: 3px;
}

.giuong-vat-tu {
    margin-bottom: 40px;
    margin-right: 140px;
}

.giuong {
    margin-right: 50px;
}

</style>