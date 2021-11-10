import { ALL_LOCATIONS } from '../../.envAdmin'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import locations from '../utils/Locations.json'
class PinsService {
  async getPinBySelectionId(id) {
    if (id === ALL_LOCATIONS) {
      return locations
    } else {
      const pins = await dbContext.Pins.find({ selectionId: id })
      if (!pins) {
        throw new BadRequest('Could not find pins')
      }
      return pins
    }
  }

  async createPin(body) {
    const pin = await dbContext.Pins.create(body)
    if (!pin) {
      throw new BadRequest('Could not create selection')
    }
    return pin
  }
}

export const pinsService = new PinsService()
