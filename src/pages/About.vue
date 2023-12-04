<template>
    <div class="w-full bg-slate-100 flex">
        <div class="w-full mx-1 pb-4 flex flex-col my-4 bg-white f text-xs md:mx-auto md:w-3/5 lg:w-2/4 md:text-base">
            <div id="picBg" class="h-36 mb-10 flex border-2 relative border-blue-500 md:h-44">
                <div id="picHolder" class="rounded-full overflow-hidden h-28 mt-16  w-28 md:mt-20 md:h-32 md:w-32 lg:w-32 lg:h-32 border-8 border-slate-50 shadow-gray-100 shadow-xl mx-auto">
                    <img :src="lady" alt=""  class="w-full h-full mt-1">

                </div>
            </div>
            <div class="flex flex-col m-auto w-5/6 space-y-3 text-left text-sm ">
                <div class="space-y-2">
                    <h2 class="  font-bold">About Knoor's Kitchen</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam tempore reiciendis voluptate quia ipsa pariatur ipsum accusantium consectetur? Dolorum, doloremque hic laudantium excepturi deleniti cumque quaerat aliquam iure eveniet iste.</p>

                </div>
                <div class="space-y-2">
                    <h2 class="  font-bold">Founded:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam tempore reiciendis voluue hic laudantium excepturi deleniti cumque quaerat aliquam iure eveniet iste.</p>
                </div>
                <div class="space-y-2">
                    <h2 class="  font-bold">Contact:</h2>
                    <p>08125212907 / 07068858731</p>  
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import lady from '../images/lady.png'
export default {
    data () {
        return {
            lady:lady
        }
    }
}
</script>

<style>
/* *{
    border: 3px solid red;
} */

#picBg{
    background-image: linear-gradient(150deg,rgba(4,9,30,0.2), black), url('../images/delicious-food.jpg');
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
}
</style>