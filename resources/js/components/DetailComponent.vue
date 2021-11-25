<template>
    <div class="container-custom">
        <div id="detail" class="row">
            <div class="col-3">
                <img :src="'/images/' + book.image" alt="">
            </div>

            <div class="col">
                <h2>{{ book.title }}</h2>
                <p id="author">{{ book.author + " (Author)" }} </p>
                <p id="review">{{ book.num_view + "M review" }}</p>
                <p id="price">
                    <span>{{ "$" + book.selling_price }}</span>
                    <span>{{ "$" + (book.selling_price - book.selling_price * book.sale) }}</span>
                </p>
                <button>BUY NOW</button>

                <h3>Description</h3>
                <p>
                    {{ book.description }}
                </p>

                <h3>Product Details</h3>
                <ul>
                    <li>
                        <span>Publisher:</span>
                        <span>Alien X Company</span>
                    </li>
                    <li>
                        <span>Publish Date:</span>
                        <span>{{ book.publish_day }}</span>
                    </li>
                    <li>
                        <span>Page:</span>
                        <span>{{ book.page_number }}</span>
                    </li>
                    <li>
                        <span>Language:</span>
                        <span>{{ book.language }}</span>
                    </li>
                    <li>
                        <span>Category:</span>
                        <span>{{ category.category_name }}</span>
                    </li>              
                </ul>

            </div>
        </div>

        
    </div>    
</template>

<script>
export default {
    props: ['book', 'category'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container-custom {
    width: 1200px;
    margin: auto;
}

#detail img {
    width: 100%;
    height: 420px;
    width: 260px;
}

#detail h2 {
    color: #1C2A39;
    font-size: 55px;
    font-family: "Vollkorn";
    font-weight: 400;
}

#author {
    font-family: "Vollkorn";
    font-size: 25px;
    color: #1C2A39;
}

#review {
    color: #5C6A79;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 25px;
}

#price span:first-child {
    font-family: "Montserrat";
    color: #1C2A39;
    font-weight: 700;
    font-size: 25px;
}

#price span:last-child {
    font-family: "Montserrat";
    color: #BDBDBD;
    font-weight: 600;
    font-size: 25px;
    margin-left: 15px;
}


#detail button {
    outline: 0;
    border: 1px solid #3E3385;
    font-family: "Montserrat";
    padding: 3px 12px;
    width: 330px;
    height: 55px;
    color: #3E3385;
    font-weight: 700;
    font-size: 22px;
}

#detail button:hover {
    background-color: #3E3385;
    color: white;
}

#detail h3 {
    font-family: "Vollkorn";
    font-weight: 600;
    color: #1C2A39;
    margin-top: 50px;
}

#detail p {
    font-family: "Vollkorn";
    font-weight: 400;
    color: #1C2A39;
    margin-top: 20px;
    font-size: 20px;
}

ul {
    margin-top: 20px;
}

li span:first-child {
    font-family: "Vollkorn";
    color: #1C2A39;
    font-weight: 700;
    font-size: 20px;
}

li span:last-child {
    font-family: "Vollkorn";
    color: #1C2A39;
    font-weight: 500;
    font-size: 20px;
}
</style>