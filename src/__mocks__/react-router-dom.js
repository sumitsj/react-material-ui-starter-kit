import React from 'react';
import * as PropTypes from 'prop-types';

export const Redirect = ({ to }) => <div title="redirect" to={to} />;

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};

export { HashRouter, Route, Link } from 'react-router-dom';

export default {};
