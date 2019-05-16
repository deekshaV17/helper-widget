import styled from 'styled-components';

const HelperWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .box-heading {
    font-size: 20px;
  }

  .box-button {
    margin: 10px;
    border: 1px solid #ccc;
    background: #fffcfc;
    padding: 5px 10px;
    border-radius: 3px;
    color: #444;
    cursor: pointer;

    span {
      margin-left: 10px;
    }
  }
`;

export default HelperWrapper;
