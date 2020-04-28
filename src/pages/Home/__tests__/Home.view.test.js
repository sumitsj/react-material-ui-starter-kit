import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home.view';

describe('Home', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<Home />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
