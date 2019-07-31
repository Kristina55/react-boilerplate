/**
 *
 * Tests for QuotesPageContainer
 *
 *
 */
import React from 'react';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import QuoteListPage from '../../../components/QuotesListPage';
import configureStore from '../../../configureStore';

describe('QuoteListPage', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const quotes = ['mock1', 'mock2', 'mock3'];
    const loadingQuotes = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <QuoteListPage fetchQuotes={loadingQuotes} quotes={quotes} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should load stings from server on mount', () => {
    const quotes = ['mock1', 'mock2', 'mock3'];
    const loadingQuotesSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <QuoteListPage quotes={quotes} fetchQuotes={loadingQuotesSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(loadingQuotesSpy).toHaveBeenCalled();
  });
});
