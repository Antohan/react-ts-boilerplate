import React, { Suspense, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { routes } from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </Fragment>
  );
};

export default withRouter(App);
