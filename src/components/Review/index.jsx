import Comments from '../Comments';
import data from '../data';
import FormReview from '../FormReview';
import HeaderReview from '../HeaderReview';

export default class Review extends React.Component {


	render() {
		return (
			<div class="review">
				<HeaderReview />
				<Comments comments={data}/>
				<FormReview />
			</div>
		)
	}
}