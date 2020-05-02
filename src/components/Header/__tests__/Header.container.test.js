import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.view';
import HeaderContainer from '../Header.container';
import StateContext from '../../../store/StateContext';

jest.mock('../Header.view', () => jest.fn(() => <header />));

describe('Header Container', () => {
  it('should render properly', () => {
    const mockState = { name: 'Demo' };
    render(
      <StateContext.Provider value={[mockState]}>
        <HeaderContainer />
      </StateContext.Provider>,
    );
    expect(Header).toHaveBeenCalledWith({ ...mockState, isAuthenticated: false }, {});
  });
});
