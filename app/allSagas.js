import { all, takeEvery } from 'redux-saga/effects';

import { LOAD_QUOTES } from 'containers/QuotesPageContainer/constants';

import { fetchQuotes } from 'containers/QuotesPageContainer/saga';

import { ADD_QUOTE } from 'containers/AddQuoteContainer/constants';

import { addQuote } from 'containers/AddQuoteContainer/saga';

export function* watchSagas() {
  yield takeEvery(LOAD_QUOTES, fetchQuotes);
  yield takeEvery(ADD_QUOTE, addQuote);
}

export function* allSagas() {
  yield all([watchSagas()]);
}
