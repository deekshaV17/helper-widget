import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions, showAlert, hideAlert, showAlertRequest } from './actions';

function* showAlertRequestWorkerSaga({ payload }) {
  yield put(showAlert(payload));
  yield delay(3000);
  yield put(hideAlert());
}

export function* showAlertRequestWatcherSaga() {
  yield takeLatest(actions.SHOW_ALERT_REQUEST, showAlertRequestWorkerSaga);
}

function* sendMailWorkerSaga({ payload }) {
  try {
    const emailList = localStorage.getItem('email');
    if (!emailList) {
      localStorage.setItem('email', JSON.stringify([payload]));
    } else {
      const list = JSON.parse(localStorage.getItem('email'));
      list.push(payload);
      localStorage.setItem('email', JSON.stringify(list));
    }
    yield put(
      showAlertRequest('Message Sent! Thanks for reaching out! Someone from our team will get back to you soon.', true),
    );
  } catch (e) {
    yield put(showAlertRequest(e.toString(), false));
  }
}

export function* sendMailRequestWatcherSaga() {
  yield takeLatest(actions.MAIL_REQUEST, sendMailWorkerSaga);
}
