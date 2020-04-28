import React from 'react';
import { useStateValue } from '../../store';
import Header from './Header.view';

const HeaderContainer = () => {
  const [{ name }] = useStateValue();
  return <Header name={name} />;
};

export default HeaderContainer;
