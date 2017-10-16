import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader'
import 'normalize.css';
import WebFont from 'webfontloader';
import './index.scss';

require('babel-polyfill');
require('isomorphic-fetch');

const rootEl = document.getElementById('root');

WebFont.load({
  google: {
    families: ['Open Sans:400,600', 'sans-serif']
  }
});

ReactDOM.render(
  <AppContainer>
    {routes}
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    const routes = require('./routes').default;
    ReactDOM.render(
      <AppContainer>
        {routes}
      </AppContainer>,
      rootEl
    );
  });
}

registerServiceWorker();
