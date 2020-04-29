import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './Login.style';

const Login = ({
  username,
  password,
  showPassword,
  setUsername,
  setPassword,
  setShowPassword,
}) => {
  const classes = useStyles();

  const handleSubmitClick = (event) => {
    localStorage.setItem('auth-token', 'true');
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <Avatar className={classes.avatar} />
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Mobile Number"
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          disabled
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmitClick}
          disabled={username === '' || password === ''}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/forgot-password" variant="body2" component={RouterLink}>
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};

export default Login;
