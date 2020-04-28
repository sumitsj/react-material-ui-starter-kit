import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './Login.view';

const LoginContainer = () => {
  const isAuthenticated = localStorage.getItem('auth-token');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

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
