<template>
    <Transition name="slide-fade" >
        <div v-show="showPage" class="fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800">
        
        <div @click="toggleShowProductPage()" class=" z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-x"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
              <font-awesome-icon icon="fa-solid fa-x"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />

        </div>
        
        <div class="flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm">
          
          <div class="mt-3 w-fit ml-2 mb-2 font-bold text-xs md:text-sm bg-orange-600 rounded-lg p-1 text-slate-800">
                -{{previewProduct.discount }}
          </div>
          <!-- image section -->
          <div class="mx-auto px-2 mr-4 h-60 md:h-80 lg:h-ht6 w-full" >
            <img :src="previewProduct.pic" alt="" class="w-full h-full mx-auto">
          </div>

          <!-- Body section -->
          <div class="flex flex-col space-y-2 px-2 bg-white  pb-5 rounded-b-lg mx-2 md:px-4 lg:px-8">
            <h1 class="m-auto font-bold text-lg md:text-xl mt-2  ">{{ previewProduct.title }}</h1>
            <!-- rating  -->
            <div class="flex px-2 ">
              <Rating v-model="previewProduct.rating" :cancel="false" class=""
              :pt="{
              onIcon: { class: ' text-orange-600'},
              offIcon: { class: ' text-orange-600'},
              item:{class:'ml-1 md:ml-3'},
              }" />
              <p class="pt-1 pl-1">({{ previewProduct.rating }})</p>
            </div>
            

            <div class=" flex flex-col text-sm ">
              <h3 class=" font-bold">Available Sizes:</h3>
              <div class="flex flex-row m-auto space-x-5 text-xs md:text-sm">
                <p>2.4 Litres</p>
              <p>4.5 Litres</p>
              </div>
              
            </div>
            <div class="flex flex-col text-sm  font-semibold">
              <h3 class="font-bold">Prices:</h3>
              <div class="text-xs md:text-sm m-auto">
                <p class="">2.4 Litres: 
                <span id="smallOldPrice" class="line-through mx-3 text-red-600 font-bold" >#{{  previewProduct.smallOldPrice}}</span>
                <span id="smallNewPrice" class=" text-green-700 font-bold">#{{previewProduct.smallNewPrice }}</span></p>
              <p class="">4.5 Litres: 
                <span id="bigOldPrice" class="line-through mx-3 text-red-600 font-bold">#{{ previewProduct.bigOldPrice }}</span>  
                <span id="bigNewPrice" class="text-green-700 font-bold ">#{{ previewProduct.bigNewPrice }}</span></p>
              </div>
              
              
            </div>
            <div class="flex flex-col text-sm  font-semibold ">
              <h3 class="font-bold">Quantity:</h3>
              <div class="text-xs md:text-sm m-auto">
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
            <div class="flex flex-col ">
              <h3 class="text-sm font-bold">Details:  </h3>
              <p class="text-xs text-left ml-4"> {{ previewProduct.details }} </p>
              
            </div>
            <div class="flex flex-row">
              <h3 class="font-bold text-sm">Share:</h3>
              <div class="ml-2 mt-1 flex space-x-3 md:space-x-5 ">
                <a href="#" class=" bg-slate-300 flex w-6 h-6 md:w-8 md:h-8 rounded-full">
                  <font-awesome-icon icon="fa-brands fa-whatsapp"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
                  <font-awesome-icon icon="fa-brands fa-whatsapp"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />

                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6 md:w-8 md:h-8 rounded-full">
                  <font-awesome-icon icon="fa-brands fa-facebook"  size="sm" style="color: #333366;" class="md:hidden m-auto  rounded-full" />
                  <font-awesome-icon icon="fa-brands fa-facebook"  size="lg" style="color: #333366;" class="hidden md:block m-auto  rounded-full" />

                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6 md:w-8 md:h-8 rounded-full">
                  <font-awesome-icon icon="fa-brands fa-twitter"  size="sm" style="color: #333366;" class="md:hidden m-auto  rounded-full" />
                  <font-awesome-icon icon="fa-brands fa-twitter"  size="lg" style="color: #333366;" class="hidden md:block m-auto  rounded-full" />
                </a>
                <a href="#" class=" bg-slate-300 flex w-6 h-6 md:w-8 md:h-8 rounded-full">
                  <font-awesome-icon icon="fa-brands fa-instagram"  size="sm" style="color: #333366;" class="md:hidden m-auto rounded-full" />
                  <font-awesome-icon icon="fa-brands fa-instagram"  size="lg" style="color: #333366;" class="hidden md:block m-auto rounded-full" />

                </a> 
              </div>
            </div>
            <div class="flex flex-col space-y-3 pt-2 w-full">
                <Button id="button"  icon="pi pi-cart-plus"  label="ADD TO CART" size="medium"
                :pt="{
                  icon:{class:'w-3 ml-5 -mr-5 md:ml-20 md:-mr-10'},
                
                }" 
                class="w-wd7 text-xs m-auto h-7 md:mt-20 text-slate-100 px-2 shadow-sm shadow-black md:text-sm md:w-4/5" @click="addToCart()"/>
                <Button id="button"  icon="pi pi-heart"  label="ADD TO WISH" size="medium" 
                :pt="{
                  icon:{class:'w-3 ml-5 -mr-5 md:ml-20 md:-mr-10'},
                }" 
                class="w-wd7 text-xs m-auto h-7 md:mt-20 text-slate-100 px-2 shadow-sm shadow-black md:text-sm md:w-4/5" @click="addToFav()"/>
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
          <div class=" mx-2 bg-white p-2 rounded-lg shadow-md text-xs text-center md:px-4 lg:px-8">
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
      if(this.product.totalSmallInOrder >= 0 || this.product.totalBigInOrder >=0){
        if(this.product.totalSmallInOrder != 0 || this.product.totalBigInOrder !=0 && localStorage.getItem("cart")){
          // console.log("localStorage Exist!")
          if(this.$store.state.cart.includes(this.product)){
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Already In Cart', life: 3000 });
            function vib( ){
                navigator.vibrate([100, 50,]);
              };
              vib( )
          }
          else{
            
            if(this.$store.state.cart==[]){
                // add item in the product to cart
                // state.cart.unshift(state.product)

                
                this.$store.dispatch('addCart')
                this.$toast.add({ severity: 'success', summary: 'Done!', detail: 'Item added to Cart', life: 3000 });
                // alert("na this one")
                if(this.$store.state.cart.length!=0){
                  this.$store.dispatch('addTotalPrice')
                }
                localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage

                
                
              }
              else{
                // the following code will add newly added product totalBigPrice to the vuex state totalBigPrice
                // and as well ass the newly added Product totalSmallPrice to the vuex state totalSmallPrice
                // and then update them in the localStorage
                this.$store.dispatch('addCart')
                // alert("its the second one")

                // for the small size
                const productSmall = this.$store.state.product.totalSmallInOrder * this.$store.state.product.smallNewPrice//multiply the Quantity by the price
                this.$store.state.totalSmallPrice = this.$store.state.totalSmallPrice + productSmall  //add the price to the vuex state price
                this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart
                console.log(this.$store.state.totalSmallPrice)
                localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
                localStorage.setItem("cartTotalSmall", JSON.stringify(this.$store.state.totalSmallPrice)) // update cart in localStorage

                 // for the big size
                 const productBig = this.$store.state.product.totalBigInOrder * this.$store.state.product.bigNewPrice//multiply the Quantity by the price
                this.$store.state.totalBigPrice = this.$store.state.totalBigPrice + productBig  //add the price to the vuex state price
                this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart
                console.log(this.$store.state.totalBigPrice)
                localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
                localStorage.setItem("cartTotalBig", JSON.stringify(this.$store.state.totalBigPrice)) // update cart in localStorage


                localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // update the totalBigPrice in localStorage if it doesnt exist

              }
            
          }
        }else{
          this.$toast.add({ severity: 'error', summary: 'Empty', detail: 'Enter the Quantity!', life: 3000 });
          function vib( ){
                navigator.vibrate([100, 50,]);
              };
              vib( )
        }
      }
      else{
        this.$toast.add({ severity: 'error', summary: 'Empty', detail: 'Enter the Quantity!', life: 3000 });
        function vib( ){
                navigator.vibrate([100, 50,]);
              };
              vib( )
      }

      // console.log(this.$store.state.totalSmallPrice)
    },
    addToFav(){
      if(this.$store.state.wishList.includes(this.product)){
        this.$toast.add({ severity: 'warn', summary: 'Error', detail:'Already in wishlist!', life: 3000 });
        function vib( ){
                navigator.vibrate([100, 50,]);
        };
        vib( )
      }
      else{
        var item = this.$store.state.product
        this.$store.dispatch("addFav", item)
      }
      
    },
    decrementSmall(){
      if (this.product.totalSmallInOrder <=0) {
        this.product.totalSmallInOrder = 0
      }else{
        
        if (this.$store.state.cart.includes(this.product)) {
          this.product.totalSmallInOrder--

          // console.log(this.$store.state.smallReductionCounter)
          // create a counter in vuex state to reduce the totalSmallPrice 
          // by 1 multiplied by the price with each click
          const changeInSmallPrice = this.$store.state.smallReductionCounter * this.$store.state.product.smallNewPrice
          // console.log(changeInSmallPrice)
          
          this.$store.state.totalSmallPrice = this.$store.state.totalSmallPrice - changeInSmallPrice
          this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart

          // console.log(this.$store.state.totalSmallPrice) 
          localStorage.setItem("cartTotalSmall", JSON.stringify(this.$store.state.totalSmallPrice)) // update tot
          localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
          localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // update the totalBigPrice in localStorage if it doesnt exist


        }
        else{
          this.product.totalSmallInOrder--
        }
        
      }
      
    },
    incrementSmall(){
      if (this.$store.state.cart.includes(this.product)) {
          this.product.totalSmallInOrder++

          console.log(this.$store.state.smallIncrementCounter)
          // create a counter in vuex state to increase the totalSmallPrice 
          // by 1 multiplied by the price with each click
          const changeInSmallPrice = this.$store.state.smallIncrementCounter * this.$store.state.product.smallNewPrice
          // console.log(changeInSmallPrice)
          
          this.$store.state.totalSmallPrice = this.$store.state.totalSmallPrice + changeInSmallPrice
          this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart

          // console.log(this.$store.state.totalSmallPrice) 
          localStorage.setItem("cartTotalSmall", JSON.stringify(this.$store.state.totalSmallPrice)) // update totalSmallPrice in localStorage
          localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
          localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // update the totalBigPrice in localStorage if it doesnt exist


        }
        else{
          this.product.totalSmallInOrder++
        }
    },
    decrementBig(){
      if (this.product.totalBigInOrder <=0) {
        this.product.totalBigInOrder = 0
      } else {
        if (this.$store.state.cart.includes(this.product)) {
          this.product.totalBigInOrder--

          // console.log(this.$store.state.bigReductionCounter)
          // create a counter in vuex state to reduce the totalBigPrice 
          // by 1 multiplied by the price with each click
          const changeInBigPrice = this.$store.state.bigReductionCounter * this.$store.state.product.bigNewPrice
          // console.log(changeInBigPrice)
          
          this.$store.state.totalBigPrice = this.$store.state.totalBigPrice - changeInBigPrice
          this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart

          // console.log(this.$store.state.totalSmallPrice) 
          localStorage.setItem("cartTotalBig", JSON.stringify(this.$store.state.totalBigPrice)) // update totalBigPrice in localStorage
          localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
          localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // update the totalBigPrice in localStorage if it doesnt exist


        }
        else{
          this.product.totalBigInOrder--
        }
      }
    },
    incrementBig(){
      if (this.$store.state.cart.includes(this.product)) {
          this.product.totalBigInOrder++

          console.log(this.$store.state.bigIncrementCounter)
          // create a counter in vuex state to increase the totalBigPrice 
          // by 1 multiplied by the price with each click
          const changeInBigPrice = this.$store.state.bigIncrementCounter * this.$store.state.product.bigNewPrice
          // console.log(changeInBigPrice)
          
          this.$store.state.totalBigPrice = this.$store.state.totalBigPrice + changeInBigPrice
          this.$store.state.overAllTotal = this.$store.state.totalBigPrice + this.$store.state.totalSmallPrice //calculate overall total of the cart

          // console.log(this.$store.state.totalSmallPrice) 
          localStorage.setItem("cartTotalBig", JSON.stringify(this.$store.state.totalBigPrice)) // update totalBigPrice in localStorage
          localStorage.setItem("cart", JSON.stringify(this.$store.state.cart)) // update cart in localStorage
          localStorage.setItem("cartTotalPrice", JSON.stringify(this.$store.state.overAllTotal)) // update the totalBigPrice in localStorage if it doesnt exist


        }
        else{
          this.product.totalBigInOrder++
        }
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
