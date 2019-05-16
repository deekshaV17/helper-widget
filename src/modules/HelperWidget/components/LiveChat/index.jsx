import React, { Component } from 'react';
import ChatWrapper from './Chat.styled';

class LiveChat extends Component<Props> {
  state = {
    message: '',
  };

  messageRef = React.createRef();

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const { scrollHeight } = this.messageRef;
    const height = this.messageRef.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageRef.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  handleState = (field, value) => {
    this.setState({ [field]: value });
  };

  submitMessage = () => {
    if (this.state.message.trim() !== '') {
      this.props.addChatMessage({ message: this.state.message, align: 'right' });
      this.setState({ message: '' });
    }
  };

  render() {
    const { message } = this.state;
    const { chat } = this.props;
    return (
      <ChatWrapper>
        <div className="chat-wrapper" ref={(el) => (this.messageRef = el)}>
          {chat.map((chat_item) => {
            if (chat_item.align === 'left') {
              return (
                <div className="talk-bubble left-top">
                  <div className="talktext-left">
                    <p>{chat_item.message}</p>
                  </div>
                </div>
              );
            }
            return (
              <div className="talk-bubble right-bottom">
                <div className="talktext-right">
                  <p>{chat_item.message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="chat-input-wrapper">
          <textarea
            value={message}
            rows={3}
            className="chat-input"
            onChange={(e) => this.handleState('message', e.target.value)}
          />
          <button type="button" onClick={() => this.submitMessage()}>
            Send
          </button>
        </div>
      </ChatWrapper>
    );
  }
}

export default LiveChat;
