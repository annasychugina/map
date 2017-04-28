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
	let total = localStorage.getItem('total');
	if (total) {
		total = JSON.parse(total);
	} else {
		total = []
	}
	return total;
}
