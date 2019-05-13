import { combineReducers } from 'redux';
import app from 'modules/App/store/reducer';

const appReducer = combineReducers({
  app,
});

export default function rootReducer(state, action) {
  // TODO: Set state = {} for a successful logout action

  return appReducer(state, action);
}
