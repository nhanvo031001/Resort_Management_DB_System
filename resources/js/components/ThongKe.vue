<template>
  <div>
    <div id="header">THỐNG KÊ SỐ LƯỢT KHÁCH THUÊ PHÒNG</div>
    <div class="d-flex justify-content-between w-50 align-items-center selection">
      <span>Chọn chi nhánh</span>
      <b-form-select v-model="branch" :options="branchOptions" class="w-75"></b-form-select>
      
      <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select> -->
    </div>
    
    <div class="d-flex justify-content-between w-50 align-items-center selection">
      <span>Chọn năm</span>
      <b-form-select v-model="year" :options="yearOptions" class="w-75"></b-form-select>
      <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select> -->
    </div>

    <table class="table table-striped list-book w-75">
            <thead>
                <tr style="background-color: rgb(8 66 126); color: white;">
                    <th></th>
                    <th class="col-6">Tháng</th>
                    <th class="col-6">Tổng số lượt khách</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <!-- <tr v-for="item in resultQuery" :key="item.ma_khach_hang" v-on:orderchanged="getList()">
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
                </tr> -->
                <tr v-for="data in filterData"
                  :key="data.Thang"
                >
                  <td></td>
                  <td>{{ data.Thang }}</td>
                  <td>{{ data.TongSoLuotKhach }}</td>
                  <td></td>
                </tr>




            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        branch: null,
        year: null,
        branchOptions: [],
        yearOptions: [],
        filterData: []
    }
  },
  watch: {
    branch: function() {
      if (this.branch != null && this.year != null) this.statistic()
      else this.filterData = [];
    },
    year: function() {
      if (this.branch != null && this.year != null) this.statistic()
      else this.filterData = [];
    }
  },
  methods: {
    statistic() {
      axios.get('/api/thongke', {
        params: {
          branch: this.branch,
          year: this.year
        }
      }).then(response => {
        // console.log(response.data);
        // let ob = {};
        // ob.month = response.data[0].Thang;
        // this.filterData.push(ob);
        // console.log(this.filterData[0].month);
        this.filterData = response.data;
        
      })
      .catch(error => {
          console.log(error.response)
      });

    },
    initYearOptions() {
      this.yearOptions.push({value: null, text: "Chọn năm"});
      let initYear = 2019;
      for (let i = initYear; i < 2030; i++) {
        this.yearOptions.push({value: i, text: '' + i});
      }
      console.log(this.yearOptions);
    },
    getAllBranches() {
      this.branchOptions.push({value: null, text: "Chọn mã chi nhánh"});
      axios.get('/api/chi_nhanh')
      .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            this.branchOptions.push(response.data[i].ma_chi_nhanh);
          }
          
      })
      .catch(error => {
          console.log(error.response)
      });
    }
  },
  mounted() {
    this.initYearOptions();
    this.getAllBranches();
  }
}
</script>

<style scoped>
table {
  margin: auto;
}

.selection {
  margin: auto;
  margin-top: 30px;
}

.selection span {
  font-weight: 700;
}

#header {
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
}

table {
  margin-top: 40px;
  margin-bottom: 100px;
}

</style>