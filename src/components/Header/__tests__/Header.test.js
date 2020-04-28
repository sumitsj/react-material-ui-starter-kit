import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.view';

describe('Header', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Header name="Demo" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
