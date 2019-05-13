import { actions } from './actions';

const initialState = {
  message: '',
  success: false,
  show_alert: false,
  loading: false,
};

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SHOW_ALERT:
      return {
        ...state,
        message: payload.message,
        success: payload.success,
        show_alert: true,
      };

    case actions.HIDE_ALERT:
      return {
        ...state,
        message: '',
        success: false,
        show_alert: false,
      };

    case actions.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    case actions.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
