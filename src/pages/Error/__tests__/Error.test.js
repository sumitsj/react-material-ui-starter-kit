import React from 'react';
import { render } from '@testing-library/react';
import Error from '..';
import { ERROR_TYPES } from '../../../constants';

jest.mock('../../../components/Header', () => jest.fn(() => <header />));

describe('Error', () => {
  describe('HTML Structure', () => {
    it('should render properly with default props', () => {
      const { asFragment } = render(<Error />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render properly with custom props', () => {
      const { asFragment } = render(<Error type={ERROR_TYPES.SYSTEM_ERROR} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
