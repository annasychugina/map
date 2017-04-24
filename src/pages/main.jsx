import React from 'react';
import Map from '../components/Map/index';
import Menu from '../components/Menu';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import * as  baloonActions from '../actions/baloons';
import * as  commentsActions from '../actions/comments';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const mql = window.matchMedia(`(min-width: 800px)`);

@autobind()
@connect(store => {
	return {
		baloons: store.baloons.baloons
	}
})
export default class IndexPage extends React.PureComponent {
	constructor(props) {
		super(props);

		let p = baloonActions.init();
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

	addComment(comment) {
		commentsActions.add(comment)
	}


	addBaloon(baloon) {
		baloonActions.add(baloon)
	}

	getChildContext() {
		return {
			baloons: {
				add: this.addBaloon,
			},
			comments: {
				add: this.addComment,
			}
		}
	}


	render() {
		const styles = this._getStyles();

		return (
			<div id='app-container' style={styles.root} >
				<Menu
					toggleMenu={this.toggleMenu}
				/>
				<div style={styles.sidebarContainer}>

				<Sidebar
				         open={this.state.sidebarOpen}
				         docked={this.state.sidebarDocked}
				         onSetOpen={this.onSetSidebarOpen}
				         pullRight={true}
				         sidebar={
					         <div style={styles.sidebar}>
						         <p>
							         sideBarContent
						         </p>
					         </div>
				         }
				>
				</Sidebar>

					<Map baloons = {this.props.baloons}  />
				</div>
			</div>
		)
	}

}

IndexPage.propTypes = {
	sidebarOpen: React.PropTypes.bool,
	toggleMenu: React.PropTypes.func
};