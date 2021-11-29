<template>
    <div>
        <div class="header-additems">THÊM LOẠI PHÒNG MỚI</div>

        <div class="container filling-all-info">
            <!-- <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mã loại phòng<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="loaiPhong.ma_loai_phong" type="text" size="80"></div>
            </div> -->

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Tên loại phòng<span class="red-star">*</span>
                </div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="loaiPhong.ten_loai_phong"
                        type="text"
                        size="80"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Diện tích (m2)<span class="red-star">*</span>
                </div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="loaiPhong.dien_tich"
                        type="text"
                        size="80"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Số khách tối đa<span class="red-star">*</span>
                </div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="loaiPhong.so_khach"
                        type="text"
                        size="80"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mô tả khác</div>
                <div class="col text-left">
                    <textarea
                        v-model="loaiPhong.mo_ta_khac"
                        class="row-input text-area"
                        rows="6"
                        cols="82"
                    ></textarea>
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Thêm vật tư<span class="red-star">*</span>
                </div>
            </div>

            <table class="table table-borderless  list-book">
                <thead>
                    <tr>
                        <th class="col-2"></th>
                        <th class="col-2 ten-vat-tu">Tên vật tư</th>
                        <th class="col-2 so-luong">Số lượng</th>
                        <th class="col-2"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in tempArr" :key="item.ma_loai_vat_tu">
                        <td></td>
                        <td class="item-ten-vat-tu">
                            {{ item.ten_loai_vat_tu }}
                        </td>
                        <!-- <td > <input class="vat-tu-input" type="text" v-model="item.so_luong"> </td> -->
                        <td>
                            <div class="amount">
                                <svg
                                    v-on:click="
                                        changeAmount(item.ma_loai_vat_tu, -1)
                                    "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="33"
                                    height="33"
                                    fill="currentColor"
                                    class="bi bi-dash-square minus"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                    />
                                    <path
                                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                                    />
                                </svg>

                                <input
                                    class="so-luong-vat-tu"
                                    type="text"
                                    v-model="item.so_luong"
                                    size="10"
                                />
                                <!-- <span> {{item.so_luong}} </span> -->

                                <svg
                                    v-on:click="
                                        changeAmount(item.ma_loai_vat_tu, 1)
                                    "
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="33"
                                    height="33"
                                    fill="currentColor"
                                    class="bi bi-plus-square plus"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                                    />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                    />
                                </svg>
                            </div>
                        </td>

                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div class="row one-row-field">
                <div class="col-4 text-left field-name-left">
                    Thêm thông tin giường<span class="red-star">*</span>
                </div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Kích thước<span class="red-star">*</span>
                </div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="kichThuoc"
                        type="text"
                        size="80"
                    />
                </div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">
                    Số lượng<span class="red-star">*</span>
                </div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="soLuong"
                        type="text"
                        size="80"
                    />
                </div>
            </div>

            <div class="row button-below-them">
                <!-- <div class="col-3"></div> -->
                <div class="col text-right">
                    <div class="giuong-vat-tu">
                        <!-- <router-link :to="{name: 'themGiuong', params: {para: objGiuong}}">     
                            <button v-on:click="themGiuong" type="button" class="btn btn-primary giuong">Thêm thông tin giường</button>
                        </router-link> -->

                        <!-- <router-link :to="{name: 'themGiuong'}">     
                            <button v-on:click="themGiuong" type="button" class="btn btn-primary giuong">Thêm thông tin giường</button>
                        </router-link> -->

                        <button
                            style="background-color: rgb(8 66 126); width: 150px"
                            v-on:click="themGiuong"
                            type="button"
                            class="btn btn-primary giuong"
                        >
                            Thêm giường
                        </button>

                        <!-- <router-link :to="{name: 'themGiuong', query: { arrGiuong: arrGiuong }}">Link Text</router-link> -->

                        <!-- <router-link :to="{name: 'themVatTu'}">     
                            <button type="button" class="btn btn-primary">Thêm vật tư</button>
                        </router-link> -->
                    </div>

                    <div>
                        <button
                            class="button confirm"
                            @click="createRoom"
                            v-on:click="success_add_room()"
                        >
                            Xác nhận
                        </button>
                        <router-link to="/admin/loaiphong">
                            <button class="button cancel">
                                Hủy
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import swal from "sweetalert";

