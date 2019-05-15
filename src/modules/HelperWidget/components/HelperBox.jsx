import React from 'react';
import HelperWrapper from './HelperBox.styled';

const HelperBox = () => (
  <HelperWrapper>
    <span className="box-heading">Prefer email instead?</span>
    <button className="box-button" type="button" onClick={() => {}}>
      <i className="far fa-envelope" />
      <span>Write to us</span>
    </button>
    <span className="box-message">We are super quick inn responding to your queries.</span>
  </HelperWrapper>
);

export default HelperBox;
