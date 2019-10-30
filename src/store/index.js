import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as form } from 'redux-form';
import { userReducer as currentUser } from './reducers/currentUser';
import { notificationReducer as notification } from './reducers/notification';

const rootReducer = combineReducers({
  form,
  currentUser,
  notification,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
