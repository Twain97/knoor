<template>
  <div>
    <ul>
        <li v-for="(items, index) in cart" :key="index">
        {{ items }}
        </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState({
            cart:'Cart'
        })
    }
}
</script>

<style>

</style>