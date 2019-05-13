import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'components';

const AppContainer = (props: Props) => (
  <>
    {props.app.show_alert && <Alert app={props.app} />}
    {props.children}
  </>
);

const mapStateToProps = ({ app }) => ({
  app,
});

export default connect(mapStateToProps)(AppContainer);
