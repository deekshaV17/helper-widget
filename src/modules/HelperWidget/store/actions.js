import actionCreator from 'utils/actionCreator';

export const actions = actionCreator('tabs', [
  'CHANGE_ACTIVE',
  'ADD_CHAT_MESSAGE',
  'MAIL_REQUEST',
  'SHOW_ALERT_REQUEST',
  'SHOW_ALERT',
  'HIDE_ALERT',
]);

export const changeActiveTab = (payload) => ({
  type: actions.CHANGE_ACTIVE,
  payload,
});

export const addChatMessage = (payload) => ({
  type: actions.ADD_CHAT_MESSAGE,
  payload,
});

export const sendMailRequest = (payload) => ({
  type: actions.MAIL_REQUEST,
  payload,
});

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
