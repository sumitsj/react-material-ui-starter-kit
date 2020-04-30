import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';

const Home = () => (
  <Container maxWidth="lg" style={{ marginTop: 90 }}>
    <Header />
    <Typography variant="h2" component="h2" gutterBottom>
      Home Page
    </Typography>
  </Container>
);

export default Home;
