import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addQuoteContainer state domain
 */

// In this kind of flow, I'm not using the selectors

const selectAddQuoteContainerDomain = state =>
  state.addQuoteContainer || initialState;

const makeSelectAddQuoteContainer = () =>
  createSelector(
    selectAddQuoteContainerDomain,
    substate => substate,
  );

export default makeSelectAddQuoteContainer;
export { selectAddQuoteContainerDomain };
