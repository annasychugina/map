import { Provider } from 'react-redux';
import store  from './stores/store';
import { Router, Route, browserHistory } from 'react-router';
import IndexPage from './pages/index';
import MainLayout from './layouts/main';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={MainLayout}>
				<Route path="/" component={IndexPage} />

			</Route>
		</Router>
	</Provider>,
  document.getElementById('root')
);
