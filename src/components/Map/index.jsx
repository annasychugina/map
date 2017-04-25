import Review from '../Review/index';
let mapCarouselTemplate = require('./template.html');

export default class Map extends React.PureComponent {
	constructor(props) {
		super(props);
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

				this.map.geoObjects.add(this.clusterer);



				// for (let baloon of this.props.baloons) {
				// 	let placemark = this.addPlacemark(baloon);
				// 	this.context.map.geoObjects.add(placemark);
				// 	this.context.clusterer.add(placemark);
				// }

			});

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


	render() {
		return (
			<div class="container">
				<div class="map" id={this.props.container}></div>
				{ this.state.isShowModal ?  <Review map={this.map} clusterer={this.clusterer} coords={this.state.coords} e={this.state.e}/> : '' }
			</div>
		)
	}
}