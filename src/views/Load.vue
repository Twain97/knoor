<template>
  <div >
    <looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="150"
  color="#ff1d5e"/>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'
export default {
    components: {
        LoopingRhombusesSpinner
    }

}
</script>

<style>

</style>