export class Selection {
  constructor(data) {
    this.description = data.description || ''
    this.title = data.title || ''
    this.backgoundImage = data.backgroundImage || ''
    this.id = data.id || data._id || ''
  }
}
