import { ADD_COMMENT } from '../constants/comments';

export function add(comment, baloonId) {
	return {
		type: ADD_COMMENT,
		payload: {...comment, baloonId}
	}
}
