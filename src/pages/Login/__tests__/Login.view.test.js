import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login from '../Login.view';

jest.mock('@material-ui/core/Link', () => jest.fn(() => <forget-password />));
jest.mock('@material-ui/icons/Visibility', () => jest.fn(() => <div title="visible" />));
jest.mock('@material-ui/icons/VisibilityOff', () => jest.fn(() => <div title="visible-off" />));

function setUsernameAndPassword(container, username, password) {
  fireEvent.change(container.querySelector('[name="username"]'), { target: { value: username } });
  fireEvent.change(container.querySelector('[name="password"]'), { target: { value: password } });
}

describe('Login', () => {
  describe('HTML Structure', () => {
    it('should render properly when showPassword is true', () => {
      const { asFragment, container, getByLabelText } = render(<Login />);
      setUsernameAndPassword(container, '8888888888', 'Abcd@123');
      fireEvent.click(getByLabelText('toggle password visibility'));

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render properly when showPassword is false', () => {
      const { asFragment, container } = render(<Login />);
      setUsernameAndPassword(container, '8888888888', 'Abcd@123');

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should update username state on username change', () => {
      const { container } = render(<Login />);
      const userName = container.querySelector('[name="username"]');

      fireEvent.change(userName, { target: { value: '1234567890' } });
      expect(userName.value).toEqual('1234567890');
    });

    it('should call setPassword on password change', () => {
      const { container } = render(<Login />);
      const password = container.querySelector('[name="password"]');

      fireEvent.change(password, { target: { value: 'abcd@1234' } });
      expect(password.value).toEqual('abcd@1234');
    });

    it('should show Visibility icon on click of password visibility toggle', () => {
      const { getByLabelText, getByTitle } = render(<Login />);
      fireEvent.click(getByLabelText('toggle password visibility'));
      expect(getByTitle('visible')).toBeInTheDocument();
    });

    it('should call setItem on Login click', () => {
      const { getByRole, container } = render(<Login />);
      setUsernameAndPassword(container, '1234567890', 'abcd@1234');

      fireEvent.click(getByRole('button', { name: 'LOGIN' }));
      expect(localStorage.setItem).toHaveBeenCalledWith('auth-token', 'true');
    });
  });
});
