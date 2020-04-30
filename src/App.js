import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import Login from './pages/Login';
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
  },
  typography: {
    fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
