import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Selection } from '../models/Selection'
import { logger } from '../utils/Logger'
import { baseURL } from '../env'

class SelectionsService {
  async getAllSelections() {
    const res = await api.get('api/selections')
    AppState.Selections = res.data.map(s => new Selection(s))
    // console.log(res.data)
  }

  async getPins(id) {
    const res = await api.get('api/selections/' + id + '/pins')
    AppState.pins = res.data
    logger.log(AppState.pins)
  }
}

export const selectionsService = new SelectionsService()
