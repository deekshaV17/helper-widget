import React, { Component } from 'react';
import { Alert } from 'components';
import MailWrapper from './Mail.styled';

type Props = {
  alert: Object,
  sendMail: (Object) => Boolean,
};

class Mail extends Component<Props> {
  state = {
    to: 'support@recruiterbox.com',
    subject: '',
    message: '',
  };

  handleStateChange = (field, value) => {
    this.setState({ [field]: value });
  };

  sendMail = () => {
    this.props.sendMail(this.state);
  };

  render() {
    const { to, subject, message } = this.state;
    const { alert } = this.props;
    return (
      <MailWrapper>
        {alert.show && <Alert alert={alert} />}
        <div className="to-wrapper">
          <input value={to} disabled className="mail-to" />
        </div>
        <div className="subject-wrapper">
          <input
            value={subject}
            className="mail-subject"
            placeholder="Subject"
            onChange={(e) => this.handleStateChange('subject', e.target.value)}
          />
        </div>
        <div className="message-wrapper">
          <textarea
            value={message}
            rows={3}
            className="mail-content"
            placeholder="Message..."
            onChange={(e) => this.handleStateChange('message', e.target.value)}
          />
        </div>
        <div className="send-button-wrapper">
          <span className="input-file">
            <button type="button">Attach Files</button>
            <input type="file" />
          </span>
          <button className="send-mail" type="button" onClick={() => this.sendMail()}>
            Send Mail
          </button>
        </div>
      </MailWrapper>
    );
  }
}

export default Mail;
