/**
 * Created by peter on 10/21/16.
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';

//noinspection Eslint
// import css from './styles/style.css';

import Main from './container/Main';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main/>
    </ConnectedRouter>
  </Provider>
);
if ( process.env.NODE_ENV === 'prod' ) {
  render(router, document.getElementById('root'));
} else {
  const RedBox = require('redbox-react').default;
  try {
    render(router, document.getElementById('root'))
  } catch (e) {
    render(<RedBox error={e}/>, document.getElementById('root'))
  }
}
