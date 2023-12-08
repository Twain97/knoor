<template>
  <div class="w-full bg-slate-100 py-4">
    <div class="w-full h-80 md:w-2/4 py-4 px-4 md:px-6 bg-white flex flex-col col md:m-auto text-xs md:text-base">
      <div class="m-auto flex flex-col space-y-5">
        <h2 class="font-bold text-base mx-auto md:text-lg">Payment Sent!</h2>

        <div class="mt-10 mx-auto text-blue-500 font-semibold underline">
          <router-link to="/trackOrder"> Track Order</router-link>
        </div>

        <h1 class="font-semibold text-base"> You'll be redirected home in <span class="font-extrabold text-lg">{{ timer }}</span> </h1>

      </div>
    </div>
  </div>
  
</template>

<script>
import router from '../router/index.js'
export default {
  created () {
    console.log("Cart in localStorage storage and state cleaned")

    localStorage.removeItem("cart")
    localStorage.removeItem("cartTotalSmall")
    localStorage.removeItem("cartTotalBig")
    localStorage.removeItem("cartTotalPrice")
  },
  mounted () {
    // const date =  new Date()

    // const time = date.toLocaleTimeString()

    setInterval(()=>{
      this.timer = this.timer - 1
    }, 1000)

    setTimeout(()=>{
      router.push('/Home')
    }, 10500)
  },
  unmounted(){
    // reload the whole website 
    location.reload()
  },
  data(){
    return{
      timer:10
    }
  }
}
</script>

<style>

</style>