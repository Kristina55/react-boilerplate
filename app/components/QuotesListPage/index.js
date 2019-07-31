// /**
//  *
//  * QuotesListPage
//  *
//  */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import Quote from './Quote';

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 50px);
`;

const Quotes = styled.div`
  margin-top: 50px;
  width: 60%;
  h1 {
    text-align: center;
  }
  ul {
    list-style: none;
  }
`;

export default function QuotesListPage(props) {
  // props from the container
  const { quotes, fetchQuotes } = props;

  useEffect(() => {
    fetchQuotes();
  }, []);

  // map thru the quotes array
  // add each quote to the Quote component
  const quotesList = quotes.map(quote => <Quote key={uuid()} quote={quote} />);

  return (
    <QuoteWrapper>
      <Quotes shouldHover>
        <ul>{quotesList}</ul>
      </Quotes>
    </QuoteWrapper>
  );
}

QuotesListPage.propTypes = {
  fetchQuotes: PropTypes.func,
  quotes: PropTypes.array,
};
