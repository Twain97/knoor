<template>
  <div class="section">
    <nav class="lg:w-full flex">
      <!-- For mobilePhone screen -->
      <div class="lg:hidden w-11/12 m-auto">
        <div class=" flex flex-col overflow-hidden align-middle justify-between   ">
          <div class="justify-between mx-auto flex flex-row w-full">
            <div class="flex flex-row space-x-1 ">
              <font-awesome-icon icon="fa-solid fa-user" size="lg" style="color: #333366;" class="my-auto" />
              <p class="my-auto text-slate-900  text-sm font-bold">User</p>
            </div>
            <img :src="logo" alt="Logo" class="mt-0 w-24 h-14">

            <div v-if="showSearchToggle" @click="searchToggle()" class="my-auto transition-all cursor-pointer rounded-full bg-gray-100 hover:bg-slate-800 hover:text-slate-100 flex">
              <font-awesome-icon icon="fa-solid fa-search" size="xs"  class="rounded-full m-auto p-2 " />
            </div>
            <div v-else @click="searchToggle()" class="my-auto cursor-pointer w-7 h-7 rounded-full bg-gray-100 hover:bg-slate-800 hover:text-slate-100 flex">
              <font-awesome-icon icon="fa-solid fa-x" size="xs"  class="rounded-full m-auto" />
            </div>
          </div>
          <Transition>
            <div v-show="showSearch" class="mb-2 flex">
              <div id="formBorder" class="m-auto w-full pr-3 rounded-md bg-gray-100 lg::outline-none border-slate-800 ">
                <form class="flex flex-row h-10 text-sm font-bold text-slate-800 justify-between ">
                  <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-3">
                  <font-awesome-icon icon="fa-solid fa-search" size="sm" style="color: #333366;" class="my-auto cursor-pointer"/>
                </form>
              </div>
          </div>
          </Transition>
          
        </div>
      </div>   
            

      <!-- for medium screen -->
      <div class="hidden lg:flex lg:flex-row lg:w-full ">
        <div class="w-11/12  m-auto flex flex-row justify-between space-x-2">
          <div class="lg:flex  lg:-mt-1 lg:space-x-8">
            <img :src="logo" alt="Logo" class=" mt-1 lg:w-48 lg:h-24 ">
            <div class="flex flex-row lg:justify-evenly  ">
              <font-awesome-icon icon="fa-solid fa-user" size="xl" style="color: #333366;" class="my-auto" />
              <p class="my-auto text-slate-900 pl-1 text-md font-bold">User</p>
            </div>
          </div>
          <div class="lg:my-auto w-80 px-2 rounded-md bg-gray-100 lg:outline-none">
            <form class="flex flex-row h-12 text-sm font-bold text-slate-800 ">
              <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-5">
              <font-awesome-icon icon="fa-solid fa-search" size="lg" style="color: #333366;" class="my-auto cursor-pointer p-2"/>
            </form>
          </div>
          <div class="lg:flex space-x-2 ">
            <router-link to="#" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-solid fa-shuffle"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3  absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
              </div>
            </router-link>
            <router-link to="#" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-heart"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">0</p>
              </div>
            </router-link>
            <router-link to="#" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">106</p>
              </div>
            </router-link>
            
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
      if(this.showSearch == false && this.showSearchToggle == true){
        this.showSearch = true
        this.showSearchToggle = false

      }
      else{
        this.showSearch = false
        this.showSearchToggle = true
      }
    }
  },
  data () {
    return {
      logo:logo,
      showSearchToggle:true,
      showSearch:false
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>