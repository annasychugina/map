import React from 'react';
import Map from '../components/Map/index';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import * as Actions from '../actions/baloons';
import SideList from '../components/SideList';
import Sidebar from 'react-sidebar';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const mql = window.matchMedia(`(min-width: 800px)`);


@connect(store => {
	return {
		baloons: store.baloons.baloons
	}
})
export default class IndexPage extends React.PureComponent {
	constructor(props) {
		super(props);
		let p = Actions.init();
		this.props.dispatch(p);

		this.state = {
			sidebarOpen: false,
			sidebarDocked: false,
		};
	}

	onSetSidebarOpen = (open) => {
		this.setState({sidebarOpen: open});
	}

	componentWillMount = () => {
		mql.addListener(this.mediaQueryChanged);
		this.setState({mql: mql, sidebarDocked: mql.matches});
	}

	componentWillUnmount = () => {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged = () => {
		this.setState({sidebarDocked: this.state.mql.matches});
	}

	_getStyles() {
		return {
			root: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: 'hidden',
			},

			sidebar: {
				width: '400px',
				backgroundColor: 'white',
			},
			content: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflowY: 'scroll',
				WebkitOverflowScrolling: 'touch',
				transition: 'left .3s ease-out, right .3s ease-out',
			},
			sidebarContainer: {
				position: 'absolute',
				top: '56px',
				left: '0',
				right: '0',
				bottom: '0',
			},
		};
	}

	toggleMenu() {
		if (this.state.mql.matches) {
			this.setState({sidebarDocked: !this.state.sidebarDocked, sidebarOpen: false});
		} else {
			this.setState({sidebarOpen: true});
		}
	}


	render() {
		const styles = this._getStyles();

		return (
			<div id='app-container' style={styles.root} >
				<Menu
					toggleMenu={this.toggleMenu.bind(this)}
				/>
				<div style={styles.sidebarContainer}>

				<Sidebar
				         open={this.state.sidebarOpen}
				         docked={this.state.sidebarDocked}
				         onSetOpen={this.onSetSidebarOpen}
				         pullRight={true}
				         sidebar={
					         <div style={styles.sidebar}>
						         <SideList/>

					         </div>
				         }
				>
				</Sidebar>
					<Map />
				</div>
			</div>
		)
	}

}

IndexPage.propTypes = {
	sidebarOpen: React.PropTypes.bool,
	toggleMenu: React.PropTypes.func
};