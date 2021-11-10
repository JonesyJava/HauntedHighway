import { ADMIN_ID } from '../../.envAdmin'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class SelectionsService {
  async getAllSelections(query = {}) {
    const selections = await dbContext.Selections.find(query)
    if (!selections) {
      throw new BadRequest('No Selections Available')
    }
    return selections
  }

  async getOneSelection(id) {
    const found = await dbContext.Selections.findOne({ _id: id })
    if (!found) {
      throw new BadRequest('Invalid Id')
    }
    return found
  }

  async create(body) {
    if (body.creatorId === ADMIN_ID) {
      const created = await dbContext.Selections.create(body)
      if (!created) {
        throw new BadRequest('You do not have the ability to post a selection')
      }
      return created
    }
  }
}

export const selectionsService = new SelectionsService()
