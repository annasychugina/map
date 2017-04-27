import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Comments from '../Comments';
import FormReview from '../FormReview';
import HeaderReview from '../HeaderReview';

class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			position: [],
			title: ''
		};

		window.ymaps.geocode(this.props.coords, {})
			.then(res => {
				let title = res.geoObjects.get(0).properties.get('text');
				let posY = this.props.e.get('domEvent').get('pageY');
				let posX = this.props.e.get('domEvent').get('pageX');
				let baloon = {
					comments: [],
					title: title
				};

				this.setState({
					position: [posX, posY],
					title: title
				})
			})
	}

	render() {
		const { data } = this.props;

		return (
			<div class="review" >
				<HeaderReview title={this.props.title} closeModal={this.props.closeModal}/>
				<Comments comments={this.props.data[this.props.coords.join('')]}/>
				<FormReview coords={this.props.coords} map={this.props.map} clusterer={this.props.clusterer}/>
			</div>
		)
	}
}

export default connect(
	(state) => ({data: state.comments})
)(Review);
