<template>
  <div>
    <div class="">
      <Toast class="hidden md:block w-2/4"
        :pt="{
          icon:{class:'mx-5 w-8 mt-3'},
        }"/>
        <Toast class="w-3/4 text-xs font-extralight md:hidden"
        :pt="{
          icon:{class:'mx-2 w-5 '},
        }"
        />
    </div>

    <Header/>
    
      <Product/>
    
    <Transition name="slide-fade">
      <RouterView/>
    </Transition>

    <Footer/>

    <div @click="ShowNav()" v-show="nav" id="navigation" class="fixed opacity-50 top-0 w-full h-full bg-black lg:hidden"></div>
    
    <Transition name="slide-fade" class="lg:hidden z-50 pb-5">
      <div v-show="nav2" class="fixed top-0 pt-2 h-full w-44 bg-white flex flex-col">
        <div class="relative ">
          <div @click="ShowNav()" class="absolute shadow-md -right-4 mt-1 bg-white rounded-full w-7 h-7 flex text-slate-800 hover:bg-slate-800 hover:text-white ">
            <font-awesome-icon icon="fa-solid fa-solid fa-x"  size="sm"  class="m-auto p-1 rounded-full" /> 
          </div>
        </div>  
          <div class="flex flex-row space-x-3 pb-3 pt-1 text-slate-600 border-b-2 border-slate-600">
              <font-awesome-icon icon="fa-solid fa-solid fa-bars"  size="lg" style="color: #333366;" class="my-auto pl-3 rounded-full" /> 
              <p class="mx-auto text-base font-bold">Pages</p>
            </div>
            <div class="text-xs px-2 font-semibold text-slate-600 flex-grow w-full flex flex-col">
              <router-link to="/userProfile" @click="ShowNav()" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">My Profile</p>
              </router-link>
              <!-- <router-link to="#" class=" flex-grow flex flex-row w-full hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Deals</p>
                
              </router-link> -->
              <router-link to="/cart" @click="ShowNav()" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Cart</p>
              </router-link>
              <router-link to="/wishList" @click="ShowNav()" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Wish List</p>
              </router-link>
              <router-link to="#" @click="ShowNav()" class=" flex-grow flex justify-between mpr-4 hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Deals</p>
                <font-awesome-icon icon="fa-solid fa-handshake"  size="lg"  class="my-auto pr-2 rounded-full" />
              </router-link>
              <router-link to="/About" @click="ShowNav()" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">About Us</p>
              </router-link>
              <router-link to="#" @click="ShowNav()" class=" flex-grow flex hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Contact Us</p>
              </router-link>
              
              <router-link to="#" @click="(logout(), ShowNav())" class=" flex-grow flex justify-between flex-row hover:bg-slate-100  border-b-2  border-slate-800">
                <p class="my-auto pl-2">Log out</p>
                <font-awesome-icon icon="fa-solid fa-right-from-bracket"  size="lg"  class="my-auto pr-2 rounded-full" />
              </router-link>
            </div>
            <div class="pt-3 mx-auto pl-4 pr-4 w-11/12 text-center text-xs font-thin space-y-1">
              <h3>All rights reserved by Knoor's Kitchen</h3>
              <h3>Designed and developed by <a href="#" class="text-blue-600"> Akinpelumi Taiwo</a></h3>
            </div>
          
        </div>
      </Transition>

    <nav v-if="this.$store.state.user" id="bottomNav" class="lg:hidden fixed z-50 bottom-0 w-full">
          <div class="flex flex-row mx-auto shadow-md bg-gray-100 h-8 rounded-t-lg w-98">
              <div class="flex flex-row justify-evenly border-brown-500 relative -mt-3 w-full">
                  <router-link to="/Home" @click="toggleShowProductPage()" class="my-auto shadow-md cursor-pointer relative p-1 hover:p-2 hover:-mt-1 transition-all rounded-full flex bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-house"  size="xs" style="color: #333366;" class="p-1 rounded-full" />
                  </router-link>
                 
                  <router-link to='/wishList' @click="toggleShowProductPage()" class=" shadow-md cursor-pointer relative w-8 h-8 hover:w-10 hover:h-10 flex hover:p-1  hover:-mt-2 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-heart"  size="xs" style="color: #333366;" class="m-auto p-1 rounded-full" />
                      <div class="w-4 h-4 -right-1 -top-2  absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">{{ wishListTotal }}</p>
                      </div>
                  </router-link>
                  <router-link @click="(ShowNav(), toggleShowProductPage())" to="#" class=" shadow-md cursor-pointer relative w-10 h-10 hover:w-12 hover:h-12 flex  -mt-2 hover:-mt-4 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-bars"  size="sm" style="color: #333366;" class=" m-auto" />
                  </router-link>
                  <router-link to="/cart" @click="toggleShowProductPage()" class=" shadow-md cursor-pointer relative w-8 h-8 hover:w-10 hover:h-10 flex hover:p-2  hover:-mt-2 transition-all rounded-full bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="xs" style="color: #333366;" class="m-auto p-1 rounded-full" />
                      <div class="w-4 h-4 -right-1 -top-1  absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">{{ cartTotal }}</p>
                      </div>
                  </router-link>
                  
                  <router-link to="#" @click="toggleShowProductPage()" class="my-auto shadow-md cursor-pointer relative p-1 hover:p-2 hover:-mt-1 transition-all rounded-full flex bg-gray-100">
                      <font-awesome-icon icon="fa-solid fa-solid fa-truck-fast"  size="xs" style="color: #333366;" class="p-1 rounded-full" />
                      <div class="w-4 h-4 -right-1 -top-1 absolute rounded-full flex bg-slate-800">
                          <p class="text-stone-200 text-xs m-auto rounded-full">0</p>
                      </div>
                  </router-link>
                  
              </div>
              
          </div>
      </nav>
    </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { onBeforeMount, onMounted } from 'vue'
