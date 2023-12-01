<template>
  <div class="hidden md:flex md:w-1/3 border-2 rounded-lg shadow-lg lg:mr-8 ">
        <div class=" w-full flex flex-col space-y-5 m-auto"> 
          <div class=" bg-white text-center py-4 w-11/12 mx-auto mt-3 rounded-lg shadow-md">
            <h2 class="text-sm font-bold">Special Order</h2>
          </div>         
          <!-- First Adverts Carousel -->
          <div class=" xl:w-72 xl:m-auto lg:w-11/12 lg:m-auto overflow-hidden flex flex-col">
            <carousel class="m-auto rounded-lg  w-11/12 overflow-hidden" :items-to-show="0.8" :autoplay="3000" :wrap-around="true" :show-arrows="false">
              <slide class="w-full flex rounded-lg">
                <div class="w-9/12 flex  mx-auto h-fit rounded-lg">
                  <div class="w-full  mx-auto text-center border-4 shadow-lg rounded-lg">
                    <h2 class="flex flex-col bg-white text-center py-1 rounded-lg shadow-md">Delicacy 1</h2> 
                    <div class=" m-auto w-full h-56">
                      <img :src="lady" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Title</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A odit modi vel id officia quia suscipit ipsum maxime ut magnam dolorem molestias ad enim porro doloremque, consectetur facilis fuga provident!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">View Product</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex rounded-lg">
                <div class="w-9/12 flex  mx-auto h-fit rounded-lg">
                  <div class="w-full  mx-auto text-center border-4 shadow-lg rounded-lg">
                    <h2 class="flex flex-col bg-white text-center py-1 rounded-lg shadow-md">Delicacy 2</h2> 
                    <div class=" m-auto w-full h-56">
                      <img :src="lady" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Title</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A odit modi vel id officia quia suscipit ipsum maxime ut magnam dolorem molestias ad enim porro doloremque, consectetur facilis fuga provident!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">View Product</a>
                    </div>
                  </div>
                </div>
                
              </slide>
              <slide class="w-full flex rounded-lg">
                <div class="w-9/12 flex  mx-auto h-fit rounded-lg">
                  <div class="w-full  mx-auto text-center border-4 shadow-lg rounded-lg">
                    <h2 class="flex flex-col bg-white text-center py-1 rounded-lg shadow-md">Delicacy 3</h2> 
                    <div class=" m-auto w-full h-56">
                      <img :src="lady" alt=""  class="w-full h-full">
                    </div>
                    
                    <div class="bg-white px-2">
                      <h2 class="text-lg font-semibold">Title</h2>
                      <div class="flex flex-col">
                        <h2 class="text-sm font-bold">Description:</h2>
                        <p class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A odit modi vel id officia quia suscipit ipsum maxime ut magnam dolorem molestias ad enim porro doloremque, consectetur facilis fuga provident!</p>
                      </div>
                    </div>
                    <div class="w-full bg-slate-400 py-2">
                      <a href="#" class="text-black">View Product</a>
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
import lady from '../images/lady.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
    },

    data () {
        return {
            lady:lady
        }
    }
}
</script>

<style>

</style>