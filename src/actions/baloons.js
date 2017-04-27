import * as BaloonsContants from '../constants/baloons';
import { REVIEW_SAVED }  from '../constants/comments';

export const saveReview = (data, comments) => {
	let c = data.coords.join(',');
	const currentValues = comments[data.coords.join('')] || [];

	localStorage.setItem('total', JSON.stringify({...comments, [data.coords.join('')]: [...currentValues, data]}));

	return {
		type: REVIEW_SAVED,
		data,
	}
}

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
	let c = coords.join(',');
	let data = localStorage.getItem('total');

	if (!data) {

		return {
			type: "EMPTY"
		};
	}

	return {
		type: REVIEW_SAVED,
		data
	};
}
