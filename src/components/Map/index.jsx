import Review from '../Review/index';
let mapCarouselTemplate = require('./template.html');
import { autobind } from 'core-decorators';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
//
// const mapState = { center: [55.76, 37.64], zoom: 10 };

@autobind
export default class Map extends React.PureComponent {
	constructor(props) {
		super(props);
		new Promise(resolve => ymaps.ready(resolve))
			.then(() => {
				this.context.map = new ymaps.Map(this.props.container, {
					center: [this.props.centerX, this.props.centerY],
					zoom: [this.props.zoom]
				});

				this.context.customItemContentLayout = ymaps.templateLayoutFactory.createClass(mapCarouselTemplate);
				this.context.clusterer = new ymaps.Clusterer({
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



				this.context.map.events.add('click', (e) => {
					let coords = e.get('coords');
					this.onMapClick(e, coords);
				});



				for (let baloon of this.props.baloons) {
					let placemark = this.addPlacemark(baloon);
					this.context.map.geoObjects.add(placemark);
					this.context.clusterer.add(placemark);
				}

			});

		// this.context.submit = () => {
		//
		// }
	}

	state = {
		e: undefined,
		coords: undefined,
		isShowModal: false
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
		this.setState({
			e, coords,
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

	render() {
		return (
			<div class="container">
				<div class="map" id={this.props.container}></div>
				{ this.state.isShowModal ?  <Review coords={this.state.coords} e={this.state.e}/> : '' }

			</div>
		)
	}
}

