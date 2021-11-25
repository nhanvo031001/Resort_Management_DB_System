<template>
    <div class="container-custom row">
        <div id="filter" class="col-3">
            <h3>Sort by</h3>
            <ul>
                <li class="content-filter" @click="sortPriceLowToHigh">Price: Low to High</li>
                <li class="content-filter" @click="sortHighToLow">Price: High to Low</li>
                <li class="content-filter" @click="sortViewHighToLow">Customer review</li>
                <!-- <li class="content-filter">Publication Day</li> -->
            </ul>

            <h3 style="margin-top: 60px;">Filter option</h3>
            <h4>Price:</h4>
            <input type="checkbox" id="one" value="One" v-model="under100" @click="filter(0)">
            <label for="one" class="content-filter">Under $100</label>
            <br>
            <input type="checkbox" id="two" value="Two" v-model="under200" @click="filter(1)">
            <label for="two" class="content-filter">$100 to $200</label>
            <br>
            <input type="checkbox" id="three" value="Three" v-model="under500" @click="filter(2)">
            <label for="three" class="content-filter">$200 to $500</label>
            <br>
            <input type="checkbox" id="four" value="Four" v-model="under1000" @click="filter(3)">
            <label for="four" class="content-filter">$500 to $1000</label>
            <br>
            <input type="checkbox" id="five" value="Five" v-model="over1000" @click="filter(4)">
            <label for="five" class="content-filter">Over $1000</label>

            <h4>Language:</h4>
            <input type="checkbox" id="eng" value="One" v-model="english" @click="filter(5)">
            <label for="eng" class="content-filter">English</label>
            <br>
            <input type="checkbox" id="viet" value="Two" v-model="vietnam" @click="filter(6)">
            <label for="viet" class="content-filter">Vietnamese</label>
            <br>
        </div>
        <div class="col">
            <h2 id="category-name">{{ category }}</h2>
            <div class="products d-flex flex-wrap">
                <!-- <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>


                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div>



                <div class="product">
                    <img src="/images/imaginary-friend.png" alt="">
                    <p class="author">Stephen Chbosky</p>
                    <h4>Imaginary Friend</h4>
                    <p class="review">1.3M review</p>
                    <p class="price">
                        <span>$12.43</span>
                        <span>$42.50</span>
                    </p>
                    <button>BUY NOW</button>
                </div> -->


                <div v-for="book in displayBooks" :key="book.book_id"  class="product">
                    <a :href="'/detail/' + book.book_id">
                        <img :src="'/images/' + book.image" alt="">
                    </a>
                    
                    <p class="author">{{ book.author }}</p>
                    <h4>
                        <a :href="'/detail/' + book.book_id">{{ book.title }}</a>
                        
                    </h4>
                    <p class="review">{{ book.num_view +"M review" }}</p>
                    <p class="price">
                        <span>{{ "$" + book.selling_price }}</span>
                        <span>{{ "$" + (book.selling_price - book.selling_price * book.sale) }}</span>
                    </p>
                    <button>BUY NOW</button>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['books'],
    data() {
        return {
            picked: false,
            language: false,
            displayBooks: [],
            category: null,
            under100: false,
            under200: false,
            under500: false,
            under1000: false,
            over1000: false,
            english: false,
            vietnam: false

        }
        
    },
    methods: {
        getDisplayBooks() {
            for (let i = 0; i < this.books.length; i++) {
                this.displayBooks.push(this.books[i]);
            }
        },
        sortPriceLowToHigh() {
            this.displayBooks.sort((a, b) => {
                return a.selling_price - b.selling_price;
            })
        },
        sortHighToLow() {
            this.displayBooks.sort((a, b) => {
                return b.selling_price - a.selling_price;
            })
        },
        sortViewHighToLow() {
            this.displayBooks.sort((a, b) => {
                return b.num_view - a.num_view;
            })
        },
        filter(optionIndex) {
            if(optionIndex == 0) this.under100 = !this.under100;
            else if(optionIndex == 1) this.under200 = !this.under200;
            else if(optionIndex == 2) this.under500 = !this.under500;
            else if(optionIndex == 3) this.under1000 = !this.under1000;
            else if(optionIndex == 4) this.over1000 = !this.over1000;
            else if(optionIndex == 5) this.english = !this.english;
            else if(optionIndex == 6) this.vietnam = !this.vietnam;
            this.displayBooks = []
            for (let i = 0; i < this.books.length; i++) {
                if (this.under100 || this.under200 || this.under500 || this.under1000 || this.over1000 || this.english || this.vietnam) {
                    if ((this.under100 && this.books[i].selling_price < 100)  || (this.under200 && this.books[i].selling_price < 200 && this.books[i].selling_price >= 100)  || (this.under500 && this.books[i].selling_price < 500 && this.books[i].selling_price >= 200) || (this.under1000 && this.books[i].selling_price < 1000 && this.books[i].selling_price >= 500) || (this.over1000 && this.books[i].selling_price > 1000) || (this.english && this.books[i].language == "English") || (this.vietnam && this.books[i].language == "Vietnamese")) this.displayBooks.push(this.books[i]);
                }
                else this.displayBooks.push(this.books[i])
            }
        }
    },
    mounted() {
        this.getDisplayBooks();
        console.log(this.books);
        this.category = window.posts;
        console.log(window.posts);
    }
}
</script>


<style scoped>
.container-custom {
    width: 1200px;
    margin: auto;
}

.products {
    margin-top: 70px;
}

.product {
    width: 23%;
    margin-top: 45px;
}

.product img {
    width: 100%;
    height: 402.95px;
}

#filter {
    margin-top: 190px;
}

#filter h3 {
    font-family: "Vollkorn";
    font-weight: 700;
    font-size: 35px;
    color: #1C2A39;
}

#filter h4 {
    font-family: "Vollkorn";
    font-weight: 700;
    font-size: 20px;
    color: #112E4D;
    margin-top: 25px;
}


#category-name {
    font-family: "Vollkorn";
    font-weight: 600;
    font-size: 70px;
    color: #1C2A39;
}

.content-filter {
    font-family: "Vollkorn";
    font-weight: 400;
    font-size: 20px;
    color: #112E4D;
    cursor: pointer;
}

.author {
    font-family: 'Open Sans';
    color: #5C6A79;
    font-weight: 400;
    font-size: 17px;
}

.product h4 a {
    font-family: "Montserrat";
    font-weight: 700;
    color: #1C2A39;
    font-size: 24px;
    text-decoration: none;
    
}

.review {
    font-family: 'Open Sans';
    color: #5C6A79;
    font-weight: 400;
    font-size: 17px;
}

.price span:first-child {
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 700;
    color: #1C2A39;
}

.price span:last-child {
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 600;
    color: #BDBDBD;
    margin-left: 15px;
}

.product {
    width: 33.3333%;
    height: 530px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 80px;
}

.product button {
    width: 100%;
    font-family: "Montserrat";
    font-weight: 700px;
    color: #4C3DB2;
    border: 1px solid #4C3DB2;
    height: 50px;
}

.product button:hover {
    background-color: #4C3DB2;
    color: white;

}


</style>