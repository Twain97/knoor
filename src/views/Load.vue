<template>
  <div class="border-round border-1 surface-border p-4 surface-card">
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