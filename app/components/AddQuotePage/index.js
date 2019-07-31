/**
 * AddQuote
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuoteForm from './QuoteForm';

const FormWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 50px);
  h1 {
    color: slategrey;
    font-weight: normal;
  }
`;

export default function AddQuotePage(props) {
  // props from the container
  const { newQuote, addQuote } = props;
  // pass the addQuote action function down to the form
  const manageAdding = quote => addQuote(quote);

  return (
    <FormWrapper>
      <h1>Your favorite quote:</h1>
      <QuoteForm newQuote={newQuote} manageAdding={manageAdding} />
    </FormWrapper>
  );
}

AddQuotePage.propTypes = {
  addQuote: PropTypes.func,
  newQuote: PropTypes.bool,
};
