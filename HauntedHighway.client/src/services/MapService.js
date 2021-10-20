import mapboxgl from 'mapbox-gl'
import { mapKey } from '../env'
import { logger } from '../utils/Logger'
// const MapboxDirections = require('@mapbox/mapbox-gl-directions')s
// import '@mapbox/mapbox-gl-directions/src/directions'

export class MapService {
  constructor() {
    // <---------------------------------Establishes Map --------------------------------------->
    mapboxgl.accessToken = mapKey
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    })
    window.mapboxgl = mapboxgl
    window.map = map

    // <-----------------------------Configure map onload ------------------------->
    map.on('load', () => {
      // setup layers
      try {
        map.loadImage(
          'ghost-sm.png',
          (error, image) => {
            if (error) throw error
            map.addImage('ghostMarker', image)
          })
        map.addSource('my-data', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: []
          }
        })
        map.addLayer({
          id: 'point',
          type: 'symbol',
          source: 'my-data',
          layout: {
            'icon-image': 'ghostMarker',
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': [
              'Open Sans Semibold',
              'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
          }
        })

        // <-----------------------------------------Add a line to our map ------------------>
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: { },
            geometry: {
              type: 'LineString',
              coordinates: [[-122.483696, 37.833818],
                [-122.483482, 37.833174],
                [-122.483396, 37.8327],
                [-122.483568, 37.832056],
                [-122.48404, 37.831141],
                [-122.48404, 37.830497],
                [-122.483482, 37.82992],
                [-122.483568, 37.829548],
                [-122.48507, 37.829446],
                [-122.4861, 37.828802],
                [-122.486958, 37.82931],
                [-122.487001, 37.830802],
                [-122.487516, 37.831683],
                [-122.488031, 37.832158],
                [-122.488889, 37.832971],
                [-122.489876, 37.832632],
                [-122.490434, 37.832937],
                [-122.49125, 37.832429],
                [-122.491636, 37.832564],
                [-122.492237, 37.833378],
                [-122.493782, 37.833683]]
            }
          }

        })

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#F7455D',
            'line-width': 8
          }
        })
      } catch (error) {
        logger.error('[Layers Error]', error)
      }
    })

    // map.addControl(
    //   new MapboxDirections({
    //     accessToken: mapKey
    //   }),
    //   'top-left'
    // )

    this.map = map

    map.on('click', ({ point }) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(point, {
        layers: ['point'] // replace with your layer name
      })
      if (!features.length) {
        return
      }
      const feature = features[0]
      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
    `<h3 class="forest text-shadow">${feature.properties.location}</h3><p>${feature.properties.description}</p>`
        ).addTo(map)
    })
  }

  saveMap() {
    const data = this.map.getSource('my-data').serialize()
    logger.log('saving', data)
  }

  loadMapSource(dataSource) {
    const source = this.map.getSource('my-data')
    if (!source) {
      return setTimeout(() => this.loadMapSource(dataSource), 100)
    }
    this.map.getSource('my-data').setData({
      type: 'FeatureCollection',
      features: [...dataSource]
    })
  }
}
