import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import SideItem from '../SideItem';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';



export  default class SideList extends React.PureComponent {
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	_getStyles() {
		return {

			root: {
				position: 'absolute',
				top: '0',
				width: '290px',
				overflow: 'hidden',
				height: '50%',
				paddingBottom: 0,
				right: '0',
			},

			listContainer: {
				listStyleType: 'none',
				padding: '0',
				margin: '0',
				overflowX: 'hidden',
				overflowY: 'scroll',
				height: 'calc(100% - 25px)',
			},
			transition: {
				enter: {
					default: {
						opacity: '0.01',
						transition: 'opacity .3s ease-in',
					},
					active: {
						opacity: '1',
					},
				},
				leave: {
					default: {
						opacity: '1',
						transition: 'opacity .3s ease-in',
					},
					active: {
						opacity: '0.01',
					},
				},
			},
		};
	}

	render() {
		const styles = this._getStyles.call(this);

		return (
			<div>

			<List>
				<Subheader>Comments</Subheader>
				<SideItem/>
			</List>

				<List>
					<Subheader>Liked</Subheader>
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

