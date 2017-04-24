/**
 * Created by anna on 21.04.17.
 */

export default {
	getInitialState() {
		//this.props
		return {
			isOpen: false
		}
	},
	toggleOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
