import { all, fork } from 'redux-saga/effects';
import * as tabsSagas from 'modules/HelperWidget/store/sagas';

export default function* rootSaga() {
  yield all([...Object.values(tabsSagas)].map(fork));
}
