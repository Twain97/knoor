<template>
  <div>
    <carousel class=" rounded-lg mx-auto mt-5 w-full md:h-5/6 overflow-hidden " :items-to-show="2.2" :autoplay="2500" :wrap-around="true" :show-arrows="false">
        <slide class="h-44 " v-for="slide in dishes" :key="slide">
          <img class="w-64 h-32 ml-5 -mt-4 rounded-lg shadow-xl"  
          :src="slide" alt="">
        </slide>
       
      </carousel>
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