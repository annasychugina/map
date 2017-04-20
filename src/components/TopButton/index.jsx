import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export  default class TopButton extends React.PureComponent {
	_getStyles() {
		return {
			hoverColor: '#efb8a8',
			contentFontFamily: 'Roboto, sans-serif',
			color: '#EF5350',
			fontSize: '12px',
			paddingRight: '0'
		};
	}

	render() {
		const styles = this._getStyles.call(this);

		return (

			<FlatButton
				{...this.props}
				hoverColor={styles.hoverColor}
				color={styles.color}
			/>
		);
	}
}

TopButton.contextTypes = {
	muiTheme: React.PropTypes.object,
};

TopButton.propTypes = {
	label: React.PropTypes.string,
	style: React.PropTypes.object,
};

TopButton.defaultProps = {
	label: 'Exit',
	style: {},
};