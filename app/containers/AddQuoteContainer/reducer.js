/*
 *
 * AddQuoteContainer reducer
 *
 */
import produce from 'immer';
import { ADD_QUOTE, ADD_QUOTE_SUCCESS, ADD_QUOTE_ERROR } from './constants';

export const initialState = { newQuote: false, error: false, success: false };

/* eslint-disable default-case, no-param-reassign */
const addQuoteContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_QUOTE:
        draft.newQuote = true;
        break;
      case ADD_QUOTE_SUCCESS:
        draft.success = true;
        draft.newQuote = false;
        break;
      case ADD_QUOTE_ERROR:
        draft.error = action.error;
        draft.newQuote = false;
        break;
    }
  });

export default addQuoteContainerReducer;
