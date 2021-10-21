import { Auth0Provider } from '@bcwdev/auth0provider'
import { pinsService } from '../services/PinsService'
import { selectionsService } from '../services/SelectionsService'
import BaseController from '../utils/BaseController'

export class SelectionsController extends BaseController {
  constructor() {
    super('api/selections')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllSelections)
      .get('/:id', this.getOneSelection)
      .post('', this.createSelection)
      .get('/:id/pins', this.getSelectionPins)
  }
  // .delete('/:id', this.retireSelection)

  async getAllSelections(req, res, next) {
    try {
      res.send(await selectionsService.getAllSelections(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOneSelection(req, res, next) {
    try {
      res.send(await selectionsService.getOneSelection(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getSelectionPins(req, res, next) {
    try {
      res.send(await pinsService.getPinBySelectionId(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createSelection(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await selectionsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  // async retireSelection(req, res, next) {
  //   try {

  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
