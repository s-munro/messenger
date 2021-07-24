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

import { login } from '../../store/utils/thunkCreators';
import { SideBanner } from '../SideBanner';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  section: {
    height: '100%',
    width: '100%',
  }
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={0} justifyContent="center" alignItems="center">
      <Grid container sm={12} md={5} justifyContent="center" className={classes.section}>
        <SideBanner />
      </Grid>
      <Grid container sm={12} md={7} justifyContent="center">
        Sign in
      </Grid>
    </Grid>
  );
};
