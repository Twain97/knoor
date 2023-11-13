<template>
  <div class="w-full bg-slate-100 flex flex-col">
    <div class="">
      <Toast style="width: 40%; " class="hidden md:block"/>
      <Toast style="width: 75%; " class="text-xs font-thin md:hidden"/>
    </div>
      <!-- Carousel -->
      <Carousel/>
        

    <h1 class="text-lg font-bold text-slate-800 mx-auto mt-3">Available</h1>
    <ul class="flex flex-row flex-wrap justify-between p-1 ">
      <li v-for="(item, index) in foodItems" :key="index" class="m-auto w-wd45  flex flex-col p-2 justify-center  rounded-md shadow-md space-y-3 bg-white my-3 md:w-64">
      <div class="flex flex-col ">
        <div id="prodHead" class="mb-2 flex justify-between px-1">
          <div class="w-fit font-semibold text-xs bg-orange-600 rounded-lg p-1 text-slate-800 md:font-bold">
          <p>-80%</p>
          </div>

          <div class="flex items-center my-auto"  @click="addFavorite(item)">
            <font-awesome-icon icon="fa-solid fa-heart" class=" text-slate-700 drop-shadow-sm hover:text-xl transition-all" />
          </div>
        </div>
        <div id="pic" @click="(toggleShowProductPage(), insertProduct(item))">
          <img :src="item.pic" alt="" class="h-24 w-full md:h-32">
        </div>
      </div>
      <hr class="w-11/12 mx-auto border-2">
      <div id="rating" class="mx-auto flex">
          <Rating v-model="item.rating" :cancel="false" :pt="{
            onIcon: { class: 'h-3 text-orange-600'},
            offIcon: { class: 'h-3 text-orange-600'},
            item: {class:'-ml-3'},
            root:{ class:'ml-4 w-full'}
            }" />
          <p class="m-auto pl-0 text-sm">({{item.rating }})</p>
        
      </div>
      <h1 class="font-bold text-xs m-auto">{{ item.title }}</h1>
      <h6 class=" font-bold text-xs md:text-sm text-green-700 m-auto">
        
        <span class="line-through text-red-500">#{{ item.smallOldPrice }}</span> 
        #{{ item.smallNewPrice}}
      </h6>
      <div class=" flex justify-center ">
      <Button id="button" type="submit"  label="Purchase" size="small" 
      class="text-sm w-full" @click="(toggleShowProductPage(), insertProduct(item))"/>
      </div>

      <!-- <h1 class="text-lg font-extrabold">{{ custRating(item) }}</h1> -->
    </li>
    </ul>
  </div>
 
</template>

<script>
import { useToast } from "primevue/usetoast";
import { useStore } from "vuex";
import { mapState } from 'vuex';
import Favourite from '../pages/Favourite.vue'
import cart from '../pages/Cart.vue'
import Carousel from '../views/Carousel.vue'
export default{
  components: {
    cart,
    Favourite,
    Carousel,
    // Product
  },
  computed: {
    foodItems(){
      return this.$store.state.items
    },
    ...mapState({
      cart:"cart",
      fav:"fav",
    }),
    cartItem(){
      return this.cart
    },
    favItem(){
      return this.fav
    },
    
  },
  methods: {
    toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
    },
    // insert this specific product and display
    insertProduct(item){
      this.$store.dispatch('addProduct', item)
    },
    
    addToCart(){
      this.$store.dispatch('addCart',this.previewProduct)
    }
  },


  setup(){
    const toast = useToast()
    const store = useStore()
    
    function addFavorite(item){

    if(store.state.fav.includes(item)){
      toast.add({ severity: 'warn', summary: 'Error!', detail: 'Already added to wishlist', life: 3000 })
    }
    else{
      store.dispatch('addFav', item)
      }
    }

    return{
      addFavorite
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
<style scoped>

.fa-heart{
    font-size: 20px;
    cursor: pointer;
  }
  
  #button{
  background: rgba(96, 109, 129, 0.3);
  border: none;
  color:rgb(46, 43, 43);
  height: 50px;
}
#button:hover{
  background: rgba(96, 109, 129, 1);
  color: #e2dfdf;
 
}
</style>

