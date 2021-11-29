<template>
    <div>
        <div class="header-detail-thong-tin-KH">
            THÔNG TIN KHÁCH HÀNG {{ khachHangID }}
        </div>

        <!-- style="background-color: #0084b4; color: white" -->
        <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Mã khách hàng</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.ma_khach_hang"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">CCCD/CMND</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.cccd_cmnd"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Họ tên</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.ho_ten"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Điện thoại</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.dien_thoai"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Email</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.email"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Username</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.username"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Điểm</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.diem"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Loại</div>
                <div class="col text-left">
                    <input
                        class="row-input"
                        v-model="khachHang.loai"
                        type="text"
                        size="80"
                        :disabled="locking"
                    />
                </div>
            </div>

            <div class="row button-below-info-KH">
                <!-- <div class="col-3"></div> -->
                <!-- <div class="col text-right"> -->
                <router-link to="/admin/khachhang">
                    <button class="done">Hoàn thành</button>
                </router-link>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            khachHangID: this.$route.params.khachHangID,
            khachHang: {},
            locking: true
        };
    },

    components: {},

    created() {
        this.getKhachHangByID(this.khachHangID);
    },

    methods: {
        getKhachHangByID(id) {
            axios
                .get("/api/khachHang/" + id)
                .then(response => {
                    console.log(response);
                    this.khachHang = response.data[0];
                    // console.log(this.loaiPhong)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style>
.header-detail-thong-tin-KH {
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
    border: 2px solid #d8dbe0;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    padding: 0px 20px;
}

.field-name-left {
    /* padding-left: 115px; */
    color: #0084b4;
    font-size: 18px;
    font-weight: bold;
    display: flex; align-items: center;
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

.button-below-info-KH {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}

.cancle-detailed {
    background-color: #eeeeee;
    border: none;
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
    /* background-color: #0084b4; */
    background-color: rgb(8 66 126);
    border: none;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    /* margin-right: 140px; */
}

.done:hover {
    background-color: #006565;
}

.done:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
</style>
