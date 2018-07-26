import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from 'common/reducers';
import rootSaga from 'common/middlewares';

import history from './history';

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const windowExtensionCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = windowExtensionCompose || compose;

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app']
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  let persistor = persistStore(store);

  (module.hot) && module.hot.accept(
    '../common/reducers',
    () => store.replaceReducer(rootReducer)
  );

  sagaMiddleware.run(rootSaga);
  store.getHistory = () => history;

  return { store, persistor };
};

export default configureStore;