<template>
  <div>
    <Header/>

    <RouterView class=""/>

    <Footer/>

    <div @click="ShowNav()" v-show="nav" id="navigation" class="fixed opacity-50 top-0 w-full h-full bg-black lg:hidden"></div>
    
    <Transition name="slide-fade" class="lg:hidden z-50 pb-5">
      <div v-show="nav2" class="fixed top-0 pt-2 h-full w-44 bg-white flex flex-col">
        <div class="relative ">
          <div @click="ShowNav()" class="absolute -right-4 mt-1 bg-white rounded-full w-8 h-8 flex text-slate-800 hover:bg-slate-800 hover:text-white ">
            <font-awesome-icon icon="fa-solid fa-solid fa-x"  size="sm"  class="m-auto p-1 rounded-full" /> 
          </div>
        </div>  
          <div class="flex flex-row space-x-3 pb-3 pt-1 text-slate-600 border-b-2 border-slate-600">
              <font-awesome-icon icon="fa-solid fa-solid fa-bars"  size="lg" style="color: #333366;" class="my-auto pl-3 rounded-full" /> 
              <p class="text-lg font-bold">Pages</p>
            </div>
            <div class="text-sm px-2 font-bold text-slate-600 flex-grow w-full flex flex-col">
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">My Profile</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">My Wallet</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Cart</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Wish List</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">About Us</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Contact Us</p>
              </router-link>
              <router-link to="#" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Offers</p>
              </router-link>
            </div>
            <div class="pt-3 mx-auto pl-4 pr-4 w-11/12 text-center text-xs font-thin space-y-1">
              <h3>All rights reserved by Knoor's Kitchen</h3>
              <h3>Designed and developed by <a href="#" class="text-blue-600"> Akinpelumi Taiwo</a></h3>
            </div>
          
        </div>
      </Transition>

    <nav id="bottomNav" class="lg:hidden fixed bottom-0 w-full">
          <div class="flex flex-row mx-auto shadow-lg  bg-gray-100 h-8 rounded-t-lg w-98">
              <div class="flex flex-row justify-evenly relative -mt-3 w-full">
                  <router-link to="#" class="my-auto shadow-lg cursor-pointer relative p-2 hover:p-3 hover:-mt-1 transition-all rounded-full flex bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-house"  size="sm" style="color: #333366;" class="p-1 rounded-full" />
                  </router-link>
                 
                  <router-link to="#" class=" shadow-lg cursor-pointer relative w-10 h-10 hover:w-12 hover:h-12 flex hover:p-2 -mt-1 hover:-mt-4 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-heart"  size="sm" style="color: #333366;" class="m-auto p-1 rounded-full" />
                      <div class="w-4 h-4 right-1 -top-1  absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
                      </div>
                  </router-link>
                  <router-link @click="ShowNav()" to="#" class=" shadow-lg cursor-pointer relative w-12 h-12 hover:w-14 hover:h-14 flex hover:p-4 -mt-3 hover:-mt-7 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-bars"  size="lg" style="color: #333366;" class=" m-auto p-1 rounded-full" />
                  </router-link>
                  <router-link to="#" class=" shadow-lg cursor-pointer relative w-10 h-10 hover:w-12 hover:h-12 flex hover:p-2 -mt-1 hover:-mt-4 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="sm" style="color: #333366;" class="m-auto p-1 rounded-full" />
                      <div class="w-4 h-4 right-1 -top-1  absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
                      </div>
                  </router-link>
                  
                  <router-link to="#" class="my-auto shadow-lg cursor-pointer relative p-2 hover:p-3 hover:-mt-1 transition-all rounded-full flex bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-shuffle"  size="sm" style="color: #333366;" class="p-1 rounded-full" />
                      <div class="w-4 h-4 right-1 -top-1 absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
                      </div>
                  </router-link>
                  
              </div>
              
          </div>
      </nav>
    </div>
</template>

<script>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    ShowNav(){
      if(this.nav==false && this.nav2==false){
        this.nav=true
        this.nav2=true
      }else{
        this.nav = false
        this.nav2 = false
      }
    }
  },
  data () {
    return {
      nav:true,
      nav2:true
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>