import * as BaloonsContants from '../constants/baloons';
import { REVIEW_SAVED }  from '../constants/comments';

export const saveReview = (data, comments) => {
	debugger;

	let c = data.coords.join(',');

	let total = localStorage.getItem('total');
	if (total) {
		total = JSON.parse(total);
	} else {
		total = [];
	}
	let baloon = total.find(b => b.id === c);

	if (!baloon) {
		baloon = {
			id: c,
			comments: [{
				...data
			}]
		};

		total.push(baloon);
	} else {
		baloon.comments.push({
			...data
		})
	}

	localStorage.setItem('total', JSON.stringify(total));




	return {
		type: REVIEW_SAVED,
		baloon,
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


	return {
		type: BaloonsContants.INIT
	};
}
