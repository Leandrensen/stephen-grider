import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './history';
import Routes from './routes';

// App Component
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Routes />
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
