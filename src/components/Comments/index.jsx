import React from 'react';
import Comment from '../Comment';

export default class Comments extends React.Component {
	render() {
		const {
			comments
		} = this.props;

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