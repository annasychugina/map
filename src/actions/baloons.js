import * as BaloonsContants from '../constants/baloons';

export function add(coords, comments, title) {
	let baloon = {
		coords, comments, title
	}

	return {
		type: BaloonsContants.ADD,
		payload: baloon
	}
}

export function init() {
	return {
		type: BaloonsContants.INIT
	}

}
