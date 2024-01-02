<template>
  <div class="hidden  space-y-14 pt-5 flex-col lg:flex lg:w-1/3 rounded-lg shadow-lg lg:mr-1 ">
        <div class=" w-full flex flex-col space-y-5 mx-auto"> 
          <div class=" bg-white text-center py-1 w-11/12 mx-auto mt-3 rounded-lg shadow-md">
            <h2 class="text-base font-bold">SPECIAL ORDER</h2>
          </div>         
          <!-- First Adverts Carousel -->
          <div class=" xl:w-72 xl:m-auto lg:w-11/12 lg:m-auto overflow-hidden flex flex-col">
            <carousel class="m-auto  w-11/12 overflow-hidden" :items-to-show="0.8" :autoplay="3000" :wrap-around="true" :show-arrows="false">
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <!-- <h2 class="flex flex-col bg-white text-center py-1 shadow-md">YUMMY PLATTER!</h2>  -->
                    <div class=" m-auto w-11/12 h-56">
                      <img :src="platter" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">TURKEY PLATTER</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Platter of freshly roasted Turkey, plantain, diced yam. Yummy!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">show me</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <!-- <h2 class="flex flex-col bg-white text-center py-1 shadow-md">YUMMY PLATTER</h2>  -->
                    <div class=" m-auto w-11/12 h-56">
                      <img :src="platter2" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">CHICKEN PLATTER</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Platter of freshly roasted Chicken  , plantain, diced yam. Yummy!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">show me</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <!-- <h2 class="flex flex-col bg-white text-center py-1 shadow-md">YUMMY PLATTER</h2>  -->
                    <div class=" m-auto w-11/12 h-56">
                      <img :src="platter3" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">TURKEY PLATTER</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Platter of freshly roasted Turkey, plantain, diced yam. Yummy!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">show me</a>
                    </div>
                  </div>
                </div>
                
              </slide>
            </carousel>


          </div>
        </div>

        <div class=" w-full flex flex-col space-y-5 mx-auto"> 
          <div class=" bg-white text-center py-1 w-11/12 mx-auto mt-3 rounded-lg shadow-md">
            <h2 class="text-base font-bold">Check out our deals!</h2>
          </div>         
          <!-- First Adverts Carousel -->
          <div class=" xl:w-72 xl:m-auto lg:w-11/12 lg:m-auto overflow-hidden flex flex-col">
            <carousel class="m-auto  w-11/12 overflow-hidden" :items-to-show="0.8" :autoplay="4000" :wrap-around="true" :show-arrows="false">
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <h2 class="flex flex-col bg-white text-center py-1 shadow-md">Basmattti Rice</h2> 
                    <div class=" m-auto w-11/12 h-56">
                      <img :src="basmatti" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Basmatti Promo</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Buy 3 bowls of big size basmatti and a 1 small size free!.</p>                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">view deal</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <h2 class="flex flex-col bg-white text-center py-1 shadow-md">Fish</h2> 
                    <div class=" m-auto w-11/12 h-56">
                      <img :src="fish" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Fish Discount</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Buy 5 bowls of any size and get <span class="text-green-500 font-semibold">20%</span> free!.</p>                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">view deal</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex ">
                <div class="w-9/12 flex  mx-auto h-fit ">
                  <div class="w-full  mx-auto text-center border-4 ">
                    <h2 class="flex flex-col bg-white text-center py-1 shadow-md">Moinmoin</h2> 
                    <div class=" m-auto w-11/12 h-56  ">
                      <img :src="moinmoin" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Moinmoin Promo!</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Buy up to 20 wraps of Moinmoin and get up to 5 wraps absolutely <span class="text-green-500 font-semibold">Free!</span> </p>                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">view deal</a>
                    </div>
                  </div>
                </div>
                
              </slide>
            </carousel>


          </div>
        </div>
      </div>
</template>

<script>
import platter from '../images/dishes/Platter.jpg'
import platter2 from '../images/dishes/Platter2.jpg'
import platter3 from '../images/dishes/Platter2.jpg'
import basmatti from '../images/dishes/Basmatti jollof.jpg'
import moinmoin from '../images/dishes/Moinmoin.jpg'
import fish from '../images/dishes/Fish.jpg'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
    },

    data () {
        return {
            platter:platter,
            platter2:platter2,
            platter3:platter3,
            basmatti:basmatti,
            fish:fish,
            moinmoin:moinmoin

        }
    }
}
</script>

<style>

</style>