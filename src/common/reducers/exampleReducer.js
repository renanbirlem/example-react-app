import {handleActions, createAction} from 'redux-actions';

/* Types*/
const ONE_ACTION_REQUEST = 'app/ONE_ACTION_REQUEST';
const ONE_ACTION_SUCCESS = 'app/ONE_ACTION_SUCCESS';

const MULTIPLE_ACTIONS_REQUEST = 'app/MULTIPLE_ACTIONS_REQUEST';
const MULTIPLE_ACTIONS_SUCCESS = 'app/MULTIPLE_ACTIONS_SUCCESS';

export const types = {
  ONE_ACTION_REQUEST,
  ONE_ACTION_SUCCESS,

  MULTIPLE_ACTIONS_REQUEST,
  MULTIPLE_ACTIONS_SUCCESS
};

/* Actions */
const oneAction = createAction(ONE_ACTION_REQUEST);
const oneActionSuccess = createAction(ONE_ACTION_SUCCESS);

const multipleActions = createAction(MULTIPLE_ACTIONS_REQUEST);
const multipleActionsSuccess = createAction(MULTIPLE_ACTIONS_SUCCESS);

export const actions = {
  oneAction,
  oneActionSuccess,
  multipleActions,
  multipleActionsSuccess
};

const initialState = {
  oneAction: {},
  multipleActions: {},
};

export default handleActions({
  [ONE_ACTION_SUCCESS]: (state, {payload}) => ({
    ...state, oneAction: payload
  }),
  [MULTIPLE_ACTIONS_SUCCESS]: (state, {payload}) => ({
    ...state, multipleActions: payload
  }),
}, initialState);
