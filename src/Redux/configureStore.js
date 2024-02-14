import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import zodiacsignReducer from './zodiacsign';

const rootReducer = combineReducers({
  predictionData: zodiacsignReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
