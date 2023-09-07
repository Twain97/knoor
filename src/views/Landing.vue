<template>
  <div class="main">
    <div class="w-full h-full bg-slate-800 opacity-40 border-red-600">
      
    </div>
    <Toast/>
    <div class="w-full h-full absolute flex top-0">
      <div class="h-5/6 m-auto flex flex-col-reverse rounded-lg md:flex-row w-4/5  bg-slate-50">
        <!-- <div class="hidden md:block">
          <img :src="platter" alt="platter">
        </div> -->
        <carousel class="hidden md:rounded-lg md:mx-2 md:my-auto md:block md:h-5/6 md:overflow-hidden md:w-3/6" :items-to-show="0.7" :autoplay="2500" :wrap-around="true" :show-arrows="false" >
          <slide class=" w-fit h-full " v-for="slide in images" :key="slide">
            <img class="w-full h-full  md:-mt-0"  
            :src="slide" alt="">
          </slide>
        </carousel>


        <div class="h-full  md:w-2/4 ">
                                <!-- Log in -->

        <div v-if="showLogin" class="flex z-50 md:pt-10 w-full h-full ">
          <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
            <img :src="logo" alt="logo" class="w-16 -mt-2 md:w-28 md:m-auto  mx-auto">
          
            <carousel class="md:hidden shadow-md rounded-lg mx-auto h-5/6 overflow-hidden " :items-to-show="0.7" :autoplay="2500" :wrap-around="true" :show-arrows="false">
              <slide class=" w-fit " v-for="slide in images" :key="slide">
                <img class="w-full h-full ml-5 -mt-16"  
                :src="slide" alt="">
              </slide>
              
            </carousel>

            <div class="w-full h-full flex flex-col space-y-4 md:space-y-8">
              <h2 class="text-slate-800 font-bold text-lg">Login</h2>
              <h4 class="text-slate-800 font-bold text-xs">Enter your email and password to login.</h4>
              
              <form name="emailAndPassword" @submit.prevent="login()"
              class="flex flex-col space-y-3 ">
                <div class="flex flex-col space-y-3 md:flex-row md:space-x-3" >
                  <input name="Email" type="email" v-model.trim.lazy="registerForm.email" placeholder="Email"
                   class="bg-inherit w-11/12 indent-1 font-semibold border-b-2 border-slate-400"/>
                  <div class="bg-inherit w-11/12 border-b-2 flex justify-between  border-slate-400">
                    <input id="password" type="password" v-model.trim.lazy="registerForm.password" placeholder="Enter Password"
                      class="bg-inherit w-11/12 indent-1 font-semibold "/>
                    <font-awesome-icon icon="fa-solid fa-eye" @click="showPassword()" class="p-1 text-gray-600 border-2 rounded-md mr-2 border-slate-400" />
                  </div>
                </div>
                
                
                <Button id="Button" type="submit" label="Login" icon="pi pi-sign-in" :loading="loading" @click="login()" size="small" class="w-fit text-sm m-auto h-7 md:mt-20" />
                
               
              </form>

              <div class="flex flex-row text-blue-700  font-semibold w-full px-4 text-xs justify-between">
                  <p class="cursor-pointer outline-none hover:text-blue-400">Forgot password</p>
                  <p @click="openSignup()" class="cursor-pointer  mr-3  outline-none hover:text-blue-400">Sign up</p>
              </div>

              <Button @click="googleSignIn"  id="gmailButton" class="bg-slate-800 mx-auto flex flex-row justify-between mt-44">
                <img alt="gmail" :src="gmail" class="w-14 -ml-5 -my-4 h-8" />
                <h3 class="text-xs text-slate-800 font-bold">Sign up with Google</h3>
              </Button>
              
            </div>
          </div>
        </div>

                    <!-- End of log in -->

                    <!-- Siging up -->
        <div v-else class="flex z-50 md:pt-10 w-full h-full ">
          <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
            <img :src="logo" alt="logo" class="w-16  -mt-2 md:w-28 md:m-auto  mx-auto">
          
            <carousel class="md:hidden shadow-md rounded-lg mx-auto h-5/6 overflow-hidden " :items-to-show="0.7" :autoplay="2500" :wrap-around="true" :show-arrows="false" >
              <slide class=" w-fit " v-for="slide in images" :key="slide">
                <img class="w-full h-full ml-5 -mt-20"  
                :src="slide" alt="">
              </slide>
            </carousel>
            <div class="w-full h-full space-y-4 flex flex-col  md:space-y-8 ">
              <h2 class="text-slate-800 font-bold text-lg">Sign up</h2>
              <h4 class="text-slate-800 font-bold text-xs">Enter your email and password to signup.</h4>
              
              <form name="emailAndPassword" @submit.prevent="register()"
              class="flex flex-col space-y-3 ">
              
              <div class="flex flex-col space-y-3 md:flex-row md:space-x-3" >
                <input name="Email" type="email" v-model.trim.lazy="registerForm.email" placeholder="Email"
                class="bg-inherit w-11/12 indent-1 font-semibold border-b-2 border-slate-400"/>
                <div class="bg-inherit w-11/12 border-b-2 flex justify-between  border-slate-400">
                  <input id="password" type="password" v-model.trim.lazy="registerForm.password" placeholder="Enter Password"
                  class="bg-inherit w-11/12 indent-1 font-semibold "/>
                  <font-awesome-icon icon="fa-solid fa-eye" @click="showPassword()" class="p-1 text-gray-600 border-2 rounded-md mr-2 border-slate-400" />
                </div>
                
              </div>
              
              <input id="password2" type="password"  placeholder="Confirm password" class="bg-inherit w-11/12 indent-1 font-semibold border-b-2 border-slate-400 md:w-2/4"/>

                <Button id="Button" type="submit" label="Signup" icon="pi pi-user-plus" :loading="loading" @click="register()" size="small" class="w-fit text-sm m-auto h-7" />
                
                
              </form>
              <div class="flex flex-row text-blue-700  font-semibold w-full px-4 text-xs justify-between">
                  <p class="cursor-pointer outline-none hover:text-blue-400">Forgot password</p>
                  <p @click="openSignup()" class="cursor-pointer mr-3 outline-none hover:text-blue-400">Login</p>
              </div>
              <Button @click="googleSignIn"  id="gmailButton" class="bg-slate-800 mx-auto flex flex-row justify-between">
                <img alt="gmail" :src="gmail" class="w-14 -ml-7 -my-4 h-8" />
                <h3 class="text-xs text-slate-800 font-bold">Sign up with Google</h3>
              </Button>
              
            </div>
          </div>
        </div>
        </div>
        
              <!-- End of signup -->
      </div>
    </div>
   
  </div>

