import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
} from '../constants';

import { fetchQuotes, fetchQuotesSuccess, fetchQuotesEroor } from '../actions';

describe('QuotesPageContainer actions', () => {
  describe('fetchQuotes', () => {
    it('has a type of LOAD_QUOTES', () => {
      const expected = {
        type: LOAD_QUOTES,
      };
      expect(fetchQuotes()).toEqual(expected);
    });
  });

  describe('fetchQuotesSuccess', () => {
    it('has a type of LOAD_QUOTES_SUCCESS', () => {
      const expected = {
        type: LOAD_QUOTES_SUCCESS,
        quotes: 'mockQuote',
      };
      expect(fetchQuotesSuccess('mockQuote')).toEqual(expected);
    });
  });

  describe('fetchQuotesEroor', () => {
    it('has a type of LOAD_QUOTES_ERROR', () => {
      const expected = {
        type: LOAD_QUOTES_ERROR,
        error: 'error',
      };
      expect(fetchQuotesEroor('error')).toEqual(expected);
    });
  });
});
