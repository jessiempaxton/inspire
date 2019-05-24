import Image from "../../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

const _state = {
	image: {}
}

const _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class ImageService {
	constructor() { }

	get Image() {
		return new Image(_state.image)
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(response => {
				let data = new Image(response.data)
				_setState('image', data)
			})
			.catch(e => console.error(e))
	}
}
