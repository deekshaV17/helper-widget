import styled from 'styled-components';

const MailWrapper = styled.div`
  min-height: 350px;
  width: 600px;
  padding: 30px;
  background: #eee;
  box-shadow: 1px 1px 5px 5px #aaa;

  .mail-to,
  .mail-subject,
  .mail-content {
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 1px solid #aaa;
    padding: 7px;
    margin-bottom: 30px;
  }

  .mail-to {
    background: #c7c7c7;
  }

  .mail-content {
    resize: none;
  }

  .send-mail {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #40627b;
    color: #fff;
  }

  .send-button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .input-file {
    button {
      cursor: pointer;
      position: relative;
      overflow: hidden;
      color: #40627b;
      background: transparent;
    }

    button + input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
`;

export default MailWrapper;
