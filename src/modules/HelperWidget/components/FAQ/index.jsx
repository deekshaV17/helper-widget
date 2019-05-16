import React, { Component } from 'react';
import HelperBox from '../HelperBox';
import FAQWrapper from './Faq.styled';

type Props = {
  changeActiveTab: (Object) => {},
};

class FAQ extends Component<Props> {
  state = {
    search: '',
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { search } = this.state;
    return (
      <FAQWrapper>
        <HelperBox changeActiveTab={this.props.changeActiveTab} />
        <div className="faq-wrapper">
          <input
            value={search}
            className="search"
            placeholder="What can we help you with? Start typing your question..."
            onChange={(e) => this.handleChange('search', e.target.value)}
          />
          <div className="faq-item-wrapper">
            <div className="item-wrapper">
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="fas fa-folder" />
                </span>
                <span>Sharing Openings</span>
              </div>
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="fas fa-user-cog" />
                </span>
                <span>Account Management</span>
              </div>
            </div>

            <div className="item-wrapper">
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="fas fa-thumbtack" />
                </span>
                <span>Managing Openings</span>
              </div>
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="fas fa-folder" />
                </span>
                <span>Souncing Candidates</span>
              </div>
            </div>

            <div className="item-wrapper">
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="far fa-address-card" />
                </span>
                <span>Managing Candidates</span>
              </div>
              <div className="faq-item">
                <span className="icon-wrapper">
                  <i className="fas fa-folder" />
                </span>
                <span>Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </FAQWrapper>
    );
  }
}

export default FAQ;
