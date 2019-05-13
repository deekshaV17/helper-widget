import styled from 'styled-components';

const StyledAlert = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;

  .alert {
    display: flex;
    align-items: center;
    margin-top: 10px;
    border-radius: 4px;
    padding: 6px 8px;
    background: #fff;
    box-shadow: 0px 0px 6px 3px #444;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;

    .error {
      color: #f44336;
    }

    .success {
      color: #2ec51f;
    }

    .error,
    .success {
      margin-left: 10px;
    }
  }
`;

export default StyledAlert;
