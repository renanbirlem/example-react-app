import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    Route,
} from 'react-router-dom';

import { ConnectedRouter as Router } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.css';
import 'assets/css/criative-tim.css';
import 'assets/css/custom.css';

import configureStore from './config/store';
import registerServiceWorker from './registerServiceWorker';
import { registerAxiosInterceptors } from './common/http/axios';
import { CookiesProvider } from 'react-cookie';

import Dashboard from 'common/layouts/dashboard';

const { store, persistor } = configureStore();
const history = store.getHistory();

registerAxiosInterceptors();

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router history={history}>
                    <Route path="/" component={Dashboard} />
                </Router>
            </PersistGate>
        </Provider>
    </CookiesProvider>
    , document.getElementById('root'));

registerServiceWorker();