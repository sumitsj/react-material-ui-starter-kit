import React from 'react';
import {render} from "@testing-library/react";
import App from "../App";

describe('App', () => {
  describe('HTML Structure', () => {
    it('should render properly', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
