import { pinsService } from '../services/PinsService'
import BaseController from '../utils/BaseController'

export class PinsController extends BaseController {
  constructor() {
    super('api/pins')
    this.router
      .post('', this.createPin)
  }

  async createPin(req, res, next) {
    try {
      res.send(await pinsService.createPin(req.body))
    } catch (error) {
      next(error)
    }
  }
}
