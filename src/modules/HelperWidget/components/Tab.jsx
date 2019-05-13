import React, { Component } from 'react';

type Props = {
  label: String,
  onClick: (string) => {},
  activeTab: string,
};

class Tab extends Component<Props> {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li className={className} onClick={onClick}>
        <div>{label}</div>
      </li>
    );
  }
}

export default Tab;
