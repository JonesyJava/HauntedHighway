<template>
  <div id="map">
  </div>
</template>

<script>
import { onMounted, watchEffect } from '@vue/runtime-core'
import { MapService } from '../services/MapService'
export default {
  props: { pins: { type: Array, required: true } },
  setup(props) {
    let map = null
    onMounted(() => {
      map = new MapService()
    })
    watchEffect(() => {
      // fetch('locations.json').then(res => res.json()).then(data => {
      const x = props.pins.map(l => {
        return {
          type: 'Feature',
          properties: {
            ...l,
            'marker-symbol': 'ghostMarker'

          },
          geometry: {
            type: 'Point',
            coordinates: [l.longitude, l.latitude]
          }
        }
      })
      setMapData(x)
      // })
    })

    // NOTE timing issues here, had to set a timeout so that we wouldn't loadMapSource until the map is defined
    function setMapData(data) {
      if (!map) {
        return setTimeout(() => setMapData(data), 100)
      }
      map?.loadMapSource(data)
    }

    return {

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#map { position: absolute; width: 95%; height: 76%; border: 1px solid #8d6398;}

</style>

<style>
.mapboxgl-popup{
  min-width: min(80vw, 400px) !important;
  max-width: 50vw !important;
  filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.493)) !important;
  /* min-width: 50vh; */
}

.mapboxgl-popup-content{
  padding: 4px;
}

.mapboxgl-popup-close-button{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.76);
}

.forest{
text-shadow: 0px 1px 5px black;
color: white;
background-image: url('https://images.unsplash.com/photo-1534193708707-6be94c4f67d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');
padding-top: 5px;
height: 70px;
text-align: center;

}
</style>
