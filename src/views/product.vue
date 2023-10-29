<template>
  <div class="">
    <img :src="showProd.pic" alt="">
  </div>
</template>

<script>
import store from '../store/index.js'

export default{
  name:"Product",
  computed: {
    showProd(){
      return this.$store.state.products
    }
  },
  data(){
    return{
     
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
