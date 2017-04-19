import React from 'react';

export default class Comment extends React.PureComponent {
	render() {
		const {
			data
		} = this.props;

		return (
			<li class="review__item">
				<div class="review__author">
					{data.name}
				</div>
				<div class="review__place">
					{data.place}
				</div>
				<div class="review__date">
					{data.date}
				</div>
				<div class="review__text">
					{data.comment}
				</div>
			</li>
		);
	}
}