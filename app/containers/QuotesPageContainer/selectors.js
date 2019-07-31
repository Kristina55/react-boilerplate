import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quotesPageContainer state domain
 */
// In this kind of flow, I'm not using the selectors

const selectQuotesPageContainerDomain = state =>
  state.quotesPageContainer || initialState;

const makeQuotesSelector = () =>
  createSelector(
    selectQuotesPageContainerDomain,
    substate => substate.quotes,
  );

export { selectQuotesPageContainerDomain, makeQuotesSelector };
