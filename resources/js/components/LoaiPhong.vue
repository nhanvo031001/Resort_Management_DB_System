<template>
    <div>
        <div class="container search">
            <div class="row">
                <div class="col">
                    <input
                        class="search-typing"
                        type="text"
                        placeholder="Tên loại phòng"
                        size="50px"
                        v-model="searchQuery"
                    />
                </div>
            </div>
        </div>

        <div class="button-below">
            <router-link :to="{ name: 'themLoaiPhong' }">
                <button
                    style="background-color: #0084b4"
                    type="button"
                    class="btn btn-primary change-password"
                >
                    Thêm loại phòng
                </button>
            </router-link>
        </div>

        <div>
            <list-loai-phong
                :items="items"
                :resultQuery="resultQuery()"
                v-on:orderchanged="getList()"
            />
        </div>
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import ListLoaiPhong from "./ListLoaiPhong.vue";

export default {
    components: {
        ListLoaiPhong,

        DatePicker
    },

    data() {
        return {
            items: [],
            searchQuery: null
        };
    },

    created() {
        this.getList();
    },

    methods: {
        getList() {
            axios
                .get("/api/loaiPhongAll")
                .then(response => {
                    this.items = response.data;
                    console.log(this.items);
                })
                .catch(error => {
                    console.log(error.response);
                });
        },

        resultQuery() {
            if (this.searchQuery) {
                return this.items.filter(item => {
                    return this.searchQuery
                        .toLowerCase()
                        .split(" ")
                        .every(v =>
                            item.ten_loai_phong.toLowerCase().includes(v)
                        );
                });
            } else {
                return this.items;
            }
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
    margin-top: 40px;
}

.one-row-field {
    margin-top: 15px;
}

.row-input {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
}

.field-name-left {
    /* padding-left: 115px; */
    color: #0084b4;
    font-size: 18px;
    font-weight: bold;
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

.button-below {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 300px;
    display: flex;
    justify-content: center;
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
    background-color: #00aced;
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
.change-password:hover {
    background-color: #006565;
}

.custom-file-input {
    opacity: 1;
    padding-top: 3px;
    width: 600px;
}

#upload-button {
    border-radius: 3px;
}

/* danh sach loai phong */

.search {
    margin-top: 10px;
}
/* .search input {
    height: 50px;
    border-radius: 5px;
} */

/* .search-icon {
    height: 50px;
    width: 50px;
} */

.search-typing {
    border: 2px solid #d8dbe0;
    border-radius: 3px;
    text-indent: 30px;
    /* background: url(../assets/hcmut1.png) no-repeat;
    background-size: 10px 10px; */
    background: url(../../../public/images/warehouse/search-icon.png) no-repeat
        scroll 5px 5px;
    background-size: 15px 15px;
}

::placeholder {
    color: rgb(196, 189, 189);
}
</style>
