import React from 'react';
import Comment from '../Comment';

export default class Comments extends React.PureComponent {
	render() {
		const {
			comments = []
		} = this.props;

		console.log('comments', comments);

		return (
			<ul class="review__list">
				{
					comments.map(comment => {
						return (
							<Comment
								key={Date.now() + Math.random()}
								data={comment}
							/>
						)
					})
				}
			</ul>
		)
	}
}