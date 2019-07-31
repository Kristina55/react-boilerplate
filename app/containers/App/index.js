/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import QuotesPageContainer from 'containers/QuotesPageContainer/Loadable';
import AddQuoteContainer from 'containers/AddQuoteContainer/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Positively" defaultTitle="Positively">
        <meta name="description" content="Positively" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={QuotesPageContainer} />
        <Route path="/add" component={AddQuoteContainer} />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  max-width: calc(100% + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
