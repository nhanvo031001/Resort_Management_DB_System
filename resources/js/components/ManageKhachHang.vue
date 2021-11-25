<template>
    <div>
        <!-- <div class="container search">
            <div class="row">
                <div class="col"> 
                    <input class="search-typing" type="text" placeholder="Title" size="50" v-model="searchQuery"> 
                </div>
            </div>
        </div>

        

        <div class="bookList">
            <listBooks :items="items" :resultQuery="resultQuery()" v-on:orderchanged="getList()" />
        </div> -->

        day la danh sach khach hang

    </div>
</template>



<script>
import listBooks from './ListBooks.vue'
export default {
    created() {
        //console.log('hihihi')
        this.getList();
        this.getAllCategories();
    },

    components: {
        listBooks
    },
    
    data() {
        return {
            items: [        // store all books
                // {'id':1, 'title': 'abcxyz'}
            ],
            
            categories: [],

            searchQuery: null,

            items_search: [],       // for props search ListBooks.vue
        }
    },

    methods: {
        

        getList() {
            //console.log('hihihi')
            axios.get('/api/books')
            .then(response => {
                this.items = response.data;
                console.log(this.items)
            })
            .catch(error => {
                console.log(error.response)
            });
            
        },

        getAllCategories() {
            axios.get('/api/categories')
            .then(response => {
                //console.log("Get all categories");
                this.categories = response.data;
                console.log(this.categories)
            })
            .catch(error => {
                console.log(error.response)
            });
        },

        // getData() {
        //     //console.log(this.items)
        //     if (this.query.length == 0) {
        //         this.search_data = []
                
        //     }
        //     else {
        //     for (var key in this.items) {
        //         if (this.items[key].title.includes(this.query)) {
        //             //console.log(this.items[key].title)
        //             this.search_data.push(this.items[key].title)
        //         }
        //     }
        //     }
        // },

        resultQuery() {
            if(this.searchQuery){
                return this.items.filter( (item)=>{
                    
                    //this.items_search = this.searchQuery.toLowerCase().split(' ').every( v => item.title.toLowerCase().includes(v) );
                    //console.log(this.items_search)
                    return this.searchQuery.toLowerCase().split(' ').every( v => item.title.toLowerCase().includes(v) );
                })
            }
            else {
                //this.items_search = this.items;
                //console.log(this.items_search)
                return this.items;
            }
        }
        
    }
}
</script>

<style>
.search {
    margin-top: 10px;
}

.search-icon {

}

.search-typing {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
    text-indent: 30px;
    /* background: url(../assets/hcmut1.png) no-repeat;
    background-size: 10px 10px; */
    background: url(../../../public/images/warehouse/search-icon.png) no-repeat scroll 5px 5px; 
    background-size: 15px 15px;
}

.text-category {
    color: #0084B4;
    font-weight: bold;
    font-size: 18px;
}

.category {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
}


.search-category {
    border: 2px solid #D8DBE0;
    border-radius: 3px;
    width: 145px;
    height: 30px;
}

.search-button {
    background-color: #00ACED;
    border: none ;
    color: white;
    font-size: 20px;
    padding: 0.25rem 1.5rem;
    border-radius: 5px;
    margin-right: 140px;
}

.search-button:hover {
    background-color: #0084B4;
}

.search-button:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.list-book {
    margin-top: 30px;
}

.icon {
    margin-top: -7px;
}

::placeholder {
    color: #aca5a5;
}

</style>