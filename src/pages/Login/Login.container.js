import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login.view';

const LoginContainer = () => {
  const isAuthenticated = !!localStorage.getItem('auth-token');

  return (
    <>
      {isAuthenticated ? <Redirect to="/" /> : <Login />}
    </>
  );
};

export default LoginContainer;
