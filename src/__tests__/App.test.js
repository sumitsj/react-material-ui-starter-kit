import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeAll(() => {
    localStorage.getItem.mockImplementation(() => 'true');
  });

  afterEach(() => {
    localStorage.getItem.mockRestore();
  });

  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
