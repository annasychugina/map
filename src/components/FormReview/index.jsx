import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

class FormReview extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	save = (data) => {
		const a = new ymaps.Placemark(this.props.coords, {
			author: 'test',
			coords: this.props.coords,
			place: 'asdasd',
			comment: 'dasdasdas',
			date: 'asdasdasd',
			address: 'asdasdas',
		});
		this.props.map.geoObjects.add(a);
		this.props.saveReview({
			...data,
			coords: this.props.coords,
		});
	}

	render() {
		const { saveReview } = this.props;

		return (
			<div class="form">
				<p class="form__tittle">
					Ваш отзыв
				</p>
				<input class="form__input" placeholder="Ваше Имя" onChange={(evt) => this.setState({name: evt.target.value})} />
				<input class="form__input" placeholder="Укажите место" onChange={(evt) => this.setState({place: evt.target.value})} />
				<textarea class="form__review" placeholder="Поделитесь впечатлениями" onChange={(evt) => this.setState({review: evt.target.value})} />
				<button class="review__add" type="submit" onClick={() => this.save(this.state)}>Добавить</button>
			</div>
		);
	}
}

export default connect(
	null,
	(dispatch) => ({
		saveReview: (data) => dispatch({
			type: 'REVIEW_SAVED',
			data
		})
	})
)(FormReview)