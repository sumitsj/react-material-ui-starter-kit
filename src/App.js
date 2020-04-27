import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: 90 }}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </Container>
    </>
  );
}

export default App;
