import { call, put } from 'redux-saga/effects';
import { fetchQuotesSuccess, fetchQuotesEroor } from './actions';
import { fetchQuotesApi } from './api';

export function* fetchQuotes() {
  try {
    const response = yield call(fetchQuotesApi);
    yield put(fetchQuotesSuccess(response.quotes));
  } catch (error) {
    yield put(fetchQuotesEroor(error));
  }
}
