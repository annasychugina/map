import Map from '../components/Map/index';
// import Review from '../components/Review/index';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import * as Actions from '../actions/baloons';

@autobind()
@connect(store => {
	return {
		baloons: store.baloons.baloons
	}
})
export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		let p = Actions.init();
		this.props.dispatch(p);
	}
	render() {
		return (
			<div>
				<Map baloons={this.props.baloons} />
				{/*<Review />*/}
			</div>
		)
	}


}