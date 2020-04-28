import React from 'react';
import { render } from '@testing-library/react';
import LoginContainer from '../Login.container';
import Login from '../Login.view';

jest.mock('../Login.view', () => jest.fn(() => <div />));

describe('Login Container', () => {
  jest.spyOn(React, 'useState').mockImplementation(() => ['value', 'function']);

  it('should render Login component with correct props', () => {
    render(<LoginContainer />);
    expect(Login).toHaveBeenLastCalledWith({
      username: 'value',
      password: 'value',
      showPassword: 'value',
      setPassword: 'function',
      setUsername: 'function',
      setShowPassword: 'function',
    }, {});
  });
});
