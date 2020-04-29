import React from 'react';
import { render } from '@testing-library/react';
import LoginContainer from '../Login.container';

jest.mock('../Login.view', () => jest.fn(() => <div title="dialog" />));

describe('Login Container', () => {
  it('should render Login component with correct props', () => {
    const { getByTitle } = render(<LoginContainer />);
    expect(getByTitle('dialog')).toBeInTheDocument();
  });
});
