<template>
  <div class="container-fluid fixed">
    <div class="row">
      <SelectionCard v-for="(n, i) in arr" :key="i" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
