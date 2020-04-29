import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home.view';
import StateContext from '../../../store/StateContext';

describe('Home', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const mockState = { name: 'Demo' };
      const { asFragment } = render(
        <StateContext.Provider value={[mockState]}>
          <Home />
        </StateContext.Provider>,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
