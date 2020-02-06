import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Glossary } from '../../pages/Glossary';
import { MatchHistory } from '../../pages/MatchHistory';
import { MyMains } from '../../pages/MyMains';
import { MatchUp } from '../../pages/MatchUp';
import { SignIn } from '../../pages/SignIn';
import { SignUp } from '../../pages/SignUp';
import { UnknownUrl } from '../../pages/UnknownUrl';

export const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/glossary" component={Glossary} />
        <Route path="/matchhistory" component={MatchHistory} />
        <Route path="/matchup" component={MatchUp} />
        <Route path="/mymains" component={MyMains} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={UnknownUrl} />
      </Switch>
    </>
  );
};
