import styled from 'styled-components';

const AlertWrapper = styled.div`
  .alert {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 15px;
    box-shadow: 0px 0px 5px -2px;

    &.false {
      color: #f32b41;
      border-color: #f32b41;
      background: #f9dada;
    }

    &.true {
      color: #1c941c;
      border-color: #47941d;
      background: #e2ffe3;
    }
  }

  .message {
    margin-left: 10px;
  }
`;

export default AlertWrapper;
