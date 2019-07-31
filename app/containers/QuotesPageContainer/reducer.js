/*
 *
 * QuotesPageContainer reducer
 *
 */
import produce from 'immer';
import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
} from './constants';

export const initialState = { quotes: [], loading: false, error: false };

/* eslint-disable default-case, no-param-reassign */

const quotesPageContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_QUOTES:
        draft.loading = true;
        break;
      case LOAD_QUOTES_SUCCESS:
        draft.quotes = action.quotes;
        draft.loading = false;
        break;
      case LOAD_QUOTES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default quotesPageContainerReducer;
