import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from 'components/Auth/AuthContext';

function ProtectRoute({ component: Component, ...rest }) {
  const user = useAuth();
  const REDIRECT = '/login';
  return (
    <Route
      {...rest}
      render={(props) =>
        Boolean(user) ? <Component {...props} /> : <Redirect to={REDIRECT} />
      }
    />
  );
}

export default ProtectRoute;