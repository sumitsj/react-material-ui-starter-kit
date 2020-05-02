import React from 'react';
import { render } from '@testing-library/react';
import LoginContainer from '../Login.container';

jest.mock('../Login.view', () => jest.fn(() => <div title="dialog" />));

describe('Login Container', () => {
  afterEach(() => {
    localStorage.getItem.mockRestore();
  });

  it('should render Login component with correct props', () => {
    const { getByTitle } = render(<LoginContainer />);

    expect(getByTitle('dialog')).toBeInTheDocument();
    expect(() => getByTitle('redirect')).toThrow('Unable to find an element with the title: redirect');
  });

  it('should render Redirect component if auth token is present in local storage', () => {
    localStorage.getItem.mockImplementation(() => 'true');
    const { getByTitle } = render(<LoginContainer />);

    expect(getByTitle('redirect')).toBeInTheDocument();
    expect(() => getByTitle('dialog')).toThrow('Unable to find an element with the title: dialog');
  });
});
