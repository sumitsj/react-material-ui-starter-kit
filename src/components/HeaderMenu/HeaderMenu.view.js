import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './HeaderMenu.style';

const HeaderMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    history.push('/login');
  };

  return (
    <div>
      <IconButton
        aria-label="User Profile Menu"
        aria-controls="user-profile-menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.menuButton}
      >
        <AccountCircle className={classes.menuButtonIcon} />
      </IconButton>
      <Menu
        id="user-profile-menu"
        data-testid="user-profile-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>My Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
