import mapboxgl from 'mapbox-gl'
import { mapKey } from '../env'
import { logger } from '../utils/Logger'

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
      } catch (error) {
        logger.error('[Layers Error]', error)
      }
    })

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
