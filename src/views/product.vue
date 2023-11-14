<template>
    <Transition name="slide-fade" >
        <div v-show="showPage" class="fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800">
        
        <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-5 w-10 h-10 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="m-auto rounded-full" />
        </div>
        
        <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 overflow-x-hidden overflow-y-auto bg-slate-100 shadow-sm">
          
          <div class="mt-3 w-fit ml-2 font-bold text-xs bg-orange-600 rounded-lg p-1 text-slate-800">
                -80%
          </div>
          <!-- image section -->
          <div class="mx-auto mr-4" >
            <img :src="previewProduct.pic" alt="" class="mx-2">
          </div>

          <!-- Body section -->
          <div class="flex flex-col space-y-3 px-2 bg-white  pb-5 rounded-b-lg mx-2">
            <h1 class="m-auto font-bold text-2xl">{{ previewProduct.title }}</h1>
            <!-- rating  -->
            <div class="flex px-2 ">
              <Rating v-model="previewProduct.rating" :cancel="false" class=""
              :pt="{
              onIcon: { class: 'w-4 text-orange-600'},
              offIcon: { class: 'w-4 text-orange-600'},
              item:{class:' -ml-1'}
              }" />
              <p class="pt-1 pl-1">({{ previewProduct.rating }})</p>
            </div>
            

            <div class=" flex flex-col text-lg">
              <h3 class=" font-bold">Available Sizes:</h3>
              <div class="flex flex-row m-auto space-x-5 text-sm">
                <p>2.4 Litres</p>
              <p>4.5 Litres</p>
              </div>
              
            </div>
            <div class="flex flex-col text-lg font-semibold">
              <h3 class="font-bold">Prices:</h3>
              <div class="text-base m-auto">
                <p class="">2.4 Litres: 
                <span id="smallOldPrice" class="line-through mx-3 text-red-600 font-bold" >#{{  previewProduct.smallOldPrice}}</span>
                <span id="smallNewPrice" class=" text-green-700 font-bold">#{{previewProduct.smallNewPrice }}</span></p>
              <p class="">4.5 Litres: 
                <span id="bigOldPrice" class="line-through mx-3 text-red-600 font-bold">#{{ previewProduct.bigOldPrice }}</span>  
                <span id="bigNewPrice" class="text-green-700 font-bold ">#{{ previewProduct.bigNewPrice }}</span></p>
              </div>
              
              
            </div>
            <div class="flex flex-col text-lg font-semibold ">
              <h3 class="font-bold">Quantity:</h3>
              <div class="text-base m-auto">
                <p class="">2.5: 
                  <span class="font-extrabold text-xl mx-3" @click="decrementSmall()">-</span> 
                  {{ previewProduct.totalSmallInOrder }}x  
                  <span class="font-extrabold text-xl mx-3" @click="incrementSmall()">+</span> 
                </p>
                <p>4.5: 
                  <span class="font-extrabold text-xl mx-3" @click="decrementBig()">-</span> 
                  {{ previewProduct.totalBigInOrder }}x 
                  <span class="font-extrabold text-xl mx-3" @click="incrementBig()">+</span>
                </p>
              </div>
              
            </div>
            <div class="flex flex-col font-semibold ">
              <h3 class="text-lg font-bold">Details:  </h3>
              <p class="text-xs text-center"> {{ previewProduct.details }} </p>
              
            </div>
            <div class="flex flex-row">
              <h3 class="font-bold text-lg">Share:</h3>
              <div class="ml-2 mt-1 flex space-x-3 md:space-x-5 ">
                <a href="#" class=" bg-slate-300 flex w-6 h-6  rounded-full">
                  <font-awesome-icon icon="fa-brands fa-whatsapp"  size="sm" style="color: #333366;" class="m-auto rounded-full" />
                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6  rounded-full">
                  <font-awesome-icon icon="fa-brands fa-facebook"  size="sm" style="color: #333366;" class="m-auto  rounded-full" />
                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6  rounded-full">
                  <font-awesome-icon icon="fa-brands fa-twitter"  size="sm" style="color: #333366;" class="m-auto  rounded-full" />
                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6  rounded-full">
                  <font-awesome-icon icon="fa-brands fa-instagram"  size="sm" style="color: #333366;" class="m-auto rounded-full" />
                </a> 
              </div>
            </div>
            <div class="flex flex-col space-y-3 w-full">
                <Button id="button"  icon="pi pi-cart-plus"  label="ADD TO CART" size="medium"
                :pt="{
                  icon:{class:' ml-5'}
                }" 
                class="w-wd7 text-sm m-auto h-7 md:mt-20 text-slate-100 px-2" @click="addToCart()"/>
                <Button id="button"  icon="pi pi-heart"  label="ADD TO WISH" size="medium" 
                :pt="{
                  icon:{class:' ml-5'}
                }" 
                class="w-wd7 text-sm m-auto h-7 md:mt-20 text-slate-100 px-2" @click="addToFav()"/>
            </div>
        
          </div>

          <!-- Description, specification, review section -->
          <div class=" my-5 flex justice text-xs font-bold bg-white py-5 mx-2 rounded-lg ">
            <div class="w-fit m-auto flex flex-row">
              <h6 class=" px-1 border-r-2 border-black hover:text-blue-500" @click="showDescrip()">Description</h6>
            <h6 class="px-1 border-r-2 border-black hover:text-blue-500" @click="showSpec()">Specification</h6>
            <h6 class="px-1 hover:text-blue-500" @click="showRev()">Reviews{{  }}</h6>
            </div>
            
          </div>

          <!-- Descrip, spec, Rev section content display -->
          <div class=" mx-2 bg-white p-2 rounded-lg shadow-md text-xs text-center ">
            <div v-show="showDescription">
              {{ previewProduct.details}}
            </div>
            <div v-show="showSpecification">
              specification
            </div>
            <div v-show="showReview">
              Review
            </div>
          </div>
          
        </div>
    </div>
  </Transition>
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
      if(this.product.totalSmallInOrder != 0 && this.product.totalBigInOrder !=0){
        if(this.$store.state.cart.includes(this.product)){
          this.$toast.add({ severity: 'error', summary: 'Empty', detail: 'Already In Cart', life: 3000 });
        }
        else{
          this.$store.dispatch('addCart')
          if(this.$store.state.cart.length!=0){
            this.$store.dispatch('addTotalPrice')
          }
            
        }
        

      }
      else{
        this.$toast.add({ severity: 'error', summary: 'Empty', detail: 'Enter the Quantity!', life: 3000 });
      }
    },
    addToFav(){
      if(this.$store.state.fav.includes(this.product)){
        this.$toast.add({ severity: 'warn', summary: 'Error', detail:'Already in wishlist!', life: 3000 });

      }
      else{
        this.$store.dispatch("addFav")
      }
      
    },
    decrementSmall(){
      if (this.product.totalSmallInOrder <= 0) {
        this.product.totalSmallInOrder = 0
      }else{
        this.product.totalSmallInOrder--
      }
      
    },
    incrementSmall(){
      this.product.totalSmallInOrder++
    },
    decrementBig(){
      if (this.product.totalBigInOrder <=0) {
        this.product.totalBigInOrder = 0
      } else {
        this.product.totalBigInOrder--
      }
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

<style scoped>
.slide-fade-enter-active {
  transition: all 200ms ease-out;
}

.slide-fade-leave-active {
  transition: all 200ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
