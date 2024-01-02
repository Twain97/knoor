<template>
  <div class=" flex w-full h-screen overflow-hidden ">
   
    <div class="px-2 w-11/12 m-auto md:w-2/3 lg:w-9/12 xl:w-2/4 flex flex-col ">
            <Skeleton width="90%" height="2rem" class=" mb-3 md:py-4 md:mb-10 mx-4 rounded-lg shadow-md mt-2"></Skeleton>
          <Skeleton width="80%" height="2rem" class="mb-3 mx-auto md:py-4 md:mb-10 rounded-lg shadow-md mt-5" ></Skeleton>
            <Skeleton  width="100%" height="100rem" class="mb-3 mx-auto md:py-4 md:mb-10 rounded-lg shadow-md mt-5"></Skeleton>
         
      </div>
</div>
</template>

<script>
import Skeleton from 'primevue/skeleton';

export default {
  components: {
    Skeleton
  }
}
</script>

<style>
#skeletonCarol{
  width: 200vh;
}
</style>