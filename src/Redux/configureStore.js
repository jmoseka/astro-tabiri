import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import predictionReducer from './prediction';

const rootReducer = combineReducers({
  predictionData: predictionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;