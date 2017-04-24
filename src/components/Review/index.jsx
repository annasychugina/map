import { autobind } from 'core-decorators';
import React, { Component } from 'react';


@autobind
export default class Review extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			position: [],
			title: '',
		};

		window.ymaps.geocode(this.props.coords, {})
			.then(res => {
				let title = res.geoObjects.get(0).properties.get('text');
				let posY = this.props.e.get('domEvent').get('pageY');
				let posX = this.props.e.get('domEvent').get('pageX');

				this.setState({
					position: [posX, posY],
					title: title
				})
			})


	}

getChildContext() {
		return this.context;
}

	handleSubmit = ev => {
		const message = this.refs.message.value;
		const name = this.refs.name.value;
		const place = this.refs.place.value;
		this.context.add({message, name, place, coords: this.props.coords});

		ev.preventDefault();
		return false;
	}

	render() {
		const comments = this.props.comments.map( (c) => {
			return (
				<li class="review__item">
					<div class="review__author">
						{c.name}
					</div>
					<div class="review__place">
						{c.place}
					</div>
					<div class="review__date">
						{c.date}
					</div>
					<div class="review__text">
						{c.comment}
					</div>
				</li>
			)
		});

		return (
			<div class="review">
				<div class="review__header">
					<span class="review__icon"/>
					<span class="review__tittle">{this.props.title}</span>
					<button class="review__close" />
				</div>
				<ul class="review__list">
					{comments}
				</ul>

				<form onSubmit = {this.handleSubmit} class="form">
					<p class="form__tittle">
						Ваш отзыв
					</p>
					<input class="form__input" type="text" name="name" ref="name" placeholder="Ваше Имя"  />
					<input class="form__input" type="text" name="place" ref="place" placeholder="Укажите место" />
					<textarea class="form__review" name="message" ref="message" placeholder="Поделитесь впечатлениями"/>
					<button class="review__add" type="submit">Добавить</button>
				</form>
			</div>
		)
	}
}