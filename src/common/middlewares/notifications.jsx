import i18next from 'i18next';
import { put } from 'redux-saga/effects';
import { error, success } from 'react-notification-system-redux';
import {ERROR, SUCCESS} from '../constants/types';

export const create = ({
  title=i18next.t('label:ATTENTION'),
  position='tr',
  autoDismiss=5,
  dismissible=true,
  ...props
}) => ({
  title,
  position,
  autoDismiss,
  dismissible,
  ...props
});

function* messageHandler(message, type) {
  const notificationFn = type === 'ERROR' ? error : success;
  yield put(notificationFn(create({message})));
}

function* errorHandler(msg, err) {
  yield messageHandler(i18next.t(`messages:${msg}`), ERROR);
}

function* successHandler(msg) {
  yield messageHandler(i18next.t(`messages:${msg}`), SUCCESS);
}
export default {
  errorHandler,
  successHandler
};
