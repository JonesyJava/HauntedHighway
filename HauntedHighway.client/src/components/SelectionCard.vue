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
        <a href="#" class="btn btn-primary w-100">Select</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Selection } from '../models/Selection'
export default {
  props: { selectionProp: { type: Selection, default: new Selection({}) } },
  setup(props) {
    return {
      image: computed(() => `url('${props.selectionProp.backgoundImage}')`)
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
