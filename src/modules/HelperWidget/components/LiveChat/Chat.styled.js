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

  .chat-wrapper {
    overflow: auto;
  }

  .talk-bubble {
    margin: 20px;
    position: relative;
    max-width: 200px;
    min-width: 50px;
    height: auto;
    background-color: #fff;
  }

  .talktext-left,
  .talktext-right {
    padding: 10px;
    p {
      margin: 0px;
    }
  }

  .talktext-left {
    box-shadow: 2px 2px 5px 2px #ccc;
  }

  .talktext-right {
    box-shadow: -2px 2px 5px 2px #ccc;
  }

  .left-top:after {
    content: ' ';
    position: absolute;
    left: -15px;
    top: 0px;
    border-width: 15px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  .right-bottom {
    position: relative;
    right: -170px;

    &:after {
      content: ' ';
      position: absolute;
      right: -15px;
      bottom: 0;
      border-width: 15px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
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
