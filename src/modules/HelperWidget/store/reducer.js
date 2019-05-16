import { actions } from './actions';

const initialState = {
  tabs: [{ label: 'Live Chat' }, { label: 'FAQ' }, { label: 'Mail Us' }, { label: 'Cross' }],
  active: 2,
  chat: [
    {
      message: 'Hello! Have questions? Feel free to ask!',
      align: 'left',
    },
  ],
  alert: {
    show: false,
    message: '',
    success: false,
  },
};

export default function tabsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.CHANGE_ACTIVE:
      return {
        ...state,
        active: payload,
      };

    case actions.ADD_CHAT_MESSAGE:
      return {
        ...state,
        chat: [...state.chat, payload],
      };

    case actions.SHOW_ALERT:
      return {
        ...state,
        alert: {
          message: payload.message,
          success: payload.success,
          show: true,
        },
      };

    case actions.HIDE_ALERT:
      return {
        ...state,
        alert: {
          message: '',
          success: false,
          show: false,
        },
      };

    default:
      return state;
  }
}
