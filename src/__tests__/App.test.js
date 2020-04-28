import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  const getItemSpy = jest.spyOn(localStorage, 'getItem').mockImplementation(() => 'true');

  afterEach(() => {
    getItemSpy.mockRestore();
  });

  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
