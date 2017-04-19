import {autobind} from 'core-decorators';

@autobind
export default class HeaderReview extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	onBtnClose() {
		console.log("hello");
	}

	render() {
		return (
			<div class="review__header">
				<span class="review__icon"/>
				<span class="review__tittle">{this.props.title}</span>
				<button class="review__close" onClick={ this.onBtnClose }/>
			</div>
		);
	}
}