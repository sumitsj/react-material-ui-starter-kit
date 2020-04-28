import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login.view';

const LoginContainer = () => {
  const isAuthenticated = localStorage.getItem('auth-token');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const props = {
    username,
    password,
    showPassword,
    setUsername,
    setPassword,
    setShowPassword,
  };

  return (
    <>
      {isAuthenticated && <Redirect to="/" />}
      <Login {...props} />
    </>
  );
};

export default LoginContainer;
