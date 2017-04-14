import React from 'react';

export default class FormReview extends React.Component {
	render() {
		return (
			<form class="form">
				<p class="form__tittle">
					Ваш отзыв
				</p>
				<input class="form__input" type="text" name="name" placeholder="Ваше Имя" />
				<input class="form__input" type="text" name="place" placeholder="Укажите место" />
				<textarea class="form__review" name="message" placeholder="Поделитесь впечатлениями"/>
				<button class="review__add" type="submit">Добавить</button>
			</form>
		);
	}
}
