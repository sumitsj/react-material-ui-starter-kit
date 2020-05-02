import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.view';

jest.mock('../../HeaderMenu', () => jest.fn(() => <div title="header menu" />));

describe('Header', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Header name="Demo" isAuthenticated={false} />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render with user menu if authenticated', () => {
      const { asFragment } = render(<Header name="Demo" isAuthenticated />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
