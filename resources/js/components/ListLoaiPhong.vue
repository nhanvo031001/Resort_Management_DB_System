<template>
    <div>
        <table class="table table-striped list-book">
            <thead>
                <tr style="background-color: #0084b4; color: white">
                    <th class="col-2">Mã loại phòng</th>
                    <th class="col-4">Tên loại phòng</th>
                    <th class="col-2">Diện tích (m2)</th>
                    <th class="col-2">Số khách tối đa</th>
                    <th class="col-2"></th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="item in resultQuery"
                    :key="item.ma_loai_phong"
                    v-on:orderchanged="getList()"
                >
                    <td>{{ item.ma_loai_phong }}</td>
                    <td>{{ item.ten_loai_phong }}</td>
                    <td>{{ item.dien_tich }}</td>
                    <td>{{ item.so_khach }}</td>
                    <td class="text-left">
                        <router-link
                            active-class="active"
                            exact
                            class="side-btn-new"
                            :to="{
                                name: 'loaiPhongInfo',
                                params: { loaiPhongID: item.ma_loai_phong }
                            }"
                        >
                            <button class="btn icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-info-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                    />
                                    <path
                                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                    />
                                </svg>
                            </button>
                        </router-link>

                        <!-- <button class="btn icon" @click="removeRoom(item.ma_loai_phong)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>  
                    </button> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import updateBook from './UpdateBook.vue'
// import bookInfo from './BookInfo.vue'

import LoaiPhongInfo from "./LoaiPhongInfo.vue";

export default {
    data() {
        return {};
    },

    props: ["items", "resultQuery"],

    components: {
        // updateBook,
        // bookInfo,

        LoaiPhongInfo
    },

    methods: {
        removeRoom(id) {
            axios
                .delete("/api/loaiPhong/" + id)
                .then(response => {
                    console.log("Xóa phòng thành công");
                    if (response.status == 200) {
                        this.$emit("orderchanged");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style>
.side-btn-new {
    /* border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent; */
}

.side-btn-new:focus {
    outline: none;
}

.side-btn-new.active {
}
.table th,
.table td {
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
}
</style>
