import { all, fork } from 'redux-saga/effects';
import * as appSagas from 'modules/App/store/sagas';

export default function* rootSaga() {
  yield all([...Object.values(appSagas)].map(fork));
}
