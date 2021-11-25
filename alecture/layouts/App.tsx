import React , {FC} from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
const SignUp = loadable(() => import('@pages/SignUp'));
const LogIn = loadable(() =>import('@pages/Login'));

const App : FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/Login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
