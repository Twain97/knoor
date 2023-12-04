<template>
  <div>
    <section id="discount" class="flex w-full space-y-2 py-5 text-slate-800" >
        <div class="w-11/12 m-auto space-y-4 flex flex-col lg:flex-row">
            <div>
                <h2 class="w-11/12 m-auto font-extrabold text-lg md:text-xl">Get 20% Discount For Subscriber!</h2>
                <h5 class="w-11/12 m-auto font-bold text-xs md:text-base">By subscribing you get a discount of 20% on all your purchase</h5>
            </div>
            <div class="m-auto w-full lg:w-1/2 cursor-pointer focus:outline-none pr-2 md:pr-4 rounded-lg bg-gray-100 outline-none flex">
                <form class="w-full flex flex-row h-14 text-xs md:text-sm font-bold text-slate-800 m-auto ">
                    <input type="text" placeholder="Enter Email... " class=" w-11/12 focus:outline-none bg-inherit indent-3 lg:indent-10">
                    <div class="w-32 md:w-40 bg-orange-600 hover:bg-orange-400 my-2 flex  rounded-lg">
                        <h2 class="m-auto text-xs font-bold md:text-base">Subscribe</h2>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section id="logistic" class="w-full flex bg-slate-50">
        <div class="w-11/12 space-y-3 m-auto flex flex-wrap justify-evenly md:space-y-5">
            <div class="w-60 flex space-x-2 mt-5">
                <div class="flex flex-row shadow-2xl border-2 border-slate-600 p-1 w-fit h-fit md:w-fit md:h-fit rounded-full">
                    <div class="border-2 border-slate-600 w-6 h-6 md:w-9 md:h-9 rounded-full m-auto flex">
                        <font-awesome-icon icon="fa-solid fa-truck-fast" size="sm" style="color: #333366;" class="m-auto md:hidden "/>
                        <font-awesome-icon icon="fa-solid fa-truck-fast" size="lg" style="color: #333366;" class="m-auto hidden md:block" />
                    </div>
                </div>
                <div>
                    <h1 class="font-bold text-xs md:text-base text-slate-800">Free Home Delivery</h1>
                     <p class="text-xs md:text-base">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
            </div>
            <div class=" w-60 flex space-x-2">
                <div class="flex flex-row shadow-2xl border-2 border-slate-600 p-1 w-fit h-fit md:w-fit md:h-fit rounded-full">
                    <div class="border-2 border-slate-600 w-6 h-6 md:w-9 md:h-9 rounded-full m-auto flex">
                        <font-awesome-icon icon="fa-solid fa-rotate" size="sm" style="color: #333366;" class="m-auto md:hidden"/>
                        <font-awesome-icon icon="fa-solid fa-rotate" size="lg" style="color: #333366;" class="m-auto hidden md:block"/>
                    </div>
                </div>
                <div>
                    <h1 class="font-bold text-xs md:text-base text-slate-800">Instant Return Policy</h1>
                     <p class="text-xs md:text-base">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
            </div>
            <div class=" w-60 flex space-x-2">
                <div class="flex flex-row shadow-2xl border-2 border-slate-600 p-1 w-fit h-fit md:w-fit md:h-fit rounded-full">
                    <div class="border-2 border-slate-600 w-6 h-6 md:w-9 md:h-9 rounded-full m-auto flex">
                         <font-awesome-icon icon="fa-solid fa-headset" size="sm" style="color: #333366;" class="m-auto rounded-full md:hidden "/>
                        <font-awesome-icon icon="fa-solid fa-headset" size="lg" style="color: #333366;" class="m-auto rounded-full hidden md:block"/>

                    </div>
                </div>
                <div >
                    <h1 class="font-bold text-xs md:text-base text-slate-800">Quick Support System</h1>
                    <p class="text-xs md:text-base">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
            </div>
            <div class=" w-60 flex space-x-2">
                <div class="flex flex-row shadow-2xl border-2 border-slate-600 p-1 w-fit h-fit md:w-fit md:h-fit rounded-full">
                    <div class="border-2 border-slate-600 w-6 h-6 md:w-9 md:h-9 rounded-full m-auto flex">
                        <font-awesome-icon icon="fa-solid fa-lock" size="sm" style="color: #333366;" class="m-auto md:hidden"/>
                        <font-awesome-icon icon="fa-solid fa-lock" size="lg" style="color: #333366;" class="m-auto hidden md:block"/>
                    </div>
                </div>
                <div>
                    <h1 class="font-bold text-xs md:text-base text-slate-800">Secure Payment Way</h1>
                     <p class="text-xs md:text-base">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                </div>
            </div>
        </div>

    </section>
    <section id="contact" class="w-full flex pb-5 bg-slate-50 text-slate-800">
        <div class="w-11/12 m-auto flex flex-wrap justify-around py-4 ">
            <div class=" md:w-1/2 my-2 flex flex-col relative">
                <div class="flex m-auto ">
                    <img :src="logo" alt="Logo" class=" -mt-6 w-40 md:w-60 md:h-44 drop-shadow-xl shadow-black">
                </div>
                <div class="mt-4">
                    <p class="-mt-8 text-xs md:text-sm text-center ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, quo dolorem! Deleniti culpa modi itaque earum perspiciatis, quas, suscipit atque facilis distinctio sequi pariatur facere aliquid aperiam impedit unde tenetur.</p>
                    
                </div>
            </div>
            <div class="sm:w-1/2 md:w-1/2 my-2 flex flex-col">
                <div class="m-auto flex flex-col w-full h-11/12 space-y-2 md:space-y-5">
                    <h1 class="font-bold text-base md:text-lg text-slate-800 mx-auto">Contact Us</h1>
                    <div class="space-y-2 md:space-y-4 m-auto">
                        <div class="flex flex-row space-x-1">
                            <div class="flex  w-10 h-10 rounded-full">
                                <div class="m-auto flex">
                                    <i class="pi pi-at p-2  rounded-full drop-shadow-2xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
                                </div>
                            </div>
                            <div class=" break-all flex flex-col text-xs md:text-sm font-bold w-fit space-y-1">
                                <p>knoorKitchen@gmail.com</p>
                                <p>knoorKitchen@yahoomail.com</p>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-1">
                            <div class="flex  w-10 h-10 rounded-full">
                                <div class="m-auto flex">
                                    <i class="pi pi-mobile p-2  rounded-full drop-shadow-2xl -ml-1" style="font-weight: 200; font-size: 40px; color: #333366;"></i>
                                </div>
                            </div>
                            <div class="flex flex-col text-xs md:text-sm font-bold w-fit">
                                <p>08064432454</p>
                                <p>09045432454</p>
                            </div>
                        </div>
                        <div class="flex flex-row space-x-1">
                            <div class="flex  w-10 h-10 rounded-full">
                                <div class=" w-9 h-9 rounded-full m-auto flex">
                                    <i class="pi pi-map-marker p-2  rounded-full drop-shadow-2xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
                                </div>
                            </div>
                            <div class=" text-xs md:text-sm font-bold" >
                                <p>Number 4, Alapere Estate, Ketu. Lagos State</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="pb-5 space-x-5 m-auto">
                <i class="pi pi-instagram p-2 hover:p-3 transition-all bg-white rounded-full shadow-xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
                <i class="pi pi-facebook p-2 hover:p-3 transition-all bg-white rounded-full shadow-xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
                <i class="pi pi-whatsapp p-2 hover:p-3 transition-all bg-white rounded-full shadow-xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
                <i class="pi pi-envelope p-2 hover:p-3 transition-all bg-white rounded-full shadow-xl" style="font-weight: 800; font-size: 30px; color: #333366;"></i>
            </div>
        </div>
    </section>
    
  </div>
</template>

<script>
import logo from "../images/knoorLogo2.png"
export default {
    data () {
        return {
            logo:logo
        }
    }

}
</script>

<style>

</style>