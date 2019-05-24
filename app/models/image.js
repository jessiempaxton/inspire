export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.large_url = data.large_url
  }

  get Template() {
    return `
      <input onchange="app.controllers.imageController.getNewImage(event)" type="date" name="date" max="" value="${this.url}" />
    `
  }
}