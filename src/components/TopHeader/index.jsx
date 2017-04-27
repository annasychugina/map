'use strict';

import React from 'react';
import { ToolbarTitle } from 'material-ui/Toolbar';


class Title extends React.PureComponent {
	_getStyle() {

		return {
			root: {
				color: '#EF5350',
				fontSize: '24px',
				paddingRight: '0',

				':hover': {
					color: '#EF5350',
				},


			},
			toolbarTitle: {
				fontSize: '24px',
				paddingRight: '0',
			},
		};
	}

	render() {
		const styles = this._getStyle.call(this);

		return (
			<div style={styles.root}>
				<ToolbarTitle
					style={styles.toolbarTitle}
					text='MapPlace'
				/>
			</div>
		);
	}
}

Title.contextTypes = {
	muiTheme: React.PropTypes.object,
};

Title.propTypes = {
	text: React.PropTypes.string,
};

export default Title;
