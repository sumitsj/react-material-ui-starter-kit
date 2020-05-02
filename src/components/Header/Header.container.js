import React from 'react';
import { useStateValue } from '../../store';
import Header from './Header.view';

const HeaderContainer = () => {
  const [{ name }] = useStateValue();
  const isAuthenticated = !!localStorage.getItem('auth-token');

  return <Header name={name} isAuthenticated={isAuthenticated} />;
};

export default HeaderContainer;
