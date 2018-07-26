import { takeEvery, put } from 'redux-saga/effects';
import apiSaga from './apiSaga';
import exampleServices from '../services/exampleServices';
import notifications from './notifications';
import { types, actions } from '../reducers/exampleReducer';

function* oneAction({payload}) {
  yield* apiSaga(
    exampleServices.oneAction,
    payload,
    actions.oneActionSuccess,
    function* (err) {
      yield notifications.errorHandler(
        'Erro ao carregar lista de configurações.', 
        err
      );
    },
    {multipleSuccessActions: false, loading: true}
  );
}

function* multipleActions(action) {
  yield* apiSaga(
    exampleServices.multipleActions,
    action.payload,
    function* (data) {
        yield put(actions.multipleActionsSuccess(data));
        yield notifications.successHandler('example.SUCCESSFUL_SAVED');  
    },
    function* (err) {
      yield notifications.errorHandler('example.COULD_NOT_SAVE', err);
    },
    { multipleSuccessActions: true, loading: true }
  );
}

export default function* () {
  yield takeEvery(types.ONE_ACTION_REQUEST, oneAction);
  yield takeEvery(types.MULTIPLE_ACTIONS_SUCCESS, multipleActions);
}
