import React from 'react';
import Main from './Components/Main';
import Invoice from './Components/Invoice/Invoice';
import { Switch, Route, Redirect } from 'react-router';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/invoice' component={Invoice} />
    </Switch>
  );
};

export default Router;
