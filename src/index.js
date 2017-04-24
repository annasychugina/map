import { Provider } from 'react-redux';
import store  from './stores/store';
import { Router, Route, browserHistory } from 'react-router';
import IndexPage from './pages/main';
import MainLayout from './layouts/main';
import '../styles/main.scss';

// store.dispatch(initMap)

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
