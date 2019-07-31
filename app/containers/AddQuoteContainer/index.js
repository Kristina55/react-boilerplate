/**
 *
 * AddQuoteContainer
 *
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddQuotePage from 'components/AddQuotePage';
import { addQuote } from './actions';

// providing the state synced up to the store
const mapStateToProps = state => {
  const { newQuote } = state.global.addQuoteToList;
  return { newQuote };
};

// Dispatch action function as props
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addQuote }, dispatch);

// connect with Redux store
const AddQuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuotePage);

export default AddQuoteContainer;
