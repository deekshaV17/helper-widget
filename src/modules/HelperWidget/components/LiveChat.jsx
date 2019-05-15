import React, { Component } from 'react';
import ChatWrapper from './Chat.styled';

class LiveChat extends Component<Props> {
  state = {
    message: '',
  };

  handleState = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { message } = this.state;
    return (
      <ChatWrapper>
        <div className="chat-wrapper">
          <div className="talk-bubble tri-right left-top border round">
            <div className="talktext">
              <p>Hello! Have questions?</p>
              <p>Feel free to ask!</p>
            </div>
          </div>
        </div>
        <div className="chat-input-wrapper">
          <textarea
            value={message}
            rows={3}
            className="chat-input"
            onChange={(e) => this.handleState('message', e.target.value)}
          />
          <button type="button">Send</button>
        </div>
      </ChatWrapper>
    );
  }
}

export default LiveChat;
