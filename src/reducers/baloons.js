import * as BaloonsContants from '../constants/baloons';

export function baloonsReducer(state = {baloons: []}, action) {
	switch(action.type) {
		case BaloonsContants.ADD: {
			break;
		}
		case BaloonsContants.INIT: {
			let baloons = init();
			state = {...state, baloons};
			break;
		}
	}

	return state;
}

function init() {
	let baloons = [];
	if (localStorage.length) {
		let keys = Object.getOwnPropertyNames(localStorage);

		for (let key in keys) {

			if ( keys.hasOwnProperty(key) ) {
				let coord = keys[key];
				let baloon = localStorage.getItem(coord);

				if (baloon) {
					try {
						baloon = JSON.parse(baloon);
					} catch (err) {
						continue;
					}

					if (!baloon.title) {
						continue;
					}
					baloons.push(baloon);
				}
			}
		}
	}
	return baloons;
}
