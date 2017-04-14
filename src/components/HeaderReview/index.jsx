import React from 'react';

export default class HeaderReview extends React.Component {

	onBtnClose() {
		console.log("hello");
	}

	render() {
		return (
			<div class="review__header">
				<span class="review__icon"/>
				<span class="review__tittle" id="location"/>
				<button class="review__close" onClick={ this.onBtnClose }/>
			</div>
		);
	}
}