import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import * as PropTypes from 'prop-types';
import useStyles from './Header.style';

const Header = ({ name }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Link href="/" variant="body1" className={classes.logoLink}>
          {name}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
