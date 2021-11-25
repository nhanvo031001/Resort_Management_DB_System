<template>
    <div>
        <div class="header-additems">THÊM LOẠI PHÒNG MỚI</div>

        {{objGiuong}}
        <!-- {{arrGiuong}} -->

        <div class="container filling-all-info">
            <!-- <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mã loại phòng<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.ma_loai_phong" type="text" size="80"></div>
            </div> -->

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Tên loại phòng<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.ten_loai_phong" type="text" size="80"></div>
            </div>

             <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Diện tích (m2)<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.dien_tich" type="text" size="80"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Số khách tối đa<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.so_khach" type="text" size="80"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mô tả khác<span class="red-star">*</span> </div>
                <div class="col text-left"><textarea  v-model="loaiPhong.mo_ta_khac" class="row-input text-area" rows="6" cols="82"></textarea></div>
            </div>

            <div class="row button-below-them">
                <div class="col-3"></div> 
                <div class="col text-right">

                    <div class="giuong-vat-tu">
                        <!-- <router-link :arrGiuong="arrGiuong" :to="{name: 'themGiuong', params: {arrGiuong: objGiuong}}">     
                            <button v-on:click="themGiuong" type="button" class="btn btn-primary giuong">Thêm thông tin giường</button>
                        </router-link> -->

                            <router-link :to="{name: 'themGiuong'}">     
                            <button v-on:click="themGiuong" type="button" class="btn btn-primary giuong">Thêm thông tin giường</button>
                        </router-link>
                        

                        <!-- <router-link :to="{name: 'themGiuong', query: { arrGiuong: arrGiuong }}">Link Text</router-link> -->
                   
          
                        <router-link :to="{name: 'themVatTu'}">     
                            <button type="button" class="btn btn-primary">Thêm vật tư</button>
                        </router-link>
                    </div>

                    <div>
                        <router-link to="/admin/loaiphong"> 
                                <button class="btn icon cancle">
                                    Hủy
                                </button>
                        </router-link>  
                        <button class="addbook" @click="createRoom" v-on:click="success_add_room()">Xác nhận</button>
                    </div>

                    

                </div>
            </div>

        </div>




    </div>
</template>

<script>


import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';


export default {

    components: {
        DatePicker,
    },

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

            // arrGiuong: [{soLuong: 100, kichThuoc: 200}, {soLuong: 4444, kichThuoc: 7777}],

            objGiuong: { kichThuoc: 20, soLuong: 12 },

            // objGiuong: { "0": {soLuong: 100, soLuong: 200} },
            
        }
    },

    methods: {
        themGiuong() {
            //this.objGiuong = {}
            this.$router.push({name: 'themGiuong', params: {arrGiuong: this.objGiuong }});
            console.log("Them giuong")
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
.header-additems {
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