import React, { useReducer } from 'react';
import * as PropTypes from 'prop-types';
import StateContext from './StateContext';

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default StateProvider;
