/*
 *
 * AddQuoteContainer actions
 *
 */

import { ADD_QUOTE, ADD_QUOTE_SUCCESS, ADD_QUOTE_ERROR } from './constants';

export function addQuote(newQuote) {
  return {
    type: ADD_QUOTE,
    newQuote,
  };
}

export function addQuoteSuccess() {
  return {
    type: ADD_QUOTE_SUCCESS,
  };
}

export function addQuoteError(error) {
  return {
    type: ADD_QUOTE_ERROR,
    error,
  };
}
