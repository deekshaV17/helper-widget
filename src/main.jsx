/* global config */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import { store, history } from 'store/createStore';
import Pages from 'pages';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global-style';
import App from 'modules/App';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <App>
            <Pages />
          </App>
        </>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#main'),
);

if (config.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
