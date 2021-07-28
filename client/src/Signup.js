import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Hidden } from "@material-ui/core";

import { register } from "./store/utils/thunkCreators";
import { SideBanner } from "./components/SideBanner";
import { AuthForm, HeaderContent } from "./components/AuthPage";
import { useAuthStyles } from './components/AuthPage/authStyles';

const Signup = (props) => {
  const { user, register } = props;

  const history = useHistory();
  const authClasses = useAuthStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
          ctaText="Already have an account?"
          buttonText="Login"
          onButtonClick={() => history.push("/login")}
          className={authClasses.headerContent}
        />
        <AuthForm
          headerText="Create an account."
          onSubmit={handleRegister}
          submitText="Create"
        >
          <AuthForm.FormItem
            aria-label="Username"
            label="Username"
            name="username"
            type="text"
            className={authClasses.fullWidth}
          />
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
              classes: {
                input: authClasses.resize,
              }
            }}
          >
          </AuthForm.FormItem>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
