import Comments from '../Comments';
import FormReview from '../FormReview';
import HeaderReview from '../HeaderReview';
import { autobind } from 'core-decorators';
import Map from '../Map/index'

@autobind
export default class Review extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			position: [],
			baloon: undefined
		}

		ymaps.geocode(this.props.coords, {})
			.then(res => {
				let title = res.geoObjects.get(0).properties.get('text');
				let posY = this.props.e.get('domEvent').get('pageY');
				let posX = this.props.e.get('domEvent').get('pageX');
				let baloon = {
					comments: [],
					title: title
				};

				this.setState({
					position: [posX, posY], baloon
				})
			})
	}


	render() {
		return (
			<div class="review">
				<HeaderReview />
				{/*<Comments comments={this.baloon.comments}/>*/}
				<FormReview />
			</div>
		)
	}
}