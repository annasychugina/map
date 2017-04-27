import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import SideItem from '../SideItem';



export  default class SideList extends React.PureComponent {
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	_getStyles() {
		return {
			subheaderStyle: {
				color: '#000000',
				backgroundColor: '#efb8a8',
				display: 'block',
				textAlign: 'center',
				lineHeight: '24px',
				paddingLeft: '0',
			},

			listContainer: {
				listStyleType: 'none',
				padding: '0',
				margin: '0',
				overflowX: 'hidden',
				overflowY: 'scroll',
				height: 'calc(100% - 25px)',
			},
		};
	}

	render() {
		const styles = this._getStyles.call(this);

		return (
			<div style={styles.listContainer}>

			<List >
				<Subheader style={styles.subheaderStyle}>All Comments</Subheader>
				<SideItem/>
			</List>

				<List>
					<Subheader style={styles.subheaderStyle}>Liked Comments</Subheader>
					<SideItem/>
					<SideItem/>
					<SideItem/>
				</List>

			</div>

		);
	}
}

SideList.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

SideList.contextTypes = {
	muiTheme: React.PropTypes.object,
};

SideList.propTypes = {
	style: React.PropTypes.object,
};

