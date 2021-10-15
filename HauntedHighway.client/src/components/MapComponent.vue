<template>
  <div id="map">
    <div class="marker"></div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import mapboxgl from 'mapbox-gl'
export default {
  setup() {
    onMounted(() => {
      // <---------------------------------Establishes Map --------------------------------------->
      mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uZXN5amF2YSIsImEiOiJja3VyNXdiOG0wamtwMm9wandzY2dzN2JqIn0.chUhEV5TGD43wacx_ktejg'
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      })
      // <----------------------------------Establishes geolocations(markerLocations)--------------------->
      // const x = new mapboxgl.Marker().setLngLat([30.5, 50.5])
      // console.log(x)
      window.map = map

      // -----------------------------------GeoJson source ------------------------>
      map.on('load', () => {
        map.addSource('myData', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Point',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [
                  -76.53063297271729,
                  39.18174077994108
                ]
              }
            }]
          }
        })
        const source = map.getSource('myData')
        const data = source.serialize()
        data.data.features.push({ type: 'Point', geometry: { type: 'Point', coordinates: [30.5, 50.5] } })
        source.setData(data.data)
        console.log(map.getSource('myData').serialize())
      })
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#map { position: absolute; width: 95%; height: 80%; }
.marker {
  background-image: url('../assets/img/mapbox-icon.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
