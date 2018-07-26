import {combineReducers} from 'redux';

import appReducer from './appReducer';
import { reducer as notificationsReducer } from 'react-notification-system-redux';
import {routerReducer as router} from 'react-router-redux';

import exampleReducer from './exampleReducer';

export default combineReducers({
  router,
  app: appReducer,
  notifications: notificationsReducer,
  example: exampleReducer,
});
