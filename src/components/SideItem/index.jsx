import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';


class SideItem extends React.PureComponent {

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	_getStyle() {

		return {

				primaryText: {
					fontSize: '15px',
					lineHeight: '15px',
				},
				secondaryText: {
					fontSize: '10px',
					lineHeight: '15px',
					marginTop: 0,
				},
				overflow: {
					textOverflow: 'ellipsis',
					overflow: 'hidden',
					width: '190px',
					display: 'inline-block',
					whiteSpace: 'nowrap',
				},
				innerDiv: {
					paddingLeft: '72px',
					paddingRight: '16px',
					paddingBottom: '6px',
					paddingTop: '8px',
				},
			}
	}

	render() {
		const styles = this._getStyle.call(this);


		return (
			<div>
				<ListItem
					primaryText={
						<div  style={styles.primaryText}>
							<div class="review__author">


							</div>

						</div>
					}

					secondaryText={
						<div style={styles.secondaryText}>

						</div>
					}
				/>
			</div>
		);
	}
}

SideItem.contextTypes = {
	muiTheme: React.PropTypes.object,
};

SideItem.propTypes = {
	text: React.PropTypes.string,
};


SideItem.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};


SideItem.propTypes = {
	style: React.PropTypes.object,
};
export default SideItem;