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

				this.clusterer.events.add('click', (e) => {
					let object = e.get('target');

					if (object.options.getName() === 'geoObject') {
						const coords = object.geometry.getCoordinates();
						const posY = e.get('domEvent').get('pageY');
						const posX = e.get('domEvent').get('pageX');

						ymaps.geocode(coords, {})
							.then(res => {
								let title = res.geoObjects.get(0).properties.get('text');

								this.setState({
									coords,
									isShowModal: true,
									title: title,
								})

							})
					}
				});

				this.map.geoObjects.add(this.clusterer);

				const options = {
					day: 'numeric',
					month: 'numeric',
					year: 'numeric',
					timezone: 'UTC',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				};

				if (this.props.baloons) {

					for (let baloon of this.props.baloons) {
						for (let comment of baloon.comments) {
							const a = new ymaps.Placemark(comment.coords, {
								author: comment.name,
								place: comment.place,
								comment: comment.review,
								date: new Date().toLocaleString('ru', options),
								// address: 'asdasdas',
							}, {
								preset: 'islands#redIcon'
							});

							this.map.geoObjects.add(a);
							this.clusterer.add(a);
						}
					}
				}
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
		ymaps.geocode(coords, {})
			.then(res => {
				let title = res.geoObjects.get(0).properties.get('text');

				this.setState({
					e, coords,
					title: title,
					isShowModal: !this.state.isShowModal
				})
			})
	};


	render() {
		return (
			<div class="container">
				<div class="map" id={this.props.container}></div>
				{ this.state.isShowModal ?
					<Review
						map={this.map}
						clusterer={this.clusterer}
						coords={this.state.coords}
						e={this.state.e}
						title={this.state.title}
						closeModal={() => this.setState({isShowModal: false})}
					/> : '' }
			</div>
		)
	}
}