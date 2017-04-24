import Comments from '../Comments';
import FormReview from '../FormReview';
import HeaderReview from '../HeaderReview';
import { autobind } from 'core-decorators';
import React, { Component, PropTypes } from 'react';

@autobind
export default class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			position: [],
			title: ''
		}

		window.ymaps.geocode(this.props.coords, {})
			.then(res => {
				let title = res.geoObjects.get(0).properties.get('text');
				let posY = this.props.e.get('domEvent').get('pageY');
				let posX = this.props.e.get('domEvent').get('pageX');
				let baloon = {
					comments: [],
					title: title
				};

				console.log(title);

				this.setState({
					position: [posX, posY],
					title: title
				})
			})
	}

	render() {
		console.log(this.state.position);

		return (
			<div class="review">
				<HeaderReview title={this.state.title}/>
				{/*<Comments comments={data}/>*/}
				<FormReview coords={this.props.coords} map={this.props.map}/>
			</div>
		)
	}
}