import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions, showAlert, hideAlert } from './actions';

function* showAlertRequestWorkerSaga({ payload }) {
  yield put(showAlert(payload));
  yield delay(3000);
  yield put(hideAlert());
}

export function* showAlertRequestWatcherSaga() {
  yield takeLatest(actions.SHOW_ALERT_REQUEST, showAlertRequestWorkerSaga);
}
