<template>
  <div class="col-12">
    <div class="card mt-3 backgroundImage">
      <div class="card-body text-light">
        <h5 class="card-title">
          {{ selectionProp.title }}
        </h5>
        <p class="card-text">
          {{ selectionProp.description }}
        </p>
        <router-link :to="{name: 'MapPage'}">
          <button class="btn btn-primary w-100" @click="getPins">
            Select
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Selection } from '../models/Selection'
import { logger } from '../utils/Logger'
import { selectionsService } from '../services/SelectionsService'
export default {
  props: { selectionProp: { type: Selection, default: new Selection({}) } },
  setup(props) {
    return {
      image: computed(() => `url('${props.selectionProp.backgoundImage}')`),
      getPins() {
        try {
          selectionsService.getPins(props.selectionProp.id)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.backgroundImage{
  background-image: v-bind(image);
  background-size: cover;
  background-position: center;
}
</style>
