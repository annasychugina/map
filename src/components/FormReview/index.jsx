import { connect } from 'react-redux';
import { REVIEW_SAVED }  from '../../constants/comments';
import { saveReview } from '../../actions/baloons';

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
		}, {
			preset: 'islands#redIcon'
		});
		this.props.map.geoObjects.add(a);
		console.log(a);

		this.props.clusterer.add(a);
		this.props.saveReview({
			...data,
			coords: this.props.coords,
		}, this.props.comments);
	};

	render() {
		return (
			<div class="form">
				<p class="form__tittle">
					Ваш отзыв
				</p>
				<input class="form__input" placeholder="Your name" onChange={(evt) => this.setState({name: evt.target.value})} />
				<input class="form__input" placeholder="Place" onChange={(evt) => this.setState({place: evt.target.value})} />
				<textarea class="form__review" placeholder="Feedback" onChange={(evt) => this.setState({review: evt.target.value})} />
				<button class="review__add" type="submit" onClick={() => this.save(this.state)}>Добавить</button>
			</div>
		);
	}
}

export default connect(
	(state) => ({comments: state.comments}),
	(dispatch) => ({
		saveReview: (data, comments) => dispatch(saveReview(data, comments))
	})
)(FormReview)