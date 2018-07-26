import {handleActions, createAction} from 'redux-actions';

/* Types*/
const SHOW_GLOBAL_LOADING = 'app/SHOW_GLOBAL_LOADING';
const HIDE_GLOBAL_LOADING = 'app/HIDE_GLOBAL_LOADING';

const CHANGE_MESSAGING_TAB = 'app/CHANGE_MESSAGING_TAB';

const SCROLL_TO_TOP = 'app/SCROLL_TO_TOP';

export const types = {
  SHOW_GLOBAL_LOADING,
  HIDE_GLOBAL_LOADING,

  CHANGE_MESSAGING_TAB,
  SCROLL_TO_TOP,
};

/* Actions */
const showGlobalLoading = createAction(SHOW_GLOBAL_LOADING);
const hideGlobalLoading = createAction(HIDE_GLOBAL_LOADING);

const scrollToTop = createAction(SCROLL_TO_TOP);

export const actions = {
  showGlobalLoading,
  hideGlobalLoading,
  scrollToTop,
};

const initialState = {
  loading: false,
  top: false,
};

export default handleActions({
  [SHOW_GLOBAL_LOADING]: (state, action) => ({...state, loading: true }),
  [HIDE_GLOBAL_LOADING]: (state, action) => ({...state, loading: false }),
  [SCROLL_TO_TOP]: (state, {payload}) => ({
    ...state, top: payload
  }),
}, initialState);
