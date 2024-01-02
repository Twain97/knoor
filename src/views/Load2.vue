<template>
  <div class="">

    <div id="skeletonCarol" class="flex flex-row space-x-32 mt-5 mb-10 overflow-hidden">
            
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>
            <Skeleton width="135px" height="4rem" class="mx-5 rounded-lg"></Skeleton>

        </div>
    <div class="flex w-full py-4  border-2 rounded-lg shadow-lg">
        <div class="mx-auto w-10/12 flex flex-row justify-between flex-wrap h-screen overflow-hidden ">
            <Skeleton width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
          <Skeleton width="8rem" height="10rem" class="mx-1 rounded-lg" ></Skeleton>
            <Skeleton  width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
          <Skeleton width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
            <Skeleton  width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
          <Skeleton width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
            <Skeleton  width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
          <Skeleton width="8rem" height="10rem" class="mx-1 rounded-lg"></Skeleton>
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
#skeletonCarol{
  width: 200vh;
}
</style>