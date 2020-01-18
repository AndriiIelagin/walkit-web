import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

import './index.css';
import App from './App';
import configureStore, { history } from './store';

const store = configureStore();
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: { main: teal[400] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
