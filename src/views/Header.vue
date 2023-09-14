<template>
  <div class="section">
    <nav class="lg:w-full flex">
      <!-- For mobilePhone screen -->
      <div class="lg:hidden  w-full flex flex-col px-6 overflow-hidden align-middle justify-between   ">
          <div class="w-full justify-between flex flex-row">
            <div class="flex flex-row space-x-1 ">
              <font-awesome-icon icon="fa-solid fa-user" size="lg" style="color: #333366;" class="my-auto" />
              <p class="my-auto text-slate-900  text-xs font-bold">User</p>
            </div>
            <img :src="logo" alt="Logo" class="mt-0 w-24 h-14">

            <div @click="searchToggle()" class="my-auto transition-all cursor-pointer rounded-full bg-gray-100 hover:bg-slate-800 hover:text-slate-100 flex">
              <font-awesome-icon icon="fa-solid fa-search" size="sm"  class="rounded-full m-auto p-2 " />
            </div>
          </div>
          <div v-show="showSearch" class=" flex">
            <div class="m-auto w-60 pr-2 rounded-md bg-gray-100 lg::outline-none ">
              <form class="flex flex-row h-8 text-sm font-bold text-slate-800 ">
                <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-3">
                <font-awesome-icon icon="fa-solid fa-search" size="l" style="color: #333366;" class="my-auto cursor-pointer"/>
              </form>
            </div>
          </div>
          </div>
            

      <!-- for medium screen -->
      <div class="hidden lg:flex lg:flex-row lg:w-full  ">
        <div class="w-11/12 border-b-2 border-slate-700 m-auto flex flex-row justify-between space-x-2">
          <div class="lg:flex  lg:-mt-1 lg:space-x-8">
            <img :src="logo" alt="Logo" class=" mt-1 lg:w-48 lg:h-24 ">
            <div class="flex flex-row lg:justify-evenly  ">
              <font-awesome-icon icon="fa-solid fa-user" size="xl" style="color: #333366;" class="my-auto" />
              <p class="my-auto text-slate-900 pl-1 text-md font-bold">User</p>
            </div>
          </div>
          <div class="lg:my-auto w-80 pr-2 rounded-md bg-gray-100 lg:outline-none">
            <form class="flex flex-row h-12 text-sm font-bold text-slate-800 ">
              <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-5">
              <font-awesome-icon icon="fa-solid fa-search" size="lg" style="color: #333366;" class="my-auto cursor-pointer"/>
            </form>
          </div>
          <div class="lg:flex space-x-2 ">
            <div class="my-auto cursor-pointer relative p-2 rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-solid fa-shuffle"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 right-1 -top-3  absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
              </div>
            </div>
            <div class="my-auto cursor-pointer relative p-2 rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-heart"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">0</p>
              </div>
            </div>
            <div class="my-auto cursor-pointer relative p-2 rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">106</p>
              </div>
            </div>
            
          </div>
          <div class="lg:my-auto flex flex-col">
            <p class="lg:text-sm lg:font-semibold mr-2 ">Total price:</p>
            <p class="font-bold text-sm my-auto "> totalPrice</p>
          </div>
        </div>
      </div>
     
    </nav>
  </div>
</template>

<script>
import logo from "../images/knoorLogo2.png"
export default {
  methods: {
    searchToggle(){
      if(this.showSearch == false){
        this.showSearch = true
      }
      else{
        this.showSearch = false
      }
    }
  },
  data () {
    return {
      logo:logo,
      showSearch:false
    }
  }
}
</script>

<style>

</style>