/**
 * Quote
 *
 * Component handling logic for quotes
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuoteStyle = styled.li`
  color: slategrey;
  font-size: 20px;
  border-bottom: 1px solid #b8b8b8;
  padding-top: 20px;
  padding-bottom: 20px;
  &:hover {
    background: ${props => (props.shouldHover ? '#80808014' : 'none')};
  }
`;

export default function Quote(props) {
  // props from the QuotesListPage
  const { quote } = props;
  return (
    <div>
      <QuoteStyle shouldHover>{quote}</QuoteStyle>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
};
