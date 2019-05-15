import actionCreator from 'utils/actionCreator';

export const actions = actionCreator('tabs', ['CHANGE_ACTIVE']);

export const showAlertRequest = (payload) => ({
  type: actions.CHANGE_ACTIVE,
  payload,
});
