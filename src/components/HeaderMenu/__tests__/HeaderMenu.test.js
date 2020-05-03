import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HeaderMenu from '../HeaderMenu.view';

describe('Header Menu', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<HeaderMenu />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('should remove auth-key from local storage on log out click', () => {
      const { getByText } = render(<HeaderMenu />);
      fireEvent.click(getByText(/Log Out/i));
      expect(localStorage.removeItem).toHaveBeenCalledWith('auth-token');
    });

    it('should redirect to login page on log out click', () => {
      const { getByText } = render(<HeaderMenu />);
      fireEvent.click(getByText(/Log Out/i));
      expect(window.history.pushState).toHaveBeenCalledWith('/login');
    });

    it('should open user profile menu on menu button click', () => {
      const { getByLabelText, getByTestId } = render(<HeaderMenu />);
      expect(getByTestId('user-profile-menu')).not.toBeVisible();
      fireEvent.click(getByLabelText(/User Profile Menu/i));
      expect(getByTestId('user-profile-menu')).toBeVisible();
    });

    it('should close user profile menu on outside click', () => {
      const { getByLabelText, getByTestId } = render(<HeaderMenu />);
      fireEvent.click(getByLabelText(/User Profile Menu/i));
      expect(getByTestId('user-profile-menu')).toBeVisible();

      fireEvent.keyDown(getByTestId('user-profile-menu'), { key: 'Escape', code: 'Escape' });

      setTimeout(() => {
        expect(getByTestId('user-profile-menu')).not.toBeVisible();
      }, 100);
    });
  });
});
