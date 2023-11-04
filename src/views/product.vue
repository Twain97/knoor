<template>
      <div v-show="showPage" class="fixed flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30">
      
      <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-10 w-10 h-10 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
            <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="m-auto rounded-full" />
      </div>
      
      <div class="flex flex-col h-5/6 rounded-xl m-auto w-wd9 overflow-x-hidden overflow-y-auto   bg-white">
        
        <div class="mt-3 w-fit font-bold text-xs bg-orange-600 rounded-lg p-1 text-slate-800">
              -80%
        </div>
        <!-- image section -->
        <div class="mx-auto w-80 mb-5" >
          <img :src="previewProduct.pic" alt="" class="rounded-lg">
        </div>

        <!-- Body section -->
        <div class="flex flex-col">
          <h1 class="m-auto font-extrabold text-lg">{{ previewProduct.title }}</h1>
          <div class="flex space-x-3">
            <h3 class="font-bold">Available Sizes:</h3>
            <p>2.4 Litres</p>
            <p>4.5 Litres</p>
          </div>
          <div class="flex space-x-3">
            <h3>Prices:</h3>
            <div>
              <p class="space-x-5">2.4 Litres: 
              <span id="smallOldPrice" class="line-through" >{{  previewProduct.smallOldPrice}}</span>
              <span id="smallNewPrice" class="bg-slate-50">{{previewProduct.smallNewPrice }}</span></p>
            <p class="space-x-5">4.5 Litres: 
              <span id="bigOldPrice" class="line-through">{{ previewProduct.bigOldPrice }}</span>  
              <span id="bigNewPrice" class="bg-slate-50">{{ previewProduct.bigNewPrice }}</span></p>
            </div>
            
            
          </div>
          <div class="flex space-x-3">
            <h3>Quantity</h3>
            <div>
              <p>2.5: 
                <span class="font-extrabold text-xl" @click="decrementSmall()">-</span> 
                {{ previewProduct.totalSmallInOrder }}x  
                <span class="font-extrabold text-xl" @click="incrementSmall()">+</span> 
              </p>
              <p>4.5: 
                <span class="font-extrabold text-xl" @click="decrementBig()">-</span> 
                {{ previewProduct.totalBigInOrder }}x 
                <span class="font-extrabold text-xl" @click="incrementBig()">+</span>
              </p>
            </div>
            
          </div>
          <div>
            <p><b>Details: </b>{{ previewProduct.details }}</p>
          </div>
          <div class="flex flex-row space-x-2">
            <b>Share:</b>
            <span class="flex flex-row space-x-3">
              <a href="#" class=" bg-slate-300 flex w-8 h-8  rounded-full">
                <font-awesome-icon icon="fa-brands fa-whatsapp"  size="lg" style="color: #333366;" class="m-auto rounded-full" />
              </a>
              <a href="#" class=" bg-slate-300 flex w-8 h-8  rounded-full">
                <font-awesome-icon icon="fa-brands fa-facebook"  size="lg" style="color: #333366;" class="m-auto  rounded-full" />
              </a>
              <a href="#" class=" bg-slate-300 flex w-8 h-8  rounded-full">
                <font-awesome-icon icon="fa-brands fa-twitter"  size="lg" style="color: #333366;" class="m-auto  rounded-full" />
              </a>
              <a href="#" class=" bg-slate-300 flex w-8 h-8  rounded-full">
                <font-awesome-icon icon="fa-brands fa-instagram"  size="lg" style="color: #333366;" class="m-auto rounded-full" />
              </a> 
            </span>
          </div>
          <div class="flex flex-col space-y-3 w-full">
              <Button id="button"  icon="pi pi-cart-plus"  label="ADD TO CART" size="medium" class="w-wd7 h-5 m-auto" @click="addToCart()"/>
              <Button id="button"  icon="pi pi-heart"  label="ADD TO WISH" size="medium" class="w-wd7 h-5 m-auto" @click="addToFav()"/>
          </div>
      
        </div>

        <!-- Description, specification, review section -->
        <div class="">
          <h3 @click="showDescrip()">DESCRIPTION</h3>
          <h3 @click="showSpec()">SPECIFICATION</h3>
          <h3 @click="showRev()">REVIEWS({{  }})</h3>
        </div>

        <!-- Descrip, spec, Rev section content display -->
        <div v-show="showDescription">
          {{ }}
        </div>
        <div v-show="showSpecification">
          specification
        </div>
        <div v-show="showReview">
          Review
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from "../tool/button.vue"
export default{
  name:"Product",

  components: {
    Button
  },
  computed: {
    ...mapState({
      product:"product",
      showProductPage:"showProductPage"
    }),
    previewProduct(){
      return this.product
    },
    showPage(){
      return this.showProductPage
    }
  },
  methods:{
    toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
    },
    addToCart(){
      this.$store.dispatch('addCart')
    },
    decrementSmall(){
      this.product.totalSmallInOrder--
    },
    incrementSmall(){
      this.product.totalSmallInOrder++
    },
    decrementBig(){
      this.product.totalBigInOrder--
    },
    incrementBig(){
      this.product.totalBigInOrder++
    },
    showSpec(){
      this.showSpecification= true
      this.showReview=false
      this.showDescription =false
    }, 
    showDescrip(){
      this.showDescription = true
      this.showReview = false
      this.showSpecification = false
    },
    showRev(){
      this.showReview =true
      this.showSpecification = false
      this.showDescription = false
    },
    
  },
  
  data(){
    return{
      showDescription:true,
      showReview:false,
      showSpecification:false,
      totalReviews:0,
      showProdSmallOld:null
    }
  }
}
</script>

<style>
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
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
