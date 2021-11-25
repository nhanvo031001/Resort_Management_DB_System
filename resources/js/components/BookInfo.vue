<template>
  <div>
      <div class="header-detail">DETAILED BOOK INFORMATION</div>
      <!-- <div> {{this.book}} </div> -->
       <!-- <router-link to="/admin/managebooks"> 
            <button>Cancle</button>
        </router-link> -->
      <!-- <div>
        <div><input type="text" v-model="book.title" :disabled="locking"></div>
        <div><input type="text" v-model="book.id" :disabled="locking"></div>
      </div> -->
      
      <div class="container filling-all-info">
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Title<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.title" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">ID<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.book_id" type="text" size="80" :disabled="locking"></div>
            </div>

            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Author<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.author" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Category<span class="red-star">*</span> </div>
                <!-- {{book.category_name}} -->
                <div class="col text-left"><input class="row-input" v-model="book.category_name" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Publisher<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.publisher" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Input date<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.input_date" type="text" size = "20" placeholder="yyyy/mm/dd" :disabled="locking"></div>
                <div class="col-2 text-left field-name-right">Quantity<span class="red-star">*</span> </div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.quantity" type="text" size = "21" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Cost price (USD)<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.cost_price" type="text" size = "20" :disabled="locking"></div>
                <div class="col-2 text-left field-name-right">Selling Price (USD)<span class="red-star">*</span> </div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.selling_price" type="text" size = "21" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">  
                <div class="col-3 text-left field-name-left">Page<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.page_number" type="text" size = "20" :disabled="locking"></div>
                <div class="col-2 text-left field-name-right">Sale(%)</div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.sale" type="text" size = "21" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">   
                <div class="col-3 text-left field-name-left">Publish date<span class="red-star">*</span> </div>
                <div class="col-3 text-left"><input class="row-input" v-model="book.publish_date" type="text" size = "20" placeholder="yyyy/mm/dd" :disabled="locking"></div>
                <div class="col-2 text-left field-name-right">Language<span class="red-star">*</span> </div>
                <div class="col-3 text-left field-right"><input class="row-input" v-model="book.language" type="text" size = "21" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Image<span class="red-star">*</span> </div>
                <div class="col text-left"><input class="row-input" v-model="book.image" type="text" size="80" :disabled="locking"></div>
            </div>
            <div class="row one-row-field">
                <div class="col-3 text-left field-name-left">Description<span class="red-star">*</span> </div>
                <!-- <div class="col text-left"><input type="text" size="80"></div> -->
                <div class="col text-left"><textarea  v-model="book.description" class="row-input text-area" rows="6" cols="82" :disabled="locking"></textarea></div>
            </div>
            
            <div class="row button-below">
                <div class="col-3"></div> 
                <div class="col text-right">
                <!-- <button class="cancle-detailed" >Cancle</button> -->
                <router-link to="/admin/managebooks">
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
      book: {},
      bookID: this.$route.params.bookID,
      locking: true,
    }
  },

  methods: {
    getBookByID(id) {
      axios.get('/api/book/' + id)
      .then (response => {
          console.log(response)
          this.book = response.data[0]
          console.log(this.book)
      })
      .catch (error => {
          console.log(error)
      })
    },
  },

  created(){
    //console.log("ahhaa")
    this.getBookByID(this.bookID);
  },
}
</script>

<style>
.header-detail {
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

.button-below {
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