<template>
  <div class="w-full py-4 px-2 bg-slate-100 flex">
      <div class="border-round border-1 surface-border p-4 surface-card w-full md:w-2/4 py-4 px-2 lg:px-6 bg-white flex flex-col col md:m-auto text-xs md:text-base rounded-lg shadow-md">
        <div class="flex mb-3">
            <Skeleton shape="circle" size="4rem" class="mx-auto"></Skeleton>
            
        </div>
        <div>
                
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="15rem" class="mb-2"></Skeleton>
                <!-- <Skeleton height=".5rem"></Skeleton> -->
            </div>
        <div class="flex justify-content-between space-x-2 mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton height="2rem" class="w-full"></Skeleton>
        </div>
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

</style>