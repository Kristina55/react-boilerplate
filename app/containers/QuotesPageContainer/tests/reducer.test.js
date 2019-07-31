import produce from 'immer';
import quotesPageContainerReducer from '../reducer';
import { fetchQuotes, fetchQuotesSuccess, fetchQuotesEroor } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('quotesPageContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      quotes: [],
      loading: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(quotesPageContainerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchQuotes action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
    });

    expect(quotesPageContainerReducer(state, fetchQuotes())).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchQuotesSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.quotes = 'mockQuote';
    });

    expect(
      quotesPageContainerReducer(state, fetchQuotesSuccess('mockQuote')),
    ).toEqual(expectedResult);
  });

  it('should handle the fetchQuotesEroor action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = 'error';
    });

    expect(
      quotesPageContainerReducer(state, fetchQuotesEroor('error')),
    ).toEqual(expectedResult);
  });
});
