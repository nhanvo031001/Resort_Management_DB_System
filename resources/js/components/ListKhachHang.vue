<template>
  <div>

    <table class="table table-striped list-book">
            <thead>
                <tr>
                    <th class="col-2">Mã khách hàng</th>
                    <th class="col-2">CCCD/CMND</th>
                    <th class="col-3">Họ tên</th>
                    <th class="col-1">Điện thoại</th>
                    <th class="col-4"></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in resultQuery" :key="item.ma_khach_hang" v-on:orderchanged="getList()">
                    <td >{{item.ma_khach_hang}} </td>
                    <td > {{item.cccd_cmnd}} </td>
                    <td > {{item.ho_ten}} </td>
                    <td > {{item.dien_thoai}} </td>
                    <td  >
                    

                        <router-link :to="{name: 'khachHangInfo', params: {khachHangID: item.ma_khach_hang}}"> 
                            <button type="button" class="btn btn-primary xem-thong-tin">Xem thông tin</button>
                        </router-link>

                        <router-link :to="{name: 'donDatPhong', params: {khachHangID: item.ma_khach_hang}}"> 
                        <button type="button" class="btn btn-success">Xem đơn đặt phòng</button>
                        </router-link>
                      
                    </td>
                </tr>


            </tbody>
        </table>

  </div>
</template>



<script>

// import updateBook from './UpdateBook.vue'
// import bookInfo from './BookInfo.vue'

import KhachHangInfo from './KhachHangInfo.vue'
import KhachHangDonDatPhong from './KhachHangDonDatPhong.vue'

export default {

    data() {
        return {
            
        }
    },

    props: ['items', 'resultQuery'],

    components: {
        // updateBook,
        // bookInfo,

        KhachHangInfo,
        KhachHangDonDatPhong
    },

    methods: {
    

    }
}
</script>

<style>
.xem-thong-tin {
    margin-right: 20px;
}



</style>