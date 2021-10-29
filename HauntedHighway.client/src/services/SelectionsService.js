import { AppState } from '../AppState'
import { api } from './AxiosService'
import { Selection } from '../models/Selection'

class SelectionsService {
  async getAllSelections() {
    const res = await api.get('api/selections')
    AppState.Selections = res.data.map(s => new Selection(s))
    // console.log(res.data)
  }
}

export const selectionsService = new SelectionsService()
