<template>
    <div id="home">
        <div id="hot-sale" >
            <div class="container-custom">
                <h3>Hot Sale!</h3>
                <div id="button-link-group" class="d-flex">
                    <a href="#" id="buy-link" class="d-flex justify-content-center align-items-center">Buy now</a>
                    <a href="/detail/3" id="detail-link" class="d-flex justify-content-center align-items-center">See details</a>
                </div>
                <img src="/images/imaginary-friend.png" alt="">
            </div>

        </div>
        

        <div id="category">

            <!-- <Splide :options="{ rewind: true }">
                <SplideSlide>
                    <p>fsfsfsfs</p>
                </SplideSlide>
                <SplideSlide>
                    <p>fsfsfsfsfs</p>
                </SplideSlide>
            </Splide> -->
            <h2>Explore The World with This Categories of Books</h2>
            <Flicking :options="{ circular: true }" :plugins="plugins">
                <!-- <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div>
                <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div>
                <div class="card-panel"><img src="/images/harry-potter-1.png" alt=""></div> -->
                <div  v-for="category in categories" :key="category.category_id" class="card-panel">
                    <a :href="'/category/' + category.category_id">
                        <img :src="'/images/' + category.category_image" alt="">
                    </a>
                    
                </div>
                <span slot="viewport" class="flicking-arrow-prev"></span>
                <span slot="viewport" class="flicking-arrow-next"></span>
            </Flicking>    

        </div>


        <div id="book-list">
            <div class="container-custom">
                <h3>
                    <a href="/category/popular_week">Popular Books this Week</a>
                </h3>
                <div class="d-flex flex-wrap justify-content-between">
                    <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->


                    <a v-for="book in popularBooks"
                        :key="book.book_id"
                        :href="'http://127.0.0.1:8000/detail/' + book.book_id"
                    >
                        <img :src="'/images/' + book.image" :alt="book.title">
                    </a>

                </div>

                
            </div>

            <div class="container-custom">
                <h3>
                    <a href="/category/best_seller">Best seller</a>
                </h3>


                <div class="d-flex flex-wrap justify-content-between">
                    <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->
                    <a v-for="book in bestSellers"
                        :key="book.book_id"
                        :href="'http://127.0.0.1:8000/detail/' + book.book_id"
                    >
                        <img :src="'/images/' + book.image" :alt="book.title">
                    </a>
                </div>
            </div>


            <div class="container-custom">

                <h3>
                    <a href="/category/special_discount">Special Discount</a>
                </h3>

                <div class="d-flex flex-wrap justify-content-between">
                    <!-- <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a>
                    <a href="#">
                        <img src="/images/harry-potter-1.png" alt="">
                    </a> -->
                    <a v-for="book in specialDiscounts"
                        :key="book.book_id"
                        :href="'http://127.0.0.1:8000/detail/' + book.book_id"
                    >
                        <img :src="'/images/' + book.image" :alt="book.title">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default {
    props: ['books', 'categories'],
    data() {
        return {
            popularBooks: [],
            bestSellers: [],
            specialDiscounts: [],
            plugins: [new Arrow()]
        }
    },
    methods: {
        getPopularBooks() {
            this.popularBooks = this.books.slice();
            this.popularBooks.sort(function(a, b) {
                return b.num_view - a.num_view;
            })
            this.popularBooks.slice(0, 5);

        },
        getBestSellers() {
            this.bestSellers = this.books.slice();
            this.bestSellers.sort(function(a, b) {

                return b.num_sale - a.num_sale;
            })
            this.popularBooks.slice(0, 5);

        },
        getSpecialDiscounts() {
            this.specialDiscounts = this.books.slice();
            this.specialDiscounts.sort(function(a, b) {
                return b.sale - a.sale;
            })
            this.specialDiscounts.slice(0, 5);
            
        }
    },
    mounted() {
        console.log(this.categories);
        this.getPopularBooks();
        this.getBestSellers();
        this.getSpecialDiscounts();
    }
}


</script>


<style scoped>



a {
    text-decoration: none;
    color: white;
    display: inline-block;
}


.container-custom {
    width: 1200px;
    margin: auto;
}

#hot-sale {
    height: 570px;
    background-image: url("/images/background-decoration-1.png");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 25%;
    background-size: 65% auto;
}

#hot-sale {
    padding-top: 100px;
    
}



#hot-sale .container-custom {
    position: relative;
}

#hot-sale img {
    position: absolute;
    right: 150px;
    top: -50px;
    display: inline-block;
    height: 422px;
    width: 291px;
    cursor: pointer;
}

#detail-link:hover {
    background-color: #113963;
    color: white;
}

#button-link-group {
    margin-top: 40px;
}

#hot-sale h3 {
    font-family: "Inria Serif";
    font-weight: 700;
    color: #296063;
    font-size: 100px;
}

#buy-link, #detail-link {
    font-family: "Inria Serif";
    width: 150px;
    height: 54px;
    border-radius: 50px;
    font-size: 20px;
    
}

#buy-link {
    background-color: #113963;
    margin-right: 60px;
}

#detail-link {
    color: #112839;
    border: 1px solid #01162A;
}


/* #book-list a {
    width: 18%;
} */

#book-list img {
    width: 222.18px;
    height: 355px;
}

#book-list h3 a {
    margin-top: 60px;
    margin-bottom: 50px;
    font-family: "Inria Serif";
    font-weight: 700;
    color: #011445;
    font-size: 40px;
    display: inline-block;

}

#book-list h3 a:hover {
    color: rgb(34, 76, 165);
}


.card-panel {
    margin-right: 100px;
    margin-left: 100px;
}


#category {
    padding-top: 100px;
    padding-bottom: 100px;
    background-image: url("/images/background-category.png");
    background-repeat: no-repeat;
    background-size: cover;
    background:linear-gradient(0deg, rgba(1, 14, 33, 0.8), rgba(1, 14, 33, 0.8)), url(/images/background-category.png);
}

#category h2 {
    text-align: center;
    font-family: "Inria Serif";
    font-size: 45px;
    font-weight: 700;
    color: white;
    padding-bottom: 70px;

}

#category img {
    width: 255px;
    height: 420px;
}
</style>