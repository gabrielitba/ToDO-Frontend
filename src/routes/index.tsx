import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Loading from '../components/Loading';

import Route from './Route';

const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading typeLoading="spinner" />}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </Suspense>
  );
};

export default Routes;
