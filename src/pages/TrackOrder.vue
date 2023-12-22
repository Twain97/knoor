<template>
  <div class="w-full bg-slate-100 py-4">
     <Suspense>
         <template #default>
             
        <TrackId/>
         </template>
         <template #fallback>
             <div class="w-full md:w-2/4 bg-white flex flex-col col md:m-auto">
                 <LoadVue/>
             </div>  
         </template>
     </Suspense>
  </div>
 </template>
 
 <script>
 import TrackId from '../pages/TrackId.vue'
 import LoadVue from '../views/Load.vue'
 export default {
     components: {
         TrackId,
         LoadVue
     }
 }
 </script>
 <style>
 </style>