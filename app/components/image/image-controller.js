import ImageService from "./image-service.js";

const _is = new ImageService()

function _drawImage() {
  let image = _is.Image
  document.querySelector('#bg-image').style.backgroundImage = `url('${image.url}')`
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getImage()
  }

  getNewImage(e) {
    let date = e.target.value
    _is.getImage()
  }

}

