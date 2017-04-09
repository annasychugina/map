import {autobind} from 'core-decorators';

@autobind()
export default class Map extends React.Component {
	constructor(props) {
		super(props);

		new Promise(resolve => ymaps.ready(resolve))
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
					clusterBalloonItemContentLayout: customItemContentLayout,
					geoObjectHideIconOnBalloonOpen: false,
					clusterBalloonPanelMaxMapArea: 0,
					clusterDisableClickZoom: true,
					clusterBalloonPagerSize: 5,
					clusterOpenBalloonOnClick: true,
					gridSize: 50
				});
			});
	}
	render() {
		return (
				<div class="map" id={this.props.container}></div>
		)
	}
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
	}



}
