import actionCreator from 'utils/actionCreator';

export const actions = actionCreator('app', [
  'SHOW_ALERT_REQUEST',
  'SHOW_ALERT',
  'HIDE_ALERT',
  'SHOW_LOADING',
  'HIDE_LOADING',
]);

export const showAlertRequest = (message, success) => ({
  type: actions.SHOW_ALERT_REQUEST,
  payload: {
    message,
    success,
  },
});

export const showAlert = (payload) => ({
  type: actions.SHOW_ALERT,
  payload,
});

export const hideAlert = () => ({
  type: actions.HIDE_ALERT,
});

export const showLoading = () => ({
  type: actions.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: actions.HIDE_LOADING,
});
