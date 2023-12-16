<template>
    <div class="flex flex-row w-full bg-slate-50">
        <div class="m-auto flex flex-col lg:w-2/3 border-2 rounded-lg shadow-lg">
        <h1 class="text-base font-bold text-slate-800 mx-auto mt-3">Available <span class="text-lg">"{{ searchWord }}"</span> </h1>
        <ul class="flex flex-row flex-wrap justify-between p-1 ">
          <li v-for="item in searchResult" :key="item.index" 
          class="m-auto w-wd45  flex flex-col p-2 justify-center  rounded-md shadow-md space-y-3 bg-white my-3 
          md:w-44  lg:w-52 xl:w-60">
          <div class="flex flex-col ">
            <div id="prodHead" class="mb-2 flex justify-between px-1">
              <div class="w-fit font-semibold text-xs bg-orange-600 rounded-lg p-1 text-slate-800 md:font-bold">
              <p>-80%</p>
              </div>

              <div class="flex items-center my-auto"  @click="addWishList(item)">
                <font-awesome-icon icon="fa-solid fa-heart" class=" text-slate-700 drop-shadow-sm hover:text-xl transition-all" />
              </div>
            </div>
            <div id="pic" @click="(toggleShowProductPage(), insertProduct(item))">
              <img :src="item.pic" alt="" class="h-full w-full md:h-36 xl:w-80 xl:h-40">
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
          <h1 class="font-bold text-xs md:text-base m-auto">{{ item.title }}</h1>
          <h6 class=" font-bold text-xs md:text-sm text-green-700 m-auto">
            
            <span class="line-through text-red-500">#{{ item.smallOldPrice }}</span> 
            #{{ item.smallNewPrice}}
          </h6>
          <div class=" flex justify-center ">
          <Button id="button" type="submit"  label="Purchase" size="small" 
          class="text-sm w-full" @click="(toggleShowProductPage(), insertProduct(item))"/>
          </div>

          
        </li>
        </ul>
        <!-- <div class="mx-auto flex flex-row space-x-3 my-4">
          <Button @click="backPage" label="Prev" id="button" class="px-4 text-xs"/>
          <Button v-for="item in Math.ceil(data.length / perPage)" :key="item"
            @click="() => goToPage(item)">
            {{ item }}
          </Button>

          <Button @click="nextPage" label="Next" id="button" class="px-4 text-xs"/>
        </div> -->
          
      </div>
    </div>
    
    
  
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            searchResult:'searchResult',
            searchWord:"searchWord"
        })
        
    },
    methods: {
      toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
      },

      insertProduct(items){
      this.$store.dispatch('addProduct', items)
      },
    }
    
}
</script>

<style>

</style>