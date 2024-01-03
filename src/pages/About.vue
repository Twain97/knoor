<template>
    <div class="w-full bg-slate-100 flex">
        <div class="w-full mx-1 pb-4 flex flex-col my-4 bg-white f text-xs md:mx-auto md:w-3/5 lg:w-2/4 md:text-base">
            <div id="picBg" class="h-36 mb-16 flex relative md:h-44">
                <div id="picHolder" class="rounded-full overflow-hidden h-32 mt-16  w-32 md:mt-20 md:h-32 md:w-32 lg:w-32 lg:h-32 border-8 border-slate-50 shadow-gray-100 shadow-xl mx-auto">
                    <img :src="lady" alt=""  class="w-full h-full mt-1">

                </div>
            </div>
            <div class="flex flex-col m-auto w-5/6 space-y-3 text-left text-xs md:text-sm ">
                <div class="space-y-2">
                    <h2 class="  font-bold">About Knoor's Kitchen</h2>
                    <p>
                        
We're passionate about food, and we believe that everyone deserves to have access to delicious, fresh meals, delivered right to their door. 
That's why we created <span class="text-orange-400 text-base font-semibold">K</span>noor <span class="text-orange-400 text-base font-semibold">K</span>itchen  - a food delivery platform that prepares and deliver delicious right to your doorstep in your Lagos.

                    </p>

                </div>
                <div class="space-y-2">
                    <h2 class="  font-bold">Our mission</h2>
                    <p>
                        Our mission is to make it easy for you to find and order the food you love, from your favorite local dishes to trendy new and different platter of delicacy you've been dying to try. 
                        We want to take the hassle out of meal planning and delivery, so you can focus on what really matters - enjoying your food with friends and family. <br>
                        <span class="font-semibold">What we offer:</span><br>
                        <ul>
                            <li>A wide selection of restaurants: We prepare variety of food, from regular dishes to internations cuisines and dishes, so you're sure to find something to satisfy your cravings.</li>
                            <li>Convenient online ordering: Our website and app make it easy to browse menus, place orders, and track your delivery in real time.</li>
                            <li>Fast and reliable delivery: We're committed to getting your food to you quickly and fresh, so you can enjoy it at its best.</li>
                            <li>Great value: We offer competitive prices and a variety of deals and promotions to help you save money.</li>
                        </ul>
                    </p>
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
import lady from '../images/knoorOwner.jpg'
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