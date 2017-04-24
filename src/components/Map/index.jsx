import Review from '../Review/index';
let mapCarouselTemplate = require('./template.html');
import { autobind } from 'core-decorators';


@autobind
export default class Map extends React.Component {
	constructor(props, context) {
		super(props, context);
		new Promise(resolve => window.ymaps.ready(resolve))
			.then(() => {
				this.map = new ymaps.Map(this.props.container, {
					center: [this.props.centerX, this.props.centerY],
					zoom: [this.props.zoom]
				});

				this.customItemContentLayout = ymaps.templateLayoutFactory.createClass(mapCarouselTemplate);
				this.clusterer = new ymaps.Clusterer({
					preset: 'islands#invertedVioletClusterIcons',
					clusterBalloonContentLayout: 'cluster#balloonCarousel',
					groupByCoordinates: false,
					clusterHideIconOnBalloonOpen: false,
					clusterBalloonItemContentLayout: this.customItemContentLayout,
					geoObjectHideIconOnBalloonOpen: false,
					clusterBalloonPanelMaxMapArea: 0,
					clusterDisableClickZoom: true,
					clusterBalloonPagerSize: 5,
					clusterOpenBalloonOnClick: true,
					gridSize: 50
				});



				this.map.events.add('click', (e) => {
					let coords = e.get('coords');
					this.onMapClick(e, coords);
				});



				// for (let baloon of this.props.baloons) {
				// 	let placemark = this.addPlacemark(baloon);
				// 	this.context.map.geoObjects.add(placemark);
				// 	this.context.clusterer.add(placemark);
				// }

			});

		// this.context.submit = () => {
		//
		// }
	}

	state = {
		e: undefined,
		coords: undefined,
		isShowModal: false,
		comments: [],
	};

	static defaultProps = {
		zoom: 12,
		centerX: 55.751574,
		centerY: 37.573856,
		container: 'map'
	};

	static propTypes = {
		zoom: React.PropTypes.number.isRequired,
		centerX: React.PropTypes.number.isRequired,
		centerY: React.PropTypes.number.isRequired,
		container: React.PropTypes.string.isRequired
	};

	onMapClick = (e, coords) => {
		let baloon = this.props.baloons.find(baloon => {
			return baloon.coords.join(",") === coords.join(",");

		});

		if (!baloon) {
			return;
		}

		this.setState({
			e, coords, comments: baloon.comments,
			isShowModal: !this.state.isShowModal
		})
	};

	addPlacemark(baloon) {
		let place = new ymaps.Placemark(baloon.coords, {
			author: baloon.author,
			coords: baloon.coords,
			place: baloon.place,
			comment: baloon.comment,
			date: baloon.date,
			address: baloon.address
		});

		return place;
	}

	getChildContext() {
		return this.context.comments;
	}

	render() {
		return (
			<div class="container">
				<div class="map" id={this.props.container}></div>
				{ this.state.isShowModal ?  <Review comments={this.state.comments} coords={this.state.coords} e={this.state.e}/> : '' }

			</div>
		)
	}
}