/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

type Props = {
  label: String,
  onClick: (string) => {},
  activeTab: string,
  index: number,
};

class Tab extends Component<Props> {
  onClick = () => {
    const { onClick, index } = this.props;
    onClick(index);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, index },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === index) {
      className += ' tab-list-active';
    }

    return (
      <li className={className} onClick={onClick}>
        <div className="label">
          {label === 'Mail Us' && <i className="far fa-envelope" />}
          {label === 'FAQ' && <i className="fas fa-search" />}
          {label === 'Live Chat' && <i className="fas fa-comment-alt" />}
          <span className="label-name">{label}</span>
        </div>
      </li>
    );
  }
}

export default Tab;
