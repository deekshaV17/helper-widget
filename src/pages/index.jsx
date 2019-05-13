import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './main';

const Pages = () => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
);

export default Pages;
