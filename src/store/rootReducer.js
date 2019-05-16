import { combineReducers } from 'redux';
import tabs from 'modules/HelperWidget/store/reducer';

const appReducer = combineReducers({
  tabs,
});

export default appReducer;
