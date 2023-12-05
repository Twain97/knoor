<template>
    <div class="main">
      <div class="absolute w-full h-full bg-slate-800 opacity-40">
        
      </div>
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
      
      <div class="w-full h-full absolute flex">
        <div class="h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5  bg-slate-50 py-3">
         
          <div class=" w-2/4 flex ">
            <carousel class="hidden shadow-lg md:rounded-lg m-auto md:block md:h-2/5 xl:h-2/3 md:overflow-hidden md:w-full" :items-to-show="0.7" :autoplay="2500" :wrap-around="true" :show-arrows="false" >
              <slide class=" w-full h-full " v-for="slide in images" :key="slide">
                <img class="w-full h-full md:ml-15 lg:ml-20 lg:-mt-12 xl:-mt-8"  
                :src="slide" alt="">
              </slide>
          </carousel>
          </div>
          
  
  
          <div class="h-full w-full m-auto md:w-2/4 ">
  
          <!-- Forgot Password -->
          <div  class="flex z-50 md:py-0 md:-mt-1 w-full h-full ">
            <div class="w-full h-full py-2 flex flex-col px-2 md:h-full  m-auto md:m-0 ">
              <img v-if="!this.$store.state.user" :src="logo" alt="logo" class="w-16  -mt-2 md:w-28 md:m-auto  mx-auto">
  
              <carousel v-if="!this.$store.state.user" class="md:hidden h-fit rounded-lg mx-auto  w-full md:h-5/6 overflow-hidden transition-all" :items-to-show="1" :autoplay="3000" :wrap-around="true" :show-arrows="false">
                <slide class="h-20 -mt-10" v-for="slide in images" :key="slide">
                  <img class="w-32 h-16 rounded-lg shadow-md"  
                  :src="slide" alt="">
                </slide>
              </carousel>
              <div class="w-full h-full  space-y-2  flex flex-col  md:space-y-10 ">
                <h2 class="text-slate-800 font-bold mx-auto text-lg lg:ml-12">Reset Password</h2>
                <h4 class="text-slate-800 font-semibold text-xs md:text-base text-center">Enter your email to get Password reset link.</h4>
                
                <form name="emailAndPassword"  @submit.prevent="sendResetLink()"
                class="flex flex-col space-y-3 md:space-y-5 ">
                
                <div class="flex flex-col space-y-3 md:flex-col text-xs md:text-sm" >
                  <input name="Email" type="email" v-model.trim.lazy="email" placeholder="Email"
                  class="bg-inherit py-2 w-11/12 md:w-full lg:w-3/4 outline-black lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"/>
                  
                </div>
  
                  <Button id="Button" type="submit" label="Send Link" icon="pi pi-inbox" :loading="loading"
                  :pt="{
                  icon:{class:' ml-2'},
                  loadingIcon:{class:'ml-2'}
                }" 
                  size="small" class="w-28 text-xs m-auto h-7 text-slate-100 px-2 md:h-10 md:mt-5" />
                  
                  
                </form>
                <div v-if="!this.$store.state.user" class="flex flex-row text-blue-700  font-semibold w-full lg:w-4/5 lg:mx-auto space-x-1 text-xs justify-between ">
                  <router-link to="/" class="cursor-pointer mr-3 outline-none hover:text-blue-400">Sign Up</router-link>                  
                  <router-link to="/" class="cursor-pointer mr-3 outline-none hover:text-blue-400">Log in </router-link>                  
                </div>
               
                
              </div>
            </div>
          </div>
          </div>
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
  import {sendPasswordResetEmail, getAuth} from 'firebase/auth';
  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
   data(){
    return{
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

   },
  
  
   setup(){
    const email = ref('')
    const store = useStore()
    const toast = useToast();
    const auth = getAuth();
    const loading = ref(false);
      const sendResetLink = () => {

        function load(){
          loading.value = true;
          setTimeout(() => {
              loading.value = false;
              if(email.value ==''){
                toast.add({ severity: 'error', summary: 'Error', detail: 'Please enter your Email', life: 3000 });
              }
              else{
                sendPasswordResetEmail(auth, email.value)
            
            toast.add({ severity: 'success', summary: 'Success', detail: 'Password Reset Link Sent!', life: 3000 });
              }
             
          },1200);
        };
        
  
        load()
      }
  

      return{
      email,
      store,
      loading,
      toast,
      sendResetLink
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