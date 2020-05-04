import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { ERROR_MESSAGES, ERROR_TYPES } from '../../constants';
import Header from '../../components/Header';
import useStyles from './Error.styles';

const Error = ({ type }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container} align="center">
      <Header />
      <ErrorOutlineOutlinedIcon className={classes.logo} />
      <Typography variant="h4" gutterBottom>
        {ERROR_MESSAGES[type].title}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {ERROR_MESSAGES[type].message}
      </Typography>
    </Container>
  );
};

Error.propTypes = {
  type: PropTypes.string,
};

Error.defaultProps = {
  type: ERROR_TYPES.PAGE_NOT_FOUND_ERROR,
};

export default Error;
