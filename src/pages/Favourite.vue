<template>
  <div>
    <ul>
        <li v-for="(item, index) in fav" :key="index">
        {{ item }}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            fav:'fav'
        })
    }

}
</script>

<style>

</style>