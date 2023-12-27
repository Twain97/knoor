<template>
  <div v-if="username != null" class="w-full bg-slate-100 flex flex-col py-5">
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
    
    <div class="flex flex-row ml-4 my-5 space-y-1  ">
      <p v-if="$store.state.user" class="my-auto md:mx-auto text-slate-900  text-xs md:text-sm">
      Hi <span class="font-semibold">{{ username }}</span>, what are we cooking today?</p>              
    </div>
      <!-- Carousel -->
      <CarouselPage/>
        
    <div class="w-full flex flex-row md:pr-2 mt-5">
      <!-- Adverts -->
      <Advert/>


      <!-- main page -->


      <div class=" flex flex-col lg:w-2/3 border-2 rounded-lg shadow-lg">
        <h1 class="text-lg font-bold text-slate-800 mx-auto mt-3">Available</h1>
        <ul class="flex flex-row flex-wrap justify-items-start p-1 ">
          <li v-for="item in paginatedData" :key="item.index" 
          class="m-auto w-wd45  flex flex-col p-2 justify-items-start  rounded-md shadow-md space-y-3 bg-white my-3 
          md:w-44  lg:w-48 xl:w-60">
          <div class="flex flex-col ">
            <div id="prodHead" class="mb-2 flex justify-between px-1">
              <div class="w-fit font-semibold text-xs bg-orange-600 rounded-lg p-1 text-slate-800 md:font-bold">
              <p>-80%</p>
              </div>

              <div class="flex items-center my-auto"  @click="addWishList(item)">
                <font-awesome-icon icon="fa-solid fa-heart" class=" text-slate-700 drop-shadow-sm hover:text-xl transition-all" />
              </div>
            </div>
            <div id="pic" class="h-28 md:h-fit xl:h-fit xl:w-fit " @click="(toggleShowProductPage(), insertProduct(item))">
              <img :src="item.pic" alt="" class="h-full w-full md:h-36 xl:w-80 xl:h-40">
            </div>
          </div>
          <hr class="w-11/12 mx-auto border-2">
          <h1 class="font-semibold text-sm md:font-bold md:text-base m-auto text-center">{{ item.title }}</h1>

          <div id="rating" class="mx-auto flex">
              <Rating v-model="item.rating" :cancel="false" :pt="{
                onIcon: { class: 'h-3 text-orange-600'},
                offIcon: { class: 'h-3 text-orange-600'},
                item: {class:'-ml-3'},
                root:{ class:'ml-4 w-full'}
                }" />
              <p class="m-auto pl-0 text-sm">({{item.rating }})</p>
          </div>
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
        <div class="mx-auto flex flex-row space-x-3 my-4">
          <Button @click="backPage" label="Prev" id="button" class="px-4 text-xs"/>
          <Button v-for="item in Math.ceil(data.length / perPage)" :key="item"
            @click="() => goToPage(item)">
            {{ item }}
          </Button>

          <Button @click="nextPage" label="Next" id="button" class="px-4 text-xs"/>
        </div>
          
      </div>
    </div>
    
  </div>


  
  <LoadVue v-else />
    
</template>

<script>
import LoadVue from "../views/Load.vue"
import showPagination from "../views/showPagination.vue";
import Advert from "../views/Advert.vue"
import { useToast } from "primevue/usetoast";
import { useStore } from "vuex";
import { mapState } from 'vuex';
import Favourite from '../pages/Favourite.vue'
import cart from '../pages/Cart.vue'
import CarouselPage from '../views/Carousel.vue'
import handlePagination from "../paginnation/handlePagination";
import { getAuth} from "firebase/auth";
import {auth} from '../firebase/firebase.js'
import {sendEmailVerification} from "firebase/auth"
import {db} from '@/firebase/firebase.js'
import{ doc, getDoc, setDoc} from 'firebase/firestore'

export default{

  mounted() {
    auth.onAuthStateChanged((user)=>{
      if(user){
        const getUser = user.displayName
        const displayName =  getUser.split(' ').slice(-1)[0]
          this.username = String(displayName)


          // fetch document of the user
          this.fetchDoc()

    }
    })
    setTimeout(()=>{
      if(this.username == null){
        this.$toast.add({ severity: 'warn', summary: 'Error!', detail: 'Network Timeout! please reload ', life: 3000 })
      }
    }, 10000)
    
  },
  components: {
    cart,
    Favourite,
    CarouselPage,
    LoadVue,
    Advert,
    showPagination
  },
  computed: {

    foodItems(){
      return this.$store.state.items
    },
    ...mapState({
      cart:"cart",
      wishList:"wishList",
    }),
    cartItem(){
      return this.cart
    },
    wishListItem(){
      return this.wishList
    },
    
  },

  methods: {
    // fetchUsername(){
    //     const getUser = getAuth().currentUser.displayName
       
    //       const displayName =  getUser.split(' ').slice(-1)[0]
    //       this.username = String(displayName)
    
    //   },
    async fetchDoc(){
      const auth = getAuth()
      const userName = auth.currentUser.displayName 
      const userEmail = auth.currentUser.email

      // get the firestore document
      const docSnap = await getDoc(doc(db, 'users', userName))

      // check if it exists
      if(docSnap.exists()){
        console.log("Document Exists")
      }
      // if it doesnt exist create a new firestore Document
      else{ 
        console.log("No Such document")
        var orderId = []
        await setDoc(doc(db, 'users', userName ), {email : userEmail, Order:orderId}, { merge:true})

      }

      // get user firstName on log in
        


            if(auth.currentUser.emailVerified ==false){
                this.$toast.add({ severity: 'success', summary: 'Verify Email', detail: 'Please check your Email for verification', life: 6000 });

                
                sendEmailVerification(auth.currentUser)
                  .then(() => {
                    // router.push('/Home')
                  });
    
          }

  },
    toggleShowProductPage(){
      this.$store.state.showProductPage = !this.$store.state.showProductPage
    },
    // insert this specific product and display
    insertProduct(item){
      this.$store.dispatch('addProduct', item)
    },
    
    addToCart(){
      this.$store.dispatch('addCart',this.previewProduct)
    }
  },


  setup(){
    const toast = useToast()
    const store = useStore()
    const { data, paginatedData, perPage, currentPage, nextPage, backPage, goToPage } = handlePagination(store);


    

    function addWishList(item){

    if(store.state.wishList.includes(item)){
      toast.add({ severity: 'warn', summary: 'Error!', detail: 'Already added to wishlist', life: 3000 })
    }
    else{
      store.dispatch('addFav', item)
      }
    }

    return{
      addWishList,
      data,
      paginatedData,
      perPage,
      currentPage,
      nextPage,
      backPage,
      goToPage,
    }
  },
  data () {
    return {
      username:null,
      previewProduct:{},
      isAdded : false,
      ShowProd:true,
      sltdItem:'',
      showDescription:true,
      showReview:false,
      showSpecification:false,
    }
  },
}
</script>
<style scoped>

.fa-heart{
    font-size: 20px;
    cursor: pointer;
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

