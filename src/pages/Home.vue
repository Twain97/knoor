<template>
  <div class="w-full bg-slate-100 flex flex-col">
    <!-- Product Preview -->
      <Product/>
{{ cartItem }}
      <!-- Carousel -->
      <Carousel/>
        

    <h1 class="text-xl font-bold text-slate-800 mx-auto mt-3">Available</h1>
    <ul class="flex flex-row flex-wrap justify-between p-1 ">
      <li v-for="(item, index) in images" :key="index" class="m-auto w-wd45  flex flex-col p-2 justify-center  rounded-md shadow-md space-y-3 bg-white my-3 md:w-64">
      <div class="flex flex-col ">
        <div id="prodHead" class="mb-2 flex justify-between px-1">
          <div class="w-fit font-semibold text-xs bg-orange-600 rounded-lg p-1 text-slate-800 md:font-bold">
            -80%
          </div>

          <div class="flex items-center my-auto"  @click="addFavorite(item, index)">
            <font-awesome-icon icon="fa-solid fa-heart" class=" text-slate-700 drop-shadow-sm hover:text-xl transition-all" />
          </div>
        </div>
        <div id="pic" @click="(toggleShowProductPage(), insertProduct(item))">
          <img :src="item.pic" alt="" class="h-24 w-full md:h-32">
        </div>
      </div>
      <hr class="w-11/12 mx-auto border-2">
      <div id="rating" class="mx-auto flex"> 
        <font-awesome-icon icon="fa-solid fa-star"   class="star text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"   class="star text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"   class="star text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"   class="star text-slate-600  hover:text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"   class="star text-slate-600 hover:text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <p class="text-xs font-semibold">{3}</p>
      </div>
      <h1 class="font-bold text-sm m-auto">{{ item.title }}</h1>
      <h6 class=" font-bold text-xs md:text-sm text-green-700 m-auto">
        
        <span class="line-through text-red-500">{{ item.small }}</span> 
        {{ item.small}}
      </h6>
      <div class=" flex justify-center ">
      <Button id="button" type="submit"  label="Purchase" size="small" 
      class="w-full" @click="(toggleShowProductPage(), insertProduct(item))"/>
      </div>

    </li>
    </ul>
  </div>
 
</template>

<script>
import { mapState } from 'vuex';
import Favourite from '../pages/Favourite.vue'
import cart from '../pages/Cart.vue'
import Carousel from '../views/Carousel.vue'
import Product from '../views/product.vue'
export default{
  components: {
    cart,
    Favourite,
    Carousel,
    Product
  },
  computed: {
    images(){
      return this.$store.state.items
    },
    ...mapState({
      cart:"cart",
      fav:"fav",
      product:"product",
      showProductPage:"showProductPage"
    }),
    cartItem(){
      return this.cart
    },
    favItem(){
      return this.fav
    },
    showProductPage(){
      return this.product
    },
    showPage(){
      return this.showProductPage
    }
  },
  methods: {
    toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
    },
    // insert this specific product and display
    insertProduct(item){
      this.$store.dispatch('addProduct', item)
    },
    addFavorite(item){
    
      this.isAdded = !this.isAdded

      if(this.$store.state.fav.includes(item)){
        alert("Already added to Favorite!")
      }
      else{
      this.$store.dispatch('addFav', item)
      }
    },
    addToCart(){
      this.$store.dispatch('addCart',this.previewProduct)
    }
  },

  data () {
    return {
      previewProduct:{},
      isAdded : false,
      ShowProd:true,
      sltdItem:'',
      showDescription:true,
      showReview:false,
      showSpecification:false,
    }
  },
}
</script>
<style>
#rating .star{
font-size: 13px;
}
  .fa-heart{
    font-size: 20px;
    cursor: pointer;
  }
  
#button{
  background: rgba(96, 109, 129, 0.3);
  border: none;
  color:rgb(46, 43, 43);
}
#button:hover{
  background: rgba(96, 109, 129, 1);
  color: #e2dfdf;
 
}
</style>

