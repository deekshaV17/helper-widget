import React from 'react';

type Props = {
  children: React.node,
};

const AppContainer = (props: Props) => <>{props.children}</>;

export default AppContainer;
