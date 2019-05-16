import React from 'react';
import AlertWrapper from './AlertWrapper.styled';

type Props = {
  alert: Object,
};

const Alert = ({ alert }: Props) => (
  <AlertWrapper>
    <div className={`alert ${alert.success}`}>
      <span>
        {alert.success && <i className="fas fa-check" />}
        {!alert.success && <i className="fas fa-exclamation" />}
      </span>
      <span className="message">{alert.message}</span>
    </div>
  </AlertWrapper>
);

export default Alert;
