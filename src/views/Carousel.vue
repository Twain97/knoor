<template>
  <div>
    <!-- large view  -->
    <div class="hidden md:flex ">
      <carousel class=" rounded-lg mx-auto w-full md:h-5/6 overflow-hidden " :items-to-show="2.5" :autoplay="2500" :wrap-around="true" :show-arrows="false">
        <slide class="h-fit" v-for="slide in dishes" :key="slide">
          <img class="w-36 h-16 ml-5 rounded-lg shadow-lg"  
          :src="slide" alt="">
        </slide>
      </carousel>
    </div>
    <!-- small view -->
    <div class="md:hidden">
      <carousel class="h-fit rounded-lg mx-auto  w-full md:h-5/6 overflow-hidden transition-all" :items-to-show="1.8" :autoplay="3000" :wrap-around="true" :show-arrows="false">
        <slide class="h-20 -mt-10" v-for="slide in dishes" :key="slide">
          <img class="w-32 h-16 ml-5 rounded-lg shadow-md"  
          :src="slide" alt="">
        </slide>
      </carousel>
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
export default {
    components: {
        Carousel,
        Pagination,
        Slide,
        Navigation
    
    },
    data(){
        return{
            dishes:{
                dish1:dish1,
                dish2:dish2,
                dish3:dish3,
                dish4:dish4,
                dish5:dish5
            }
        }
    }
}
</script>

<style>

</style>