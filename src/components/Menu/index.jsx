import React from 'react';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Title from '../TopHeader';
import TopButton from '../TopButton';



export default class Menu extends React.Component {

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}


	_getStyles() {
		return {
			root: {
				backgroundColor: '#FFEBEE',
			},
			title: {
				position: 'relative',
				top: '0',
				left: '50%',
				transform: 'translate(-50%, 0px)',
				fontSize: '15px',
				lineHeight: '56px',

				'@media (max-width: 1080px)': {
					transform: 'none',
					left: '24px',
				},
			},
			toolbarGroup: {
				root: {
					position: 'absolute',
					right: '0',
					top: '0',
				},
				flatButton: {
					bottom: '1px',
				},

				separator: {
					float: 'none',
					marginLeft: 'auto',
				},
			},
		};
	}

	render() {
		let styles = this._getStyles.call(this);
		return (
			<Toolbar style={styles.root}>
				<Title />
				<ToolbarGroup style={styles.toolbarGroup.root}>
					<TopButton style={styles.toolbarGroup.flatButton} />
					<TopButton label={'Menu'} onTouchTap={this.props.toggleMenu} style={styles.toolbarGroup.flatButton} />
				</ToolbarGroup>
			</Toolbar>
		);
	}
}


Menu.contextTypes = {
	muiTheme: React.PropTypes.object,
};

Menu.propTypes = {
	flow: React.PropTypes.string,
	itemCount: React.PropTypes.number,
	style: React.PropTypes.object,
	toggleMenu: React.PropTypes.func,
	updateFlow: React.PropTypes.func,
};

Menu.defaultProps = {
	style: {},
};

Menu.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

