import React from 'react';
import HelperWrapper from './HelperBox.styled';

type Props = {
  changeActiveTab: (Object) => {},
};

const HelperBox = ({ changeActiveTab }: Props) => (
  <HelperWrapper>
    <span className="box-heading">Prefer email instead?</span>
    <button className="box-button" type="button" onClick={() => changeActiveTab(2)}>
      <i className="far fa-envelope" />
      <span>Write to us</span>
    </button>
    <span className="box-message">We are super quick inn responding to your queries.</span>
  </HelperWrapper>
);

export default HelperBox;
