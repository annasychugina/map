import * as REVIEW_SAVED  from '../constants/comments';

export function reviewSaved(data) {
	return {
		type: REVIEW_SAVED,
		payload: data
	}
}