export default {
    components: {
        DatePicker
    },

    data() {
        return {
            loaiPhong: {
                ma_loai_phong: "",
                ten_loai_phong: "",
                dien_tich: "",
                so_khach: "",
                mo_ta_khac: ""
            },

            check_add_id: "",

            items: [], // chứa all vật tư
            tempArr: [], // chứa all vật tư kèm số lượng
            vatTuArr: [], // mảng sẽ add vô DB

            kichThuoc: "",
            soLuong: "",
            //tempArr: [],    // chứa all vật tư kèm số lượng
            giuongArr: [] // mảng sẽ add vô DB
        };
    },

    created() {
        this.getAllVatTu();
    },

    methods: {
        changeAmount(item, number) {
            var idx = 0;
            for (; idx < this.tempArr.length; idx++) {
                if (this.tempArr[idx].ma_loai_vat_tu == item) {
                    if (this.tempArr[idx].so_luong == 1 && number == -1) {
                    } else {
                        this.tempArr[idx].so_luong += number;
                        break;
                    }
                }
            }
        },

        themGiuong() {
            this.giuongArr.push({
                kichThuoc: this.kichThuoc,
                soLuong: this.soLuong
            });
            console.log(this.giuongArr);
            // alert("Thêm giường thành công!")
            this.soLuong = "";
            this.kichThuoc = "";
            swal("Good job!", "Thêm giường thành công", "success");
        },

        getAllVatTu() {
            axios
                .get("/api/vatTuAll")
                .then(response => {
                    this.items = response.data;
                    console.log(this.items);
                    for (var key in this.items) {
                        var obj = this.items[key];
                        var tempobj = {
                            ma_loai_vat_tu: obj.ma_loai_vat_tu,
                            ten_loai_vat_tu: obj.ten_loai_vat_tu,
                            so_luong: 0
                        };
                        //console.log(tempobj)
                        this.tempArr.push(tempobj);
                    }
                    console.log(this.tempArr);
                    // console.log(this.items[0].ma_loai_vat_tu)
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        refresh() {
            this.loaiPhong.ma_loai_phong = "";
            this.loaiPhong.ten_loai_phong = "";
            this.loaiPhong.dien_tich = "";
            this.loaiPhong.so_khach = "";
            this.loaiPhong.mo_ta_khac = "";
        },

        success_add_room() {
            swal("Good job!", "Thêm loại phòng thành công", "success");
        },

        createRoom() {
            for (var key in this.tempArr) {
                var obj = this.tempArr[key];
                if (obj.so_luong > 0) {
                    console.log(obj.so_luong);
                    this.vatTuArr.push(obj);
                }
            }

            axios
                .post("/api/loaiPhong", {
                    /*ma_loai_phong: this.loaiPhong.ma_loai_phong,*/ ten_loai_phong: this
                        .loaiPhong.ten_loai_phong,
                    dien_tich: this.loaiPhong.dien_tich,
                    so_khach: this.loaiPhong.so_khach,
                    mo_ta_khac: this.loaiPhong.mo_ta_khac,
                    vatTu: this.vatTuArr,
                    giuong: this.giuongArr
                })
                .then(response => {
                    console.log("Thêm thành công");
                    console.log(response);

                    this.loaiPhong.ten_loai_phong = "";
                    this.loaiPhong.dien_tich = "";
                    this.loaiPhong.so_khach = "";
                    this.loaiPhong.mo_ta_khac = "";

                    this.vatTuArr = [];
                    this.giuongArr = [];
                    var idx = 0;
                    for (; idx < this.tempArr.length; idx++) {
                        this.tempArr[idx].so_luong = 0;
                    }
                })
                .catch(error => {
                    console.log(error.response);
                });

            //this.loaiPhong.ma_loai_phong = '';
            // this.loaiPhong.ten_loai_phong = '';
            // this.loaiPhong.dien_tich = '';
            // this.loaiPhong.so_khach = '';
            // this.loaiPhong.mo_ta_khac = '';

            // this.vatTuArr = []
            // this.giuongArr = []
            // for (; idx < this.tempArr.length; idx++) {
            //     this.tempArr[idx].so_luong = 1
            // }
        }
    }
};
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
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.select-category {
    width: 684px;
    height: 30px;
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.filling-all-info {
    margin: 40px auto;
}

.one-row-field {
    margin-top: 15px;
}

.row-input {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
    width: 100%;
    padding: 0px 20px;
    height: 50px;
}

textarea.row-input {
    padding: 20px;
    margin: 0px;
    height: 140px;
}

.field-name-left {
    /* padding-left: 115px; */
    color: #0084b4;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.field-name-right {
    color: #0084b4;
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
.confirm {
    /* background-color: #0084b4; */
    background-color: rgb(8 66 126);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}
.confirm:hover {
    background-color: #006565;
}
.confirm:active {
    background-color: #005050;
}
.cancel {
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    color: #616161;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    margin-right: 30px;
}

.cancel:hover {
    background-color: #d0d6d6;
}

.cancel:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.addbook {
    /* margin-left: 290px; */
    background-color: #0084b4;
    border: none;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    /* margin-right: 140px; */
}

.addbook:hover {
    background-color: #006565;
}

.addbook:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.input-group {
    width: 83%;
}

.custom-file-label {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

#custom-file-label {
    border: 2px solid #d8dbe0;
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
    display: flex;
    justify-content: center;
    /* margin-right: 140px; */
}

.btn.btn-primary.giuong {
    margin-right: 0px;
}
.btn.btn-primary.giuong:hover {
    background-color: #006565;
}
.btn.btn-primary.giuong:active {
    background-color: #005050;
}

.vat-tu-input {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.amount {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.plus {
    background-color: #52ca52;
    color: white;
    /* margin-right: 80px; */
}

/* .plus:hover {
    border: 3px solid #0062cc;
    border-radius: 3px;
} */

.plus:hover {
    border: 3px solid rgba(0, 123, 255, 0.5);
    border-radius: 3px;
}

.plus:focus {
    border: 3px solid rgba(0, 123, 255, 0.5);
    border-radius: 3px;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.minus {
    background-color: #fc4e4e;
    color: white;
}

/* .minus:hover {
    border: 2px solid yellow;
} */

.minus:hover {
    border: 3px solid rgba(0, 123, 255, 0.5);
    border-radius: 3px;
}

.minus:focus {
    border: 3px solid rgba(0, 123, 255, 0.5);
    border-radius: 3px;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.so-luong-vat-tu {
    text-align: center;
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.ten-vat-tu {
    font-size: 19px;
}

.so-luong {
    font-size: 19px;
}

.item-ten-vat-tu {
    font-size: 18px;
}
</style>
