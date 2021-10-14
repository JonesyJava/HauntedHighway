<template>
  <div id="map">
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import mapboxgl from 'mapbox-gl'
export default {
  setup() {
    onMounted(() => {
      mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uZXN5amF2YSIsImEiOiJja3VyNXdiOG0wamtwMm9wandzY2dzN2JqIn0.chUhEV5TGD43wacx_ktejg'
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      })
      document.getElementById('map').innerHTML = map
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