</template>

<script>
import dish1 from '../images/dishes/dish1.jpg'
import dish2 from '../images/dishes/dish2.jpg'
import dish3 from '../images/dishes/dish3.jpg'
import dish4 from '../images/dishes/dish4.jpg'
import dish5 from '../images/dishes/dish5.jpg'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import logo from '../images/knoor logo.png'
import gmail from '../images/gmail.svg'
 
import { useToast } from "primevue/usetoast";

import { useStore } from 'vuex';
import { ref } from 'vue';
// import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import router from '../router';
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
 data(){
  return{
    showLogin:true,
    showSignup:false,
    logo:logo,
    gmail:gmail,
    images:{
        dish1:dish1,
        dish2:dish2,
        dish3:dish3,
        dish4:dish4,
        dish5:dish5
      }
  }
 },
 methods: {
  openSignup(){
   if(this.showLogin){
    this.showLogin = false
    
   }
   else if(this.showLogin == false){
    this.showLogin = true
   }
  }
 },


 setup(){

    const registerForm = ref({})
    const store = useStore()
    const toast = useToast();
    const loading = ref(false);
    

    const login = ()=>{
      
      function load(){
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            if(password.value != ""){
            store.dispatch('login', registerForm.value)
            }
            else{
              toast.add({ severity: 'error', summary: 'Error!', detail: 'Please enter password', life: 3000 })
            }
          },1200);
      
      
    }
    
    load()
      
    }

    const register = () => {

      function load(){
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            var password = document.getElementById("password")
            var password2 = document.getElementById("password2")
            
            if(password.value != "" && password2.value != ""){
              if(password.value === password2.value){
              store.dispatch('register', registerForm.value)
              }
              else{
                toast.add({ severity: 'error', summary: 'Error!', detail: 'Passwords not matched', life: 3000 });
              }
            }
            else{
              toast.add({ severity: 'error', summary: 'Error!', detail: 'Please enter password', life: 3000 });
            }
            
        },1200);
      };
      

      load()
    }

    function showPassword(){
      var toggle = document.getElementById("password")
      var toggle2 = document.getElementById("password2")
      if(toggle.type === "password" ){
        toggle.type = "text"
        toggle2.type = "text"
        
      }else{
        toggle.type = "password"
        toggle2.type = "password"
      }
    }
    function googleSignIn() {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
    .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;

    return router.push('/todo')
    }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    })
    }

    return{
      // load,
      loading,
      registerForm,
      register,
      login,
      googleSignIn,
      showPassword,
    }
  }
}
</script>

<style scoped>
.main{
  background: url('../images/delicious-food.jpg');
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    height: 100vh;
}
#gmailButton{
background-color: #e1e1e4;
}
#gmailButton:hover{
  background-color: #a7a7ac;
}
form Button{
  background-color: #333366;
}
#Button:hover{
  background-color: #595980;
}
</style>