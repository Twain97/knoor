<template>
  <div v-if="this.$store.state.fav.length !=0" class="w-full text-slate-800 bg-slate-200 pb-5" >
    <div  class="pt-2 text-slate-800" >
      <div class="flex flex-col bg-white text-center py-1 mx-2 rounded-lg shadow-md">
        <h2 class="text-sm font-bold">WishList</h2>
      </div>
      <ul class="space-y-2 bg-slate-200 py-2 px-1">
        <li v-for="(items, index) in fav" :key="index" 
        class="px-2 py-0 bg-white rounded-lg shadow-md relative">

         <div class=" flex flex-row  h-fit">
          <div class="absolute right-1 -top-2" @click="remove(items, index)">
            <font-awesome-icon icon="fa-regular fa-trash-can"   style="color: #333366;" class="m-auto rounded-full cursor-pointer" />
          </div>

          <div class=" flex flex-row  h-fit">
            <div class="h-full m-auto ">
              <img :src="items.pic" alt="item pic" class="w-44 h-22 rounded-md">
            </div>

            <div class="flex flex-col text-xs p-2 w-wd8 space-y-1 -ml-1">
              <h2 class="font-bold text-sm text-center m-auto">{{ items.title }}</h2>

              <div class="flex flex-col">
                <h4 class="font-semibold">Quantity Selected:</h4>
                <div class="flex flex-col text-center ml-2 space-y-1">
                  <p>2.5: {{ items.totalSmallInOrder }} x</p>
                  <p>4.6: {{ items.totalBigInOrder}} x</p>
                </div>
              </div>
              
              <div class="space-y-1">
                <p class="text-center">2.5: 
                  <span id="smallNewPrice" class=" text-green-700 text-sm font-semibold">{{items.smallNewPrice }}</span> X {{ items.totalSmallInOrder }} 
                  = #{{ items.totalSmallInOrder * items.smallNewPrice}} 
                </p>
                <p class="text-center">4.6: 
                  <span id="bigNewPrice" class="text-green-700 font-semibold text-sm">{{ items.bigNewPrice }}</span> X {{ items.totalBigInOrder }} 
                  = #{{ items.totalBigInOrder *  items.bigNewPrice }}</p>
              </div>
            </div>
          </div>
          
         </div>

        </li>
      </ul>

    </div>

    
  </div>
  <div v-else class="w-full h-96 flex text-slate-800">
      <div class="m-auto text-lg font-bold">
        <h2>{{ itemExist }}</h2>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState({
            fav:'fav',
            smallInCart:"smallInCart",
            bigInCart:"bigInCart",
            totalSmallPrice:"totalSmallPrice",
            totalBigPrice:"totalBigPrice",
            overAllTotal:"overAllTotal"
        }),
        itemExist(){
          if(this.fav.length==0){
            return "Oops! fav is currently empty!"
          }
        }
    },

    methods: {
      remove(items, index){
        // this code removes the item from the fav array
        this.$store.state.fav = this.$store.state.fav.filter((items, i) => i != index)
        
        // this removes the price from the over all total price of the item in the array
        this.$store.state.overAllTotal = this.$store.state.overAllTotal - (items.bigNewPrice * items.totalBigInOrder)
        this.$store.state.overAllTotal = this.$store.state.overAllTotal - (items.smallNewPrice * items.totalSmallInOrder) 
        
        // remove the item price from their respective size/*style*/`
          this.$store.state.totalSmallPrice = this.$store.state.totalSmallPrice - (items.smallNewPrice * items.totalSmallInOrder)
          this.$store.state.totalBigPrice = this.$store.state.totalBigPrice - (items.bigNewPrice * items.totalBigInOrder)
        
      
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
</style>