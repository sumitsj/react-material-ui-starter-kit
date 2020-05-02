import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/Error';
import StateProvider, { initialState, reducer } from './store';
import PrivateRoute from './components/PrivateRoute';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#448AFF',
    },
    secondary: {
      main: '#FFF',
    },
    background: {
      default: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h4: {
      fontSize: '2rem',
      lineHeight: '3rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
