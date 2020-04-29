import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import Login from './pages/Login';
import StateProvider, { initialState, reducer } from './store';
import PrivateRoute from './components/PrivateRoute';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4489ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Container maxWidth="lg" style={{ marginTop: 90 }}>
          <Router>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Router>
        </Container>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
