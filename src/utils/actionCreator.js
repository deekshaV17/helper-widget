/* global config */

export default function actionCreator(module, constants) {
  return constants.reduce((actions, constant) => {
    actions[constant] = `${config.APP_NAME}/${module}/${constant}`;
    return actions;
  }, {});
}
