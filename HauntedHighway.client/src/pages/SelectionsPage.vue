<template>
  <div class="container-fluid fixed">
    <div class="row">
      <SelectionCard v-for="s in selections" :key="s.id" :selection-prop="s" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { selectionsService } from '../services/SelectionsService'
import { AppState } from '../AppState'

export default {
  setup() {
    onMounted(async() => {
      await selectionsService.getAllSelections()
    })
    return {
      selections: computed(() => AppState.Selections)
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed{
  height: 80vh;
  overflow-y: auto ;
}
</style>
