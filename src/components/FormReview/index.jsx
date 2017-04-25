import { connect } from 'react-redux';
import * as REVIEW_SAVED  from '../../constants/comments';

class FormReview extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	save = (data) => {

		const options = {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};

		console.log('clFORM',this.props.clusterer);

		const a = new ymaps.Placemark(this.props.coords, {
			author: data.name,
			coords: this.props.coords,
			place: data.place,
			comment: data.review,
			date:  new Date().toLocaleString('ru', options),
			// address: 'asdasdas',
		});
		this.props.map.geoObjects.add(a);
		console.log(a);

		this.props.clusterer.add(a);
		this.props.saveReview({
			...data,
			coords: this.props.coords,
		});
	};

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
			type: REVIEW_SAVED,
			data
		})
	})
)(FormReview)