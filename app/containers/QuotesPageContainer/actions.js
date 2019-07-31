/*
 *
 * QuotesPageContainer actions
 *
 */

import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
} from './constants';

export function fetchQuotes() {
  return {
    type: LOAD_QUOTES,
  };
}

export function fetchQuotesSuccess(quotes) {
  return {
    type: LOAD_QUOTES_SUCCESS,
    quotes,
  };
}

export function fetchQuotesEroor(error) {
  return {
    type: LOAD_QUOTES_ERROR,
    error,
  };
}
