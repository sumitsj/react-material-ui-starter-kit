import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute.view';

describe('Private Route', () => {
  let getItemSpy;
  const Home = () => 'Home Page';
  const Login = () => 'Login Page';

  const MockRouter = (
    <Router>
      <PrivateRoute path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );

  afterEach(() => {
    getItemSpy.mockRestore();
  });

  describe('HTML Structure', () => {
    it('should render passed component if authenticated', () => {
      getItemSpy = jest.spyOn(localStorage, 'getItem').mockImplementation(() => 'true');
      const { asFragment } = render(MockRouter);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render Redirect component if NOT authenticated', () => {
      getItemSpy = jest.spyOn(localStorage, 'getItem').mockImplementation(() => undefined);
      const { asFragment } = render(MockRouter);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
