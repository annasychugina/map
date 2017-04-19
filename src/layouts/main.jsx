
export default class MainLayout extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class="container">
				{this.props.children}

			</div>
		)

	}


}