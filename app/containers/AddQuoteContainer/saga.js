import { put } from 'redux-saga/effects';
import { addQuoteSuccess, addQuoteError } from './actions';

import { addQuoteApi } from './api';

export function* addQuote(action) {
  try {
    const response = yield addQuoteApi(action.newQuote);
    if (response === true) {
      yield put(addQuoteSuccess());
    }
  } catch (error) {
    yield put(addQuoteError(error));
  }
}
