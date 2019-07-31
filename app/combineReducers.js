import { combineReducers } from 'redux';
import addQuoteContainerReducer from 'containers/AddQuoteContainer/reducer';
import quotesPageContainerReducer from 'containers/QuotesPageContainer/reducer';

const globalReducer = combineReducers({
  listOfQuotes: quotesPageContainerReducer,
  addQuoteToList: addQuoteContainerReducer,
});

export default globalReducer;
