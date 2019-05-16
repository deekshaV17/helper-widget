import React, { Component } from 'react';
import Tab from './Tab';

type Props = {
  children: React.Node,
  active: number,
  changeActiveTab: (number) => {},
};

class Tabs extends Component<Props> {
  render() {
    const {
      props: { children, changeActiveTab, active },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child, index) => {
            const { label } = child.props;

            return <Tab activeTab={active} index={index} key={index} label={label} onClick={changeActiveTab} />;
          })}
        </ol>
        <div className="tab-content">
          {children.map((child, index) => {
            if (index !== active) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
