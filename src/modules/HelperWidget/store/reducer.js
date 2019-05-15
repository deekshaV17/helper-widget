import { actions } from './actions';

const initialState = {
  tabs: [{ label: 'Live Chat' }, { label: 'FAQ' }, { label: 'Mail Us' }, { label: 'Cross' }],
  active: 2,
};

export default function tabsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.CHANGE_ACTIVE:
      return {
        ...state,
        active: payload,
      };

    default:
      return state;
  }
}
