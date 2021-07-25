import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { login } from './store/utils/thunkCreators';
import { SideBanner } from './components/SideBanner';
import { AuthForm, HeaderContent } from './components/AuthPage';
import { theme } from './themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputLabel-formControl': {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
    flexGrow: 1,
    height: '100vh',
  },
  section: {
    height: '100%',
    width: '100%',
  },
  mainContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "0px", [theme.breakpoints.down('sm')]: {
      paddingTop: "150px",
      paddingBottom: "150px",
      position: "relative",
    },
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    color: theme.palette.secondary.main,
  },
  fullWidth: {
    width: "100%",
    paddingTop: "15px",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  label: {
    fontWeight: 800,
  },
  endAdornmentText: {
    fontWeight: 700,
    fontSize: "12px",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(0),
  },
  resize: {
    fontSize: "20px",
    letterSpacing: 1,
  }
}));

const Login = (props) => {
  const { user, login } = props;

  const classes = useStyles();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid className={classes.root} container spacing={0} justifyContent="center" alignItems="center">
      <Grid container sm={12} md={5} justifyContent="center" className={classes.section}>
        <SideBanner />
      </Grid>
      <Grid container sm={12} md={7} className={classes.mainContent}>
        <HeaderContent
          ctaText="Don't have an account?"
          buttonText="Create account"
          onButtonClick={() => history.push('/register')}
          className={classes.headerContent}
        />
        <AuthForm
          headerText="Welcome back!"
          onSubmit={handleLogin}
          submitText="Login"
        >
          <AuthForm.FormItem
            aria-label="E-mail address"
            label="E-mail address"
            name="username"
            type="text"
            className={classes.fullWidth}
          />
          <AuthForm.FormItem
            label="Password"
            aria-label="password"
            type="password"
            name="password"
            className={`${classes.fullWidth} ${classes.password}`}
            InputProps={{
              endAdornment: (
                <Typography className={classes.endAdornmentText}>
                  Forgot?
                </Typography>
              ),
              classes: {
                input: classes.resize,
              }
            }}
          />
        </AuthForm>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
