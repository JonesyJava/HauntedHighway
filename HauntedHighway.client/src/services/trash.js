import { map } from 'leaflet'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { AppState } from '../AppState'
import { mapboxToken } from '../env'
import { logger } from '../utils/Logger'
const DrawPlugin = null
export class MapService {
  constructor(container, config = { style: 'mapbox://styles/mapbox/outdoors-v11' }) {
    mapboxgl.accessToken = mapboxToken
    const map = new mapboxgl.Map({
      container: 'map',
      center: [-96, 37.8],
      zoom: 1,
      ...config
    })
    window.mapboxgl = mapboxgl
    window.map = map
    // after map is "mounted" load the plugins
    map.on('load', () => {
      // setup layers
      try {
        map.loadImage(
          'imgurl',
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

        }
        )
      } catch (error) {
        logger.error('[Layers Error]', error)
      }
    })
    this.map = map
    this.source = map.getSource('my-data')
  }

  addPin(pinData) {
    // TODO
  }

  saveMap() {
    const data = this.map.getSource('my-data').serialize()
    logger.log('saving', data)
  }

  loadMapSource(dataSource) {
    const source = this.map.getSource('my-data')
    source.data = dataSource.data
    this.map.getSource('my-data').setData(source.data)
  }
}
// function loadPlugins(map) {
//   const s = document.createElement('script')
//   s.src = 'https://bl.ocks.org/danswick/raw/36796153bd86ce982a59043cbe0ac8f7/mapbox-gl-draw.js'
//   document.body.appendChild(s)
//   s.onload = () => {
//     try {
//       tryLoadDraw(map)
//     } catch (error) {
//       logger.error('unable to add control draw', error)
//     }
//   }
// }
// function tryLoadDraw(map) {
//   setTimeout(() => {
//     if (!mapboxgl.Draw) {
//       return tryLoadDraw(map)
//     }
//     logger.log('there must be abetter way for plugins', 'draw loaded')
//     map.addControl(mapboxgl.Draw())
//   }, 1000)
// }
