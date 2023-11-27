<template>
  <div v-if="this.$store.state.wishList.length !=0" class="w-full text-slate-800 bg-slate-200 pb-5" >
    <div class="pt-2 text-slate-800" >
      <div class="flex flex-col bg-white text-center py-1 mx-2 rounded-lg shadow-md">
        <h2 class="text-sm font-bold">wishList</h2>
      </div>
      <ul class="space-y-2 bg-slate-200 py-2 px-1">
        <li v-for="(items, index) in wishList" :key="index" 
        class="px-2 py-0 bg-white rounded-lg shadow-md relative">

         <div class=" flex flex-row  h-fit">
          <div class="absolute right-1 -top-2" @click="remove(items, index)">
            <font-awesome-icon icon="fa-regular fa-trash-can"   style="color: #333366;" class="m-auto rounded-full cursor-pointer" />
          </div>

          <div class=" flex flex-row  h-fit">
            <div class="h-full m-auto ">
              <img :src="items.pic" alt="item pic" class="w-44 h-22 rounded-md">
            </div>

            <div class="flex flex-col text-xs p-2 w-4/5 space-y-1 -ml-1">
              <h2 class="font-bold text-sm text-center m-auto">{{ items.title }}</h2>

              <div class="flex flex-col">
                <h4 class="font-semibold">Quantity Selected:</h4>
                <div class="flex flex-col text-center ml-2 space-y-1">
                  <p>2.5: {{ items.totalSmallInOrder }} x</p>
                  <p>4.6: {{ items.totalBigInOrder}} x</p>
                </div>
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
            wishList:'wishList',
            smallInCart:"smallInCart",
            bigInCart:"bigInCart",
            totalSmallPrice:"totalSmallPrice",
            totalBigPrice:"totalBigPrice",
            overAllTotal:"overAllTotal"
        }),
        itemExist(){
          if(this.wishList.length==0){
            return "Oops! wishList is currently empty!"
          }
        }
    },

    methods: {
      remove(items, index){

        this.$store.state.wishList = this.$store.state.wishList.filter((items, i) => i != index)
        localStorage.setItem("wishList", JSON.stringify(this.$store.state.wishList)) 
      }
    }
}
</script>

<style >
*{
  /* border-block: 4px solid blue; */
  padding: 0;
  margin:0;
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