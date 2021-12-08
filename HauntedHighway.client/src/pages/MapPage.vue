<template>
  <div class="container-fluid mt-3">
    <MapComponent :pins="pins" />
    <!-- hi from the pin details -->
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'AboutPage',
  setup() {
    return {
      pins: computed(() => AppState.pins)
    }
  }
}
</script>

<style lang="scss" scoped>
// .height{
//   height: 20vh;
// }

</style>
