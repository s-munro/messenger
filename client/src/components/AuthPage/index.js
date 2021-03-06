import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    display: "flex",
    position: "absolute",
    top: 0,
    right: theme.spacing(5),
    marginTop: theme.spacing(4),
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    fontSize: theme.typography.smallFontSize,
    [theme.breakpoints.down("sm")]: {
      right: theme.spacing(2)
    },
  },
  ctaText: {
    color: theme.palette.secondary.main,
    textAlign: "center"
  },
  headerButton: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(5),
    height: theme.typography.button.height,
    width: theme.typography.button.width,
    boxShadow: theme.typography.button.boxShadow,
    fontWeight: theme.typography.bold, [theme.breakpoints.down("sm")]: {
      height: "55px",
      width: "165px",
    }
  },
  formHeader: {
    color: "black",
    fontWeight: theme.typography.button.fontWeight,
    marginBottom: theme.spacing(5),
    textAlign: "left",
    width: "100%",
    maxWidth: "600px", [theme.breakpoints.down("sm")]: {
      fontSize: 32,
    }
  },
  submitButton: {
    marginTop: theme.spacing(8),
    height: theme.typography.button.height,
    width: theme.typography.button.width,
    boxShadow: theme.typography.button.boxShadow,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.bold, [theme.breakpoints.down("sm")]: {
      height: "55px",
      width: "165px",
    }
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
  },
  formWrapper: {
    justifyContent: "center",
    display: "flex",
    width: "100%",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(0),

    },
  }
}));

export const HeaderContent = ({ ctaText, buttonText, onButtonClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.headerBox}>
      <Typography className={classes.ctaText}>
        {ctaText}
      </Typography>
      <Grid>
        <Button
          className={classes.headerButton} onClick={onButtonClick}>{buttonText}</Button>
      </Grid>
    </Box>
  );
};

export const AuthForm = ({ headerText, onSubmit, submitText, children }) => {
  const classes = useStyles();

  return (
    <Grid
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.formWrapper}
    >
      <Typography className={classes.formHeader} variant="h3">
        {headerText}
      </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
        {children}
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className={classes.submitButton}>
          {submitText}
        </Button>
      </form>
    </Grid>
  );
};

AuthForm.FormItem = ({ ariaLabel, label, name, type, className, labelClass, children, ...rest }) => {
  return (
    <FormControl fullWidth>
      <TextField
        aria-label={ariaLabel}
        label={label}
        name={name}
        type={type}
        className={className}
        {...rest}
      />
      {children}
    </FormControl>
  );
};