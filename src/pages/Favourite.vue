<template>
  <div v-if="this.$store.state.wishList.length !=0" class="w-full text-slate-800 bg-slate-200 pb-5" >
    <div class="pt-2 text-slate-800 lg:w-2/4 m-auto md:py-5" >
      <div class="flex flex-col bg-white text-center py-1 md:py-4 md:mb-2 mx-2 rounded-lg shadow-md">
        <h2 class="text-sm  md:text-lg font-bold">wishList</h2>
      </div>
      <ul class=" bg-slate-200 py-2 px-1">
        <li v-for="(items, index) in wishList" :key="index" 
        class="my-1 px-2 py-1 bg-white rounded-lg shadow-md relative">

         <div class=" flex flex-row  h-fit">
          <div class="absolute right-1 -top-2" @click="remove(items, index)">
            <font-awesome-icon icon="fa-regular fa-trash-can"   style="color: #333366;" class="m-auto rounded-full cursor-pointer" />
          </div>

          <div class=" flex flex-row justify-between w-full h-fit" @click="(toggleShowProductPage(), insertProduct(items))">
            <div class="pl-3 m-auto md:my-auto w-44 h-24 md:w-80 md:h-44">
              <img :src="items.pic" alt="item pic" class=" w-full h-full md:w-full md:h-full rounded-md">
            </div>

            <div class="flex flex-col text-xs p-2 md:justify-center md:space-y-3 md:text-base w-4/5 -ml-1 ">
              <h2 class="font-bold text-sm text-center m-auto">{{ items.title }}</h2>
            </div>
          </div>
          
         </div>

        </li>
      </ul>
      

     
    </div>

    
  </div>
  <div v-else class="w-full h-96 flex text-slate-800">
      <div class="m-auto text-lg font-bold text-center">
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
        }),
        mounted () {
          console.log(this.wishList)
        },
        itemExist(){
          if(this.wishList.length==0){
            return "Oops! wishList is currently empty!"
          }
        }
    },

    methods: {
      toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
      },

      insertProduct(items){
      this.$store.dispatch('addProduct', items)
      },
      remove(items, index){
        this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Item removed!', life: 3000 });
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