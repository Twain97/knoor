<template>
  <div class="section">
    <nav class="lg:w-full flex">
      <!-- For mobilePhone screen -->
      <div class="lg:hidden w-11/12 m-auto ">
        <div class=" flex flex-col overflow-hidden align-middle justify-between ">
          <div class="justify-between mx-auto flex flex-row w-full">
          
            <img :src="logo" alt="Logo" class="mt-0 w-24 h-12 md:w-36 md:h-20 drop-shadow-xl">
            <div v-if="this.$store.state.user" class="my-auto">
              <div v-if="showSearchToggle" @click="searchToggle()" class="my-auto transition-all cursor-pointer rounded-full bg-gray-100 hover:bg-slate-800 hover:text-slate-100 flex">
                <font-awesome-icon icon="fa-solid fa-search" size="xs"  class="rounded-full m-auto p-2 " />
              </div>
              <div v-else @click="searchToggle()" class="my-auto cursor-pointer w-7 h-7 rounded-full bg-gray-100 hover:bg-slate-800 hover:text-slate-100 flex">
                <font-awesome-icon icon="fa-solid fa-x" size="xs"  class="rounded-full m-auto" />
              </div>
            </div>
            <div v-else class="my-auto pr-2 flex flex-row">
              <p class="md:hidden text-xs font-semibold">Log In 
                <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right"  size="sm"  class="m-auto pt-1 rounded-full" />
              </p>
              <p class="hidden md:block flex-row">Log In 
                <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right"  size="lg"  class="m-auto pt-1 rounded-full" />
              </p>
            </div>
          </div>
          <Transition>
            <div v-show="showSearch" class="mb-2 flex">
              <div id="formBorder" class="m-auto w-full pr-3 rounded-md bg-gray-100 lg::outline-none border-slate-800 ">
                <form class="flex flex-row h-10 text-sm font-bold text-slate-800 justify-between ">
                  <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-3 text-xs md:text-sm">
                  <font-awesome-icon icon="fa-solid fa-search" size="sm" style="color: #333366;" class="my-auto cursor-pointer"/>
                </form>
              </div>
          </div>
          </Transition>
          
        </div>
      </div>   
            

      <!-- for medium screen -->
      <div class="hidden lg:flex lg:flex-col lg:w-full ">
        <div class="w-11/12  m-auto flex flex-row justify-between space-x-2">
          <div class="lg:flex  lg:-mt-1 lg:space-x-8">
            <img :src="logo" alt="Logo" class=" mt-1 lg:w-48 lg:h-24 ">
            <!-- <div class="flex flex-row lg:justify-evenly  ">
              <font-awesome-icon icon="fa-solid fa-user" size="xl" style="color: #333366;" class="my-auto" />
              <p class="my-auto text-slate-900 pl-1 text-md font-bold">User</p>
            </div> -->
          </div>
          <div v-if="this.$store.state.user" class="lg:my-auto w-80 lg:w-96 px-2 rounded-md bg-gray-100 lg:outline-none hover:border-4 hover:border-slate-800">
            <form class="flex flex-row h-12 text-sm font-bold text-slate-800 ">
              <input type="text" placeholder="Search Anything.. " class=" w-11/12 focus:outline-none bg-inherit indent-5">
              <font-awesome-icon icon="fa-solid fa-search" size="lg" style="color: #333366;" class="my-auto cursor-pointer p-2"/>
            </form>
          </div>
          <div v-if="this.$store.state.user" class="lg:flex space-x-2 ">
            <router-link to="#" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-solid fa-handshake"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3  absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
              </div>
            </router-link>
            <router-link to="/wishList" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-heart"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">{{ wishListTotal }}</p>
              </div>
            </router-link>
            <router-link to="/cart" class="my-auto cursor-pointer relative p-1 hover:p-2 hover:mt-4 transition-all rounded-full flex bg-gray-100">
              <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="lg" style="color: #333366;" class="p-1 rounded-full" />
              <div class="w-5 h-5 -right-1 -top-3 absolute rounded-full flex bg-slate-800">
                <p class="text-stone-200 text-xs font-bold m-auto rounded-full">{{ cartTotal }}</p>
              </div>
            </router-link>
            
          </div>
          <div v-if="this.$store.state.user" class="lg:my-auto flex flex-col">
            <p class="lg:text-sm lg:font-semibold mr-2 ">Total price:</p>
            <p class="font-bold text-sm my-auto text-green-600"> #{{ totalPrice }}</p>
          </div>

          <div v-else class="m-auto pr-5">
            <p>Log In 
              <font-awesome-icon icon="fa-solid fa-person-walking-dashed-line-arrow-right"  size="lg"  class="m-auto p-1 rounded-full" />

            </p>
          </div>
        </div>
        <div v-if="this.$store.state.user" class="flex flex-row mb-2 px-4">
         
          <div class="flex flex-row my-auto mx-auto w-11/12 space-x-7">
            
              <router-link to="/Home" class="flex flex-row my-auto hover:border-r-2 hover:border-l-2 border-slate-800 h-8 w-36 justify-around text-base font-bold cursor-pointer hover:shadow-lg hover:bg-slate-100 transition-all rounded-lg ">
                <p class="my-auto">Home</p>
                <font-awesome-icon icon="fa-solid fa-solid fa-house"  size="lg" style="color: #333366;" class="my-auto" />
              </router-link>
            <div id="pages" class="flex flex-row my-auto relative hover:border-r-2 hover:border-l-2 border-slate-800 h-8 w-36 justify-around text-base pr-3 font-bold cursor-pointer hover:shadow-lg hover:bg-slate-100 transition-all rounded-lg">
              <p class="my-auto">Pages</p>
              <font-awesome-icon id="icon" icon="fa-solid fa-circle-chevron-down" size="lg" style="color: #333366;" class="my-auto -rotate-90"/>
              <div class="bg-slate-100 hidden flex-col w-44 rounded-r-lg rounded-l-lg shadow-2xl z-50
                transition-all absolute mt-9 ml-10 p-2">
                <router-link to="/userProfile" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto">My Profile</p>
                </router-link>
                <router-link to="/cart" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto">Cart</p>
                </router-link>
                <router-link to="/wishList" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto">Wish List</p>
                </router-link>
                <!-- <router-link to="#" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto">My Wallet</p>
                </router-link> -->
                <router-link to="/About" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto">About Us</p>
                </router-link>
                <router-link to="#" class=" flex rounded-md hover:bg-slate-400 hover:text-white">
                  <p class="py-1 mx-auto ">Contact Us</p>
                </router-link>
              </div>
              
            </div>
            <div class="flex flex-row my-auto hover:border-r-2 hover:border-l-2 border-slate-800 h-8 w-36 justify-around text-base pr-3 font-bold cursor-pointer hover:shadow-lg hover:bg-slate-100 transition-all rounded-lg">
              <p class="my-auto">About us</p>
              <router-link to="/About" class="my-auto">
                <font-awesome-icon icon="fa-solid fa-address-card" size="lg" style="color: #333366;" class=""/>
              </router-link>
            </div>
            <div class="flex flex-row my-auto hover:border-r-2 hover:border-l-2 border-slate-800 h-8 w-36 justify-around text-base pr-3 font-bold cursor-pointer hover:shadow-lg hover:bg-slate-100 transition-all rounded-lg">
              <p class="my-auto">Contact us</p>
              <font-awesome-icon icon="fa-solid fa-headset" size="lg" style="color: #333366;" class="my-auto transition-all"/>
            </div>          
            
           
          </div>
          <div @click="logout()" class=" flex flex-row my-auto hover:border-r-2 hover:border-l-2 border-slate-800 h-8 w-28 justify-around text-base font-bold cursor-pointer hover:shadow-lg hover:bg-slate-100 transition-all rounded-lg">
            <p class="my-auto pl-2">Log out</p>
            <font-awesome-icon icon="fa-solid fa-right-from-bracket"  size="lg"  class="m-auto p-1 rounded-full" />
          </div>
      </div>
      
    </div>
    </nav>
  </div>
</template>

<script>
import logo from "../images/knoorLogo2.png"
import { mapState } from "vuex"
export default {
  // watch:{
  //       $route(){
           
                
           
  //       }
  //   },
  computed: {
    ...mapState({
      cart:"cart",
      overAllTotal:"overAllTotal",
      wishList:"wishList",
    }),
    totalPrice(){
      return this.overAllTotal
    },
    cartTotal(){
      return this.cart.length
    },
    wishListTotal(){
      return this.wishList.length
    }
  },
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
    },
    logout(){
      this.$store.dispatch('logOut')
    }
  },
  data () {
    return {
     name:'',
      logo:logo,
      showSearchToggle:true,
      showSearch:false
    }
  },


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
#line{
  width: 91%;
}

#pages:hover #icon{
  rotate: 90deg;
  transition: all 200ms ease-in-out;
}
#pages:hover div{
  display: flex;
}
</style>