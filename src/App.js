import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import StateProvider, { initialState, reducer } from './store';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: 90 }}>
        <Router>
          <PrivateRoute path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </Container>
    </StateProvider>
  );
}

export default App;
