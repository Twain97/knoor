<template>
 <div class="w-full bg-slate-100 py-4">
    <Suspense>
        <template #default>
            
       <user/>
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
import user from '../pages/user.vue'
import LoadVue from '../views/Load.vue'
export default {
    components: {
        user,
        LoadVue
    }
}
</script>
<style>
</style>