<template>
  <div id="map">
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { MapService } from '../services/MapService'
export default {
  setup() {
    let map = null
    onMounted(() => {
      map = new MapService()

      fetch('Locations.json').then(res => res.json()).then(data => {
        const x = data.map(l => {
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
      })
    })

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
#map { position: absolute; width: 95%; height: 80%; }
</style>
