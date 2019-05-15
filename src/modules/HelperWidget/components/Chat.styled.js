import styled from 'styled-components';

const ChatWrapper = styled.div`
  height: 350px;
  width: 450px;
  padding: 10px;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 5px 5px #aaa;

  .talk-bubble {
    margin: 20px;
    position: relative;
    width: 200px;
    height: auto;
    background-color: #fff;
  }

  .talktext {
    padding: 10px;
    box-shadow: 2px 2px 5px 2px #ccc;
    p {
      margin: 0px;
    }
  }

  .tri-right.left-top:after {
    content: ' ';
    position: absolute;
    left: -15px;
    top: 0px;
    border-width: 15px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  .chat-input-wrapper {
    display: flex;
    width: 100%;

    .chat-input {
      width: 100%;
      border-radius: 4px;
      resize: none;
      outline: none;
    }

    button {
      margin: 0 5px;
      background-color: #40627b;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export default ChatWrapper;
