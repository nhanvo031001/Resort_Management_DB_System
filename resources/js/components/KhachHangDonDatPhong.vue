<template>
    <div>
        <div class="header-don-dat-phong">
            ĐƠN ĐẶT PHÒNG CỦA KHÁCH HÀNG {{ khachHangID }}
        </div>

        <table class="table table-striped list-don">
            <thead>
                <tr>
                    <th class="col-2">Mã đặt phòng</th>
                    <th class="col-2">Ngày giờ đặt</th>
                    <th class="col-1">Số khách</th>
                    <th class="col-2">Ngày nhận phòng</th>
                    <th class="col-2">Ngày trả phòng</th>
                    <th class="col-1">Tổng tiền</th>
                    <th class="col-2">Tình trạng</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="item in donDatPhong"
                    :key="item.ma_dat_phong"
                    v-on:orderchanged="getList()"
                >
                    <td>{{ item.ma_dat_phong }}</td>
                    <td>{{ item.ngay_gio_dat }}</td>
                    <td>{{ item.so_khach }}</td>
                    <td>{{ item.ngay_nhan_phong }}</td>
                    <td>{{ item.ngay_tra_phong }}</td>
                    <td>{{ item.tong_tien }}</td>
                    <!-- <td > {{item.tinh_trang}} </td> -->
                    <td v-if="item.tinh_trang === 0">Chưa thanh toán</td>
                    <td v-else-if="item.tinh_trang === 1">Đã thanh toán</td>
                    <td v-else-if="item.tinh_trang === 2">
                        Đã hủy, chưa hoàn tiền
                    </td>
                    <td v-else>Đã hủy và hoàn tiền</td>
                </tr>
            </tbody>
        </table>

        <div class="row button-below-dondatphong">
            <router-link to="/admin/khachhang">
                <button class="done">Hoàn thành</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            khachHangID: this.$route.params.khachHangID,
            maDatPhong: "",
            donDatPhong: []
        };
    },

    components: {},

    created() {
        this.getMaDatPhong();
    },

    methods: {
        getMaDatPhong() {
            axios
                .get("/api/maDatPhong/" + this.khachHangID)
                .then(response => {
                    console.log(response);
                    if (response.data != "Khong tim thay ma dat phong")
                        this.donDatPhong = response.data;
                    else this.donDatPhong = [];
                    console.log(this.donDatPhong);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style>
.button-below-dondatphong {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
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

.list-don {
    margin-top: 30px;
}

.header-don-dat-phong {
    margin-top: 30px;
    font-weight: bold;
    font-size: 30px;
}
</style>
