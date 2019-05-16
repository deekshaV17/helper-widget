import React from 'react';
import { connect } from 'react-redux';
import validator from 'email-validator';
import Tabs from '../components/Tabs';
import LiveChat from '../components/LiveChat';
import FAQ from '../components/FAQ';
import Mail from '../components/Mail';
import StyledWidget from './Widget.styled';
import { changeActiveTab, addChatMessage, sendMailRequest, showAlertRequest } from '../store/actions';

type Props = {
  active: number,
  chat: Array<Object>,
  alert: Object,
  dispatch: (Object) => {},
};

const HelperWidgetContainer = ({ dispatch, active, chat, alert }: Props) => {
  const sendMail = (mail) => {
    if (!validator.validate(mail.subject)) {
      dispatch(showAlertRequest('Invalid subject', false));
      return false;
    }
    dispatch(sendMailRequest(mail));
    return true;
  };

  return (
    <StyledWidget>
      <Tabs active={active} changeActiveTab={(index) => dispatch(changeActiveTab(index))}>
        <div label="Live Chat">
          <LiveChat chat={chat} addChatMessage={(message) => dispatch(addChatMessage(message))} />
        </div>
        <div label="FAQ">
          <FAQ changeActiveTab={(index) => dispatch(changeActiveTab(index))} />
        </div>
        <div label="Mail Us">
          <Mail sendMail={sendMail} alert={alert} />
        </div>
      </Tabs>
    </StyledWidget>
  );
};

const mapStateToProps = ({ tabs }) => ({
  active: tabs.active,
  chat: tabs.chat,
  alert: tabs.alert,
});

export default connect(mapStateToProps)(HelperWidgetContainer);
