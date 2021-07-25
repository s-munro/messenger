import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { register } from "./store/utils/thunkCreators";
import { theme } from "./themes/theme";
import { SideBanner } from "./components/SideBanner";
import { AuthForm, HeaderContent } from "./components/AuthPage";


const useStyles = makeStyles(() => ({
  root: {
    "& .MuiInputLabel-formControl": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
    flexGrow: 1,
    height: "100vh",
  },
  section: {
    height: "100%",
    width: "100%",
  },
  mainContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "0px", [theme.breakpoints.down("sm")]: {
      paddingTop: "150px",
      paddingBottom: "150px",
      position: "relative",
    },
  },
  headerContent: {
    position: "absolute",
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
    fontSize: "25px",
    letterSpacing: 1,
  }
}));

const Signup = (props) => {
  const { user, register } = props;

  const history = useHistory();
  const classes = useStyles();
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
    <Grid className={classes.root} container spacing={0} justifyContent="center" alignItems="center">
      <Grid container sm={12} md={5} justifyContent="center" className={classes.section}>
        <SideBanner />
      </Grid>
      <Grid container sm={12} md={7} className={classes.mainContent}>
        <HeaderContent
          ctaText="Already have an account?"
          buttonText="Login"
          onButtonClick={() => history.push("/login")}
          className={classes.headerContent}
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
            className={classes.fullWidth}
          />
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
              classes: {
                input: classes.resize,
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
