import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from './Header.style';
import Link from "@material-ui/core/Link";

const Header = () => {
  const classes = useStyles();
  return <AppBar>
    <Toolbar>
      <Typography variant="h6" className={classes.logo}>
        <Link href="/" className={classes.logoLink}>
          Assisted HIP
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
};

export default Header;
