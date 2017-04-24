
import { ADD_COMMENT } from '../constants/comments';
import { normalizedComments } from '../fixtures';

import { Record } from 'immutable';


const Comment = Record({
	"id": null,
	"author": "",
	"text": ""
});

const defaultComments = recordsFromArray(Comment, normalizedComments);

export default (comments = defaultComments, action) => {
	const { type, payload, response, error, randomId } = action;

	switch (type) {
		case (ADD_COMMENT):
			return comments.set(randomId, new Comment({
				id: randomId,
				...payload
			}))
	}

	return comments
}