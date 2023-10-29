<template>
  <div class="w-full bg-slate-100 flex flex-col">

      <carousel class=" rounded-lg mx-auto mt-5 w-full md:h-5/6 overflow-hidden " :items-to-show="2.2" :autoplay="2500" :wrap-around="true" :show-arrows="false">
        <slide class="h-44 " v-for="slide in dishes" :key="slide">
          <img class="w-64 h-32 ml-5 -mt-4 rounded-lg shadow-xl"  
          :src="slide" alt="">
        </slide>
       
      </carousel>
      <small>
        cart Comp:
        <cart/>
      </small>
      <b>Fav Comp:
        <Favourite/>
      </b>      
      <i>
        Prod comp:
        <products/>
      </i>
        

    <h1 class="text-xl font-bold text-slate-800 mx-auto mt-3">Available</h1>
    <ul class="flex flex-wrap justify-between p-1 ">
      <li v-for="(item, index) in images" :key="index" class="w-wd45 md:w-64 flex flex-col p-2 justify-center  rounded-md shadow-md space-y-3 bg-white my-3">
      <div>
        <div id="prodHead" class="mb-2 flex justify-between px-1">
          <div class="w-fit font-bold text-xs bg-orange-600 rounded-lg p-1 text-slate-800">
            -80%
          </div>

            <div class="bg-red-400" @click="viewProduct(item)">
              xx
            </div>
          <div class="flex items-center"  @click="addFavorite(item, index)">
            <font-awesome-icon icon="fa-solid fa-heart" class="text-slate-700 drop-shadow-sm hover:text-xl transition-all" />
          </div>
        </div>
        <div id="pic">
          <img :src="item.pic" alt="" class="h-32 w-full">
        </div>
      </div>
      <hr class="w-11/12 mx-auto border-2">
      <div id="rating" class="m-auto flex w-1/2"> 
        <font-awesome-icon icon="fa-solid fa-star"  size="xs" class="text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"  size="xs" class="text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"  size="xs" class="text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"  size="xs" class="text-slate-600  hover:text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        <font-awesome-icon icon="fa-solid fa-star"  size="xs" class="text-slate-600 hover:text-yellow-600 drop-shadow-md my-auto p-1 rounded-full"/>
        {3}</div>
      <h1 class="font-bold text-sm m-auto">{{ item.title }}</h1>
      <h2 class="font-bold text-sm text-green-700 m-auto"> <span class="line-through text-red-500">#5000</span> #4500/Litre</h2>
      <div class=" flex justify-center ">
      <Button id="button" type="submit"  label="Add to cart" size="medium" class="w-full" @click="addToCart(item)"/>
      </div>

    </li>
    </ul>
  </div>
 
</template>

<script>
  import { mapState } from 'vuex';
  import products from '../views/product.vue'
  import Favourite from '../pages/Favourite.vue'
  import cart from '../pages/Cart.vue'
import dish1 from '../images/dishes/dish1.jpg'
import dish2 from '../images/dishes/dish2.jpg'
import dish3 from '../images/dishes/dish3.jpg'
import dish4 from '../images/dishes/dish4.jpg'
import dish5 from '../images/dishes/dish5.jpg'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default{
  components: {
    cart,
    Favourite,
    products,
    Carousel,
    Pagination,
    Slide,
    Navigation
    
  },
  computed: {
    images(){
      return this.$store.state.items
    },
    ...mapState({
      fav:"fav",
    }),
   
    favTotal(){
      return this.fav.length

    }
  },

  methods: {
    viewProduct(item){
      this.$store.dispatch('addProducts', item)

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
    addToCart(item){
      this.sltdItem = item.task

      if(this.fav.includes(item)){
        item.inCart++
      }
      else{
      this.$store.dispatch('addCart', item)
      }
    }
  },

  data () {
    return {
      isAdded : false,
      sltdItem:'',
      dishes:{
        dish1:dish1,
        dish2:dish2,
        dish3:dish3,
        dish4:dish4,
        dish5:dish5
      }
    }
  },
}
</script>
<style>
  .fa-heart{
    font-size: 24px;
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

