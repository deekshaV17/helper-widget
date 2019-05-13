import React from 'react';
import Icon from '@material-ui/core/Icon';
import StyledAlert from './Alert.styled';

type Props = {
  app: Object,
};

const Alert = ({ app }: Props) => (
  <StyledAlert>
    <div className="alert">
      <span>{app.message}</span>
      {!app.success && <Icon className="error">error</Icon>}
      {app.success && <Icon className="success">check_circle</Icon>}
    </div>
  </StyledAlert>
);

export default Alert;
