import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import postReducer from "./postReducer";
import featureReducer from "./featureReducer";


export default (history) => combineReducers({
  router: connectRouter(history),
  posts: postReducer,
  features: featureReducer,
});