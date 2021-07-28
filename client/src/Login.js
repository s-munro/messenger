import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import { login } from "./store/utils/thunkCreators";
import { SideBanner } from "./components/SideBanner";
import { AuthForm, HeaderContent } from "./components/AuthPage";
import { theme } from "./themes/theme";
import { useAuthStyles } from './components/AuthPage/authStyles';

const useStyles = makeStyles(() => ({
  endAdornmentText: {
    fontWeight: theme.typography.bold,
    fontSize: theme.typography.smallFontSize,
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(0),
  },
}));

const Login = (props) => {
  const { user, login } = props;

  const history = useHistory();
  const authClasses = useAuthStyles();
  const classes = useStyles();


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
    <Grid className={authClasses.root} container spacing={0} justifyContent="center" alignItems="center">
      <Hidden mdDown>
        <Grid container md={12} lg={5} justifyContent="center" className={authClasses.section}>
          <SideBanner />
        </Grid>
      </Hidden>
      <Grid container md={12} lg={7} className={authClasses.mainContent}>
        <HeaderContent
          ctaText="Don't have an account?"
          buttonText="Create account"
          onButtonClick={() => history.push('/register')}
          className={authClasses.headerContent}
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
            className={authClasses.fullWidth}
          />
          <AuthForm.FormItem
            label="Password"
            aria-label="password"
            type="password"
            name="password"
            className={`${authClasses.fullWidth} ${authClasses.password}`}
            InputProps={{
              endAdornment: (
                <Typography className={classes.endAdornmentText}>
                  Forgot?
                </Typography>
              ),
              classes: {
                input: authClasses.resize,
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