import { browserSessionPersistence, getAuth, 
onAuthStateChanged, setPersistence } from "firebase/auth"
import router from '@/router/index.js'
import Product from './views/product.vue'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

export default {
  computed: {
    ...mapState({
      cart:"cart",
      wishList:"wishList",
      items:"items"
    }),
    cartTotal(){
      return this.cart.length
    },
    wishListTotal(){
      return this.wishList.length
    }
  },
  components: {
    Header,
    Product,
    Footer,
  },
  mounted(){
    console.log(localStorage)
    this.$store.dispatch("createCart")
    // localStorage.setItem("name", JSON.stringify("Taiwo"))
    // const name = localStorage.getItem("name")
    // if(!name){
    //   alert("Error")
    // }else{
    //   alert(name)
    // }

  },
  methods: {
    toggleShowProductPage(){
      this.$store.state.showProductPage = false
      this.$store.state.product ={}
    },
    ShowNav(){
      this.nav = !this.nav
      this.nav2 = !this.nav2
    },
    logout(){
      this.$store.dispatch('logOut')
    }
  },

  data () {
    return {
      nav:false,
      nav2:false
    }
  },

  // before loading the whole app, check if the user is logged in or not
  

  setup(){
    const store = useStore()
    const auth = getAuth() //handle the getAuth from firebase auth
    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })
    // each time the component is (re)mounted, set the id, handle the token as well as the cookie browserSessionPersistence
    // also set the persistence so when new tab is open, there will be need for another verificationa as well as generate new token
    onMounted(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          // get the user token
          // alert(user.email)
          user.getIdToken().then((token)=>{
            // set the cookie session max time
            document.cookie = `session= ${token}; max-age= ${60*60*24}`
            

          })
          // set the persistent to browser persistence so user has to sign in again when the open another tab
          setPersistence(auth, browserSessionPersistence)
        }else{
          router.push('/')
        }
      })
    })
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all 200ms ease-out;
}

.slide-fade-leave-active {
  transition: all 200ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>