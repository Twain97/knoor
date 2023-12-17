<template>
  <div class="w-full bg-slate-100 py-4">
    <div class="w-full h-80 md:w-2/4  px-4 md:px-6 bg-white flex flex-col col md:m-auto text-xs md:text-base">
      <div class="m-auto flex flex-col space-y-2 md:space-y-5">
        <div class="md:hidden">
        </div>
      

        <div class="animation-ctn m-auto md:flex">
          <div class="icon icon--order-success svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
            <g fill="none" stroke="#F44812" stroke-width="2"> 
              <circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
              <circle id="colored" fill="#F44812" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
              <polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8  112.2,77.8 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
            </g> 
          </svg>
        </div>
        </div>
        <h2 class="font-bold text-base mx-auto md:text-lg">Payment Error!</h2>

        <div class="mt-10 mx-auto text-blue-500 font-semibold underline">
          <!-- <router-link to="/trackOrder"> Track Order</router-link> -->
        </div>

        <h1 class="font-semibold text-base"> You'll be redirected home in <span class="font-extrabold text-lg">{{ timer }}</span> </h1>

      </div>
    </div>
  </div>
  
</template>

<script>
import router from '../router/index.js'
export default {
 
  mounted () {
    // const date =  new Date()

    // const time = date.toLocaleTimeString()

    setInterval(()=>{
      this.timer = this.timer - 1
    }, 1000)

    setTimeout(()=>{
      // router.push('/Home')
    }, 10000)
  },
  unmounted(){
    window.location.reload()
  },
  data(){
    return{
      timer:10
    }
  }
}
</script>

<style scoped>

/* // Colors
#7ac142: #7ac142;
#fff: #fff;

// Misc
cubic-bezier(0.650, 0.000, 0.450, 1.000): cubic-bezier(0.650, 0.000, 0.450, 1.000); */


.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}




.animation-ctn{
  text-align:center;
  margin-top:5em;
}

	@-webkit-keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 200px
    }
}

@-ms-keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 200px
    }
}

@keyframes checkmark {
    0% {
        stroke-dashoffset: 100px
    }

    100% {
        stroke-dashoffset: 0px
    }
}

@-webkit-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 480px
   
    }

    100% {
        stroke-dashoffset: 960px;
      
    }
}

@-ms-keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 240px
    }

    100% {
        stroke-dashoffset: 480px
    }
}

@keyframes checkmark-circle {
    0% {
        stroke-dashoffset: 480px 
    }

    100% {
        stroke-dashoffset: 960px
    }
}

@keyframes colored-circle { 
    0% {
        opacity:0
    }

    100% {
        opacity:100
    }
}

/* other styles */
/* .svg svg {
    display: none
}
 */
.inlinesvg .svg svg {
    display: inline
}

/* .svg img {
    display: none
} */

.icon--order-success svg polyline {
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards
}

.icon--order-success svg circle {
    -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
    animation: checkmark-circle 0.6s ease-in-out backwards;
}
.icon--order-success svg circle#colored {
    -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
    animation: colored-circle 0.6s ease-in-out 0.7s backwards;
} 
</style>