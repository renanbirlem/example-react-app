import { call, put } from 'redux-saga/effects';
import { actions } from '../reducers/appReducer';

export default function* (
  fn,
  parameter,
  success,
  failure,
  settings={multipleSuccessActions: false, loading: false}
) {
  try {
    if(settings.loading) {
      yield put(actions.showGlobalLoading());
    }
    const response = yield call(fn, parameter);
    let data = {};

    if(response)
      data = response;
    
    if(response.data)
      data = response.data;

    yield (settings.multipleSuccessActions
      ? call(success, data)
      : put(success(data))
    );
    yield put(actions.hideGlobalLoading());
  } catch(error) {
    yield put(actions.hideGlobalLoading());
    yield call(failure, error);
  }
}