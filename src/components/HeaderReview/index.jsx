export default class HeaderReview extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="review__header">
				<span class="review__icon"/>
				<span class="review__tittle">{this.props.title}</span>
				<button class="review__close" />
			</div>
		);
	}
}