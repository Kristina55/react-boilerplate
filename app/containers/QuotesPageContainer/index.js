// // /**
// //  *
// //  * QuotesPageContainer
// //  *
// //  */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuotesListPage from 'components/QuotesListPage';
import { fetchQuotes } from './actions';

// providing the state synced up to the store
const mapStateToProps = state => {
  const { quotes } = state.global.listOfQuotes;
  return { quotes };
};

// Dispatch action function as props
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchQuotes }, dispatch);

// connect with Redux store
const QuotesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuotesListPage);

export default QuotesPageContainer;
