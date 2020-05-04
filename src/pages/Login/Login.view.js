import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './Login.styles';
import Logo from '../../assets/images/logo.png';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitClick = (event) => {
    event.preventDefault();
    localStorage.setItem('auth-token', 'true');
    history.push('/');
  };

  return (
    <>
      <Grid container className={classes.header} justify="center" alignItems="center">
        <Grid item>
          <img src={Logo} alt="LOGO" height={64} />
        </Grid>
        <Hidden only="xs">
          <Divider orientation="vertical" className={classes.divider} flexItem />
          <Grid item className={classes.title}>
            <Typography variant="h4" color="secondary">
              React-Material UI Starter Kit
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
      <Container component="main" maxWidth="xs" className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
            disabled={username === '' || password === ''}
          >
            LOGIN
          </Button>
          <Link to="/forgot-password" className={classes.link} variant="body2" component={RouterLink}>
            NEED ASSISTANCE?
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Login;
