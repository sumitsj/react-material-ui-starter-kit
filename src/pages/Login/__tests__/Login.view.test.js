import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login from '../Login.view';

jest.mock('@material-ui/core/Link', () => jest.fn(() => <forget-password />));

describe('Login', () => {
  const props = {
    username: '8888888888',
    password: 'Abcd@123',
    showPassword: true,
    setUsername: jest.fn(),
    setPassword: jest.fn(),
    setShowPassword: jest.fn(),
  };

  const setItemSpy = jest.spyOn(localStorage, 'setItem');

  beforeEach(() => {
    setItemSpy.mockReset();
  });

  describe('HTML Structure', () => {
    it('should render properly when showPassword is true', () => {
      const { asFragment } = render(<Login {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render properly when showPassword is false', () => {
      const { asFragment } = render(<Login {...props} showPassword={false} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should call setUsername on username change', () => {
      const { container } = render(<Login {...props} />);
      fireEvent.change(container.querySelector('[name="username"]'), { target: { value: '1234567890' } });
      expect(props.setUsername).toHaveBeenCalledWith('1234567890');
    });

    it('should call setPassword on password change', () => {
      const { container } = render(<Login {...props} />);
      fireEvent.change(container.querySelector('[name="password"]'), { target: { value: 'abcd@1234' } });
      expect(props.setPassword).toHaveBeenCalledWith('abcd@1234');
    });

    it('should call setShowPassword on click of password visibility toggle', () => {
      const { getByLabelText } = render(<Login {...props} />);
      fireEvent.click(getByLabelText('toggle password visibility'));
      expect(props.setShowPassword).toHaveBeenCalledWith(false);
    });

    it('should call setItem on sign in click', () => {
      const { getByRole } = render(<Login {...props} />);
      fireEvent.click(getByRole('button', { name: 'Sign In' }));
      expect(localStorage.setItem).toHaveBeenCalledWith('auth-token', 'true');
    });
  });
});
